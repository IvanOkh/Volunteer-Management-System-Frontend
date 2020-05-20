#  Task

  ## Problem
  
#  Project Tasks 						## Monday, May 18th, 2020

### APP-WIDE:
•	Disabled users can access application. FIX

###FORMS:

•	Build HTML templates for all 4 forms (the backend executive requested clean html code for building email templates (e.g. <p> First Name: {{firstname}} </p>). In progress

•	On Volunteer Form, replace “Date of Birth” with “Are you over 18?” (Yes/No bullets). Adjust Volunteer Form model accordingly, and make sure submission is correct. 

•	Resolve multiple issues and error messages on Dog Application Form. Make sure submission is correct.

###ADMIN-SIDE:

•	Combine all applications tabs under one “arrowdown”

•	Add “Admin Notes” attribute to both Volunteer and Foster objects and make sure they are displayed in respective modals (this field is only visible to and editable by an admin. Users cannot see its context because it is for admin to make notes about volunteers and fosters).

•	We can only delete applications (from archives) that were rejected (don’t forget to add modal asking “Are you sure you want to delete {{name}}?”).

•	Create a “Reason for Rejection” text field in all 4 application objects and make sure it is displayed when admin attempts to “Reject” any of these applications. If “Reason for rejection” was provided, then it should be displayed in table in “Archive” tab.

•	Make sure “Foster Animal Type” displayed correctly instead of “true true true true true true”. If type is false then don’t display it. And if any of the types are true then display them in them in the modal. (NOTE: you can use NgIf to display/hide).

•	Display to admin who signed for an event. On admin event page, every event needs to have an indicator specifying how many people signed for it, AND a button that allows to see exact volunteers/fosters who has signed (this button will only be visible if at least 1 person signed up). In progress

•	Fix user side account that doesn’t load info if user is a foster. It only checks list of volunteers. We need to handle this

•	Fix login that doesn’t react witch a message to a user if login is invalid or no reply from server has been received. Plus make sure the spinner is working when user awaits from a reply from the server.

•	Fix “Print Form” button to all submitted applications modals that are displayed to admin in “Applications” and “Adoptions” tabs.
