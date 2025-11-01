<?php
/**
 * Plugin Class.
 *
 * @package aquila-features
 */

namespace AquilaFeatures;

/**
 * Class Plugin.
 */
class Plugin {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->init();
	}

	/**
	 * Called when the plugin is activated.
	 *
	 * Flushes the rewrite rules to pick up the new post type's rules.
	 */
	public function activate() {
		// Flush the rewrite rules to pick up the new post type's rules.
		flush_rewrite_rules();
	}

	/**
	 * Called when the plugin is deactivated.
	 *
	 * Clears the permalinks to remove our post type's rules.
	 */
	public function deactivate() {
		// Clear the permalinks to remove our post type's rules.
		flush_rewrite_rules();
	}

	/**
	 * Initialize plugin
	 */
	private function init() {
		new Assets();
		new Patterns();
		new SearchApi();
	}
}
