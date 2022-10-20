// 3RD PARTY SCRIPTS

// Insert GTM Code

const GTMSCRIPTBODY = document.createElement("noscript");
const GTMSCRIPTHEAD = document.createElement("script");


function runGTMbody() {
  GTMSCRIPTBODY.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MLGFKCF"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`
  document.body.prepend(GTMSCRIPTBODY);
};

function runGTMhead() {
  GTMSCRIPTHEAD.innerHTML = `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MLGFKCF');`
  document.head.append(GTMSCRIPTHEAD);
};


// INITIALIZE SCRIPTS

function runScript() {
  runGTMbody()
  runGTMhead()
};

runScript();

// CREATE TOP NAVIGATION

const topNavigation = document.getElementById("top-nav");

topNavigation.innerHTML = `
<div class="navbar">
        <a href="/">
          <div class="navbar-item">
            🏠 Home
          </div>
        </a>
        <div class="navbar-items">
          <a href="/blog/">
            <div class="navbar-item">
              📝 Writing
            </div>
          </a>
          <a href="/projects">
            <div class="navbar-item">
              🤖 Projects
            </div>
          </a>
          <a href="/about">
            <div class="navbar-item">
              ☕ About
            </div>
          </a>
        </div>
      </div>
`;

// CREATE FOOTER

const footer = document.getElementById("footer");

footer.innerHTML = `<div class="footer-header">
<h2>Code Level Marketer</h2>
</div>
<div class="footer-container">
<div class="footer-sitelinks">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Writing</a></li>
    <li><a href="/projects">Projects</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</div>
<div class="footer-social">
  <a href="https://github.com/codelevelmarketer" target="_blank">
    <div class="social-link">
      <div class="social-icon">
        <i class="fa-brands fa-github"></i>
      </div>
      <div class="social-text">
        GitHub
      </div>
    </div>
  </a>
  <a href="https://twitter.com/knowbots" target="_blank">
    <div class="social-link">
      <div class="social-icon">
        <i class="fa-brands fa-twitter"></i>
      </div>
      <div class="social-text">
        Twitter
      </div>
    </div>
  </a>
  <a href="https://www.linkedin.com/in/jontaylor85/" target="_blank">
    <div class="social-link">
      <div class="social-icon">
        <i class="fa-brands fa-linkedin"></i>
      </div>
      <div class="social-text">
        LinkedIn
      </div>
    </div>
  </a>
  <a href="https://humansofmartech.com/" target="_blank">
    <div class="social-link">
      <div class="social-icon">
        <i class="fa-solid fa-microphone"></i>
      </div>
      <div class="social-text">
        Humans of Martech Podcast
      </div>
    </div>
  </a>
</div>

</div>
<div class="footer-copyright">
Copyright &copy; 2021 - 2022 Knowbots Inc. All Rights Reserved
</div>
`;

// INSERT FAVICON

let link = document.querySelector("link[rel~='icon']");
if (!link) {
  link = document.createElement("link");
  link.rel = "icon";
  document.getElementsByTagName("head")[0].appendChild(link);
}
link.href = "/favicon/favicon.ico";

