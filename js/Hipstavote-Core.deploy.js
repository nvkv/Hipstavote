smalltalk.addPackage('Hipstavote-Core', {});
smalltalk.addClass('HVLocalStorage', smalltalk.Object, [], 'Hipstavote-Core');

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
fn: function (aKey) {
    var self = this;
    return localStorage.getItem(aKey);
    return self;
}
}),
smalltalk.HVLocalStorage.klass);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
fn: function (aKey, anObject) {
    var self = this;
    localStorage.setItem(aKey, anObject);
    return self;
}
}),
smalltalk.HVLocalStorage.klass);

smalltalk.addMethod(
unescape('_accessToken'),
smalltalk.method({
selector: unescape('accessToken'),
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.HVLocalStorage || HVLocalStorage, "_at_", ["access_token"]);
    return self;
}
}),
smalltalk.HVLocalStorage.klass);

smalltalk.addMethod(
unescape('_accessToken_'),
smalltalk.method({
selector: unescape('accessToken%3A'),
fn: function (aToken) {
    var self = this;
    smalltalk.send(smalltalk.HVLocalStorage || HVLocalStorage, "_at_put_", ["access_token", aToken]);
    return self;
}
}),
smalltalk.HVLocalStorage.klass);


smalltalk.addClass('HVRESTClient', smalltalk.Object, ['instaUrl'], 'Hipstavote-Core');
smalltalk.addMethod(
unescape('_request_callback_'),
smalltalk.method({
selector: unescape('request%3Acallback%3A'),
fn: function (path, aBlock) {
    var self = this;
    var result = nil;
    result = smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_options_", [smalltalk.send(smalltalk.send(self['@instaUrl'], "__comma", [unescape("/")]), "__comma", [path]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]), smalltalk.send("success", "__minus_gt", [function (response) {return smalltalk.send(aBlock, "_value_", [response]);}]), smalltalk.send("error", "__minus_gt", [function (error) {return smalltalk.send(smalltalk.Transcript || Transcript, "_show_", ["error"]);}]), smalltalk.send("dataType", "__minus_gt", ["jsonp"])])]);
    return self;
}
}),
smalltalk.HVRESTClient);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function () {
    var self = this;
    self['@instaUrl'] = unescape("https%3A//api.instagram.com");
    return self;
}
}),
smalltalk.HVRESTClient);

smalltalk.addMethod(
unescape('_testPhotos'),
smalltalk.method({
selector: unescape('testPhotos'),
fn: function () {
    var self = this;
    smalltalk.send(self, "_requestPhotosOf_callback_", ["21068579", function (result) {return smalltalk.send(smalltalk.Transcript || Transcript, "_show_", [smalltalk.send(result, "_asJSONString", [])]);}]);
    return self;
}
}),
smalltalk.HVRESTClient);

smalltalk.addMethod(
unescape('_requestPhotosOf_callback_'),
smalltalk.method({
selector: unescape('requestPhotosOf%3Acallback%3A'),
fn: function (anUserId, aBlock) {
    var self = this;
    var path = nil;
    path = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("v1/users/"), "__comma", [anUserId]), "__comma", [unescape("/media/recent")]), "__comma", [unescape("%3Faccess_token%3D")]), "__comma", [smalltalk.send(smalltalk.HVLocalStorage || HVLocalStorage, "_accessToken", [])]);
    smalltalk.send(self, "_request_callback_", [path, aBlock]);
    return self;
}
}),
smalltalk.HVRESTClient);

smalltalk.addMethod(
unescape('_instaUrl'),
smalltalk.method({
selector: unescape('instaUrl'),
fn: function () {
    var self = this;
    return self['@instaUrl'];
    return self;
}
}),
smalltalk.HVRESTClient);

smalltalk.addMethod(
unescape('_instaUrl_'),
smalltalk.method({
selector: unescape('instaUrl%3A'),
fn: function (anUrl) {
    var self = this;
    self['@instaUrl'] = anUrl;
    return self;
}
}),
smalltalk.HVRESTClient);



smalltalk.addClass('HVPhoto', smalltalk.Object, ['jsonObject', 'likesCount'], 'Hipstavote-Core');
smalltalk.addMethod(
unescape('_jsonObject'),
smalltalk.method({
selector: unescape('jsonObject'),
fn: function () {
    var self = this;
    return self['@jsonObject'];
    return self;
}
}),
smalltalk.HVPhoto);

smalltalk.addMethod(
unescape('_jsonObject_'),
smalltalk.method({
selector: unescape('jsonObject%3A'),
fn: function (anObject) {
    var self = this;
    self['@jsonObject'] = anObject;
    return self;
}
}),
smalltalk.HVPhoto);



