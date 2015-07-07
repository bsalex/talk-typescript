(function ($) {
    $.fn.redBorder = function (options) {
        this.each(function () {
            var element = this;
            element.style.borderWidth = (options.borderWidth + "px") || "5px";
            element.style.borderColor = options.borderColor || "red";
        });
        return this;
    };
})($);
$("#selector").redBorder();
