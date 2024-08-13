// footer content
let footerHtml = `
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

document.querySelectorAll('footer')[0].innerHTML = footerHtml;
