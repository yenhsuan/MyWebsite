import $ from 'jquery';
import { registerTyping, registerHeroBtnClick } from './js/hero';
import hotReloadHTML from './js/hot-reload-html';
import {
  registerNavBarScrollEffect,
  registerNavBarSpyEffect,
  registerSmoothScrollingEffect,
} from './js/navbar';

import './sass/main.scss';
import '../assets/screenshot.png';
import '../assets/favicon.png';

hotReloadHTML();

$(document).ready(() => {
  registerTyping(
    '.hero__typing-content',
    'I <b class=\'pink\'>CODE</b> THEREFORE <b class=\'yellow\'>I AM.</b>',
  );

  registerNavBarScrollEffect();
  registerNavBarSpyEffect();
  registerSmoothScrollingEffect();
  registerHeroBtnClick();
  $(window).scroll();
});
