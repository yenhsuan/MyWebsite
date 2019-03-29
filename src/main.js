import $ from 'jquery';

import './sass/main.scss';
import './main.html';

import registerTyping from './js/hero';

$(document).ready(() => {
  registerTyping(
    '.hero__typing-content',
    'I <b class=\'pink\'>CODE</b> THEREFORE <b class=\'yellow\'>I AM.</b>',
  );
});
