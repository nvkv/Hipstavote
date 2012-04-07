smalltalk.addPackage('Hipstavote', {});
smalltalk.addClass('HVLocalStorage', smalltalk.Object, [], 'Hipstavote');

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


smalltalk.addClass('HVRESTClient', smalltalk.Object, ['instaUrl'], 'Hipstavote');
smalltalk.addMethod(
unescape('_request_callback_'),
smalltalk.method({
selector: unescape('request%3Acallback%3A'),
category: 'Common Requests',
fn: function (path, aBlock) {
    var self = this;
    var result = nil;
    result = smalltalk.send(typeof jQuery == "undefined" ? nil : jQuery, "_ajax_options_", [smalltalk.send(smalltalk.send(self['@instaUrl'], "__comma", [unescape("/")]), "__comma", [path]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]), smalltalk.send("success", "__minus_gt", [function (response) {return smalltalk.send(aBlock, "_value_", [response]);}]), smalltalk.send("error", "__minus_gt", [function (error) {return smalltalk.send(smalltalk.Transcript || Transcript, "_show_", ["error"]);}]), smalltalk.send("dataType", "__minus_gt", ["jsonp"])])]);
    return self;
},
args: ["path", "aBlock"],
source: unescape('request%3A%20path%20callback%3A%20aBlock%0A%09%7Cresult%7C%0A%09result%20%3A%3D%20jQuery%20ajax%3A%20%28instaUrl%2C%20%27/%27%20%2C%20path%29%0A%09%09%09%09%20%20options%3A%20%23%7B%0A%09%09%09%09%09%27type%27%20-%3E%20%27GET%27.%0A%09%09%09%09%09%27success%27%20-%3E%20%5B%3Aresponse%20%7C%20aBlock%20value%3A%20response%5D.%0A%09%09%09%09%09%27error%27%20-%3E%20%5B%3Aerror%20%7C%20Transcript%20show%3A%20%27error%27%5D.%0A%09%09%09%09%09%27dataType%27%20-%3E%20%27jsonp%27%7D.'),
messageSends: ["ajax:options:", unescape("%2C"), unescape("-%3E"), "value:", "show:"],
referencedClasses: ["Transcript"]
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
unescape('_testPhotos'),
smalltalk.method({
selector: unescape('testPhotos'),
category: 'Requests',
fn: function () {
    var self = this;
    smalltalk.send(self, "_requestPhotosOf_callback_", ["21068579", function (result) {return smalltalk.send(smalltalk.Transcript || Transcript, "_show_", [smalltalk.send(result, "_asJSONString", [])]);}]);
    return self;
},
args: [],
source: unescape('testPhotos%0A%09self%20requestPhotosOf%3A%20%2721068579%27%20callback%3A%20%5B%3Aresult%20%7C%20Transcript%20show%3A%20%28result%20asJSONString%29%5D.'),
messageSends: ["requestPhotosOf:callback:", "show:", "asJSONString"],
referencedClasses: ["Transcript"]
}),
smalltalk.HVRESTClient);

smalltalk.addMethod(
unescape('_requestPhotosOf_callback_'),
smalltalk.method({
selector: unescape('requestPhotosOf%3Acallback%3A'),
category: 'Common Requests',
fn: function (anUserId, aBlock) {
    var self = this;
    var path = nil;
    path = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("v1/users/"), "__comma", [anUserId]), "__comma", [unescape("/media/recent")]), "__comma", [unescape("%3Faccess_token%3D")]), "__comma", [smalltalk.send(smalltalk.HVLocalStorage || HVLocalStorage, "_accessToken", [])]);
    smalltalk.send(self, "_request_callback_", [path, aBlock]);
    return self;
},
args: ["anUserId", "aBlock"],
source: unescape('requestPhotosOf%3A%20anUserId%20callback%3A%20aBlock%0A%09%7Cpath%7C%0A%09path%20%3A%3D%20%27v1/users/%27%2C%20anUserId%2C%20%27/media/recent%27%2C%20%27%3Faccess_token%3D%27%2C%20%28HVLocalStorage%20accessToken%29.%0A%09self%20request%3A%20path%20callback%3A%20aBlock'),
messageSends: [unescape("%2C"), "accessToken", "request:callback:"],
referencedClasses: ["HVLocalStorage"]
}),
smalltalk.HVRESTClient);



