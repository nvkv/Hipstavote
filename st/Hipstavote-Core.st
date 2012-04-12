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
	instanceVariableNames: 'instaUrl'
	category: 'Hipstavote-Core'!

!HVRESTClient methodsFor: 'Common Requests'!

request: path callback: aBlock
	|result options getParams|
	options := #{'type' -> 'GET'.
			    'data' -> ('access_token=', (HVLocalStorage accessToken)).
                            'success' -> [:response | aBlock value: response].
                            'error' -> [:error | Transcript show: 'error'].
                            'dataType' -> 'jsonp' }.
	result := jQuery ajax: (instaUrl, '/' , path) options: options.
! !

!HVRESTClient methodsFor: 'Initialization'!

initialize
	instaUrl := 'https://api.instagram.com'
! !

!HVRESTClient methodsFor: 'Setters/Getters'!

instaUrl
	^instaUrl
!

instaUrl: anUrl
	instaUrl := anUrl.
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
	^friendsUsernames ifNil: [friendsUsernames := friends collect: [:user | user username]].
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
!

requestFollowing
	HVRESTClient new 
		request: ('v1/users/', self userId, '/follows')  
		callback: [:result | self followingReceived: result].
!

followingReceived: following	
	|cursor|
	friends ifNil: [friends := Array new].
	following data do: [:each | friends add: each].
	cursor := following pagination at: 'next_cursor'.
	cursor ifNotNil: [self requestFollowingFromCursor: cursor]; 
		  ifNil: [self requestPhotos].
!

calculateStatsForPhotos
	photos do: [:photo | self requestLikesFor: photo].
!

requestFollowingFromCursor: cursor
	HVRESTClient new 
		request: ('v1/users/', self userId, '/follows?cursor=', cursor)
		callback: [:result | self followingReceived: result].
!

requestLikesFor: photo
	"Transcript show: photo jsonObject id, String cr."
	HVRESTClient new request: 'v1/media/', (photo jsonObject id), '/likes'
				     callback: [:result |
					|likers|
					likers := result data collect: [:like | like username].
					photo likesCount: ((likers select: [:liker | self friendsUsernames includes: liker]) size).
					self drawPhoto: photo].
! !

!HVApplication methodsFor: 'view'!

drawPhoto: aPhoto
	|widget|
	widget := HVPhotoWidget new photo: aPhoto.
	widget appendToJQuery: ('#photos' asJQuery).
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

