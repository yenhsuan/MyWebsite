import Typed from 'typed.js';
import $ from 'jquery';

const options = {
  startDelay: 150,
  strings: ['I CODE THEREFORE I AM'],
  typeSpeed: 40,
  backSpeed: 40,
  loop: true,
};

export const registerTyping = (querySelector, content) => (
  new Typed(querySelector, { ...options, strings: [content] })
);

export const registerHeroBtnClick = () => {
  $('.hero__main-button').click(() => {
    $("a[href='#about']").click();
  });
};
