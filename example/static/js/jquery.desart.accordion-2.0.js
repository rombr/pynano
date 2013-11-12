(function ($) {
    $.fn.accordion_desart = function (options) {
        var defaults = {
            accordionContainer: ".accordion",
            accordionTitle: ".acc-title",
            accordionHidden: ".acc-hidden",
            accordionVisible: ".acc-visible",
            hideOther: "yes",
            hideClicking: "yes"
        };
        var options = $.extend(defaults, options);

        return this.each(function () {
            try { //начало отладки
                var selector = '' + defaults.accordionContainer + ' ' + defaults.accordionHidden + '';
                var accTitle = '' + defaults.accordionContainer + ' ' + defaults.accordionTitle + '';
                $(selector).hide();
                $(defaults.accordionVisible).show();
                $(accTitle).click(function () {
                    if ($(this).children(selector).length != 0) {
                        if ($(this).children(selector).is(':visible') == false) {
                            $(this).addClass('active');
                            if (defaults.hideOther == 'yes') {
                                $(selector).slideUp('300');
                                if ($(accTitle).hasClass('active')) {
                                    $(accTitle).removeClass('active');
                                };
                                if (!$(accTitle).hasClass('active')) {
                                    $(this).addClass('active');
                                };
                            } else {
                                if (!$(this).hasClass('active')) {
                                    $(this).addClass('active');
                                };
                            };
                            $(this).children(selector).slideToggle('500');
                        } else if (defaults.hideClicking == 'yes') {
                            $(this).removeClass('active');
                            $(this).next(selector).slideToggle('500');
                            $(this).children(selector).slideToggle('500');
                        };
                    } else {
                        if ($(this).next(selector).is(':visible') == false) {
                            $(this).addClass('active');
                            if (defaults.hideOther == 'yes') {
                                $(selector).slideUp('300');
                                if ($(accTitle).hasClass('active')) {
                                    $(accTitle).removeClass('active');
                                };
                                if (!$(this).hasClass('active')) {
                                    $(this).addClass('active');
                                };
                            } else {
                                if (!$(accTitle).hasClass('active')) {
                                    $(this).addClass('active');
                                };
                            };
                            $(this).next(selector).slideToggle('500');
                        } else if (defaults.hideClicking == 'yes') {
                            $(this).removeClass('active');
                            $(this).next(selector).slideToggle('500');
                            $(this).children(selector).slideToggle('500');
                        }
                    };
                    return false;
                });
            } catch (er) {
                alert(er)
            } //конец отладки
        });
    };
})(jQuery);