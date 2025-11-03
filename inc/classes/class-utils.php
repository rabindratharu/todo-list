<?php
/**
 * Plugin Utils.
 *
 * @package todo-list
 */

namespace Todo_List\Inc;

use Todo_List\Inc\Traits\Singleton;

// Abort if called directly.
defined( 'WPINC' ) || die;

/**
 * Utils class.
 *
 * Handles utility functions for the plugin.
 *
 * @since 1.0.0
 */
class Utils {

	use Singleton;

	/**
	 * Get an array of posts.
	 *
	 * @since 1.0.0
	 * @param array|string $args Arguments for WP_Query.
	 * @return array Array of post IDs and titles, or empty array on failure.
	 */
	public static function get_posts( $args ): array {
		// Normalize $args to an array.
		if ( is_string( $args ) ) {
			$args = wp_parse_args( $args, array( 'suppress_filters' => false ) );
		} elseif ( ! is_array( $args ) ) {
			return array();
		}

		// Set default query arguments.
		$args = wp_parse_args(
			$args,
			array(
				'post_type'        => 'post',
				'post_status'      => 'publish',
				'posts_per_page'   => -1,
				'suppress_filters' => false,
			)
		);

		$query = new \WP_Query( $args );
		$items = array();

		if ( $query->have_posts() ) {
			while ( $query->have_posts() ) {
				$query->the_post();
				$items[ get_the_ID() ] = get_the_title() ? get_the_title() : __( '(no title)', 'todo-list' );
			}
		}

		wp_reset_postdata();
		return $items;
	}
}
