!(function (window) {
    var namespace = "__PRIME_VIDEO";
    function postMessage(type, data) {
        try {
            window[namespace].postMessage(JSON.stringify({type: type, data: data}));
        } catch (e) {
            window.alert('调用失败');
        }
    }

    window.PrimeSdk = {
        confirm: function (content) {
            postMessage('confirm', content);
        },
        openSchemaUrl: function (url) {
            postMessage('openSchemaUrl', url);
        },
        exit: function () {
            postMessage('exit');
        }
    };
})(window);