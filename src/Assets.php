<?php
/**
 * Assets Class.
 *
 * @package aquila-features
 */

namespace AquilaFeatures;

/**
 * Class Assets.
 */
class Assets {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->init();
	}

	/**
	 * Initialize.
	 */
	private function init() {
		/**
		 * The 'enqueue_block_assets' hook includes styles and scripts both in editor and frontend,
		 * except when is_admin() is used to include them conditionally
		 */
		add_action( 'enqueue_block_assets', array( $this, 'enqueue_block_assets' ) );

		// Enqueue editor assets only in admin.
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_editor_assets' ) );

		// Enqueue frontend assets.
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_frontend_assets' ) );
	}

	/**
	 * Enqueue Block Assets for both editor and frontend.
	 */
	public function enqueue_block_assets() {
		// This method can be used for additional frontend-only assets.
		// The main frontend assets are handled in enqueue_block_assets().
	}

	/**
	 * Enqueue Editor Assets
	 */
	public function enqueue_editor_assets() {
		$asset_config_file = sprintf( '%s/assets.php', AQUILA_FEATURES_PLUGIN_BUILD_PATH );

		if ( ! file_exists( $asset_config_file ) ) {
			return;
		}

		$asset_config = include $asset_config_file;

		// Enqueue editor script.
		if ( ! empty( $asset_config['js/editor.js'] ) ) {
			$editor_asset    = $asset_config['js/editor.js'];
			$js_dependencies = ! empty( $editor_asset['dependencies'] ) ? $editor_asset['dependencies'] : array();
			$version         = ! empty( $editor_asset['version'] ) ? $editor_asset['version'] : filemtime( AQUILA_FEATURES_PLUGIN_BUILD_PATH . '/js/editor.js' );

			wp_enqueue_script(
				'af-blocks-js',
				AQUILA_FEATURES_PLUGIN_BUILD_URL . '/js/editor.js',
				$js_dependencies,
				$version,
				true
			);
		}

		// Enqueue editor styles.
		if ( ! empty( $asset_config['css/editor.css'] ) ) {
			$editor_style_asset = $asset_config['css/editor.css'];
			$version            = ! empty( $editor_style_asset['version'] ) ? $editor_style_asset['version'] : filemtime( AQUILA_FEATURES_PLUGIN_BUILD_PATH . '/css/editor.css' );

			$css_dependencies = array(
				'wp-edit-blocks',
			);

			wp_enqueue_style(
				'af-blocks-editor-css',
				AQUILA_FEATURES_PLUGIN_BUILD_URL . '/css/editor.css',
				$css_dependencies,
				$version,
				'all'
			);
		}
	}

	/**
	 * Enqueue Frontend Assets
	 */
	public function enqueue_frontend_assets() {
		// This method can be used for additional frontend-only assets.
		// The main frontend assets are handled in enqueue_block_assets().
	}
}
