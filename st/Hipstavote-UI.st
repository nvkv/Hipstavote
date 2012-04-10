Smalltalk current createPackage: 'Hipstavote-UI' properties: #{}!
Widget subclass: #HVPhotoWidget
	instanceVariableNames: 'photo'
	category: 'Hipstavote-UI'!

!HVPhotoWidget methodsFor: 'not yet classified'!

renderOn: html
	html div with: [
		html img src: ((photo jsonObject images at: 'low_resolution') url).
		html p with: 'Интересные лайки: ', photo likesCount.
	].
!

photo
	^photo
!

photo: aPhoto
	photo := aPhoto.
! !

