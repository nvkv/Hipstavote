smalltalk.addPackage('Hipstavote-Tests', {});
smalltalk.addClass('HVRESTClientTests', smalltalk.TestCase, [], 'Hipstavote-Tests');
smalltalk.addMethod(
unescape('_testInstaUrl'),
smalltalk.method({
selector: unescape('testInstaUrl'),
fn: function () {
    var self = this;
    var restClient = nil;
    restClient = smalltalk.send(smalltalk.HVRESTClient || HVRESTClient, "_new", []);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(restClient, "_instaUrl", []), "__eq", [unescape("https%3A//api.instagram.com")])]);
    return self;
}
}),
smalltalk.HVRESTClientTests);



smalltalk.addClass('HVLocalStorageTests', smalltalk.TestCase, [], 'Hipstavote-Tests');
smalltalk.addMethod(
unescape('_testPersistance'),
smalltalk.method({
selector: unescape('testPersistance'),
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.HVLocalStorage || HVLocalStorage, "_at_", ["test"]), "__eq", ["testing 123"])]);
    return self;
}
}),
smalltalk.HVLocalStorageTests);

smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.HVLocalStorage || HVLocalStorage, "_at_put_", ["test", "testing 123"]);
    return self;
}
}),
smalltalk.HVLocalStorageTests);

smalltalk.addMethod(
unescape('_tearDown'),
smalltalk.method({
selector: unescape('tearDown'),
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.HVLocalStorage || HVLocalStorage, "_at_put_", ["test", nil]);
    return self;
}
}),
smalltalk.HVLocalStorageTests);



