smalltalk.addPackage('Hipstavote-UI', {});
smalltalk.addClass('HVPhotoWidget', smalltalk.Widget, ['photo'], 'Hipstavote-UI');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@photo'], "_jsonObject", []), "_images", []), "_at_", ["low_resolution"]), "_url", [])]);return smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [smalltalk.send(unescape("%u0418%u043D%u0442%u0435%u0440%u0435%u0441%u043D%u044B%u0435%20%u043B%u0430%u0439%u043A%u0438%3A%20"), "__comma", [smalltalk.send(self['@photo'], "_likesCount", [])])]);}]);return smalltalk.send($rec, "_class_", ["photo"]);}(smalltalk.send(html, "_div", [])));
    return self;
},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20div%20with%3A%20%5B%0A%09%09html%20img%20src%3A%20%28%28photo%20jsonObject%20images%20at%3A%20%27low_resolution%27%29%20url%29.%0A%09%09html%20p%20with%3A%20%27%u0418%u043D%u0442%u0435%u0440%u0435%u0441%u043D%u044B%u0435%20%u043B%u0430%u0439%u043A%u0438%3A%20%27%2C%20photo%20likesCount.%5D%3B%20class%3A%20%27photo%27.'),
messageSends: ["with:", "src:", "img", "url", "at:", "images", "jsonObject", "p", unescape("%2C"), "likesCount", "class:", "div"],
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



