$(function () {
    var m = $("#init-button"), i = $("#app"), k = $("#form"), o = $("#search-input"), n = $("#r-btn, #c-btn"),
        p = $("#submit-button");

    function l() {
        i.toggleClass("active");
        if (k.hasClass("active")) {
            k.removeClass("active")
        } else {
            setTimeout(function () {
                k.addClass("active")
            }, 40);
            setTimeout(function () {
                o.focus()
            }, 600)
        }
    }

    function j() {
        if ($(this).val().trim().length > 0) {
            n.addClass("change");
            p.addClass("active")
        } else {
            n.removeClass("change");
            p.removeClass("active")
        }
    }

    m.on("click", l);
    o.on("keyup", j)
});