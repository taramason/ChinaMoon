# This page is being used for general comments.

I added things to the styles.css, the javascript, and will be adding more.
Since everything I add is only a suggestion I am making very clear comments about why I added it and how I added it
so you can remove it or understand how to do it yourself next time. A few things to note:

- I removed the "right1" box that is usually on the left side and it only shows up now when the user
types the year and hits submit I added the box showing up to your already existing eventlistner (it is awesome how well you
labelled your code it made it easy to figure things out) Having moved this box your two other boxes shifted.
We can either leave it shifted and have them shift when the info is added or change this with css or put the
empty box back.

- I also edited right div as you can see in my comments in the code to adjust to different text values try the year 2000 the text is huge.

- Your bottom right box (I think called left3) seems to go off the screen. Is this intentional or should we fix that?

- adding an api request to http://api.usno.navy.mil/moon/phase?date=10/05/1985&nump=4  in theory this api returns an object that will allow us to look at the moonphase when a person was born since they are entering the year anyway we should just have them enter the whole date the year can be used to calculate the chinese horoscope and the entire date can tell them the moonphase on their b-day :-D


- okay I got the moon api added and want to create a button now that says "reset" and basically puts the original screen back but I thought since usually once a user enters the b-day they don't need to enter a million more this was a good start.

- I am still reading documentation on how to add a calendar and am deciding if an "events" calendar is better or more of a mooncycle/body cycle calendar is better. Still not sure I can do this but am willing to try. You should totally make the page however you want and throw in tons of input and change what you don't like about what I did and we can make a great collaboration project. Also feel free to put ideas on here or message me

- other ideas are just to include more about them like astrological sign and info about what that means... weather on their birthday and beliefs behind that ... etc.
