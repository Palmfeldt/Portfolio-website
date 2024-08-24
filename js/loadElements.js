

function windowMaker(title, content) {
  return `
  <div class="msWindow">
  <div class="msTitle">
    <p>${title}</p>
    <div class="msTitlebuttonBox">
      <button class="msButtons"><img src="/img/WIN/MINIMIZE.png" /></button>
      <button class="msButtons"><img src="/img/WIN/RESIZE.png" /></button>
      <button class="msButtons"><img src="/img/WIN/CLOSE.png" /></button>
    </div>
  </div>
  
  <div class="msSelection">
    <p>File</p>
    <p>Edit</p>
    <p>View</p>
    <p>Help</p>
  </div>
  
  <div class="msBorderContainer">
    <div class="msInsideContainer">
      <p>${content}</p>
    </div>
  </div>
  `
}

let aboutMe = `<p>
        I'm a 23 year old post graduate student from Sweden. I've studied at Linnaeus University in Växjö and have a bachelor's degree in Network security program.
      </p>
      <p>
        I love everything to do with IT hardware, hacking, pentesting but also found a passion for webprogramming.
      </p>`


let paint = ``


let myWindow = windowMaker("hello-world.exe", "Hello, my name is Alva Palmfeldt")
myWindow += windowMaker("hello-world.exe", aboutMe)

document.getElementById('sidebar').innerHTML = myWindow;


function lightDarkSwitch(bool) {
  if (bool) {
    themeSwitch.innerHTML = '<img src="/img/icons/theme-light.svg" class="imgswitchLight" alt="theme-switch">';
  } else {
    themeSwitch.innerHTML = '<img src="/img/icons/theme-dark.svg" class="imgswitchDark" alt="theme-switch">';
  }
}

lightDarkSwitch(false)

/**
 * TODO Functtion to switch theme
 */
themeSwitch.addEventListener('click', function () {
  //   let theme = document.getElementById('theme');
  //   if (theme.getAttribute('href') == 'css/light.css') {
  //     theme.href = 'css/dark.css';
  //   } else {
  //     theme.href = 'css/light.css';
  //   }
  lightDarkSwitch(!themeSwitch.innerHTML.includes('light'));

}
);