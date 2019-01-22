import { alphabet } from './alphabet';

const input = document.getElementById('input-content');
const translateButton = document.getElementById('translate');
const outputTarget = document.querySelector('#output .content');

function translate(swapTrigger) {
      const inputValue = input.value;
      if (swapTrigger === true) {
            const trans = inputValue.split('     ').map(a => a.split(' ').map(a => alphabet[a]).join('')).join(' ');
            outputTarget.innerHTML = trans;
      }
      else if (swapTrigger === false) {
            const alphabetSwapped = {};
            Object.entries(alphabet).forEach(([key, value]) => alphabetSwapped[value] = key);
            const trans = inputValue.split(' ').map(a => a.split('').map(a => alphabetSwapped[a]).join(' ')).join(' / ');
            outputTarget.innerHTML = trans;
      }
}
export { translateButton, translate, input };