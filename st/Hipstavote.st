Smalltalk current createPackage: 'Hipstavote' properties: #{}!
Object subclass: #HVRESTClient
	instanceVariableNames: 'instaUrl'
	category: 'Hipstavote'!

!HVRESTClient methodsFor: 'Initialization'!

initialize
	instaUrl := 'https://api.instagram.com'
! !

!HVRESTClient methodsFor: 'Requests'!

request: path callback: aBlock
	|result|
	result := jQuery ajax: (instaUrl, '/' , path)
				  options: #{
					'type' -> 'GET'.
					'success' -> [:response | aBlock value: response].
					'error' -> [:error | Transcript show: 'error'].
					'dataType' -> 'jsonp'}.
! !

Object subclass: #HVLocalStorage
	instanceVariableNames: ''
	category: 'Hipstavote'!

!HVLocalStorage class methodsFor: 'Accessing'!

accessToken
	HVLocalStorage at: 'access_token'.
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

Object subclass: #HVOAuth
	instanceVariableNames: ''
	category: 'Hipstavote'!

!HVOAuth methodsFor: 'token'!

saveToken: aToken
	HVLocalStorage at: 'access_token' put: aToken.
! !

