// editor.js - Option 1: Use relative path
import '../images/screenshot-1.png';
import '../images/banner-icon-128x128.png'; // Changed from @images
import '../sass/editor.scss';

(function ($) {
	'use strict';

	const initTabs = ($scope, $jQuery) => {
		const widgetId = $scope.data('id');
		const widgetClass = `elementor-element-${widgetId}`;
		const $container = $jQuery(`.${widgetClass} .eae-tabs`);

		if (!$container.length) {
			return; // Exit if no matching elements are found
		}

		$container.each((idx, element) => {
			const $element = $jQuery(element);

			// Initialize tabs functionality
			try {
				const tabElements = $element.find('.eae-tab').get();

				function tabify(tab) {
					const $tab = $jQuery(tab);
					const $tabList = $tab.find('.eae-tab__list').first();

					if ($tabList.length) {
						const $tabItems = $tabList.children();
						const $tabContent = $tab
							.find('.eae-tab__content')
							.first();
						const $tabContentItems = $tabContent.children();

						// Find active tab or default to first
						let activeTabIndex = $tabItems
							.filter('.is--active')
							.index();
						if (activeTabIndex === -1) {
							activeTabIndex = 0;
						}

						function setTab(tabIndex) {
							// Validate index
							if (tabIndex < 0 || tabIndex >= $tabItems.length) {
								return;
							}

							$tabItems.removeClass('is--active');
							$tabContentItems.removeClass('is--active');

							$tabItems.eq(tabIndex).addClass('is--active');
							$tabContentItems
								.eq(tabIndex)
								.addClass('is--active');
						}

						$tabItems.on('click', function () {
							setTab($jQuery(this).index());
						});

						setTab(activeTabIndex);

						// Handle nested tabs
						$tab.find('.eae-tab').each(function () {
							tabify(this);
						});
					}
				}

				tabElements.forEach(tabify);
			} catch (error) {}
		});
	};

	// Initialize on Elementor frontend
	$(window).on('elementor/frontend/init', () => {
		if (typeof elementorFrontend !== 'undefined') {
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/eae-tabs.default',
				initTabs
			);
		}
	});
})(jQuery);
