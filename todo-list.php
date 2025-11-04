<?php
/**
 * Plugin Name:       Todo List
 * Plugin URI:        https://elementifywp.com/elementify-addons
 * Description:       <a href="https://elementifywp.com/">Todo List</a> is a powerful and lightweight extension designed to supercharge your Elementor Page Builder. Packed with a collection of creative and fully customizable widgets, it helps you build faster and design smarter—just like a pro. Whether you're crafting landing pages, blogs, or business websites, Elementify Addons makes it easy to create stunning layouts with minimal effort and maximum flexibility.
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.4
 * Author:            elementifywp
 * Author URI:        https://elementifywp.com/
 * License:           GPLv3 or later
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.en.html
 * Text Domain:       todo-list
 * Domain Path:       /languages
 *
 * @package           todo-list
 */

// Abort if called directly.
defined( 'WPINC' ) || die;

/**
 * Define plugin constants.
 */
define( 'TODO_LIST_VERSION', '1.0.0' );
define( 'TODO_LIST_NAME', 'todo-list' );
define( 'TODO_LIST_PATH', plugin_dir_path( __FILE__ ) );
define( 'TODO_LIST_URL', plugin_dir_url( __FILE__ ) );
define( 'TODO_LIST_BASENAME', plugin_basename( __FILE__ ) );
define( 'TODO_LIST_BUILD_PATH', TODO_LIST_PATH . 'assets/build/' );
define( 'TODO_LIST_BUILD_PATH_URL', TODO_LIST_URL . 'assets/build/' );

/**
 * Bootstrap the plugin.
 */
require_once TODO_LIST_PATH . 'inc/helpers/autoloader.php';

use Todo_List\Inc\Plugin;

// Check if the class exists and WordPress environment is valid.
if ( class_exists( 'Todo_List\Inc\Plugin' ) ) {
	// Instantiate the plugin.
	$todo_list_plugin = Plugin::get_instance();

	// Register activation and deactivation hooks.
	register_activation_hook( __FILE__, array( $todo_list_plugin, 'activate' ) );
	register_deactivation_hook( __FILE__, array( $todo_list_plugin, 'deactivate' ) );
}
