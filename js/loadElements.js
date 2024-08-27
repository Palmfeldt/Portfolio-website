

export function windowMaker(title, msSelection, content) {
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