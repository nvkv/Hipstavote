Smalltalk current createPackage: 'Hipstavote-Tests' properties: #{}!
TestCase subclass: #HVRESTClientTests
	instanceVariableNames: ''
	category: 'Hipstavote-Tests'!

!HVRESTClientTests methodsFor: 'testing'!

testInstaUrl
	|restClient|
	restClient := HVRESTClient new.
	self assert: (restClient instaUrl = 'https://api.instagram.com').
! !

TestCase subclass: #HVLocalStorageTests
	instanceVariableNames: ''
	category: 'Hipstavote-Tests'!

!HVLocalStorageTests methodsFor: 'not yet classified'!

testPersistance
	self assert: (HVLocalStorage at: 'test') = 'testing 123'.
!

setUp
	HVLocalStorage at: 'test' put: 'testing 123'.
!

tearDown
	HVLocalStorage at: 'test' put: nil.
! !

