/* ****************************** dialog.js ********************************* */

function Dialog() {
}

Dialog.redrawOnResize = function (componentId) {
    Dialog.redraw(componentId);
    $(window).on('resize.dialogResize', function () {
        Dialog.redraw(componentId);
    });
};

Dialog.redraw = function (componentId) {
    var dialog = $('#' + componentId);
    var box = dialog.find('.dialog-box');
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
        $(this).closest('.dialog-container').fadeOut();
        $(window).off('resize.dialogResize');
    });
});
