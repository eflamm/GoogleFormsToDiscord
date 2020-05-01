# GoogleFormsToDiscord
Project for ESO Guild to take Google Forms signups and report back to Discord channel

*Starting Point: https://github.com/Iku/Google-Forms-to-Discord*

#Purpose
Discord doesn't support role-based signup, and having an open channel for event sign-ups is messy. Our solution is to create a Google Form
an event, then have form submission trigger a post back to the channel. That way, we can lock the channel for posting by members, and just 
post a link to the form

#Process
-Create a Discord webhook (Server Settings->Webhooks) - be sure to select the target channel - copy the generated endpoint URL
-Create the Google Form - https://forms.google.com
-Click the Send button to get the link - shorten the URL for convenience
-Post the short link in the channel for people to sign up for the event
-Use Script Editor to add the script to the form
-Customize script with your Discord webhook URL, and any custom text for the content
-Use the Edit menu in Script Editor to access the Current Project's triggers
-Add a trigger based on Form Submit event to run the OnSubmit function

#Issues
-You may need to approve script access by the Form - the warning is scary but this should be safe
-The text processing is hard-coded for 2 entries, tab separated in the post. Should be easy to extend this either specific to a form
or generically
