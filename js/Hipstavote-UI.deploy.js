smalltalk.addPackage('Hipstavote-UI', {});
smalltalk.addClass('HVPhotoWidget', smalltalk.Widget, ['photo'], 'Hipstavote-UI');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@photo'], "_jsonObject", []), "_images", []), "_at_", ["low_resolution"]), "_url", [])]);return smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [smalltalk.send(unescape("%u0418%u043D%u0442%u0435%u0440%u0435%u0441%u043D%u044B%u0435%20%u043B%u0430%u0439%u043A%u0438%3A%20"), "__comma", [smalltalk.send(self['@photo'], "_likesCount", [])])]);}]);return smalltalk.send($rec, "_class_", ["photo"]);}(smalltalk.send(html, "_div", [])));
    return self;
}
}),
smalltalk.HVPhotoWidget);

smalltalk.addMethod(
unescape('_photo'),
smalltalk.method({
selector: unescape('photo'),
fn: function () {
    var self = this;
    return self['@photo'];
    return self;
}
}),
smalltalk.HVPhotoWidget);

smalltalk.addMethod(
unescape('_photo_'),
smalltalk.method({
selector: unescape('photo%3A'),
fn: function (aPhoto) {
    var self = this;
    self['@photo'] = aPhoto;
    return self;
}
}),
smalltalk.HVPhotoWidget);



