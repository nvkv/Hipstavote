smalltalk.addPackage('Hipstavote-UI', {});
smalltalk.addClass('HVPhotoWidget', smalltalk.Widget, ['photo'], 'Hipstavote-UI');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html) {
    var self = this;
    (function ($rec) {smalltalk.send($rec, "_with_", [function () {smalltalk.send(smalltalk.send(html, "_img", []), "_src_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@photo'], "_jsonObject", []), "_images", []), "_at_", ["low_resolution"]), "_url", [])]);return smalltalk.send(smalltalk.send(html, "_p", []), "_with_", [function () {smalltalk.send(smalltalk.send(html, "_span", []), "_with_", ["Interesing likes: "]);smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [function () {return smalltalk.send(smalltalk.send(html, "_strong", []), "_with_", [smalltalk.send(smalltalk.send(self['@photo'], "_likesCount", []), "_asString", [])]);}]);return smalltalk.send(smalltalk.send(html, "_span", []), "_with_", [smalltalk.send(smalltalk.send(unescape("%20%28Overall%3A%20"), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self['@photo'], "_jsonObject", []), "_likes", []), "_count", []), "_asString", [])]), "__comma", [unescape("%29")])]);}]);}]);return smalltalk.send($rec, "_class_", ["photo"]);}(smalltalk.send(html, "_div", [])));
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



