module.exports = {
    allowsBackForwardNavigationGestures: function (allow) {
        require('cordova/exec')(null, null, 'CDVWKWebViewEngine', 'allowsBackForwardNavigationGestures', [allow]);
    }
}
