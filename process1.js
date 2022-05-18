let btn = document.querySelectorAll('.des');
let planetImg = document.getElementById('plntimg');
let head = document.getElementById("head");
let para = document.getElementById("para2");
let km = document.getElementById('km');
let travel = document.getElementById('travel');

const destinations = [
       {
         "name": "MOON",
         "images": {
           "png": "https://i.ibb.co/Z2MjF51/image-moon.png" ,
           "webp": "./assets/destination/image-moon.webp"
         },
         "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
         "distance": "384,400 KM",
         "travel": "3 DAYS"
       },
       {
         "name": "MARS",
         "images": {
           "png": "https://i.ibb.co/P68Cr6s/image-mars.png" ,
           "webp": "./assets/destination/image-mars.webp"
         },
         "description": "Don't forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
         "distance": "225 MIL. KM",
         "travel": "9 MONTHS"
       },
       {
         "name": "EUROPA",
         "images": {
           "png": "https://i.ibb.co/phzVL4W/image-europa.png",
           "webp": "./assets/destination/image-europa.webp"
         },
         "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
         "distance": "628 MIL. KM",
         "travel": "3 YEARS"
       },
       {
         "name": "TITAN",
         "images": {
           "png": "https://i.ibb.co/TcShwHy/image-titan.png",
           "webp": "./assets/destination/image-titan.webp"
         },
         "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
         "distance": "1.6 BIL. KM",
         "travel": "7 YEARS"
       }
     ];

     

function renderDestination(data){
  planetImg.src = data.images.png;
  head.textContent = data.name;
  para.textContent = data.description;
  km.textContent = data.distance;
  travel.textContent = data.travel;
}

function buttonClicked(button){
  const id = button.id;
  switch(id){

    case "moon":
      renderDestination(destinations[0]);
      break;

    case "mars":
      renderDestination(destinations[1]);
      break;

    case "europa":
      renderDestination(destinations[2]);
      break;

    case "titan":
      renderDestination(destinations[3]);
      break;

    default: break;

  }
}



btn.forEach(function(e) {
  const presentButton = e;
  presentButton.onclick = function(g) {

  btn.forEach(function (f) {
  f.style.color = "white";
  }) 

    presentButton.style.color = "red";

    buttonClicked(g.target);
    
  }
});
