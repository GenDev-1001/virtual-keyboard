import { keyRead } from './data/keyRead';
import { findKeyElement, handleIsActiveCaps, handleLowerCase } from './fn';
import { store } from './store';

const LOWER_CASE = 'data-lowerCase';
const KEY_NAME = 'data-keyName';
const ACTIVE_CLASS = 'form__button--active';

export const onKeyUp = (event) => {
  event.preventDefault();
  const key = findKeyElement(store.keyboardKeys, event.code, KEY_NAME);
  const textarea = document.querySelector('.form__textarea');
  const cursorPosition = textarea.selectionStart;

  if (key && event.code !== 'CapsLock') key.classList.remove(ACTIVE_CLASS);

  if (event.key === 'Shift') {
    const isCapsLock = event.getModifierState('CapsLock');

    handleLowerCase(store.keyboardKeys, LOWER_CASE);

    if (isCapsLock) {
      handleIsActiveCaps(store.keyboardKeys, store.lang, key, isCapsLock);
    }
  }

  if (keyRead.includes(event.code)) {
    textarea.value =
      textarea.value.substring(0, cursorPosition) +
      key.textContent +
      textarea.value.substring(cursorPosition);

    const pos = textarea.value.indexOf(key.textContent, cursorPosition);
    textarea.setRangeText(key.textContent, pos, pos + 1, 'end');
  }

  if (event.key === 'Enter') {
    const positionStart = textarea.selectionStart;
    textarea.setRangeText('\n', positionStart, positionStart, 'end');
  }

  if (event.key === 'Tab') {
    const positionStart = textarea.selectionStart;
    textarea.setRangeText('\t', positionStart, positionStart, 'end');
  }

  if (event.key === ' ') {
    const positionStart = textarea.selectionStart;
    textarea.setRangeText(' ', positionStart, positionStart, 'end');
  }

  if (event.key === 'Backspace') {
    const startPos = textarea.selectionStart;
    if (startPos > 0) {
      textarea.setRangeText('', startPos - 1, startPos, 'end');
    }
  }

  if (event.key === 'Delete') {
    const startPos = textarea.selectionStart;
    textarea.setRangeText('', startPos, startPos + 1, 'end');
  }

  if (event.key === 'Control') store.pressed.delete(event.key);
  if (event.key === 'Alt') store.pressed.delete(event.key);
};
