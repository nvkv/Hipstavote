smalltalk.addPackage('Hipstavote-Core', {});
smalltalk.addClass('HVLocalStorage', smalltalk.Object, [], 'Hipstavote-Core');

smalltalk.addMethod(
unescape('_at_'),
smalltalk.method({
selector: unescape('at%3A'),
category: 'Setters and Getters',
fn: function (aKey) {
    var self = this;
    return localStorage.getItem(aKey);
    return self;
},
args: ["aKey"],
source: unescape('at%3A%20aKey%0A%09%5E%3ClocalStorage.getItem%28aKey%29%3E.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HVLocalStorage.klass);

smalltalk.addMethod(
unescape('_at_put_'),
smalltalk.method({
selector: unescape('at%3Aput%3A'),
category: 'Setters and Getters',
fn: function (aKey, anObject) {
    var self = this;
    localStorage.setItem(aKey, anObject);
    return self;
},
args: ["aKey", "anObject"],
source: unescape('at%3A%20aKey%20put%3A%20anObject%0A%09%3ClocalStorage.setItem%28aKey%2C%20anObject%29%3E.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HVLocalStorage.klass);

smalltalk.addMethod(
unescape('_accessToken'),
smalltalk.method({
selector: unescape('accessToken'),
category: 'Accessing',
fn: function () {
    var self = this;
    return smalltalk.send(smalltalk.HVLocalStorage || HVLocalStorage, "_at_", ["access_token"]);
    return self;
},
args: [],
source: unescape('accessToken%0A%09%5EHVLocalStorage%20at%3A%20%27access_token%27.'),
messageSends: ["at:"],
referencedClasses: ["HVLocalStorage"]
}),
smalltalk.HVLocalStorage.klass);

smalltalk.addMethod(
unescape('_accessToken_'),
smalltalk.method({
selector: unescape('accessToken%3A'),
category: 'Accessing',
fn: function (aToken) {
    var self = this;
    smalltalk.send(smalltalk.HVLocalStorage || HVLocalStorage, "_at_put_", ["access_token", aToken]);
    return self;
},
args: ["aToken"],
source: unescape('accessToken%3A%20aToken%0A%09HVLocalStorage%20at%3A%20%27access_token%27%20put%3A%20aToken.'),
messageSends: ["at:put:"],
referencedClasses: ["HVLocalStorage"]
}),
smalltalk.HVLocalStorage.klass);


smalltalk.addClass('HVRESTClient', smalltalk.Object, ['instaUrl'], 'Hipstavote-Core');
smalltalk.addMethod(
unescape('_request_callback_'),
smalltalk.method({
selector: unescape('request%3Acallback%3A'),
category: 'Common Requests',
fn: function (path, aBlock) {
    var self = this;
    var result = nil;
    var options = nil;
    var getParams = nil;
    options = smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]), smalltalk.send("data", "__minus_gt", [smalltalk.send(unescape("access_token%3D"), "__comma", [smalltalk.send(smalltalk.HVLocalStorage || HVLocalStorage, "_accessToken", [])])]), smalltalk.send("success", "__minus_gt", [function (response) {return smalltalk.send(aBlock, "_value_", [response]);}]), smalltalk.send("error", "__minus_gt", [function (error) {return smalltalk.send(smalltalk.Transcript || Transcript, "_show_", ["error"]);}]), smalltalk.send("dataType", "__minus_gt", ["jsonp"])]);
    result = smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_options_", [smalltalk.send(smalltalk.send(self['@instaUrl'], "__comma", [unescape("/")]), "__comma", [path]), options]);
    return self;
},
args: ["path", "aBlock"],
source: unescape('request%3A%20path%20callback%3A%20aBlock%0A%09%7Cresult%20options%20getParams%7C%0A%09options%20%3A%3D%20%23%7B%27type%27%20-%3E%20%27GET%27.%0A%09%09%09%20%20%20%20%27data%27%20-%3E%20%28%27access_token%3D%27%2C%20%28HVLocalStorage%20accessToken%29%29.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%27success%27%20-%3E%20%5B%3Aresponse%20%7C%20aBlock%20value%3A%20response%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%27error%27%20-%3E%20%5B%3Aerror%20%7C%20Transcript%20show%3A%20%27error%27%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%27dataType%27%20-%3E%20%27jsonp%27%20%7D.%0A%09result%20%3A%3D%20jQuery%20ajax%3A%20%28instaUrl%2C%20%27/%27%20%2C%20path%29%20options%3A%20options.'),
messageSends: [unescape("-%3E"), unescape("%2C"), "accessToken", "value:", "show:", "ajax:options:"],
referencedClasses: ["HVLocalStorage", "Transcript"]
}),
smalltalk.HVRESTClient);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'Initialization',
fn: function () {
    var self = this;
    self['@instaUrl'] = unescape("https%3A//api.instagram.com");
    return self;
},
args: [],
source: unescape('initialize%0A%09instaUrl%20%3A%3D%20%27https%3A//api.instagram.com%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HVRESTClient);

smalltalk.addMethod(
unescape('_instaUrl'),
smalltalk.method({
selector: unescape('instaUrl'),
category: 'Setters/Getters',
fn: function () {
    var self = this;
    return self['@instaUrl'];
    return self;
},
args: [],
source: unescape('instaUrl%0A%09%5EinstaUrl'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HVRESTClient);

smalltalk.addMethod(
unescape('_instaUrl_'),
smalltalk.method({
selector: unescape('instaUrl%3A'),
category: 'Setters/Getters',
fn: function (anUrl) {
    var self = this;
    self['@instaUrl'] = anUrl;
    return self;
},
args: ["anUrl"],
source: unescape('instaUrl%3A%20anUrl%0A%09instaUrl%20%3A%3D%20anUrl.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HVRESTClient);



smalltalk.addClass('HVInstaObject', smalltalk.Object, ['jsonObject'], 'Hipstavote-Core');
smalltalk.addMethod(
unescape('_jsonObject'),
smalltalk.method({
selector: unescape('jsonObject'),
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@jsonObject'];
    return self;
},
args: [],
source: unescape('jsonObject%0A%09%5EjsonObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HVInstaObject);

smalltalk.addMethod(
unescape('_jsonObject_'),
smalltalk.method({
selector: unescape('jsonObject%3A'),
category: 'not yet classified',
fn: function (anObject) {
    var self = this;
    self['@jsonObject'] = anObject;
    return self;
},
args: ["anObject"],
source: unescape('jsonObject%3A%20anObject%0A%09jsonObject%20%3A%3D%20anObject.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HVInstaObject);



smalltalk.addClass('HVApplication', smalltalk.Object, ['profile', 'photos', 'friends', 'friendsUsernames', 'userId', 'fromData', 'dueDate'], 'Hipstavote-Core');
smalltalk.HVApplication.comment=unescape('startApplication%0A%09HVApplication%20new%20userId%3A%20%27%27.')
smalltalk.addMethod(
unescape('_startApplication'),
smalltalk.method({
selector: unescape('startApplication'),
category: 'logic',
fn: function () {
    var self = this;
    smalltalk.send(self, "_requestProfile", []);
    return self;
},
args: [],
source: unescape('startApplication%0A%09self%20requestProfile.'),
messageSends: ["requestProfile"],
referencedClasses: []
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_userId'),
smalltalk.method({
selector: unescape('userId'),
category: 'accessors',
fn: function () {
    var self = this;
    return self['@userId'];
    return self;
},
args: [],
source: unescape('userId%0A%09%5EuserId.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_userId_'),
smalltalk.method({
selector: unescape('userId%3A'),
category: 'accessors',
fn: function (anId) {
    var self = this;
    self['@userId'] = anId;
    return self;
},
args: ["anId"],
source: unescape('userId%3A%20anId%0A%09userId%20%3A%3D%20anId.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_profileReceived_'),
smalltalk.method({
selector: unescape('profileReceived%3A'),
category: 'logic',
fn: function (aProfile) {
    var self = this;
    self['@profile'] = aProfile;
    smalltalk.send(self, "_requestFollowing", []);
    return self;
},
args: ["aProfile"],
source: unescape('profileReceived%3A%20aProfile%0A%09profile%20%3A%3D%20aProfile.%0A%09self%20requestFollowing.'),
messageSends: ["requestFollowing"],
referencedClasses: []
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_requestProfile'),
smalltalk.method({
selector: unescape('requestProfile'),
category: 'logic',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.HVRESTClient || HVRESTClient, "_new", []), "_request_callback_", [smalltalk.send(unescape("v1/users/"), "__comma", [smalltalk.send(self, "_userId", [])]), function (result) {return smalltalk.send(self, "_profileReceived_", [result]);}]);
    return self;
},
args: [],
source: unescape('requestProfile%0A%09HVRESTClient%20new%20%0A%09%09request%3A%20%28%27v1/users/%27%2C%20self%20userId%29%20%20%0A%09%09callback%3A%20%5B%3Aresult%20%7C%20self%20profileReceived%3A%20result%5D.'),
messageSends: ["request:callback:", "new", unescape("%2C"), "userId", "profileReceived:"],
referencedClasses: ["HVRESTClient"]
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_requestPhotos'),
smalltalk.method({
selector: unescape('requestPhotos'),
category: 'logic',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.HVRESTClient || HVRESTClient, "_new", []), "_request_callback_", [smalltalk.send(smalltalk.send(unescape("v1/users/"), "__comma", [smalltalk.send(self, "_userId", [])]), "__comma", [unescape("/media/recent")]), function (result) {return smalltalk.send(self, "_photosReceived_", [result]);}]);
    return self;
},
args: [],
source: unescape('requestPhotos%0A%09HVRESTClient%20new%20%0A%09%09request%3A%20%28%27v1/users/%27%2C%20self%20userId%2C%20%27/media/recent%27%29%20%20%0A%09%09callback%3A%20%5B%3Aresult%20%7C%20self%20photosReceived%3A%20result%5D.'),
messageSends: ["request:callback:", "new", unescape("%2C"), "userId", "photosReceived:"],
referencedClasses: ["HVRESTClient"]
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_photosReceived_'),
smalltalk.method({
selector: unescape('photosReceived%3A'),
category: 'logic',
fn: function (aPhotos) {
    var self = this;
    self['@photos'] = smalltalk.send(smalltalk.Array || Array, "_new", []);
    smalltalk.send(smalltalk.send(aPhotos, "_data", []), "_do_", [function (each) {return smalltalk.send(self['@photos'], "_add_", [smalltalk.send(smalltalk.send(smalltalk.HVPhoto || HVPhoto, "_new", []), "_jsonObject_", [each])]);}]);
    smalltalk.send(self, "_calculateStatsForPhotos", []);
    return self;
},
args: ["aPhotos"],
source: unescape('photosReceived%3A%20aPhotos%0A%09photos%20%3A%3D%20Array%20new.%0A%09%28aPhotos%20data%29%20do%3A%20%5B%3Aeach%20%7C%20photos%20add%3A%20%28HVPhoto%20new%20jsonObject%3A%20each%29%5D.%20%0A%09self%20calculateStatsForPhotos.%0A'),
messageSends: ["new", "do:", "data", "add:", "jsonObject:", "calculateStatsForPhotos"],
referencedClasses: ["Array", "HVPhoto"]
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_requestFollowing'),
smalltalk.method({
selector: unescape('requestFollowing'),
category: 'logic',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.HVRESTClient || HVRESTClient, "_new", []), "_request_callback_", [smalltalk.send(smalltalk.send(unescape("v1/users/"), "__comma", [smalltalk.send(self, "_userId", [])]), "__comma", [unescape("/follows")]), function (result) {return smalltalk.send(self, "_followingReceived_", [result]);}]);
    return self;
},
args: [],
source: unescape('requestFollowing%0A%09HVRESTClient%20new%20%0A%09%09request%3A%20%28%27v1/users/%27%2C%20self%20userId%2C%20%27/follows%27%29%20%20%0A%09%09callback%3A%20%5B%3Aresult%20%7C%20self%20followingReceived%3A%20result%5D.'),
messageSends: ["request:callback:", "new", unescape("%2C"), "userId", "followingReceived:"],
referencedClasses: ["HVRESTClient"]
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_followingReceived_'),
smalltalk.method({
selector: unescape('followingReceived%3A'),
category: 'logic',
fn: function (following) {
    var self = this;
    var cursor = nil;
    ($receiver = self['@friends']) == nil || $receiver == undefined ? function () {return self['@friends'] = smalltalk.send(smalltalk.Array || Array, "_new", []);}() : $receiver;
    smalltalk.send(smalltalk.send(following, "_data", []), "_do_", [function (each) {return smalltalk.send(self['@friends'], "_add_", [each]);}]);
    cursor = smalltalk.send(smalltalk.send(following, "_pagination", []), "_at_", ["next_cursor"]);
    (function ($rec) {($receiver = $rec) != nil && $receiver != undefined ? function () {return smalltalk.send(self, "_requestFollowingFromCursor_", [cursor]);}() : nil;return ($receiver = $rec) == nil || $receiver == undefined ? function () {return smalltalk.send(self, "_requestPhotos", []);}() : $receiver;}(cursor));
    return self;
},
args: ["following"],
source: unescape('followingReceived%3A%20following%09%0A%09%7Ccursor%7C%0A%09friends%20ifNil%3A%20%5Bfriends%20%3A%3D%20Array%20new%5D.%0A%09following%20data%20do%3A%20%5B%3Aeach%20%7C%20friends%20add%3A%20each%5D.%0A%09cursor%20%3A%3D%20following%20pagination%20at%3A%20%27next_cursor%27.%0A%09cursor%20ifNotNil%3A%20%5Bself%20requestFollowingFromCursor%3A%20cursor%5D%3B%20%0A%09%09%20%20ifNil%3A%20%5Bself%20requestPhotos%5D.'),
messageSends: ["ifNil:", "new", "do:", "data", "add:", "at:", "pagination", "ifNotNil:", "requestFollowingFromCursor:", "requestPhotos"],
referencedClasses: ["Array"]
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_calculateStatsForPhotos'),
smalltalk.method({
selector: unescape('calculateStatsForPhotos'),
category: 'logic',
fn: function () {
    var self = this;
    smalltalk.send(self['@photos'], "_do_", [function (photo) {return smalltalk.send(self, "_requestLikesFor_", [photo]);}]);
    return self;
},
args: [],
source: unescape('calculateStatsForPhotos%0A%09photos%20do%3A%20%5B%3Aphoto%20%7C%20self%20requestLikesFor%3A%20photo%5D.'),
messageSends: ["do:", "requestLikesFor:"],
referencedClasses: []
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_friendsUsernames'),
smalltalk.method({
selector: unescape('friendsUsernames'),
category: 'accessors',
fn: function () {
    var self = this;
    return ($receiver = self['@friendsUsernames']) == nil ||
        $receiver == undefined ? function () {return self['@friendsUsernames'] = smalltalk.send(self['@friends'], "_collect_", [function (user) {return smalltalk.send(user, "_username", []);}]);}() : $receiver;
    return self;
},
args: [],
source: unescape('friendsUsernames%0A%09%5EfriendsUsernames%20ifNil%3A%20%5BfriendsUsernames%20%3A%3D%20friends%20collect%3A%20%5B%3Auser%20%7C%20user%20username%5D%5D.'),
messageSends: ["ifNil:", "collect:", "username"],
referencedClasses: []
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_requestFollowingFromCursor_'),
smalltalk.method({
selector: unescape('requestFollowingFromCursor%3A'),
category: 'logic',
fn: function (cursor) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.HVRESTClient || HVRESTClient, "_new", []), "_request_callback_", [smalltalk.send(smalltalk.send(smalltalk.send(unescape("v1/users/"), "__comma", [smalltalk.send(self, "_userId", [])]), "__comma", [unescape("/follows%3Fcursor%3D")]), "__comma", [cursor]), function (result) {return smalltalk.send(self, "_followingReceived_", [result]);}]);
    return self;
},
args: ["cursor"],
source: unescape('requestFollowingFromCursor%3A%20cursor%0A%09HVRESTClient%20new%20%0A%09%09request%3A%20%28%27v1/users/%27%2C%20self%20userId%2C%20%27/follows%3Fcursor%3D%27%2C%20cursor%29%0A%09%09callback%3A%20%5B%3Aresult%20%7C%20self%20followingReceived%3A%20result%5D.'),
messageSends: ["request:callback:", "new", unescape("%2C"), "userId", "followingReceived:"],
referencedClasses: ["HVRESTClient"]
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_requestLikesFor_'),
smalltalk.method({
selector: unescape('requestLikesFor%3A'),
category: 'logic',
fn: function (photo) {
    var self = this;
    smalltalk.send(smalltalk.send(smalltalk.HVRESTClient || HVRESTClient, "_new", []), "_request_callback_", [smalltalk.send(smalltalk.send(unescape("v1/media/"), "__comma", [smalltalk.send(smalltalk.send(photo, "_jsonObject", []), "_id", [])]), "__comma", [unescape("/likes")]), function (result) {var likers = nil;likers = smalltalk.send(smalltalk.send(result, "_data", []), "_collect_", [function (like) {return smalltalk.send(like, "_username", []);}]);smalltalk.send(photo, "_likesCount_", [smalltalk.send(smalltalk.send(likers, "_select_", [function (liker) {return smalltalk.send(smalltalk.send(self, "_friendsUsernames", []), "_includes_", [liker]);}]), "_size", [])]);return smalltalk.send(self, "_drawPhoto_", [photo]);}]);
    return self;
},
args: ["photo"],
source: unescape('requestLikesFor%3A%20photo%0A%09%22Transcript%20show%3A%20photo%20jsonObject%20id%2C%20String%20cr.%22%0A%09HVRESTClient%20new%20request%3A%20%27v1/media/%27%2C%20%28photo%20jsonObject%20id%29%2C%20%27/likes%27%0A%09%09%09%09%20%20%20%20%20callback%3A%20%5B%3Aresult%20%7C%0A%09%09%09%09%09%7Clikers%7C%0A%09%09%09%09%09likers%20%3A%3D%20result%20data%20collect%3A%20%5B%3Alike%20%7C%20like%20username%5D.%0A%09%09%09%09%09photo%20likesCount%3A%20%28%28likers%20select%3A%20%5B%3Aliker%20%7C%20self%20friendsUsernames%20includes%3A%20liker%5D%29%20size%29.%0A%09%09%09%09%09self%20drawPhoto%3A%20photo%5D.'),
messageSends: ["request:callback:", "new", unescape("%2C"), "id", "jsonObject", "collect:", "data", "username", "likesCount:", "size", "select:", "includes:", "friendsUsernames", "drawPhoto:"],
referencedClasses: ["HVRESTClient"]
}),
smalltalk.HVApplication);

smalltalk.addMethod(
unescape('_drawPhoto_'),
smalltalk.method({
selector: unescape('drawPhoto%3A'),
category: 'view',
fn: function (aPhoto) {
    var self = this;
    var widget = nil;
    widget = smalltalk.send(smalltalk.send(smalltalk.HVPhotoWidget || HVPhotoWidget, "_new", []), "_photo_", [aPhoto]);
    smalltalk.send(widget, "_appendToJQuery_", [smalltalk.send(unescape("%23photos"), "_asJQuery", [])]);
    return self;
},
args: ["aPhoto"],
source: unescape('drawPhoto%3A%20aPhoto%0A%09%7Cwidget%7C%0A%09widget%20%3A%3D%20HVPhotoWidget%20new%20photo%3A%20aPhoto.%0A%09widget%20appendToJQuery%3A%20%28%27%23photos%27%20asJQuery%29.'),
messageSends: ["photo:", "new", "appendToJQuery:", "asJQuery"],
referencedClasses: ["HVPhotoWidget"]
}),
smalltalk.HVApplication);


smalltalk.addMethod(
unescape('_startApplication'),
smalltalk.method({
selector: unescape('startApplication'),
category: 'not yet classified',
fn: function () {
    var self = this;
    var app = nil;
    app = smalltalk.send(smalltalk.send(smalltalk.HVApplication || HVApplication, "_new", []), "_userId_", ["21068579"]);
    smalltalk.send(app, "_startApplication", []);
    return app;
    return self;
},
args: [],
source: unescape('startApplication%0A%09%7Capp%7C%0A%09app%20%3A%3D%20HVApplication%20new%20userId%3A%20%2721068579%27.%0A%09app%20startApplication.%0A%09%5Eapp.'),
messageSends: ["userId:", "new", "startApplication"],
referencedClasses: ["HVApplication"]
}),
smalltalk.HVApplication.klass);


smalltalk.addClass('HVPhoto', smalltalk.HVInstaObject, ['likesCount'], 'Hipstavote-Core');
smalltalk.addMethod(
unescape('_likesCount'),
smalltalk.method({
selector: unescape('likesCount'),
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@likesCount'];
    return self;
},
args: [],
source: unescape('likesCount%0A%09%5ElikesCount'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HVPhoto);

smalltalk.addMethod(
unescape('_likesCount_'),
smalltalk.method({
selector: unescape('likesCount%3A'),
category: 'not yet classified',
fn: function (count) {
    var self = this;
    self['@likesCount'] = count;
    return self;
},
args: ["count"],
source: unescape('likesCount%3A%20count%0A%09likesCount%20%3A%3D%20count.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HVPhoto);



