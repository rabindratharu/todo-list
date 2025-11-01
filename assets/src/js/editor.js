// editor.js - Option 1: Use relative path
import '../images/screenshot-1.png';
import '../images/banner-icon-128x128.png'; // Changed from @images
import '../sass/editor.scss';

import {
	createRoot,
	StrictMode,
	useState,
	useEffect,
} from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';

const PostsMaintenance = () => {
	const [postTypes, setPostTypes] = useState([]);
	const [selectedPostTypes, setSelectedPostTypes] = useState([
		'post',
		'page',
	]);
	const [isScanning, setIsScanning] = useState(false);
	const [progress, setProgress] = useState(null);
	const [snackbar, setSnackbar] = useState(null);

	useEffect(() => {
		// Filter out media (attachment) post type from the options
		const filteredPostTypes = wpmudevPostsMaintenance.postTypes.filter(
			(postType) => 'attachment' !== postType.value
		);
		setPostTypes(filteredPostTypes);
		checkExistingScan();
	}, []);

	/**
	 * Shows a snackbar with the given message and optional error status.
	 * @param {string}  message         The message to be displayed in the snackbar.
	 *
	 * @param {boolean} [isError=false] Whether the snackbar should be displayed with an error theme.
	 */
	const showSnackbar = (message, isError = false) => {
		setSnackbar({ message, isError });

		// Auto-dismiss after 3 seconds
		setTimeout(() => {
			setSnackbar(null);
		}, 3000);
	};

	/**
	 * Checks if a previous scan is still in progress.
	 * If a scan is in progress, it sets the component's state to reflect that.
	 * If the scan is not in progress, it does nothing.
	 * @return {Promise<void>} A promise that resolves when the check is complete.
	 */
	const checkExistingScan = async () => {
		try {
			const formData = new FormData();
			formData.append('action', 'wpmudev_check_scan_status');
			formData.append('nonce', wpmudevPostsMaintenance.ajax_nonce);

			const response = await apiFetch({
				url: wpmudevPostsMaintenance.ajaxurl,
				method: 'POST',
				body: formData,
			});

			if (response.success && 'processing' === response.data.status ) {
				setIsScanning(true);
				setProgress(response.data);
				showSnackbar(
					__('Resuming previous scan...', 'wpmudev-plugin-test'),
					false
				);
				monitorScanProgress();
			}
		} catch (error) {
			console.error('Error checking scan status:', error);
		}
	};

	/**
	 * Starts a new scan.
	 *
	 * This function sets the component's state to reflect that a scan is in progress,
	 * and shows a snackbar to the user indicating that the scan has started.
	 *
	 * If the scan starts successfully, it sets the component's state to reflect the
	 * total number of posts to be processed and shows another snackbar to the user
	 * indicating that the scan is in progress.
	 *
	 * If the scan fails to start, it sets the component's state back to normal and shows
	 * an error snackbar to the user.
	 * @return {Promise<void>} A promise that resolves when the scan has started or failed.
	 */
	const startScan = async () => {
		setIsScanning(true);
		setProgress({
			message: __('Starting scan...', 'wpmudev-plugin-test'),
			percentage: 0,
		});
		showSnackbar(__('Starting scan...', 'wpmudev-plugin-test'), false);

		try {
			const formData = new FormData();
			formData.append('action', 'wpmudev_start_maintenance_scan');
			formData.append('nonce', wpmudevPostsMaintenance.ajax_nonce);

			// Append each post type individually
			selectedPostTypes.forEach((postType) => {
				formData.append('post_types[]', postType);
			});

			const response = await apiFetch({
				url: wpmudevPostsMaintenance.ajaxurl,
				method: 'POST',
				body: formData,
			});

			if (response.success) {
				setProgress({
					message: __('Scan in progress...', 'wpmudev-plugin-test'),
					total: response.data.total,
					processed: 0,
					percentage: 0,
				});
				showSnackbar(
					__('Scan in progress...', 'wpmudev-plugin-test'),
					false
				);
				monitorScanProgress();
			} else {
				throw new Error(
					response.data ||
						__('Scan failed to start', 'wpmudev-plugin-test')
				);
			}
		} catch (error) {
			setIsScanning(false);
			setProgress(null);
			showSnackbar(
				__('Error starting scan: ', 'wpmudev-plugin-test') +
					error.message,
				true
			);
		}
	};

	/**
	 * Monitor the progress of a scan.
	 *
	 * Periodically checks the status of the scan and updates the component's state
	 * accordingly.
	 * @return {Promise<void>} A promise that resolves when the scan is complete.
	 */
	const monitorScanProgress = async () => {
		const checkProgress = async () => {
			try {
				const formData = new FormData();
				formData.append('action', 'wpmudev_check_scan_status');
				formData.append('nonce', wpmudevPostsMaintenance.ajax_nonce);

				const response = await apiFetch({
					url: wpmudevPostsMaintenance.ajaxurl,
					method: 'POST',
					body: formData,
				});

				if (response.success) {
					setProgress(response.data);

					if (response.data.status === 'completed') {
						setIsScanning(false);
						showSnackbar(
							__(
								'Scan completed successfully!',
								'wpmudev-plugin-test'
							),
							false
						);
					} else if (response.data.status === 'processing') {
						setTimeout(checkProgress, 2000);
					} else {
						setIsScanning(false);
					}
				}
			} catch (error) {
				console.error('Error checking progress:', error);
				setIsScanning(false);
				setProgress(null);
				showSnackbar(
					__('Error checking scan progress:', 'wpmudev-plugin-test') +
						error.message,
					true
				);
			}
		};

		checkProgress();
	};

	/**
	 * Handles the change event of the post types select element.
	 *
	 * Updates the state with the new selected post types.
	 * @param {Event} e The change event.
	 */
	const handlePostTypeChange = (e) => {
		const selectedOptions = Array.from(
			e.target.selectedOptions,
			(option) => option.value
		);
		setSelectedPostTypes(selectedOptions);
	};

	/**
	 * Stops the current scan if it is in progress.
	 *
	 * If the scan is in progress, it sets the component's state to reflect that.
	 * If the scan is not in progress, it does nothing.
	 * @return {Promise<void>} A promise that resolves when the scan has stopped or failed.
	 */
	const stopScan = async () => {
		try {
			setIsScanning(false);
			setProgress(null);
			showSnackbar(
				__('Scan stopped by user', 'wpmudev-plugin-test'),
				false
			);
		} catch (error) {
			console.error('Error stopping scan:', error);
		}
	};

	return (
		<>
			<div className="sui-box">
				<div className="sui-box-header">
					<h2 className="sui-box-title">
						{__('Posts Maintenance', 'wpmudev-plugin-test')}
					</h2>
				</div>
				<div className="sui-box-body">
					<div className="sui-box-settings-row">
						<label className="sui-label">
							{__('Select Post Types:', 'wpmudev-plugin-test')}
						</label>
						<select
							multiple
							value={selectedPostTypes}
							onChange={handlePostTypeChange}
							disabled={isScanning}
							className="sui-select"
							style={{ height: '120px' }}
						>
							{postTypes.map((postType) => (
								<option
									key={postType.value}
									value={postType.value}
								>
									{postType.label}
								</option>
							))}
						</select>
						<span className="sui-description">
							{__(
								'Hold Ctrl/Cmd to select multiple post types',
								'wpmudev-plugin-test'
							)}
						</span>
					</div>

					{progress && (
						<div
							className="sui-notice sui-notice-info"
							style={{ marginTop: '20px' }}
						>
							<div className="sui-notice-content">
								<div className="sui-notice-message">
									<span
										className="sui-notice-icon sui-icon-info sui-md"
										aria-hidden="true"
									></span>
									<p>{progress.message}</p>
									{0 < progress.total && (
										<div className="sui-progress-block">
											<div className="sui-progress">
												<span className="sui-progress-text">
													{progress.percentage}%
												</span>
												<div className="sui-progress-bar">
													<span
														className="sui-progress-bar-value"
														style={{
															width: `${progress.percentage}%`,
														}}
													></span>
												</div>
											</div>
											{progress.total && (
												<p>
													{__(
														'Processed:',
														'wpmudev-plugin-test'
													)}
													{progress.processed} /{' '}
													{progress.total}
												</p>
											)}
										</div>
									)}
								</div>
							</div>
						</div>
					)}
				</div>
				<div className="sui-box-footer">
					<div className="sui-actions-right">
						<div
							className="sui-form-field"
							style={{ marginTop: '20px' }}
						>
							{!isScanning ? (
								<button
									className="sui-button sui-button-primary"
									onClick={startScan}
									disabled={0 === selectedPostTypes.length}
								>
									{__('Scan Posts', 'wpmudev-plugin-test')}
								</button>
							) : (
								<button
									className="sui-button sui-button-ghost"
									onClick={stopScan}
								>
									{__('Stop Scan', 'wpmudev-plugin-test')}
								</button>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Custom Snackbar notification */}
			{snackbar && (
				<div
					className={`sui-notice sui-notice-top ${snackbar.isError ? 'sui-notice-error' : 'sui-notice-success'}`}
					style={{
						position: 'fixed',
						top: '30px',
						left: '50%',
						transform: 'translateX(-50%)',
						zIndex: 9999,
						minWidth: '300px',
					}}
				>
					<div className="sui-notice-content">
						<div className="sui-notice-message">
							<span
								className={`sui-notice-icon sui-icon-${snackbar.isError ? 'warning-alert' : 'check-tick'} sui-md`}
								aria-hidden="true"
							></span>
							<p>{snackbar.message}</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

document.addEventListener('DOMContentLoaded', () => {
	const rootElement = document.getElementById(
		wpmudevPostsMaintenance.dom_element_id
	);
	if (rootElement) {
		const root = createRoot(rootElement);
		root.render(
			<StrictMode>
				<PostsMaintenance />
			</StrictMode>
		);
	}
});
