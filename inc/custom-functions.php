<?php
/**
 * Custom Functions.
 *
 * @package Aquila Features.
 */

/**
 * Get plugin template.
 *
 * @param string $template        Name or path of the template within /templates folder without php extension.
 * @param array  $variables       Pass an array of variables you want to use in template.
 * @param bool   $output_directly Whether to echo out the template content directly.
 *
 * @return string|void Template markup.
 */
function aquila_features_get_template( string $template, array $variables = array(), bool $output_directly = false ) {

	$template_file = sprintf( '%1$stemplates/%2$s.php', AQUILA_FEATURES_PLUGIN_DIR, $template );

	if ( ! file_exists( $template_file ) ) {
		// Log error for debugging.
		if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
			error_log( sprintf( 'Template file not found: %s', $template_file ) ); // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
		}
		return '';
	}

	// Validate template path for security.
	$allowed_path      = realpath( AQUILA_FEATURES_PLUGIN_DIR . 'templates' );
	$template_realpath = realpath( $template_file );

	if ( ! $template_realpath || 0 !== strpos( $template_realpath, $allowed_path ) ) {
		// Prevent directory traversal attacks.
		if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
			error_log( sprintf( 'Security violation: Attempted to access template outside allowed directory: %s', $template ) ); // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
		}
		return '';
	}

	if ( ! empty( $variables ) && is_array( $variables ) ) {
		extract( $variables, EXTR_SKIP ); // phpcs:ignore WordPress.PHP.DontExtract.extract_extract -- Used as an exception as there is no better alternative.
	}

	ob_start();

	include $template_file; // phpcs:ignore WordPressVIPMinimum.Files.IncludingFile.UsingVariable

	$markup = ob_get_clean();

	if ( $output_directly ) {
		echo $markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Output escaped already in template.
	} else {
		return $markup;
	}
}
