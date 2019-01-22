import { swapButton, swap, swapTrigger } from './swapLang';
import { translateButton, translate } from './translate';

swapButton.addEventListener('click', swap);

translateButton.addEventListener('click', function () {
      translate(swapTrigger);
});