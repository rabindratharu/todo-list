<?php
/**
 * Aquila Features Plugin
 *
 * @package aquila-features
 * @author  Imran Sayed
 *
 * @wordpress-plugin
 * Plugin Name:       Aquila Features
 * Plugin URI:        https://codeytek.com/aquila-features/
 * Description:       Adds Gutenberg Blocks.
 * Version:           1.0.1
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Imran Sayed
 * Author URI:        https://codeytek.com/about/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       aquila-features
 * Domain Path:       /languages
 */

// Prevent direct access.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define plugin constants.
define( 'AQUILA_FEATURES_VERSION', '1.0.1' );
define( 'AQUILA_FEATURES_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'AQUILA_FEATURES_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'AQUILA_FEATURES_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );
define( 'AQUILA_FEATURES_PLUGIN_BUILD_PATH', AQUILA_FEATURES_PLUGIN_DIR . 'assets/build' );
define( 'AQUILA_FEATURES_PLUGIN_BUILD_URL', AQUILA_FEATURES_PLUGIN_URL . 'assets/build' );

/**
 * Initialize the plugin
 */
function aquila_features_init() {
	// Autoload classes.
	if ( file_exists( AQUILA_FEATURES_PLUGIN_DIR . 'vendor/autoload.php' ) ) {
		require_once AQUILA_FEATURES_PLUGIN_DIR . 'vendor/autoload.php';
	}

	// Check if the main plugin class exists.
	if ( ! class_exists( 'AquilaFeatures\Plugin' ) ) {
		add_action( 'admin_notices', 'aquila_features_missing_class_notice' );
		return;
	}

	try {
		$the_plugin = new AquilaFeatures\Plugin();

		// Register activation and deactivation hooks.
		register_activation_hook( __FILE__, array( $the_plugin, 'activate' ) );
		register_deactivation_hook( __FILE__, array( $the_plugin, 'deactivate' ) );

	} catch ( Exception $e ) {
		add_action(
			'admin_notices',
			function () use ( $e ) {
				echo '<div class="error notice"><p>';
				printf(
				/* translators: %s: Error message */
					esc_html__( 'Aquila Features Plugin error: %s', 'aquila-features' ),
					esc_html( $e->getMessage() )
				);
				echo '</p></div>';
			}
		);
	}
}

/**
 * Display admin notice if main plugin class is missing
 */
function aquila_features_missing_class_notice() {
	if ( ! current_user_can( 'activate_plugins' ) ) {
		return;
	}

	?>
	<div class="error notice">
		<p>
			<?php
			printf(
				/* translators: %s: Composer install command */
				esc_html__( 'Aquila Features Plugin is not properly installed. Please run %s', 'aquila-features' ),
				'<code>composer install</code>'
			);
			?>
		</p>
	</div>
	<?php
}

// Initialize the plugin.
add_action( 'plugins_loaded', 'aquila_features_init' );