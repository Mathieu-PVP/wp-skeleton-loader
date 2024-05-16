/**
 *  ╔══════════════════════╗
 *  ║  WP Skeleton Loader  ║
 *  ║    © 2024 Alibee     ║
 *  ║ Tous droits réservés ║
 *  ╚══════════════════════╝
 */


// Si jQuery n'est pas chargé, une erreur est retournée
if (typeof jQuery === 'undefined') {
    throw new Error('jQuery n\'a pas été chargé !');
}

// Si $ n'est pas déclarée dans un script plus haut, alors on l'a déclare
if (typeof $ === 'undefined') {
    var $ = jQuery;
}

// Dès que le DOM est chargé, on recouvre les images
$(document).ready(function() {
    $('.skeleton-loader img').each(function() {
        const overlay = $('<div>').addClass('skeleton-overlay');
        $(this).before(overlay);
        overlay.append($(this));
    });
});

// Dès que la page est entièrement chargée, on enlève l'effet skeleton et découvre les images après un délai de 2s 
$(window).on('load', function() {
    setTimeout(() => {
        $('.skeleton-overlay').each(function() {
            $(this).replaceWith($(this).find('img'));
        });
        $('.skeleton-loader').removeClass('skeleton-loader')
    }, 2000);
});