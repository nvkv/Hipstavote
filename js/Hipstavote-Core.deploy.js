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
    var options = nil;
    var getParams = nil;
    options = smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]), smalltalk.send("data", "__minus_gt", [smalltalk.send(unescape("access_token%3D"), "__comma", [smalltalk.send(smalltalk.HVLocalStorage || HVLocalStorage, "_accessToken", [])])]), smalltalk.send("success", "__minus_gt", [function (response) {return smalltalk.send(aBlock, "_value_", [response]);}]), smalltalk.send("error", "__minus_gt", [function (error) {return smalltalk.send(smalltalk.Transcript || Transcript, "_show_", ["error"]);}]), smalltalk.send("dataType", "__minus_gt", ["jsonp"])]);
    result = smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_options_", [smalltalk.send(smalltalk.send(self['@instaUrl'], "__comma", [unescape("/")]), "__comma", [path]), options]);
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



smalltalk.addClass('HVInstaObject', smalltalk.Object, ['jsonObject'], 'Hipstavote-Core');
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
smalltalk.HVInstaObject);

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
smalltalk.HVInstaObject);



smalltalk.addClass('HVApplication', smalltalk.Object, ['profile', 'photos', 'friends', 'friendsUsernames', 'userId', 'fromData', 'dueDate'], 'Hipstavote-Core');
smalltalk.addMethod(
unescape('_startApplication'),
smalltalk.method({
selector: unescape('startApplication'),
fn: function () {
    var self = this;
    smalltalk.send(self, "_requestProfile", []);
    return self;
}
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_userId'),
smalltalk.method({
selector: unescape('userId'),
fn: function () {
    var self = this;
    return self['@userId'];
    return self;
}
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_userId_'),
smalltalk.method({
selector: unescape('userId%3A'),
fn: function (anId) {
    var self = this;
    self['@userId'] = anId;
    return self;
}
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_profileReceived_'),
smalltalk.method({
selector: unescape('profileReceived%3A'),
fn: function (aProfile) {
    var self = this;
    self['@profile'] = aProfile;
    smalltalk.send(self, "_requestFollowing", []);
    return self;
}
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_requestProfile'),
smalltalk.method({
selector: unescape('requestProfile'),
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.HVRESTClient || HVRESTClient, "_new", []), "_request_callback_", [smalltalk.send(unescape("v1/users/"), "__comma", [smalltalk.send(self, "_userId", [])]), function (result) {return smalltalk.send(self, "_profileReceived_", [result]);}]);
    return self;
}
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_requestPhotos'),
smalltalk.method({
selector: unescape('requestPhotos'),
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.HVRESTClient || HVRESTClient, "_new", []), "_request_callback_", [smalltalk.send(smalltalk.send(unescape("v1/users/"), "__comma", [smalltalk.send(self, "_userId", [])]), "__comma", [unescape("/media/recent")]), function (result) {return smalltalk.send(self, "_photosReceived_", [result]);}]);
    return self;
}
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_photosReceived_'),
smalltalk.method({
selector: unescape('photosReceived%3A'),
fn: function (aPhotos) {
    var self = this;
    self['@photos'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
    smalltalk.send(smalltalk.send(aPhotos, "_data", []), "_do_", [function (each) {return smalltalk.send(self['@photos'], "_add_", [smalltalk.send(smalltalk.send(smalltalk.HVPhoto || HVPhoto, "_new", []), "_jsonObject_", [each])]);}]);
    smalltalk.send(self, "_calculateStatsForPhotos", []);
    return self;
}
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_requestFollowing'),
smalltalk.method({
selector: unescape('requestFollowing'),
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.HVRESTClient || HVRESTClient, "_new", []), "_request_callback_", [smalltalk.send(smalltalk.send(unescape("v1/users/"), "__comma", [smalltalk.send(self, "_userId", [])]), "__comma", [unescape("/follows")]), function (result) {return smalltalk.send(self, "_followingReceived_", [result]);}]);
    return self;
}
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_followingReceived_'),
smalltalk.method({
selector: unescape('followingReceived%3A'),
fn: function (following) {
    var self = this;
    var cursor = nil;
    ($receiver = self['@friends']) == nil || $receiver == undefined ? function () {return self['@friends'] = smalltalk.send(smalltalk.Array || Array, "_new", []);}() : $receiver;
    smalltalk.send(smalltalk.send(following, "_data", []), "_do_", [function (each) {return smalltalk.send(self['@friends'], "_add_", [each]);}]);
    cursor = smalltalk.send(smalltalk.send(following, "_pagination", []), "_at_", ["next_cursor"]);
    (function ($rec) {($receiver = $rec) != nil && $receiver != undefined ? function () {return smalltalk.send(self, "_requestFollowingFromCursor_", [cursor]);}() : nil;return ($receiver = $rec) == nil || $receiver == undefined ? function () {return smalltalk.send(self, "_requestPhotos", []);}() : $receiver;}(cursor));
    return self;
}
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_calculateStatsForPhotos'),
smalltalk.method({
selector: unescape('calculateStatsForPhotos'),
fn: function () {
    var self = this;
    smalltalk.send(self['@photos'], "_do_", [function (photo) {return smalltalk.send(self, "_requestLikesFor_", [photo]);}]);
    return self;
}
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_friendsUsernames'),
smalltalk.method({
selector: unescape('friendsUsernames'),
fn: function () {
    var self = this;
    return ($receiver = self['@friendsUsernames']) == nil ||
        $receiver == undefined ? function () {return self['@friendsUsernames'] = smalltalk.send(self['@friends'], "_collect_", [function (user) {return smalltalk.send(user, "_username", []);}]);}() : $receiver;
    return self;
}
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_requestFollowingFromCursor_'),
smalltalk.method({
selector: unescape('requestFollowingFromCursor%3A'),
fn: function (cursor) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.HVRESTClient || HVRESTClient, "_new", []), "_request_callback_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("v1/users/"), "__comma", [smalltalk.send(self, "_userId", [])]), "__comma", [unescape("/follows%3Fcursor%3D")]), "__comma", [cursor]), function (result) {return smalltalk.send(self, "_followingReceived_", [result]);}]);
    return self;
}
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_requestLikesFor_'),
smalltalk.method({
selector: unescape('requestLikesFor%3A'),
fn: function (photo) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.HVRESTClient || HVRESTClient, "_new", []), "_request_callback_", [smalltalk.send(smalltalk.send(unescape("v1/media/"), "__comma", [smalltalk.send(smalltalk.send(photo, "_jsonObject", []), "_id", [])]), "__comma", [unescape("/likes")]), function (result) {var likers = nil;likers = smalltalk.send(smalltalk.send(result, "_data", []), "_collect_", [function (like) {return smalltalk.send(like, "_username", []);}]);smalltalk.send(photo, "_likesCount_", [smalltalk.send(smalltalk.send(likers, "_select_", [function (liker) {return smalltalk.send(smalltalk.send(self, "_friendsUsernames", []), "_includes_", [liker]);}]), "_size", [])]);return smalltalk.send(self, "_drawPhoto_", [photo]);}]);
    return self;
}
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_drawPhoto_'),
smalltalk.method({
selector: unescape('drawPhoto%3A'),
fn: function (aPhoto) {
    var self = this;
    var widget = nil;
    widget = smalltalk.send(smalltalk.send(smalltalk.HVPhotoWidget || HVPhotoWidget, "_new", []), "_photo_", [aPhoto]);
    smalltalk.send(widget, "_appendToJQuery_", [smalltalk.send(unescape("%23photos"), "_asJQuery", [])]);
    return self;
}
}),
smalltalk.HVApplication);


smalltalk.addMethod(
unescape('_startApplication'),
smalltalk.method({
selector: unescape('startApplication'),
fn: function () {
    var self = this;
    var app = nil;
    app = smalltalk.send(smalltalk.send(smalltalk.HVApplication || HVApplication, "_new", []), "_userId_", ["21068579"]);
    smalltalk.send(app, "_startApplication", []);
    return app;
    return self;
}
}),
smalltalk.HVApplication.klass);


smalltalk.addClass('HVPhoto', smalltalk.HVInstaObject, ['likesCount'], 'Hipstavote-Core');
smalltalk.addMethod(
unescape('_likesCount'),
smalltalk.method({
selector: unescape('likesCount'),
fn: function () {
    var self = this;
    return self['@likesCount'];
    return self;
}
}),
smalltalk.HVPhoto);

smalltalk.addMethod(
unescape('_likesCount_'),
smalltalk.method({
selector: unescape('likesCount%3A'),
fn: function (count) {
    var self = this;
    self['@likesCount'] = count;
    return self;
}
}),
smalltalk.HVPhoto);



