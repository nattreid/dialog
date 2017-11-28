(function ($, window) {
    if (window.jQuery === undefined) {
        console.error('Plugin "jQuery" required by "modal.js" is missing!');
        return;
    }

    window.Modal = {};

    window.Modal.redrawOnResize = function (componentId) {
        window.Modal.redraw(componentId);
        $(window).on('resize.modalResize', function () {
            window.Modal.redraw(componentId);
        });
    };

    window.Modal.redraw = function (componentId) {
        var modal = $('#' + componentId);
        var box = modal.find('.modal-box');
        if (box.data('draggable')) {
            box.draggable({
                cancel: '.modal-content'
            });
        }
        if (modal.is(':visible')) {
            if (box.data('fixed')) {
                box.centerFixed();
            } else {
                box.center();
            }
        } else {
            modal.css({visibility: 'hidden', display: 'block'});

            if (box.data('fixed')) {
                box.centerFixed();
            } else {
                box.center();
            }
            modal.css({visibility: '', display: 'none'});
            $('#' + componentId).fadeIn();
        }
    };

    $(document).ready(function () {
        $(document).on('click', '.modal-container .modal-background, .modal-container .modal-box .modal-close, .modal-container .modal-box .close', function () {
            var container = $(this).closest('.modal-container');
            var handler = container.find('.modal-box span.modal-close');
            if (handler.data('close')) {
                $.nette.ajax(handler.data('close'));
            }
            container.fadeOut();
            $(window).off('resize.modalResize');
        });
    });

})(jQuery, window);
