const terminalSide = { text: 'webserver@PI4-WEBSERVER', color: 'green' };
const terminalInput = document.getElementById('terminal-input');

let terminalContent = document.getElementById('terminal-content');

// terminalContent.innerHTML += 
// `<p>Welcome To My Website [Version 3.0.11025.3238] 
// <br> 
// (c) dtownshend.com. All rights reserved.</p>`;
// terminalContent.innerHTML += `<p>Type 'help' to see a list of commands</p>`;
terminalContent.innerHTML += `<span class="${terminalSide.color}">${terminalSide.text}</span><span style="color: #3586ff">:/var/www/personal-site ~  <br> </span>`;
terminalContent.innerHTML += `<p>
$ <span class="blink">_</span>
</p>`;





// document.addEventListener('DOMContentLoaded', () => {
//     const terminalContent = document.getElementById('terminal-content');
//     const terminalInput = document.getElementById('terminal-input');
//     const terminalSide = { text: 'webserver@PI4-WEBSERVER', color: 'green' };
//     terminalContent.innerHTML += 
//     `<p>Welcome To My Website [Version 3.0.11025.3238] 
//     <br> 
//     (c) dtownshend.com. All rights reserved.</p>`;
//     terminalContent.innerHTML += `<p>Type 'help' to see a list of commands</p>`;
//     terminalContent.innerHTML += `<span class="${terminalSide.color}">${terminalSide.text}</span><span style="color: #3586ff">:/var/www/personal-site ~  <br> </span>`;
//     terminalContent.innerHTML += `<p>
//     $ <span class="blink">_</span>
//     </p>`;
  
   
// }

// // Display a command prompt
// function displayPrompt() {
//     terminalContent.innerHTML += `<span class="${terminalSide.color}">${terminalSide.text}:/var/www/personal-site ~<br></span>`;
//     terminalContent.innerHTML += `<p>$ <span class="blink">_</span></p>`;
//     // Scroll to the bottom of the terminal
//     terminalContent.scrollTop = terminalContent.scrollHeight;
// }