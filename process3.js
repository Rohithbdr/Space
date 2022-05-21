
let btn = document.querySelectorAll('.tech-btn');
let crewhead = document.querySelector('.crewhead');
let techdes = document.querySelector('.techpara1');
let techimg = document.querySelector('.tech-img');
let techimg2 = document.getElementById('tech-img2');


let navbtn = document.querySelector('.hamimg');
let navmenu = document.querySelector('.nav-options');


navbtn.onclick = function() {
    navmenu.classList.toggle("button");
}



let  technology = [
    {
      "name": "Launch vehicle",
      "images": {
        "prot":"https://i.ibb.co/tZbKVdb/image-launch-vehicle-portrait.jpg",
        "land": "https://i.ibb.co/MZRxJPV/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },

    {
      "name": "Spaceport",
      "images": {
        "prot": "https://i.ibb.co/sQTZZ3D/image-spaceport-portrait.jpg" ,
        "land": "https://i.ibb.co/Pzm8CVP/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "prot": "https://i.ibb.co/wrfqhjf/image-space-capsule-portrait.jpg" ,
        "land": "https://i.ibb.co/Xb26hzN/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    },

  ];



function renderData(data) {
    crewhead.textContent = data.name;
    techdes.textContent = data.description;
    techimg.src = data.images.prot;
    techimg2.src = data.images.land;
}


function clickedButton(button) {
    let id = button.id;

    switch(id) {

        case "b1": renderData(technology[0]);
        break;

        case "b2": renderData(technology[1]);
        break;

        case "b3": renderData(technology[2]);
        break;

        default: break;
    }
}




btn.forEach((bb) => {
    let clckdbtn = bb;
     clckdbtn.onclick = function (present) {

        btn.forEach((f) => {
            f.style.backgroundColor = "transparent";
        })

        clckdbtn.style.backgroundColor = "grey";
        clickedButton(present.target);
    }


})