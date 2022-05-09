import capsKey from './data/capsKey';
import keyCode from './data/mainKeycode';
import { findKeyElement, handleIsActiveCaps, handleUpperCase } from './fn';
import { activeKeyPress } from './keyPress';
import { keyRender } from './render/keyRender';
import { uniqSize } from './render/mainRender';
import { store } from './store';

const UPPER_CASE = 'data-UpperCase';
const KEY_NAME = 'data-keyName';
const ACTIVE_CLASS = 'form__button--active';

export const onKeyDown = (event) => {
  const key = findKeyElement(store.keyboardKeys, event.code, KEY_NAME);
  document.querySelector('.form__textarea').blur();

  if (event.repeat) {
    activeKeyPress();
  }

  if (key && event.code !== 'CapsLock') key.classList.add(ACTIVE_CLASS);

  if (event.key === 'Shift') {
    const op = {
      upperCase: UPPER_CASE,
      keyName: KEY_NAME,
    };

    handleUpperCase(store.keyboardKeys, store.lang, op);
  }

  if (event.key === 'Control') store.pressed.add(event.key);

  if (event.key === 'Alt') store.pressed.add(event.key);

  if (event.key === 'CapsLock') {
    const isCapsLock = !event.getModifierState('CapsLock');
    key.classList.add(ACTIVE_CLASS);
    handleIsActiveCaps(store.keyboardKeys, store.lang, key, isCapsLock);
  }

  if (store.pressed.size === 2) {
    const isLang = store.lang === keyCode.keyCodeEn;

    isLang ? (store.lang = keyCode.keyCodeRu) : (store.lang = keyCode.keyCodeEn);
    isLang ? (store.caps = capsKey.capsRu) : (store.caps = capsKey.capsEn);

    if (store.lang === keyCode.keyCodeRu) {
      localStorage.setItem('len', 'rus');
    }

    if (store.lang === keyCode.keyCodeEn) {
      localStorage.setItem('len', 'eng');
    }

    const formButtonsInner = document.querySelector('.form__buttons-inner');
    const keys = keyRender();

    formButtonsInner.innerHTML = '';
    formButtonsInner.append(...keys);
    uniqSize(keys);
    store.keyboardKeys = [...formButtonsInner.children];
  }
};
