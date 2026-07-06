<?php


function gaming_blog_theme() {
  wp_enqueue_style( 'style', get_template_directory_uri() . '/build/style-index.css' );
  wp_enqueue_script( 'gaming-blog-script', get_template_directory_uri() . '/build/index.js', array(),false,  array('strategy' => 'async'));

}
add_action( 'wp_enqueue_scripts', 'gaming_blog_theme' );

?>