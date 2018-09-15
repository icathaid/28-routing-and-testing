branches:
james = first effort, built out from item demo
james2 = second effort, tried to migrate code from note app demo to fix holes, broke everything
james3 = third effort, building it out from the note app demo and timeboxing

# Notes:

I submitted the only version I have that fully works, but it's really just the demo from the lecture video.  My original app is in the 'james' branch, the 'james2' branch is when I tried to incorporate code from the video to get my removeNote function to work and realized how broken everything actually was, 'james3' I just wanted to get a working version to turn in and move on.

I took a stab at styling but I've forgotten everything I know about CSS :(  I didn't have time to start on testing.


## Questions:

One thing that I can't figure out is that when you click remove note, it will remove that note from state (check the console logs), but it won't unrender from the DOM, and refreshing the page just wipes everything.  