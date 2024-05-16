/**
 *  ╔══════════════════════╗
 *  ║  WP Skeleton Loader  ║
 *  ║    © 2024 Alibee     ║
 *  ║ Tous droits réservés ║
 *  ╚══════════════════════╝
 */


if (typeof jQuery === 'undefined') {
    throw new Error('jQuery n\'a pas été chargé !');
}

if (typeof $ === 'undefined') {
    var $ = jQuery;
}

$(document).ready(function() {
    $('.skeleton-loader img').each(function() {
        const overlay = $('<div>').addClass('skeleton-overlay');
        $(this).before(overlay);
        overlay.append($(this));
    });
});

$(window).on('load', function() {
    setTimeout(() => {
        $('.skeleton-overlay').each(function() {
            $(this).replaceWith($(this).find('img'));
        });
        $('.skeleton-loader').removeClass('skeleton-loader')
    }, 2000);
});