<?php
/*
    Plugin Name: WP Skeleton Loader
    Plugin URI: https://github.com/Mathieu-PVP/wp-skeleton-loader
    Description: Un plugin qui permet de masquer temporairement les éléments de vos pages avec un effet skeleton
    Author: Alibee by PVP
    Author URI: https://alibee.fr/
    Version: 1.0.0
*/

// Fonction pour importer les scripts et les feuilles de style
function wp_alibee_skeletonloader_import() {
    $domain = home_url();

    // jQuery est ajouté s'il n'a pas été chargé
    if (!wp_script_is('jquery', 'registered')) {
        wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js', array(), null, true);
    }

    // jQuery UI est ajouté s'il n'a pas été chargé
    if (!wp_script_is('jquery-ui', 'registered')) {
        wp_register_script('jquery-ui', 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js', array('jquery'), null, true);
    }

    // Importation des scripts et feuilles de style
    wp_enqueue_script('wp-skeleton-loader', $domain . '/wp-content/plugins/wp-skeleton-loader/js/script.js', array('jquery'), true);
    wp_enqueue_style('wp-skeleton-loader', $domain . '/wp-content/plugins/wp-skeleton-loader/css/style.css', array(), 'all');
}

// Injection du script et des feuilles de style dans la balise "head" du site
add_action('wp_enqueue_scripts', 'wp_alibee_skeletonloader_import');
?>