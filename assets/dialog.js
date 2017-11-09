(function ($, window) {
    if (window.jQuery === undefined) {
        console.error('Plugin "jQuery" required by "dialog.js" is missing!');
        return;
    }

    window.Dialog = {};

    window.Dialog.redrawOnResize = function (componentId) {
        window.Dialog.redraw(componentId);
        $(window).on('resize.dialogResize', function () {
            window.Dialog.redraw(componentId);
        });
    };

    window.Dialog.redraw = function (componentId) {
        var dialog = $('#' + componentId);
        var box = dialog.find('.dialog-box');
        if (box.data('draggable')) {
            box.draggable({
                cancel: '.dialog-content'
            });
        }
        if (dialog.is(':visible')) {
            if (box.data('fixed')) {
                box.centerFixed();
            } else {
                box.center();
            }
        } else {
            dialog.css({visibility: 'hidden', display: 'block'});

            if (box.data('fixed')) {
                box.centerFixed();
            } else {
                box.center();
            }
            dialog.css({visibility: '', display: 'none'});
            $('#' + componentId).fadeIn();
        }
    };

    $(document).ready(function () {
        $(document).on('click', '.dialog-container .dialog-background, .dialog-container .dialog-box .dialog-close, .dialog-container .dialog-box .close', function () {
            var container = $(this).closest('.dialog-container');
            var handler = container.find('.dialog-box span.dialog-close');
            if (handler.data('close')) {
                $.nette.ajax(handler.data('close'));
            }
            container.fadeOut();
            $(window).off('resize.dialogResize');
        });
    });

})(jQuery, window);
