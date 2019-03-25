import Typed from 'typed.js';

const options = {
  startDelay: 150,
  strings: ['I CODE THEREFORE I AM'],
  typeSpeed: 40,
  backSpeed: 40,
  loop: true,
};

const registerTyping = (querySelector, content) => (
  new Typed(querySelector, { ...options, strings: [content] })
);

export default registerTyping;
