
#  Project Tasks 					
## Update: Wednesday, June 3rd, 2020

### APP-WIDE:

•	Implement dynamic and smooth transitions.

•	Handle login responces and errors. [IN-PROGRESS] - Ivan

### FORMS:

•	Resolve submission on Dog Application form. Make sure all necessary attributes are filled.

### ADMIN-SIDE:

•	Convert Bootstrap tables to Material to enable sorting algorithms. [IN-PROGRESS] -Luat

•	Add “Admin Notes” attribute to both Volunteer and Foster objects and make sure they are displayed in respective modals (this field is only visible to and editable by an admin. Users cannot see its context because it is for admin to make notes about volunteers and fosters). [PROGRESS - Updated model files, Created displayment on modals and editable field. Awaiting backend implementation] - Albert

•	We can only delete applications (from archives) that were rejected (don’t forget to add modal asking “Are you sure you want to delete {{name}}?”). [Awaiting back-end implementation] - Albert

•	Create a “Reason for Rejection” text field in all 4 application objects and make sure it is displayed when admin attempts to “Reject” any of these applications. If “Reason for rejection” was provided, then it should be displayed in table in “Archive” tab.

•	Fix login that doesn’t react witch a message to a user if login is invalid or no reply from server has been received. Plus make sure the spinner is working when user awaits from a reply from the server. - [IN-PROGRESS] - Ivan

•	Fix “Print Form” button to all submitted applications modals that are displayed to admin in “Applications” and “Adoptions” tabs.

### USER-SIDE:

•	Ready for responsive.
