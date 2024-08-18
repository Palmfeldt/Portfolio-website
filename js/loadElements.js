// footer content
let footerHtml = `
<link rel="stylesheet" href="css/footer.css">
    <p>E-Mailaddress: <a href="mailto:alva@palmfeldt.se">alva@palmfeldt.se</a></p>
    <div id="linkedIn">
      <p>My LinkedIn
        <a href="https://www.linkedin.com/in/alva-widerberg-palmfeldt-393a41261/">
          <img class="socialMediaIcon" src="/img/linked.png" alt="linkedin-logo">
        </a>
      </p>
    </div>
    <p>Latest website update: 2024-08</p>
    <p class="tiny">I'll probably forget to change this date, hehe</p>
`;


let myWindow = `<div>
<link rel="stylesheet" href="css/window.css">
<div class="subsection">
  <div class="winMainWindow">
    <div class="msTitle">
      <p>About me</p>
      <div class="msTitlebuttonBox">
        <button class="msButtons"><img src="/img/WIN/MINIMIZE.png"/></button>
        <button class="msButtons"><img src="/img/WIN/RESIZE.png"/></button>
        <button class="msButtons"><img src="/img/WIN/CLOSE.png"/></button>
      </div>
    </div>
    <div class="msBorderContainer">
    <div class="msInsideContainer">
      <p>Hi, my name is Alva Palmfeldt.</p>
      <p>
        I'm a 23 year old post graduate student from Sweden and live in Växjö. I'm studied
        at Linnaeus University in Växjö within the Network security
        program.
      </p>

      <p>
        I love everything to do with IT hardware, hacking, pentesting but also found a
        passion for webprogramming.

      </p>
      <p>
        I find aesthetic of old software somewhat charming and I get a lot of
        inspiration from old Windows operating systems.
      </p>
      <p>
        While I'm not that great at webprogramming, I find the subject
        interesting. The idea of having the ability of creating a fully fledged application that can be accessed on
        most devices seemed amazing. As such I currently work within fullstack programming.
        I've made this website from scratch. You can find this and other projects at my
        <a href="https://github.com/palmfeldt">GitHub repository</a>
      </p>
      <p>
        I would describe myself as having a "hacker mindset". I always try to
        find ways to bypass, break or hack things. And then there is the less
        fun part of reporting things.
      </p>
      <p>
        Feel free to check out some of the current projects I have. They can be
        found in the <a href="/projects.html">Project</a> part of the webpage
      </p>
    </div>
  </div>`

  


document.querySelectorAll('footer')[0].innerHTML = footerHtml;
// document.querySelectorAll('.posts')[0].appendChild(myWindow);
