Smalltalk current createPackage: 'Hipstavote-Core' properties: #{}!
Object subclass: #HVLocalStorage
	instanceVariableNames: ''
	category: 'Hipstavote-Core'!

!HVLocalStorage class methodsFor: 'Accessing'!

accessToken
	^HVLocalStorage at: 'access_token'.
!

accessToken: aToken
	HVLocalStorage at: 'access_token' put: aToken.
! !

!HVLocalStorage class methodsFor: 'Setters and Getters'!

at: aKey
	^<localStorage.getItem(aKey)>.
!

at: aKey put: anObject
	<localStorage.setItem(aKey, anObject)>.
! !

Object subclass: #HVRESTClient
	instanceVariableNames: 'instaUrl requestResult'
	category: 'Hipstavote-Core'!

!HVRESTClient methodsFor: 'Common Requests'!

request: path callback: aBlock
	|result|
	result := jQuery ajax: (instaUrl, '/' , path, '?access_token=', (HVLocalStorage accessToken)) 
				options: #{
					'type' -> 'GET'.
					'success' -> [:response | aBlock value: response].
					'error' -> [:error | Transcript show: 'error'].
					'dataType' -> 'jsonp' }.
!

requestPhotosOf: anUserId callback: aBlock
	|path|
	path := 'v1/users/', anUserId, '/media/recent', '?access_token=', (HVLocalStorage accessToken).
	self request: path callback: aBlock
! !

!HVRESTClient methodsFor: 'Initialization'!

initialize
	instaUrl := 'https://api.instagram.com'
! !

!HVRESTClient methodsFor: 'Requests'!

testPhotos
	|resultObject|
	self requestPhotosOf: '21068579' callback: [:result | self requestResult: result].
! !

!HVRESTClient methodsFor: 'Setters/Getters'!

instaUrl
	^instaUrl
!

instaUrl: anUrl
	instaUrl := anUrl.
!

requestResult: aResult
	requestResult := aResult.
!

requestResult
	^requestResult.
! !

Object subclass: #HVInstaObject
	instanceVariableNames: 'jsonObject'
	category: 'Hipstavote-Core'!

!HVInstaObject methodsFor: 'not yet classified'!

jsonObject
	^jsonObject
!

jsonObject: anObject
	jsonObject := anObject.
! !

Object subclass: #HVApplication
	instanceVariableNames: 'profile photos friends friendsUsernames userId fromData dueDate'
	category: 'Hipstavote-Core'!
!HVApplication commentStamp!
startApplication
	HVApplication new userId: ''.!

!HVApplication methodsFor: 'accessors'!

userId
	^userId.
!

userId: anId
	userId := anId.
!

friendsUsernames
	^friendsUsernames ifNil: [ friends collect: [:user | user username]].
! !

!HVApplication methodsFor: 'logic'!

startApplication
	self requestProfile.
!

profileReceived: aProfile
	profile := aProfile.
	self requestFollowing.
!

requestProfile
	HVRESTClient new 
		request: ('v1/users/', self userId)  
		callback: [:result | self profileReceived: result].
!

requestPhotos
	HVRESTClient new 
		request: ('v1/users/', self userId, '/media/recent')  
		callback: [:result | self photosReceived: result].
!

photosReceived: aPhotos
	photos := Array new.
	(aPhotos data) do: [:each | photos add: (HVPhoto new jsonObject: each)]. 
	self calculateStatsForPhotos.
	photos do: [:each | 
		|widget|
		widget := HVPhotoWidget new photo: each.
		widget appendToJQuery: ('#photos' asJQuery)].
!

requestFollowing
	HVRESTClient new 
		request: ('v1/users/', self userId, '/follows')  
		callback: [:result | self followingReceived: result].
!

followingReceived: following
	friends := following data.
	self requestPhotos.
!

calculateStatsForPhotos
	photos collect: [:photo |
		|likes|
		likes := photo jsonObject likes data.
		photo likesCount: (likes select: [:like | self friendsUsernames includes: (like username)]) size].
! !

!HVApplication class methodsFor: 'not yet classified'!

startApplication
	|app|
	app := HVApplication new userId: '21068579'.
	app startApplication.
	^app.
! !

HVInstaObject subclass: #HVPhoto
	instanceVariableNames: 'likesCount'
	category: 'Hipstavote-Core'!

!HVPhoto methodsFor: 'not yet classified'!

likesCount
	^likesCount
!

likesCount: count
	likesCount := count.
! !

