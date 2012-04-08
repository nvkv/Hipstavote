smalltalk.addPackage('Hipstavote-Tests', {});
smalltalk.addClass('HVRESTClientTests', smalltalk.TestCase, [], 'Hipstavote-Tests');
smalltalk.addMethod(
unescape('_testInstaUrl'),
smalltalk.method({
selector: unescape('testInstaUrl'),
category: 'testing',
fn: function () {
    var self = this;
    var restClient = nil;
    restClient = smalltalk.send(smalltalk.HVRESTClient || HVRESTClient, "_new", []);
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(restClient, "_instaUrl", []), "__eq", [unescape("https%3A//api.instagram.com")])]);
    return self;
},
args: [],
source: unescape('testInstaUrl%0A%09%7CrestClient%7C%0A%09restClient%20%3A%3D%20HVRESTClient%20new.%0A%09self%20assert%3A%20%28restClient%20instaUrl%20%3D%20%27https%3A//api.instagram.com%27%29.'),
messageSends: ["new", "assert:", unescape("%3D"), "instaUrl"],
referencedClasses: ["HVRESTClient"]
}),
smalltalk.HVRESTClientTests);



smalltalk.addClass('HVLocalStorageTests', smalltalk.TestCase, [], 'Hipstavote-Tests');
smalltalk.addMethod(
unescape('_testPersistance'),
smalltalk.method({
selector: unescape('testPersistance'),
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(smalltalk.HVLocalStorage || HVLocalStorage, "_at_", ["test"]), "__eq", ["testing 123"])]);
    return self;
},
args: [],
source: unescape('testPersistance%0A%09self%20assert%3A%20%28HVLocalStorage%20at%3A%20%27test%27%29%20%3D%20%27testing%20123%27.'),
messageSends: ["assert:", unescape("%3D"), "at:"],
referencedClasses: ["HVLocalStorage"]
}),
smalltalk.HVLocalStorageTests);

smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.HVLocalStorage || HVLocalStorage, "_at_put_", ["test", "testing 123"]);
    return self;
},
args: [],
source: unescape('setUp%0A%09HVLocalStorage%20at%3A%20%27test%27%20put%3A%20%27testing%20123%27.'),
messageSends: ["at:put:"],
referencedClasses: ["HVLocalStorage"]
}),
smalltalk.HVLocalStorageTests);

smalltalk.addMethod(
unescape('_tearDown'),
smalltalk.method({
selector: unescape('tearDown'),
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.HVLocalStorage || HVLocalStorage, "_at_put_", ["test", nil]);
    return self;
},
args: [],
source: unescape('tearDown%0A%09HVLocalStorage%20at%3A%20%27test%27%20put%3A%20nil.'),
messageSends: ["at:put:"],
referencedClasses: ["HVLocalStorage"]
}),
smalltalk.HVLocalStorageTests);



