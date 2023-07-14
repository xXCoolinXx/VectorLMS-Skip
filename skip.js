// ==UserScript==
// @name     VectorLMS-Skip
// @version  1
// @grant    GM.getValue 
// @grant    GM.setValue
// @match 	 https://YOUR_WEBITE_HERE.com/*
// @grant unsafeWindow
// @run-at document-end
// ==/UserScript==



//Get all tasks available on the web page
const items = Array.from(document.getElementsByClassName('TOC_item'));

//Wait a period of time
function asyncWaitSeconds(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, seconds * 1000);
    });
}

//Function to convert string into seconds
function getTimeInSeconds(str) {
    const time = str.replace(/\s/g, '').slice(5); //Remove all spaces and newlines, then take only the characters after / (format is 0:00/time)

    // Split into minutes and seconds
    const [mins, secs] = time.split(':');  
  
    // Convert to seconds and return
    return Number(mins) * 60 + Number(secs);
}

//set and get the local variable corresponding to the task number in the item array
function setTN(num){
  window.localStorage.setItem('task_num',num);
}

function getTN(){
 return window.localStorage.getItem('task_num'); 
}

//If the task number doesn't already exist, create it
if(getTN() == null) { 
	setTN(0);
}

let task_number = Number(getTN());

//Wait 5 seconds to make sure that the video loads fully and the script doesn't break
asyncWaitSeconds(5).then(() => {
	if(items.length > 0 && items[task_number]) {
        //Follow the link of the current task
        console.log("Going to task");
        let task_link = items[task_number].href;
        task_number += 1;
      	setTN(task_number);

        window.location.href = task_link;
    } else if (items.length == 0) {
        //"Play" the video so that credit is added for watching it
        console.log("Completing task");
        unsafeWindow.ss_player_tracking.start_tracking();
      
        let time_unprocessed = document.getElementsByClassName('slip_playback_num')[0].textContent;
        let time = getTimeInSeconds(time_unprocessed);
				console.log(time);
      
        asyncWaitSeconds(time).then(() => {
            unsafeWindow.ss_player_tracking.finish_tracking();

            //unsafeWindow.return_to_launcher();
        });
    } else {
        //Script finished, set the number back to 0 so you can do it again for another VectorLMS module
   	    task_number = 0; 
        setTN(task_number);
    }
});