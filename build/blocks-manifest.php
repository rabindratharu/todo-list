<?php
// This file is generated. Do not modify it manually.
return array(
	'todo-list' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/todo-list',
		'version' => '0.1.0',
		'title' => 'Todo List',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'fontSizeDesktop' => array(
				'type' => 'number',
				'default' => 16
			),
			'fontSizeTablet' => array(
				'type' => 'number',
				'default' => 16
			),
			'fontSizeMobile' => array(
				'type' => 'number',
				'default' => 16
			)
		),
		'textdomain' => 'todo-list',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
