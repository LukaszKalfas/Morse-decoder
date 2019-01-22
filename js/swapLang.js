const swapButton = document.getElementById('swap');
let swapTrigger = true;

const inputDescription = document.getElementById('input-desc');
const outputDescription = document.getElementById('output-desc');

function swap() {
      swapTrigger = !swapTrigger;

      if (swapTrigger === true) {
            input.placeholder = 'add morse code';
            inputDescription.firstChild.nodeValue = 'morse';
            outputDescription.firstChild.nodeValue = 'words';
      }
      else if (swapTrigger === false) {
            input.placeholder = 'add words';
            inputDescription.firstChild.nodeValue = 'words';
            outputDescription.firstChild.nodeValue = 'morse';
      }
};

export { swapButton, swap, swapTrigger };