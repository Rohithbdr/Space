let crewPara1 = document.querySelector('.crewpara1');
let crewPara = document.querySelector('.crewpara');
let crewHead = document.querySelector('.crewhead');
let circles = document.querySelectorAll('.circles');
let crewim = document.getElementById('crewim');



let  crew = [

    {
      "name": "Douglas Hurley",
      "images":"https://i.ibb.co/rx2kDBG/image-douglas-hurley.png" ,
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.the first crewed spaceflight from American soil since STS-135."
    },

    {
      "name": "Mark Shuttleworth",
      "images":"https://i.ibb.co/brCRCf9/image-mark-shuttleworth.png" ,
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },

    {
      "name": "Victor Glover",
      "images": "https://i.ibb.co/zxXNqw1/image-victor-glover.png",
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },

    {
      "name": "Anousheh Ansari",
      "images": "https://i.ibb.co/vHBMH2P/image-anousheh-ansari.png",
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ];

function renderCrew(data) {

    crewPara1.textContent = data.bio;
    crewPara.textContent = data.role;
    crewHead.textContent = data.name;
    crewim.src = data.images;
}

function clickedButton(button) {
    let id = button.id;
    switch (id) {
        case "c1": renderCrew(crew[0]) ;
        break;

        case "c2": renderCrew(crew[1]) ;
        break;

        case "c3": renderCrew(crew[2]) ;
        break;

        case "c4": renderCrew(crew[3]) ;
        break;

        default: break;
    }

    
}



circles.forEach(function(cc) {
    let renderbtn = cc;
    renderbtn.onclick = (present) => {

    circles.forEach((b) => {
        b.style.backgroundColor = "#353841"
    })

    renderbtn.style.backgroundColor = "white";
    clickedButton(present.target);

    
}


})

