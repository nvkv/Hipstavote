smalltalk.addPackage('Hipstavote-UI', {});
smalltalk.addClass('HVPhotoWidget', smalltalk.Widget, ['photo'], 'Hipstavote-UI');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@photo'], "_jsonObject", []), "_images", []), "_at_", ["low_resolution"]), "_url", [])]);return smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["Interesing likes: "]);smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_strong", []), "_with_", [smalltalk.send(smalltalk.send(self['@photo'], "_likesCount", []), "_asString", [])]);}]);return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(smalltalk.send(unescape("%20%28Overall%3A%20"), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@photo'], "_jsonObject", []), "_likes", []), "_count", []), "_asString", [])]), "__comma", [unescape("%29")])]);}]);}]);return smalltalk.send($rec, "_class_", ["photo"]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%20with%3A%20%5B%0A%09%09html%20img%20src%3A%20%28%28photo%20jsonObject%20images%20at%3A%20%27low_resolution%27%29%20url%29.%0A%09%09html%20p%20with%3A%20%5B%0A%09%09%09html%20span%20with%3A%20%27Interesing%20likes%3A%20%27.%20%0A%09%09%09html%20span%20with%3A%20%5Bhtml%20strong%20with%3A%20photo%20likesCount%20asString%5D.%20%0A%09%09%09html%20span%20with%3A%20%27%20%28Overall%3A%20%27%2C%20photo%20jsonObject%20likes%20count%20asString%2C%20%27%29%27.%0A%09%09%5D%5D%3B%20class%3A%20%27photo%27.'),
messageSends: ["with:", "src:", "img", "url", "at:", "images", "jsonObject", "p", "span", "strong", "asString", "likesCount", unescape("%2C"), "count", "likes", "class:", "div"],
referencedClasses: []
}),
smalltalk.HVPhotoWidget);

smalltalk.addMethod(
unescape('_photo'),
smalltalk.method({
selector: unescape('photo'),
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@photo'];
    return self;
},
args: [],
source: unescape('photo%0A%09%5Ephoto'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HVPhotoWidget);

smalltalk.addMethod(
unescape('_photo_'),
smalltalk.method({
selector: unescape('photo%3A'),
category: 'not yet classified',
fn: function (aPhoto) {
    var self = this;
    self['@photo'] = aPhoto;
    return self;
},
args: ["aPhoto"],
source: unescape('photo%3A%20aPhoto%0A%09photo%20%3A%3D%20aPhoto.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.HVPhotoWidget);



