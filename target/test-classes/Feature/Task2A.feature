Feature: Check if the site is functional
    As an Airtasker user
    I want to get more done

Scenario: A Poster is able to Post task

	Given user is logged in
	When user clicks the Post a Task button
	Then user should see the Task details form
	When user hover on the tips
	Then user should see the tips 
	When user clicks Need Help at the bottom
	Then user should see the Help Centre link revealed
	When user clicks the Help Centre link
	Then user should be taken to Help Centre
	When user enters task title
	And user enters task detals
	And user goes to the next step
	Then user should see the location form
	When user select where would the task be completed
	And user enters suburb
	And user select due date
	And user goes to the next step
	Then user should see the Budget form
	When user hover on the tips
	Then user should see the tips 
	When user hover on Price Guide
	Then user should see the Price Guide
	When user select worker required
	And user select budget pay method
	And user enters budget number
	And user clicks Get Quote
	Then user should see success message with task title
	When user clicks the Done button
	Then user should be able to see the task just created in Posted tasks
	
	
Scenario: A Poster is able to Post task from draft
	Given user is logged in
	When user clicks the Post a Task button
	Then user should see the Task details form 
	When user enters task title
	And user enters task detals
	And user clicks the close icon
	Then user should see the Saved as draft message
	When user clicks Go to My tasks
	Then user should see the task in Draft tasks
	When user clicks on the task
	And user clicks on Finalise Task
	Then user should see the location form with details just entered
	When user goes to the next step
	Then user should see the location form
	When user select where would the task be completed
	And user enters suburb
	And user select due date
	And user goes to the next step
	Then user should see the Budget form
	When user hover on the tips
	Then user should see the tips 
	When user hover on Price Guide
	Then user should see the Price Guide
	When user select worker required
	And user select budget pay method
	And user enters budget number
	And user clicks Get Quote
	Then user should see success message with task title
	When user clicks the Done button
	Then user should be able to see the task just created in Posted tasks
	
	
Scenario: A Poster is able to add comment and photos
	Given user already created a task
	When user opens the task details
	And user add a comment in the comment area
	And user uploads multiple photos
	And user send out the updates
	Then user should see the comment and the photos in the task
	
	
Scenario: A Worker is able to Make Offer
	Given user is loggedin
	And user has setted up all contact and payment details
	When user browse the tasks with filters
	Then user should see the results with applied filters
	When user clicks one task with additional requirements
	And user clicks Make an Offer
	Then user should see the offer checklist
	When user goes to the next step
	Then user should see the budget 
	When user enters message in the comment box
	And user goes to the next step
	Then user should see the additional requirement page
	When user meets all the additional requirements
	Then user should be able to click Continue
	Then user should see the Preview offer page
	When user submit offer
	Then user should see the offer just made in the task
	
	