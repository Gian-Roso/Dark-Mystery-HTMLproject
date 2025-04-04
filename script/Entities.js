function frameEntities() {
    function adjustIframeHeight(height) {
        var iframe = document.getElementById("EntitiesFrame");
        iframe.style.height = height + "px";
    }
    
    window.addEventListener("message", function(event) {
        if (event.data && event.data.type === "adjustHeight") {
            adjustIframeHeight(event.data.height);
        }
    }, false);}
    
    function sendEntities() {
        function sendHeight() {
            window.parent.postMessage({
                type: "adjustHeight",
                height: document.documentElement.scrollHeight
            }, "*"); // "*" permite comunicação entre domínios (troque por o domínio correto se necessário)
        }
    
        window.onload = sendHeight;
        window.addEventListener("resize", sendHeight);
    }