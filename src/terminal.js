const terminalSide = "webserver@PI4-WEBSERVER:/var/www/personal-site $ ";

const userInput = "git add .";
const userInput2 = 'git commit -m "The best website ever created - V1"';
const userInput3 = "git push origin master";

const terminalOutput = [
  ["objects: 7, done."],
  ["Counting objects: 100% (7/7), done."],
  ["Delta compression using up to 4 threads"],
  ["Compressing objects: 100% (4/4), done."],
  ["Writing objects: 100% (4/4), 1014 bytes | 507.00 KiB/s, done."],
  ["Total 4 (delta 3), reused 0 (delta 0), pack-reused 0"],
  ["remote: Resolving deltas: 100% (3/3), completed with 3 local objects."],
  ["To https://github.com/domitron123/Personal-Site-Self-hosted.git"],
  ["25b3ce4..c74cdee  master -> master"]
];

let terminalContent = document.getElementById("terminal-content");
let cursor = document.createElement("div");
cursor.classList.add("terminal-cursor");

terminalContent.textContent = terminalSide;


function typeText() {
    let i = 0;
    terminalContent.appendChild(cursor);
  
    function typeCharacter() {
      terminalContent.textContent += userInput[i];
      i++;
      if (i < userInput.length) {
        setTimeout(typeCharacter, 100); // Adjust typing speed (milliseconds)
      } else {
        terminalContent.textContent += "\n"; // Add a newline character
        displayTerminalOutput(0);
      }
    }
  
    function displayTerminalOutput(index) {
      if (index < terminalOutput.length) {
        const line = terminalOutput[index][0]; // Get the line from the sub-array
        terminalContent.textContent += line + "\n";
        setTimeout(function () {
          displayTerminalOutput(index + 1);
        }, 100); // Adjust the delay between each line of terminalOutput
      }
    }
  
    typeCharacter();
  }
  
  // Start the typing effect when the page is loaded
  window.addEventListener("load", typeText);