const terminalSide = { text: 'webserver@PI4-WEBSERVER', color: 'green' };
const terminalInput = ['git add .'];

let terminalContent = document.getElementById('terminal-content');

terminalContent.innerHTML += 
`<p>Welcome To My Website [Version 3.0.11025.3238] 
<br> 
(c) dtownshend.com. All rights reserved.</p>`;
terminalContent.innerHTML += `<span class="${terminalSide.color}">${terminalSide.text}</span><span style="color: #3586ff">:/var/www/personal-site ~  <br> </span>`;
terminalContent.innerHTML += `<p>
$ <span class="blink">_</span>
</p>`;

// Start the typing effect when the page is loaded
window.addEventListener('load', typeText);
