
#  Project Tasks 					
## Update: Sunday, July 12th, 2020

### APP-WIDE:

•	Get images/preferences from the client. [Received] - Ivan

•	Implement dynamic and smooth transitionon admin and user side.

•	Resolve password recovery. [In-progress] - Ivan, Raymond

•	Enable GWT security on both sides. [In-progress] - Ivan, Raymond

•	Debug, debug, and debug. [In-progress] - Everyone


### FORMS:

•	I am able to submit forms with incorrect phone number and postal code lengths. While backend returns "Error adding application" message, the front end indicates to client that form has been successfully submitted. This is the last major task on forms and tt is our priority to resolve it as soon as possible. [In-progress] - Luat

•	When user chooses to fill "another application" make sure every form refreshes, turnes clean, and takes user to the top of the screen.

•	After filling an application, if user chooses to go to login page, they end up at the bottom of login page. User needs to be scrolled all the way up when they land on login page.

•	Do testing on all 4 forms for incomlete submission. Double check and test responsive in the forms (test button click and span text).

•	Add lazy loading to dog/cat forms [DONE] - Ivan

•	In volunteer form, for the over 18 question change options from 'true' and 'false' into 'Yes' or 'No'. [In-progress] - Albert

•	In volunteer form add 'Other' and 'Prefer not to say' options for gender. [In-progress] - Albert

•	In volunteer form change Boyfriend/Girlfriend option to something less than 20 characters. [In-progress] - Albert

•	In volunteer form, disable or hide newsletter options when Email preferences is unchecked.


## Volunteer Form Unit Testing (In-progress) - Albert

•	Invalid postal code can pass through.





### ADMIN-SIDE:

•	Hide all mat tables if they are empty and display appropriate message instead. (Note from Albert: had to add noItems class names for spacing. Changes have been made and is now totally completed.)[DONE] - Luat

•	Sort events based on the date.

•	Fix “Print Form” button to all submitted applications modals that are displayed to admin in “Applications” and “Adoptions” tabs.

•	In rejected volunteer and foster applications, change reject button to delete (make sure delete works after pressing, with modal asking confirmation to permanently delete rejected application). [DONE] - Albert

•	Apply responsive.

•	Avoid True False and "Own-Rent" displayed in popup-modal. [In-progress] - Luat

•	Present submission date on foster application modal in pending. [In-progress] - Albert 

•	Present submission date on both volunteer application card and modal in pending. [In-progress] - Albert

•	Present submission date on modals for rejected applications (foster and volunteer). [In-progress] - Albert

### USER-SIDE:

•	Sort events based on the date.

•	Handle event case with 0 items.

•	Apply responsive.
