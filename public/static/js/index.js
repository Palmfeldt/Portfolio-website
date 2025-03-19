import { windowMaker } from "./loadElements.js"


let aboutMe = `<p>
        I'm a CS-graduate from Sweden who is currently working at Aveki. I've studied at Linnaeus University and have a bachelor's degree in Network Security.
      </p>
      <p>
        I love everything to do with IT hardware, pentesting and web programming.
      </p>`



// Move this logic to another function
let myWindow = windowMaker("hello-world.exe", [], "Hello, my name is Alva Palmfeldt and welcome to my website :)")
myWindow += windowMaker("about-short.bat", [], aboutMe)

document.getElementById('windowSidebar').innerHTML = myWindow;
