Smalltalk current createPackage: 'Hipstavote-UI' properties: #{}!
Widget subclass: #HVPhotoWidget
	instanceVariableNames: 'photo'
	category: 'Hipstavote-UI'!

!HVPhotoWidget methodsFor: 'not yet classified'!

renderOn: html
	html div with: [
		html img src: ((photo jsonObject images at: 'low_resolution') url).
		html p with: [
			html span with: 'Interesing likes: '. 
			html span with: [html strong with: photo likesCount asString]. 
			html span with: ' (Overall: ', photo jsonObject likes count asString, ')'.
		]]; class: 'photo'.
!

photo
	^photo
!

photo: aPhoto
	photo := aPhoto.
! !

