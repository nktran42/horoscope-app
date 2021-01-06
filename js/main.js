// Aquarius dates: January 20 – February 18
// Pisces dates: February 19 – March 20
// Aries dates: March 21 – April 19
// Taurus dates: April 20 – May 20
// Gemini dates: May 21 – June 20
// Cancer dates: June 21 – July 22
// Leo dates: July 23 – August 22
// Virgo dates: August 23 – September 22
// Libra dates: September 23 – October 22
// Scorpio dates: October 23 – November 21
// Sagittarius dates: November 22 – December 21
// Capricorn dates: December 22 – January 19


//Add event listener to what's my horoscope button
document.querySelector("#btn").addEventListener("click", horoscope)

//Event listener for enter button
document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      horoscope()
    }
  });

function horoscope(){
    //Get date input value
    let bday = document.querySelector("#bday").value

    //Split it into an array
    bday = bday.split("-")

    //Get month and day values
    let month = parseInt(bday[1])
    let day = parseInt(bday[2])

    //Check which horoscope symbol the user is 
    if((month == 1 && day >= 20) || (month == 2 && day <=18)){
        //Display text and sign based on horoscope date
        document.querySelector("#sign").innerHTML = "You are an Aquarius ♒"
        document.querySelector("#change").innerHTML = "Despite the “aqua” in its name, Aquarius is actually the last air sign of the zodiac. Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign."

    } else if((month == 2 && day >= 19) || (month == 3 && day <=20)){
        document.querySelector("#sign").innerHTML = "You are a Pisces ♓"
        document.querySelector("#change").innerHTML = "Pisces, a water sign, is the last constellation of the zodiac. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs."

    } else if((month == 3 && day >= 21) || (month == 4 && day <=19)){
        document.querySelector("#sign").innerHTML = "You are an Aries ♓"
        document.querySelector("#change").innerHTML = "Aries loves to be number one, so it’s no surprise that these audacious rams are the first sign of the zodiac. Bold and ambitious, Aries dives headfirst into even the most challenging situations. "

    } else if((month == 4 && day >= 20) || (month == 5 && day <=20)){
        document.querySelector("#sign").innerHTML = "You are a Taurus ♉"
        document.querySelector("#change").innerHTML = "Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors."

    } else if((month == 5 && day >= 21) || (month == 6 && day <=20)){
        document.querySelector("#sign").innerHTML = "You are a Gemini ♊"
        document.querySelector("#change").innerHTML = "Have you ever been so busy that you wished you could clone yourself just to get everything done? That’s the Gemini experience in a nutshell. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself."

    } else if((month == 6 && day >= 21) || (month == 7 && day <=22)){
        document.querySelector("#sign").innerHTML = "You are a Cancer ♋"
        document.querySelector("#change").innerHTML = "Cancer is a cardinal water sign. Represented by the crab, this crustacean seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms."

    } else if((month == 7 && day >= 23) || (month == 8 && day <=22)){
        document.querySelector("#sign").innerHTML = "You are a Leo ♌"
        document.querySelector("#change").innerHTML = "Roll out the red carpet because Leo has arrived. Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They’re delighted to embrace their royal status: Vivacious, theatrical, and passionate, Leos love to bask in the spotlight and celebrate themselves."

    } else if((month == 8 && day >= 23) || (month == 9 && day <=22)){
        document.querySelector("#sign").innerHTML = "You are a Virgo ♍"
        document.querySelector("#change").innerHTML = "Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo’s deep-rooted presence in the material world. Virgos are logical, practical, and systematic in their approach to life. "

    } else if((month == 9 && day >= 23) || (month == 10 && day <=22)){
        document.querySelector("#sign").innerHTML = "You are a Libra ♎"
        document.querySelector("#change").innerHTML = "Libra is an air sign represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on balance and harmony. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life."

    } else if((month == 10 && day >= 23) || (month == 11 && day <=21)){
        document.querySelector("#sign").innerHTML = "You are a Scoprio ♏"
        document.querySelector("#change").innerHTML = "Scorpio is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign. In fact, Scorpio is a water sign that derives its strength from the psychic, emotional realm."

    } else if((month == 11 && day >= 22) || (month == 12 && day <=21)){
        document.querySelector("#sign").innerHTML = "You are a Sagittarius ♐"
        document.querySelector("#change").innerHTML = "Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures."
    } else if((month == 12 && day >=22) || (month == 1 && day <=19)){
        document.querySelector("#sign").innerHTML = "You are a Capricorn ♑"
        document.querySelector("#change").innerHTML = "The last earth sign of the zodiac, Capricorn is represented by the sea goat, a mythological creature with the body of a goat and tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms."
    } else{
        alert("Please enter your birthday")
    }
}

