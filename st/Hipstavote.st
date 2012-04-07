Smalltalk current createPackage: 'Hipstavote' properties: #{}!
Object subclass: #HVLocalStorage
	instanceVariableNames: ''
	category: 'Hipstavote'!

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
	category: 'Hipstavote'!

!HVRESTClient methodsFor: 'Common Requests'!

request: path callback: aBlock
	|result|
	result := jQuery ajax: (instaUrl, '/' , path)
				  options: #{
					'type' -> 'GET'.
					'success' -> [:response | aBlock value: response].
					'error' -> [:error | Transcript show: 'error'].
					'dataType' -> 'jsonp'}.
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
	self requestPhotosOf: '21068579' callback: [:result | Transcript show: (result asJSONString)].
! !

