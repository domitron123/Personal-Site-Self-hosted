const terminalSide = 'webserver@PI4-WEBSERVER:/var/www/personal-site $';
const terminalInput = 'git add .';

const terminalOutput = [
    { text: 'git add .', color: 'warning' },
    { text: 'git commit -m "The best website ever created - V1"', color: '' },
    { text: '[master 41df82e] The best website ever created -v1"', color: 'success' },
    { text: '3 files changed, 85 insertions(+), 11 deletions(-)' },
    { text: 'create mode 106604 css/terminal.css' },
    { text: 'git push origin master' },
    { text: 'objects: 7, done.'},
    { text: 'Counting objects: 100% (7/7), done.'},
    { text: 'Compression using up to 4 threads'},
    { text:  'Compressing objects: 100% (4/4), done.'},
    { text:  'Writing objects: 100% (4/4), 1014 bytes | 507.00 KiB/s, done.'},
    { text:  'Total 4 (delta 3), reused 0 (delta 0), pack-reused 0'},
    { text:  'remote: Resolving deltas: 100% (3/3), completed with 3 local objects.'},
    { text:  'To https://github.com/domitron123/Personal-Site-Self-hosted.git'},
    { text:  '25b3ce4..c74cdee  master -> master'},
];

let terminalContent = document.getElementById('terminal-content');
let cursor = document.createElement('span');
cursor.classList.add('terminal-cursor');

terminalContent.textContent = terminalSide;

function typeText() {
    let lineIndex = 0;
    let charIndex = 0;
    terminalContent.appendChild(cursor);

    function typeCharacter() {
        if (lineIndex < terminalOutput.length) {
            const line = terminalOutput[lineIndex].text;
            const colorClass = terminalOutput[lineIndex].color;

            if (charIndex < line.length) {
                terminalContent.innerHTML += `<span class="${colorClass}">${line[charIndex]}</span>`;
                charIndex++;
            } else {
                terminalContent.innerHTML += '<br>';
                charIndex = 0;
                lineIndex++;
            }

            setTimeout(typeCharacter, 20); // Adjust typing speed (milliseconds)
        }
    }

    typeCharacter();
}

// Start the typing effect when the page is loaded
window.addEventListener('load', typeText);
