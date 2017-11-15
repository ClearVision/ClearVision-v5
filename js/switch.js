window.onload = function() {
    switchjs.init();
};

var switchjs = {
    init: function() {
        var r = document.querySelector("[switch-root]");
        if (r) {
            // Declare root
            switchjs.root = r;
            // Declare pages
            switchjs.pages = switchjs.root.querySelectorAll("[switch-page]");
            // Initialize refs
            switchjs.refs = document.querySelectorAll("[switch-ref]");
            for (var i = 0; i < switchjs.refs.length; i++) {
                switchjs.refs[i].onclick = function() {
                    switchjs.show(this.getAttribute("switch-ref"));
                };
            }
            // Show default page
            let d = switchjs.root.getAttribute("switch-root");
            switchjs.show(d, 0);
        }
    },
    show: function(page, timeout = 300) {
        // Update pages
        for (var i = 0; i < switchjs.pages.length; i++) {
            switchjs.pages[i].removeAttribute("switch-visible");
        }
        // Update refs
        for (var i = 0; i < switchjs.refs.length; i++) {
            if (switchjs.refs[i].getAttribute("switch-ref") === page) {
                switchjs.refs[i].setAttribute("switch-selected", "");
            }
            else {
                switchjs.refs[i].removeAttribute("switch-selected");
            }
        }
        setTimeout(function() {
            for (var i = 0; i < switchjs.pages.length; i++) {
                if (switchjs.pages[i].getAttribute("switch-page") === page) {
                    switchjs.pages[i].setAttribute("switch-visible", "");;
                }
            }
        }, timeout);
    }
}