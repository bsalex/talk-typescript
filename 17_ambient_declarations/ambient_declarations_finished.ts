declare interface IJQueryPlugin {
    (options: Object): any;
    (): any;
}



interface jQueryStatic {
    (selector: string): jQuery;
    fn: {

    }
}

declare interface jQuery {
    redBorder: IJQueryPlugin;
    each: (callback: () => void) => jQuery;
}

declare var $: jQueryStatic;


(function($) {
    $.fn.redBorder = function(options) {
        var $this = <jQuery> this;

        $this.each(function() {
            var element = <HTMLElement> this;

            element.style.borderWidth = (options.borderWidth + "px") || "5px";
            element.style.borderColor = options.borderColor || "red";
        });

        return $this;
    }
})($);

$("#selector").redBorder();
