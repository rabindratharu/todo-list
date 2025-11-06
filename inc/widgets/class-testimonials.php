<?php
/**
 * Testimonials Widget.
 *
 * @package todo-list
 * @since 1.0.0
 */

namespace Todo_List\Inc\Widgets;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Repeater;
use Elementor\Utils;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Image_Size;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Todo_List\Inc\Utils as ElementifyUtils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Testimonials Widget
 *
 * @since 1.0.0
 */
class Testimonials extends Widget_Base {

	/**
	 * Get widget name.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget name.
	 */
	public function get_name(): string {
		return 'eae-testimonials';
	}

	/**
	 * Get widget title.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget title.
	 */
	public function get_title(): string {
		return esc_html__( 'Testimonials', 'todo-list' );
	}

	/**
	 * Get widget icon.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget icon.
	 */
	public function get_icon(): string {
		return 'eae-icon-testimonials';
	}

	/**
	 * Get widget categories.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Widget categories.
	 */
	public function get_categories(): array {
		return array( 'todo-list-category' );
	}

	/**
	 * Get style dependencies.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array CSS style handles.
	 */
	public function get_style_depends(): array {
		return array( 'swiper', 'todo-list-widget' );
	}

	/**
	 * Get script dependencies.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array JS script handles.
	 */
	public function get_script_depends(): array {
		return array( 'swiper', 'todo-list-widget' );
	}

	/**
	 * Get widget keywords.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Widget keywords.
	 */
	public function get_keywords(): array {
		return array( 'elementify', 'testimonial', 'review', 'quote', 'rating', 'recommendation' );
	}

	/**
	 * Register widget controls.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function register_controls(): void {
		$this->register_content_controls();
		$this->register_slider_controls();
		$this->register_style_controls();
	}

	/**
	 * Register content controls.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function register_content_controls(): void {
		$this->start_controls_section(
			'content_section',
			array(
				'label' => esc_html__( 'Content', 'todo-list' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			)
		);

		$repeater = new Repeater();

		$repeater->add_control(
			'author',
			array(
				'label'       => esc_html__( 'Author', 'todo-list' ),
				'type'        => Controls_Manager::TEXT,
				'dynamic'     => array( 'active' => true ),
				'label_block' => true,
			)
		);

		$repeater->add_control(
			'avatar',
			array(
				'label'       => esc_html__( 'Avatar', 'todo-list' ),
				'type'        => Controls_Manager::MEDIA,
				'default'     => array(
					'url' => Utils::get_placeholder_image_src(),
				),
				'label_block' => true,
			)
		);

		$repeater->add_control(
			'headline',
			array(
				'label'       => esc_html__( 'Headline', 'todo-list' ),
				'type'        => Controls_Manager::TEXT,
				'dynamic'     => array( 'active' => true ),
				'label_block' => true,
			)
		);

		$repeater->add_control(
			'quote',
			array(
				'label'       => esc_html__( 'Quote', 'todo-list' ),
				'type'        => Controls_Manager::TEXTAREA,
				'dynamic'     => array( 'active' => true ),
				'label_block' => true,
			)
		);

		$repeater->add_control(
			'rating',
			array(
				'label'       => esc_html__( 'Rating', 'todo-list' ),
				'type'        => Controls_Manager::NUMBER,
				'default'     => 5,
				'min'         => 0,
				'max'         => 5,
				'step'        => 0.5,
				'label_block' => false,
			)
		);

		$repeater->add_control(
			'link',
			array(
				'label'   => esc_html__( 'Link', 'todo-list' ),
				'type'    => Controls_Manager::URL,
				'dynamic' => array( 'active' => true ),
			)
		);

		$this->add_control(
			'testimonials',
			array(
				'label'       => esc_html__( 'Testimonials', 'todo-list' ),
				'type'        => Controls_Manager::REPEATER,
				'default'     => array(
					array(
						'author' => esc_html__( 'John Doe', 'todo-list' ),
						'quote'  => esc_html__( 'Outstanding service and supportive team!', 'todo-list' ),
						'rating' => 5,
					),
					array(
						'author' => esc_html__( 'Jane Smith', 'todo-list' ),
						'quote'  => esc_html__( 'Fantastic experience, highly recommended!', 'todo-list' ),
						'rating' => 4.5,
					),
					array(
						'author' => esc_html__( 'Michael Brown', 'todo-list' ),
						'quote'  => esc_html__( 'Professional and efficient, exceeded expectations.', 'todo-list' ),
						'rating' => 4,
					),
					array(
						'author' => esc_html__( 'Emily Davis', 'todo-list' ),
						'quote'  => esc_html__( 'Great attention to detail and support.', 'todo-list' ),
						'rating' => 4.5,
					),
				),
				'fields'      => $repeater->get_controls(),
				'title_field' => '{{{ author }}}',
			)
		);

		$this->add_control(
			'headline_tag',
			array(
				'label'     => esc_html__( 'Headline Tag', 'todo-list' ),
				'type'      => Controls_Manager::SELECT,
				'options'   => array(
					'h1'   => 'H1',
					'h2'   => 'H2',
					'h3'   => 'H3',
					'h4'   => 'H4',
					'h5'   => 'H5',
					'h6'   => 'H6',
					'div'  => 'div',
					'span' => 'span',
					'p'    => 'p',
				),
				'default'   => 'h3',
				'separator' => 'before',
			)
		);

		$this->add_control(
			'author_tag',
			array(
				'label'     => esc_html__( 'Author Tag', 'todo-list' ),
				'type'      => Controls_Manager::SELECT,
				'options'   => array(
					'h1'   => 'H1',
					'h2'   => 'H2',
					'h3'   => 'H3',
					'h4'   => 'H4',
					'h5'   => 'H5',
					'h6'   => 'H6',
					'div'  => 'div',
					'span' => 'span',
					'p'    => 'p',
				),
				'default'   => 'h4',
				'separator' => 'before',
			)
		);

		$this->add_control(
			'author_link',
			array(
				'label'     => esc_html__( 'Enable Author Link', 'todo-list' ),
				'type'      => Controls_Manager::SWITCHER,
				'default'   => 'yes',
				'separator' => 'before',
			)
		);

		$this->add_control(
			'pagination',
			array(
				'label'     => esc_html__( 'Show Pagination', 'todo-list' ),
				'type'      => Controls_Manager::SWITCHER,
				'default'   => 'yes',
				'separator' => 'before',
			)
		);

		$this->add_control(
			'navigation',
			array(
				'label'     => esc_html__( 'Show Navigation', 'todo-list' ),
				'type'      => Controls_Manager::SWITCHER,
				'separator' => 'before',
			)
		);

		$this->add_responsive_control(
			'alignment',
			array(
				'label'     => esc_html__( 'Card Alignment', 'todo-list' ),
				'type'      => Controls_Manager::CHOOSE,
				'options'   => array(
					'flex-start' => array(
						'title' => esc_html__( 'Top', 'todo-list' ),
						'icon'  => 'eicon-v-align-top',
					),
					'center'     => array(
						'title' => esc_html__( 'Center', 'todo-list' ),
						'icon'  => 'eicon-v-align-middle',
					),
					'flex-end'   => array(
						'title' => esc_html__( 'Bottom', 'todo-list' ),
						'icon'  => 'eicon-v-align-bottom',
					),
				),
				'default'   => 'center',
				'selectors' => array(
					'{{WRAPPER}} .eae-testimonials-swiper .swiper-wrapper' => 'align-items: {{VALUE}}',
				),
				'separator' => 'before',
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Register slider controls.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function register_slider_controls(): void {
		$this->start_controls_section(
			'js_section',
			array(
				'label' => esc_html__( 'Slider', 'todo-list' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			)
		);

		$this->add_responsive_control(
			'slide_limit',
			array(
				'label'           => esc_html__( 'Slides Per View', 'todo-list' ),
				'type'            => Controls_Manager::SELECT,
				'options'         => array(
					'1' => '1',
					'2' => '2',
					'3' => '3',
					'4' => '4',
					'5' => '5',
					'6' => '6',
				),
				'desktop_default' => '2',
				'tablet_default'  => '2',
				'mobile_default'  => '1',
			)
		);

		$this->add_responsive_control(
			'slide_gap',
			array(
				'label'           => esc_html__( 'Slide Gap', 'todo-list' ),
				'type'            => Controls_Manager::NUMBER,
				'min'             => 0,
				'max'             => 100,
				'desktop_default' => 15,
				'tablet_default'  => 10,
				'mobile_default'  => 10,
				'description'     => esc_html__( 'Gap between slides in pixels.', 'todo-list' ),
			)
		);

		$this->add_control(
			'speed',
			array(
				'label'       => esc_html__( 'Transition Speed', 'todo-list' ) . ' (ms)',
				'type'        => Controls_Manager::NUMBER,
				'default'     => 1200,
				'min'         => 100,
				'max'         => 5000,
				'description' => esc_html__( 'Duration of slide transition in milliseconds.', 'todo-list' ),
			)
		);

		$this->add_control(
			'autoplay',
			array(
				'label'   => esc_html__( 'Autoplay', 'todo-list' ),
				'type'    => Controls_Manager::SWITCHER,
				'default' => 'yes',
			)
		);

		$this->add_control(
			'delay',
			array(
				'label'       => esc_html__( 'Autoplay Delay', 'todo-list' ) . ' (ms)',
				'type'        => Controls_Manager::NUMBER,
				'default'     => 5000,
				'min'         => 1000,
				'max'         => 10000,
				'description' => esc_html__( 'Delay between slide transitions in milliseconds.', 'todo-list' ),
				'condition'   => array( 'autoplay' => 'yes' ),
			)
		);

		$this->add_control(
			'loop',
			array(
				'label'   => esc_html__( 'Infinite Loop', 'todo-list' ),
				'type'    => Controls_Manager::SWITCHER,
				'default' => 'yes',
			)
		);

		$this->add_control(
			'pause_on_hover',
			array(
				'label'     => esc_html__( 'Pause on Hover', 'todo-list' ),
				'type'      => Controls_Manager::SWITCHER,
				'default'   => 'yes',
				'condition' => array( 'autoplay' => 'yes' ),
			)
		);

		$this->add_control(
			'center_slide',
			array(
				'label'   => esc_html__( 'Center Slides', 'todo-list' ),
				'type'    => Controls_Manager::SWITCHER,
				'default' => 'yes',
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Register style controls.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function register_style_controls(): void {
		$this->start_controls_section(
			'style_card_section',
			array(
				'label' => esc_html__( 'Card', 'todo-list' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			array(
				'name'     => 'card_background',
				'types'    => array( 'classic', 'gradient' ),
				'exclude'  => array( 'image' ),
				'selector' => '{{WRAPPER}} .eae-testimonials__item',
			)
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			array(
				'name'     => 'card_border',
				'selector' => '{{WRAPPER}} .eae-testimonials__item',
			)
		);

		$this->add_responsive_control(
			'card_border_radius',
			array(
				'label'      => esc_html__( 'Border Radius', 'todo-list' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px', '%', 'em', 'rem' ),
				'default'    => array(
					'top'      => 15,
					'right'    => 15,
					'bottom'   => 15,
					'left'     => 15,
					'unit'     => 'px',
					'isLinked' => true,
				),
				'selectors'  => array(
					'{{WRAPPER}} .eae-testimonials__item' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'card_padding',
			array(
				'label'      => esc_html__( 'Padding', 'todo-list' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px', '%', 'em', 'rem' ),
				'default'    => array(
					'top'      => 20,
					'right'    => 20,
					'bottom'   => 20,
					'left'     => 20,
					'unit'     => 'px',
					'isLinked' => true,
				),
				'selectors'  => array(
					'{{WRAPPER}} .eae-testimonials__item' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_control(
			'headline_heading',
			array(
				'label'     => esc_html__( 'Headline', 'todo-list' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);

		$this->add_control(
			'headline_color',
			array(
				'label'     => esc_html__( 'Color', 'todo-list' ),
				'type'      => Controls_Manager::COLOR,
				'global'    => array( 'default' => Global_Colors::COLOR_SECONDARY ),
				'selectors' => array(
					'{{WRAPPER}} .eae-testimonials__headline' => 'color: {{VALUE}}',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'headline_typo',
				'global'   => array( 'default' => Global_Typography::TYPOGRAPHY_PRIMARY ),
				'selector' => '{{WRAPPER}} .eae-testimonials__headline',
			)
		);

		$this->add_control(
			'quote_heading',
			array(
				'label'     => esc_html__( 'Quote', 'todo-list' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);

		$this->add_control(
			'quote_color',
			array(
				'label'     => esc_html__( 'Color', 'todo-list' ),
				'type'      => Controls_Manager::COLOR,
				'global'    => array( 'default' => Global_Colors::COLOR_TEXT ),
				'selectors' => array(
					'{{WRAPPER}} .eae-testimonials__entry-content' => 'color: {{VALUE}}',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'quote_typo',
				'global'   => array( 'default' => Global_Typography::TYPOGRAPHY_TEXT ),
				'selector' => '{{WRAPPER}} .eae-testimonials__entry-content',
			)
		);

		$this->add_control(
			'avatar_heading',
			array(
				'label'     => esc_html__( 'Avatar', 'todo-list' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);

		$this->add_responsive_control(
			'avatar_size',
			array(
				'label'      => esc_html__( 'Size', 'todo-list' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array( 'px', '%', 'em', 'rem' ),
				'range'      => array(
					'px' => array(
						'min' => 20,
						'max' => 100,
					),
					'%'  => array(
						'min' => 0,
						'max' => 100,
					),
				),
				'default'    => array(
					'unit' => 'px',
					'size' => 50,
				),
				'selectors'  => array(
					'{{WRAPPER}} .eae-testimonials__author-avatar-wrap' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'avatar_border_radius',
			array(
				'label'      => esc_html__( 'Border Radius', 'todo-list' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px', '%', 'em', 'rem' ),
				'default'    => array(
					'top'      => 50,
					'right'    => 50,
					'bottom'   => 50,
					'left'     => 50,
					'unit'     => '%',
					'isLinked' => true,
				),
				'selectors'  => array(
					'{{WRAPPER}} .eae-testimonials__author-avatar-wrap' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			array(
				'name'     => 'avatar_shadow',
				'selector' => '{{WRAPPER}} .eae-testimonials__author-avatar-wrap',
			)
		);

		$this->add_control(
			'author_heading',
			array(
				'label'     => esc_html__( 'Author', 'todo-list' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);

		$this->add_control(
			'author_color',
			array(
				'label'     => esc_html__( 'Color', 'todo-list' ),
				'type'      => Controls_Manager::COLOR,
				'global'    => array( 'default' => Global_Colors::COLOR_SECONDARY ),
				'selectors' => array(
					'{{WRAPPER}} .eae-testimonials__author-name' => 'color: {{VALUE}}',
				),
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'     => 'author_typo',
				'global'   => array( 'default' => Global_Typography::TYPOGRAPHY_PRIMARY ),
				'selector' => '{{WRAPPER}} .eae-testimonials__author-name',
			)
		);

		$this->add_control(
			'link_heading',
			array(
				'label'     => esc_html__( 'Link', 'todo-list' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);

		$this->add_control(
			'link_color',
			array(
				'label'     => esc_html__( 'Color', 'todo-list' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					'{{WRAPPER}} .eae-testimonials__author-link' => 'color: {{VALUE}}',
				),
			)
		);

		$this->add_responsive_control(
			'link_border_radius',
			array(
				'label'      => esc_html__( 'Border Radius', 'todo-list' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px', '%', 'em', 'rem' ),
				'default'    => array(
					'top'      => 50,
					'right'    => 50,
					'bottom'   => 50,
					'left'     => 50,
					'unit'     => '%',
					'isLinked' => true,
				),
				'selectors'  => array(
					'{{WRAPPER}} .eae-testimonials__author-link' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'style_pagination_section',
			array(
				'label' => esc_html__( 'Pagination', 'todo-list' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_control(
			'pagination_normal_color',
			array(
				'label'     => esc_html__( 'Normal Color', 'todo-list' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					'{{WRAPPER}} .eae-testimonials-swiper .swiper-pagination-bullet' => '--swiper-pagination-bullet-inactive-color: {{VALUE}}',
				),
			)
		);

		$this->add_control(
			'pagination_active_color',
			array(
				'label'     => esc_html__( 'Active Color', 'todo-list' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => array(
					'{{WRAPPER}} .eae-testimonials-swiper .swiper-pagination-bullet-active' => '--swiper-pagination-color: {{VALUE}}',
				),
			)
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'style_navigation_section',
			array(
				'label' => esc_html__( 'Navigation', 'todo-list' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_control(
			'navigation_icon_color',
			array(
				'label'     => esc_html__( 'Icon Color', 'todo-list' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '#ffffff',
				'selectors' => array(
					'{{WRAPPER}} .eae-testimonials-swiper .swiper-button-next::after, {{WRAPPER}} .eae-testimonials-swiper .swiper-button-prev::after' => 'color: {{VALUE}}',
				),
			)
		);

		$this->add_control(
			'navigation_bg_color',
			array(
				'label'     => esc_html__( 'Background Color', 'todo-list' ),
				'type'      => Controls_Manager::COLOR,
				'default'   => '#000000',
				'selectors' => array(
					'{{WRAPPER}} .eae-testimonials-swiper .swiper-button-next, {{WRAPPER}} .eae-testimonials-swiper .swiper-button-prev' => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->add_responsive_control(
			'navigation_border_radius',
			array(
				'label'      => esc_html__( 'Border Radius', 'todo-list' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px', '%', 'em', 'rem' ),
				'default'    => array(
					'top'      => 5,
					'right'    => 5,
					'bottom'   => 5,
					'left'     => 5,
					'unit'     => 'px',
					'isLinked' => true,
				),
				'selectors'  => array(
					'{{WRAPPER}} .eae-testimonials-swiper .swiper-button-next' => 'border-radius: 0 {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} 0;',
					'{{WRAPPER}} .eae-testimonials-swiper .swiper-button-prev' => 'border-radius: {{TOP}}{{UNIT}} 0 0 {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->end_controls_section();
	}

	/**
	 * Sanitize text input.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @param string $text Input text to sanitize.
	 * @return string Sanitized text.
	 */
	protected function sanitize_text( string $text ): string {
		return sanitize_text_field( wp_strip_all_tags( $text ) );
	}

	/**
	 * Get author image HTML.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @param array $testimonial Testimonial data.
	 * @return string Image HTML.
	 */
	protected function get_author_image( array $testimonial ): string {
		if ( empty( $testimonial['avatar']['url'] ) ) {
			return '';
		}

		$image_src              = esc_url( $testimonial['avatar']['url'] );
		$image_id               = attachment_url_to_postid( $image_src );
		$settings['image_data'] = ElementifyUtils::get_image_data( $image_id, $image_src, 'thumbnail' );

		return Group_Control_Image_Size::get_attachment_image_html( $settings, 'thumbnail', 'image_data' );
	}

	/**
	 * Render star rating.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @param float $rating Rating value.
	 * @return string Rating HTML.
	 */
	protected function render_star_rating( float $rating ): string {
		$percentage = ( $rating / 5 ) * 100;
		return sprintf(
			'<div class="eae-testimonials__star-ratings">
                <div class="eae-testimonials__star-ratings-top" style="width: %1$s%%;">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <div class="eae-testimonials__star-ratings-bottom">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
            </div>',
			esc_attr( $percentage )
		);
	}

	/**
	 * Render widget output.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function render(): void {
		$settings = $this->get_settings_for_display();

		if ( empty( $settings['testimonials'] ) ) {
			return;
		}

		$headline_tag = Utils::validate_html_tag( $settings['headline_tag'] );
		$author_tag   = Utils::validate_html_tag( $settings['author_tag'] );

		// Retrieve responsive slide limit settings
		$limits = array(
			'desktop' => absint( $this->get_settings_for_display( 'slide_limit' ) ) ?: 3,
			'tablet'  => absint( $this->get_settings_for_display( 'slide_limit_tablet' ) ) ?: 2,
			'mobile'  => absint( $this->get_settings_for_display( 'slide_limit_mobile' ) ) ?: 1,
		);
		$gaps   = array(
			'desktop' => absint( $this->get_settings_for_display( 'slide_gap' ) ) ?: 20,
			'tablet'  => absint( $this->get_settings_for_display( 'slide_gap_tablet' ) ) ?: 10,
			'mobile'  => absint( $this->get_settings_for_display( 'slide_gap_mobile' ) ) ?: 0,
		);
		$attrs  = array(
			'slidesPerView'  => $limits,
			'spaceBetween'   => $gaps,
			'speed'          => $settings['speed'],
			'delay'          => $settings['delay'],
			'loop'           => ( ! empty( $settings['loop'] ) ) ? true : false,
			'autoplay'       => ( ! empty( $settings['autoplay'] ) ) ? true : false,
			'pauseOnHover'   => ( ! empty( $settings['pause_on_hover'] ) ) ? true : false,
			'pagination'     => ( ! empty( $settings['pagination'] ) ) ? true : false,
			'navigation'     => ( ! empty( $settings['navigation'] ) ) ? true : false,
			'centeredSlides' => ( ! empty( $settings['center_slide'] ) ) ? true : false,
		);

		$this->add_render_attribute(
			'eae-wrapper',
			array(
				'class'         => 'eae-testimonials',
				'data-settings' => wp_json_encode( $attrs ),
			)
		);
		?>
		<div <?php $this->print_render_attribute_string( 'eae-wrapper' ); ?>>
			<?php if ( ! empty( $settings['testimonials'] ) ) : ?>
				<div class="swiper eae-testimonials-swiper">
					<div class="swiper-wrapper">
						<?php
						foreach ( $settings['testimonials'] as $index => $item ) :
							$this->add_render_attribute( "link_{$index}", array( 'class' => 'eae-testimonials__author-link' ) );
							if ( ! empty( $item['link']['url'] ) ) {
								$this->add_link_attributes( "link_{$index}", $item['link'] );
							}
							?>
							<div class="swiper-slide eae-testimonials__item">
								<div class="eae-testimonials__content">
									<?php if ( ! empty( $item['headline'] ) ) : ?>
										<<?php echo esc_html( $headline_tag ); ?> class="eae-testimonials__headline">
											<?php echo esc_html( $this->sanitize_text( $item['headline'] ) ); ?>
										</<?php echo esc_html( $headline_tag ); ?>>
									<?php endif; ?>

									<?php if ( ! empty( $item['quote'] ) ) : ?>
										<div class="eae-testimonials__entry-content">
											<p><?php echo wp_kses_post( $item['quote'] ); ?></p>
										</div>
									<?php endif; ?>
								</div>
								<div class="eae-testimonials__author-info">
									<div class="eae-testimonials__author-detail">
										<?php if ( ! empty( $item['avatar']['url'] ) ) : ?>
											<figure class="eae-testimonials__author-avatar-wrap">
												<?php echo wp_kses_post( $this->get_author_image( $item ) ); ?>
											</figure>
										<?php endif; ?>

										<div class="eae-testimonials__author-review-name">
											<?php if ( ! empty( $item['author'] ) ) : ?>
												<<?php echo esc_html( $author_tag ); ?> class="eae-testimonials__author-name">
													<?php echo esc_html( $this->sanitize_text( $item['author'] ) ); ?>
												</<?php echo esc_html( $author_tag ); ?>>
											<?php endif; ?>
											<?php if ( ! empty( $item['rating'] ) ) : ?>
												<span class="eae-testimonials__author-review">
													<?php echo wp_kses_post( $this->render_star_rating( floatval( $item['rating'] ) ) ); ?>
												</span>
											<?php endif; ?>
										</div>
									</div>
									<?php if ( ! empty( $item['link']['url'] ) && $settings['author_link'] === 'yes' ) : ?>
										<a <?php $this->print_render_attribute_string( "link_{$index}" ); ?>>
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
												stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
												class="feather feather-arrow-right">
												<line x1="5" y1="12" x2="19" y2="12"></line>
												<polyline points="12 5 19 12 12 19"></polyline>
											</svg>
										</a>
									<?php endif; ?>
								</div>
							</div>
						<?php endforeach; ?>
					</div>
					<?php if ( ! empty( $settings['pagination'] ) ) : ?>
						<div class="swiper-pagination"></div>
					<?php endif; ?>
					<?php if ( ! empty( $settings['navigation'] ) ) : ?>
						<div class="eae-testimonials__navigation">
							<div class="swiper-button-prev"></div>
							<div class="swiper-button-next"></div>
						</div>
					<?php endif; ?>
				</div>
			<?php endif; ?>
		</div>
		<?php
	}
}
