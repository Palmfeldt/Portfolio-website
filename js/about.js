import { windowMaker } from "./loadElements.js"





let aboveWindowOptions = ["File", "Edit", "View", "Go", "Favorites"]
// Move this logic to another function
let aboveWindow = windowMaker("explorer.exe", aboveWindowOptions, "Woah, its me!")
document.getElementById('headshotTitle').innerHTML = aboveWindow;


let paint = `<img src="/img/testimg.jpg" alt="Isame" style="width: 90%; max-width: fit-content; "> `

let paintOptions = ["File", "Edit", "View", "Image", "Colors"]
// Move this logic to another function
let paintWindow = windowMaker("paint.exe", paintOptions, paint)


document.getElementById('headshot').innerHTML = paintWindow;