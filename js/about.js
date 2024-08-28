import { windowMaker } from "./loadElements.js"

let paint = `woah`

let paintOptions = ["File", "Edit", "View", "Image", "Colors"]
// Move this logic to another function
let myWindow = windowMaker("paint.exe", paintOptions, paint)


document.getElementById('headshot').innerHTML = myWindow;