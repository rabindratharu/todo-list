<?php
/**
 * Autoloader files.
 *
 * @package todo-list
 */

namespace Todo_List\Inc\Helpers;

// Abort if called directly.
defined( 'WPINC' ) || die;

/**
 * Autoloader function.
 *
 * @param string $namespace_source Source namespace.
 *
 * @return void
 */
function autoloader( $namespace_source = '' ) {
	$resource_path    = false;
	$namespace_root   = 'Todo_List\\';
	$namespace_source = trim( $namespace_source, '\\' );

	if ( empty( $namespace_source ) || strpos( $namespace_source, '\\' ) === false || strpos( $namespace_source, $namespace_root ) !== 0 ) {
		// Not our namespace, bail out.
		return;
	}

	// Remove our root namespace.
	$namespace_source = str_replace( $namespace_root, '', $namespace_source );

	$path = explode(
		'\\',
		str_replace( '_', '-', strtolower( $namespace_source ) )
	);

	/**
	 * Time to determine which type of resource path it is,
	 * so that we can deduce the correct file path for it.
	 */
	if ( empty( $path[0] ) || empty( $path[1] ) ) {
		return;
	}

	$directory = '';
	$file_name = '';

	if ( 'inc' === $path[0] ) {

		switch ( $path[1] ) {
			case 'traits':
				$directory = 'traits';
				$file_name = sprintf( 'trait-%s', trim( strtolower( $path[2] ) ) );
				break;

			case 'widgets':
			case 'blocks': // phpcs:ignore PSR2.ControlStructures.SwitchDeclaration.TerminatingComment
				/**
				 * If there is class name provided for specific directory then load that.
				 * otherwise find in inc/ directory.
				 */
				if ( ! empty( $path[2] ) ) {
					$directory = sprintf( 'classes/%s', $path[1] );
					$file_name = sprintf( 'class-%s', trim( strtolower( $path[2] ) ) );
					break;
				}
			default:
				$directory = 'classes';
				$file_name = sprintf( 'class-%s', trim( strtolower( $path[1] ) ) );
				break;
		}

		$resource_path = sprintf( '%s/inc/%s/%s.php', untrailingslashit( TODO_LIST_PATH ), $directory, $file_name );
	}

	/**
	 * If $is_valid_file has 0 means valid path or 2 means the file path contains a Windows drive path.
	 */
	$is_valid_file = validate_file( $resource_path );

	if ( ! empty( $resource_path ) && file_exists( $resource_path ) && ( 0 === $is_valid_file || 2 === $is_valid_file ) ) {
		// We already making sure that file is exists and valid.
		require_once($resource_path); // phpcs:ignore
	}
}

spl_autoload_register( '\Todo_List\Inc\Helpers\autoloader' );
