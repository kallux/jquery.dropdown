/**
* @author Karl Tannergård <kalle@youtify.com>
* @website https://github.com/kallux/
* @version 0.0.1
*
* MIT license
*/
(function ($) {
    $.fn.dropdown = function (callback) {
        $.each(this, function (index, item) {
            var $dropdown = $(item),
                $body = $dropdown.find('.dropdown-body'),
                open = function () {
                    $dropdown.find('.dropdown-body li.hover').removeClass('hover');
                    $dropdown.addClass('open');
                },
                close = function () {
                    $dropdown.removeClass('open');
                },
                toggle = function () {
                    if ($dropdown.hasClass('open')) {
                        close();
                    } else {
                        open();
                    }
                };

            // Navigate up/down and select with enter or exit with escape
            $dropdown.keydown(function (event) {
                // esc, enter, up, down
                var keys = [27, 13, 38, 40];
                if ($.inArray(event.keyCode, keys) === -1)
                    return;

                $dropdown.addClass('open');
                var $li = $dropdown.find('.dropdown-body li.hover');
                switch (event.keyCode) {
                    case 27:
                        $dropdown.removeClass('open');
                        break;
                    case 13:
                        if ($li.length > 0) {
                            $li.trigger('mouseup');
                        } else {
                            $dropdown.removeClass('open');
                        }
                        break;
                    case 38:
                        if ($li.length > 0) {
                            $li = $li.removeClass('hover').prev();
                        }
                        if ($li.length === 0) {
                            $li = $dropdown.find('.dropdown-body li').last();
                        }
                        $li.siblings().removeClass('hover');
                        $li.addClass('hover');
                        break;
                    case 40:
                        if ($li.length > 0) {
                            $li = $li.removeClass('hover').next();
                        }
                        if ($li.length === 0) {
                            $li = $dropdown.find('.dropdown-body li').first();
                        }
                        $li.siblings().removeClass('hover');
                        $li.addClass('hover');
                        break;
                }
                event.stopPropagation();
                return false;
            });

            // Set mouse events on li elements
            $dropdown.find('.dropdown-body li').each(function (index, item) {
                var $li = $(item),
                    $title = $dropdown.find('.dropdown-head .title');
                $li.mouseup(function (event) {
                    $title.html($li.html());
                    toggle();
                    event.stopPropagation();
                    callback.call(this, $li.attr('data-value'));
                    return false;
                });
                $li.mousedown(function (event) { event.stopPropagation(); return false; });
            });

            // Hide dropdown body on click outside
            $dropdown.find('.dropdown-head, .dropdown-head .title, .dropdown-head .caret').mousedown(function (event) {
                toggle();
                event.stopPropagation();
                return false;
            });

            // Hide dropdown body on click outside, but wait so that we can select stuff first
            // since explorer and firefox triggers mousedown in different orders
            $('body').mousedown(function () {
                setTimeout(function () { close() }, 50);
            });
        });
    };
})(jQuery);