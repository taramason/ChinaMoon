'use strict';

var zodiacButton = document.getElementById('left2');
var zodiacOutput = document.getElementById('right1');
// var ye = document.getElementById('year');
console.log(zodiacButton);

zodiacButton.addEventListener('click', searchSign); //event listener engaged

console.log(searchSign);


function searchSign(event) {
    //event listener function

    //console.log(event);                                       //create input event listener
    event.target.style.fontSize = "16px";

    //I changed this to fit the description below. Also I am commenting out your console logs to better test code I add.
    event.target.innerText = "Enter birthday (dd/mm/yyyy)";
    var yearInput = document.createElement('input');
    yearInput.setAttribute("type", "text");
    yearInput.setAttribute("name", "yearBorn");
    yearInput.setAttribute("id", "year");
    yearInput = zodiacButton.appendChild(yearInput);
    console.log(yearInput);

    var break4 = document.createElement('br');
    zodiacButton.appendChild(break4);
    var break5 = document.createElement('br');
    zodiacButton.appendChild(break5);

    var firstDiv = document.createElement('div');
    firstDiv.setAttribute("id", "firstDiv");
    zodiacButton.appendChild(firstDiv);
    firstDiv.setAttribute("class", "div col-md-3");
    var centerDiv = document.createElement('div');
    centerDiv.setAttribute("id", "centerDiv");
    zodiacButton.appendChild(centerDiv);
    centerDiv.setAttribute("class", "div col-md-4");
    var submitButton = document.createElement('button'); //create Submit Button
    submitButton.setAttribute("id", "submit1");
    submitButton.setAttribute("class", "btn btn-primary");
    submitButton.innerHTML = "Submit";
    submitButton = centerDiv.appendChild(submitButton);
    submitButton.style.margin = 'auto';
    //console.log(submitButton);


    zodiacButton.removeEventListener('click', searchSign); //Note: things in parenthesis are specifying what events to remove (thats why we had to name the function)


    //----------------------------------------------------

    submitButton.addEventListener('click', returnZodiac); //2nd event, pulls up zodiac description

    function returnZodiac() {

      //added this part to get the entire year and turn it into a string add it to the back part of ajax
      //and send the ajax request to run a function that will then gie us the moon value for the users b-day!
      var year= document.querySelector('#year').value;
      year=year.toString();
      console.log(year);
      ajax('GET', "http://api.usno.navy.mil/moon/phase?date="+year+"&nump=4", moonphase);

        //this will make the box for the answer display I added css that showed display none so you don't
        //have a weird empty box when the screen loads.
        document.querySelector('#right1').style.display = "block";

        var yearBox = document.getElementById('year');


        //okay so here is where I think we should let them enter their entire b-day
        //and but off the year part. So all b-days should be in the form dd/mm/yyyy
        //we can use the yyyy to get the infor for you and the rest for the infor for moon
        //cycle. A simple function that takes the date as a string "08/12/1987" and does a
        //string.split("/") this will create an array with [08, 12, 1987] then you can use the last part.
        // below the year value I added the things to let the user input the entire b-day and still have your function work.
        //next we want to be able to take user input and still have the moon API work. (oh I also changed html to have a text box instead of a number box so they could put 10/03/2010)
        //we should make an if statement so if they don't enter the date in the correct format is says "wrong format" but we can do that easily at the end


        var yearValue = yearBox.value;

        // console.log(event2);
        yearValue = yearValue.split("/");
        yearValue = Number(yearValue[2]);
        console.log(yearValue);

        var picture = document.createElement('img');
        picture.setAttribute('src', '');
        picture.setAttribute('id', 'ratImg');
        zodiacOutput.appendChild(picture);

        zodiacOutput.innerHTML = ('');
        var textP = document.createElement('p');
        zodiacOutput.appendChild(textP);

        var oxArr = [1913, 1937, 1961, 1985, 2009, 2033, 1925, 1949, 1973, 1997, 2021]; //put ox years here >> and look up how to use Array.indexOf() in your if statement
        var ratArr = [1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032, 2044];
        var tigerArr = [1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022, 2034, 2046];
        var rabbitArr = [1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035, 2047];
        var dragonArr = [1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024, 2036, 2048];
        var snakeArr = [1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025, 2037, 2049];
        var horseArr = [1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026, 2038, 2050];
        var sheepArr = [1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027, 2039, 2051];
        var monkeyArr = [1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028];
        var roosterArr = [1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029];
        var dogArr = [1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030, 2042];
        var pigArr = [1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031, 2043];

        if (oxArr.indexOf(yearValue) !== -1) {
            picture.setAttribute('src', 'images/skull-30810_1280.png');
            textP.innerHTML = "You are an Ox. Oxen used to be capable farming tools in agricultural society, which attach to the symbol of diligence, persistence and honesty. They are probably tardy in action, but industrious and cautious. Most of them are conservative and hold their faith firmly. Your best matches are: Rat, Monkey and Rooster.";
        } else if (ratArr.indexOf(yearValue) !== -1) {
            picture.setAttribute('src', 'images/rat-312172_1280.png');
            textP.innerHTML = "You are a rat. Though people consider the rat not adorable, and it even makes its way into derogatory languages, it ranks first on the Chinese zodiac signs. It has characteristics of an animal with spirit, wit, alertness, delicacy, flexibility and vitality. Your best matches are: Ox, Rabbit and Dragon.";
        } else if (tigerArr.indexOf(yearValue) !== -1) {
            picture.setAttribute('src', 'xxx');
            textP.innerHTML = "You are a Tiger. Tigers, considered to be brave, cruel, forceful, stately and terrifying, are the symbol of power and lordliness. In ancient times, people usually compared emperors or grandees with the tiger. Court officials often said that 'accompanying the emperor is just like being at the side of a tiger'. There are also many legends about this animal. You are compatible with Dragon, Horse and Pig.";
        } else if (rabbitArr.indexOf(yearValue) !== -1) {
            picture.setAttribute('src', 'xxx');
            textP.innerHTML = "You are a Rabbit. For Chinese people, the rabbit is a tame creature representing hope for a long time. It is tender and lovely. The moon goddess Chang'e in Chinese legend had a rabbit as her pet, which stimulated the thought that only this creature was amiable enough to match her noble beauty. People in Rabbit sign are not aggressive but approachable. They have a decent, noble and elegant manner. You are compatible with Sheep, Monkey, Dog and Pig.";
        } else if (dragonArr.indexOf(yearValue) !== -1) {
            picture.setAttribute('src', 'xxx');
            textP.innerHTML = "You are a Dragon. The Dragon enjoys a very high reputation in Chinese culture. Chinese people regard themselves as descendents of the dragon. In ancient China, this imaginary creature was thought to speed across the sky with divine power. It is the token of authority, dignity, honor, success, luck, and capacity. Emperors entitled themselves exclusively as 'dragon'.";
        } else if (snakeArr.indexOf(yearValue) !== -1) {
            picture.setAttribute('src', 'xxx');
            textP.innerHTML = "You are a Snake. Snake carries the meanings of malevolence, cattiness and mystery, as well as acumen and divination. In some places, people believe that a snake found in their court can bring delight. However, in most cases, this animal is considered evil, which scares people from the bottom of the heart. There are some idioms in China indicating the danger of this animal, for example, once bitten by the snake twice shy of ten years. You are compatible with Dragon and Rooster.";
        } else if (horseArr.indexOf(yearValue) !== -1) {
            picture.setAttribute('src', 'xxx');
            textP.innerHTML = "You are a Horse. The Five Elements of Horse is Fire (Huo), which symbolizes enthusiasm and energy. The animal gives people an impression of independence and integrity. Its spirit is recognized to be the Chinese people's ethos - making unremitting efforts to improve themselves with passion and diligence.";
        } else if (sheepArr.indexOf(yearValue) !== -1) {
            picture.setAttribute('src', 'xxx');
            textP.innerHTML = "Sheep (goat, or ram) is among the animals that people like most. It is gentle and calm. Since ancient times, people have learned to use its fleece to make writing brushes and fur to keep warm. The white cute creature often reminds people of beautiful things.";
        } else if (monkeyArr.indexOf(yearValue) !== -1) {
            picture.setAttribute('src', 'xxx');
            textP.innerHTML = "The monkey is a clever animal. It is usually compared to a smart person. During the Spring and Autumn Period (770 - 476 BC), the dignified Chinese official title of marquis was pronounced 'Hou', the same as the pronunciation of ‘monkey’ in Chinese. The animal was thereby bestowed with an auspicious meaning.";
        } else if (roosterArr.indexOf(yearValue) !== -1) {
            picture.setAttribute('src', 'xxx');
            textP.innerHTML = "Rooster is almost the epitome of fidelity and punctuality. For ancestors who had no alarm clocks, the crowing was significant, as it could awaken people to get up and start to work. In Chinese culture, another symbolic meaning of chicken carries is exorcising evil spirits.";
        } else if (dogArr.indexOf(yearValue) !== -1) {
            picture.setAttribute('src', 'xxx');
            textP.innerHTML = "Dog is man's good friend who can understand the human's spirit and obey its master, whether he is wealthy or not. The Chinese regard it as an auspicious animal. If a dog happens to come to a house, it symbolizes the coming of fortune. The invincible God Erlang in Chinese legend used a loyal wolfhound to help him capture monsters.";
        } else if (pigArr.indexOf(yearValue) !== -1) {
            picture.setAttribute('src', 'xxx');
            textP.innerHTML = "Pig is not thought to be a smart animal in China. It likes sleeping and eating and becomes fat. Thus it usually features laziness and clumsiness. On the positive side, it behaves itself, has no calculation to harm others, and can bring affluence to people. Consequently, it has been regarded as wealth.";
        } else {
            textP.innerHTML = "Please enter a valid year, i.e. 1948";
        }


    }

}






function ajax(verb, url, handler) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {

        if (this.readyState === 4) {
            if (this.status === 200) {
                handler(null, JSON.parse(req.responseText));
            } else {
                handler(req.status, null);
            }
        }
    };
    req.open(verb, url);
    req.send();
}

ajax('GET', 'http://api.aerisapi.com/sunmoon/moonphases/denver,co?client_id=TkN8FrefoQ9qK0Kc9ffbG&client_secret=Cw0KQeG5yrCX19RxrRHpEzTLF6t4sLhnMnAv3D9t&limit=4', thingToDo);

function thingToDo(err, data) {
    if (!err) {
        console.log(data);
    }

    var datesDiv = document.getElementById("insideLeftDates");
    // console.log(datesDiv);
    for (var i = 0; i < data.response.length; i++) {
        var par = document.createElement('p');
        var date = data.response[i].dateTimeISO;
        var toDate = new Date(date);
        var stringDate = toDate.toUTCString();
        par.innerHTML = stringDate;
        datesDiv.appendChild(par);
    }


    var moonDiv = document.getElementById("insideLeftMoon");
    // console.log(datesDiv);
    for (var b = 0; b < data.response.length; b++) {
        var par2 = document.createElement('p');
        var break1 = document.createElement('br');
        var break2 = document.createElement('br');
        var break3 = document.createElement('br');

        var moon = data.response[b].name;
        par2.innerHTML = moon;
        moonDiv.appendChild(par2);
        moonDiv.appendChild(break1);
        moonDiv.appendChild(break2);
        moonDiv.appendChild(break3);
    }
}




function moonphase(err, data) {

    if (!err) {

document.querySelector('#left2').innerHTML="On the day of your birth the moon phase was: "+ data["phasedata"][0]["phase"];

document.querySelector('#left2').button;
        //console.log("On the day of your birth the moon phase was "+ data["phasedata"][0]["phase"]);
      }
    }
