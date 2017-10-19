Feature: Login
@LoginSuccess
	Scenario Outline: Login with valid credentials
		Given user is on Login page
		And Login form displayed
		When user enters username "<userName>"
		And user enters password"<password>"
		And user clicks the Login button
		Then user should see the greeting message
		
		
		Examples:
		|userName              		|password   |
		|cainaisi@gmail.com         |test1234 |
		
	
@LoginFailureWrongCredential
	Scenario Outline: Login with invalid credentials
		Given user is on Login page
		And Login form displayed
		When user enters username "<userName>"
		And user enters password"<password>"
		And user clicks the Login button
		Then user should see modal with "<errorMessage>"
		
		Examples:
		|userName             |password   |errorMessage			|
		|cainaisi@gmail.com   |test12     |Incorrect Password 	|
		|cain@gmail.com       |test1234   |Incorrect Password	|
		|cain@gmail.com       |test12     |Incorrect Password	|
		
		
@LoginFailureEmptyCredential	
	Scenario Outline: Failed login with empty credential
		Given user is on Login page
		And Login form displayed
		When user enters username "<userName>"
		And user enters password"<password>"
		And user clicks the Login button
		Then user should see "<errorMessage>"
		
		Examples:
		|userName     		  |password   |errorMessage					|
		|cainaisi@gmail.com   |           |Please enter your password   |
		|                     |test1234   |Invalid Email			    |
		|             		  |           |Invalid Email				|
		
@LoginFailureFieldValidation
	Scenario Outline: Failed login due to invalid Email or Pasword format
		Given user is on Login page
		And Login form displayed
		When user enters username "<userName>"
		And user enters password"<password>"
		And user clicks the Login button
		Then user should see "<errorMessage>"
		
		Examples:
		|userName             |password       |errorMessage					|
		|cainaisi@gmail       |test1234       |Invalid Email				|

		
@loginWithFB
	Scenario: Login using Facebook account
		Given user is on Login page
		And Login form displayed
		When user clicks Login with Facebook
		Then user should see popup
		When user enters valid FB credentials
		Then user should be loggedin after popup closed