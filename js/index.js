import { windowMaker } from "./loadElements.js"


let aboutMe = `<p>
        I'm a 23 year old post graduate student from Sweden. I've studied at Linnaeus University in Växjö and have a bachelor's degree in Network security program.
      </p>
      <p>
        I love everything to do with IT hardware, hacking, pentesting but also have a passion for web programming.
      </p>`



// Move this logic to another function
let myWindow = windowMaker("hello-world.exe", "", "Hello, my name is Alva Palmfeldt")
myWindow += windowMaker("hello-world.exe", "", aboutMe)

document.getElementById('windowSidebar').innerHTML = myWindow;
