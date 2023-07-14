# VectorLMS-Skip

## Usage:

This script requires you to install the Greasemonkey browser extension. Follow these steps to use it:

* Paste the contents of `skip.js` into a new Greasemonkey userscript
* Change the part where it says `YOUR_WEBSITE_HERE.com` to the website where your learning modules are located
    * Be sure to keep the `https://` before and the `/*` after putting in the correct website.
* Navigate to the module you want the script to complete
* Let the script take you to the first two tasks
    * These two tasks require manual intervention
    * The first task is a series of questions. Quickly fill in random answers to get past it
    * The second task is a video with a survey, questions and/or YouTube video embedded inside. Follow these steps
        * Temporarily disable the GreaseMonkey extension. 
        * Start the video
        * Surveys can be skipped through without answering anything
        * Questions must be clicked through fully
        * YouTube videos you can skip the time to the end and it will still allow you to continue
        * Re-enable GreaseMonkey before the video ends
        * You will be automatically taken back to the home page and the script will begin working again
* Now, the script will automatically go through and watch each video in the background
* Occasionally, it may stop and the video will be gone from the page
    * When this happens, REFRESH the page (do NOT go back to the home page as this will break the script)
    * The video will need to be started manually as it has embedded questions you must answer
    * Follow the instructions for task 2 to complete this video
* If all goes well, you will finally reach the assessment screen. These questions must be answered manually. 
* If you are not able to score the required 80%, you should go back and watch the videos, and question your life choices.