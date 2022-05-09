import capsKey from '../data/capsKey';
import keyCode from '../data/mainKeycode';
import { store } from '../store';

const UPPER_CASE = 'data-upperCase';
const LOWER_CASE = 'data-lowerCase';
const KEY_NAME = 'data-keyName';

export const keyRender = () => {
  const lang = localStorage.getItem('len');

  lang === 'rus' ? (store.lang = keyCode.keyCodeRu) : (store.lang = keyCode.keyCodeEn);
  lang === 'eng' ? (store.caps = capsKey.capsRu) : (store.caps = capsKey.capsEn);

  const keys = store.lang.map((key) => {
    const button = document.createElement('button');
    button.classList.add('form__button');
    button.setAttribute(KEY_NAME, key.code);
    button.setAttribute(LOWER_CASE, key.lowerCase);

    if (key.upperCase) button.setAttribute(UPPER_CASE, key.upperCase);

    button.innerHTML = key.lowerCase;

    return button;
  });
  return keys;
};
