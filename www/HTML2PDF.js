var exec = require('cordova/exec');

exports.fromHTMLString = function (arg0, arg1, success, error) {
    exec(success, error, 'HTML2PDF', 'fromHTMLString', [arg0, arg1]);
};

exports.fromHTMLFile = function (arg0, arg1, success, error) {
    exec(success, error, 'HTML2PDF', 'fromHTMLFile', [arg0, arg1]);
};
