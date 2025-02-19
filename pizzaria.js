(function () {
        var options = {
            call: "5511981950165",
            whatsapp: "5511981950165",
            call_to_action: "Faça o seu pedido",
            button_color: "#34af23",
            position: "right",
            order: "whatsapp,call",
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();