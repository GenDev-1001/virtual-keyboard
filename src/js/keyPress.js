import { keyRead } from './data/keyRead';
import { findKeyElement } from './fn';
import { store } from './store';

const KEY_NAME = 'data-keyName';
const ACTIVE_CLASS = 'form__button--active';
export const keyPress = (event) => {
  const key = findKeyElement(store.keyboardKeys, event.code, KEY_NAME);
  key.classList.add(ACTIVE_CLASS);
  const textarea = document.querySelector('.form__textarea');
  textarea.blur();
  const cursorPosition = textarea.selectionStart;

  if (keyRead.includes(event.code) || event.key === 'ArrowUp') {
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

  window.removeEventListener('keypress', keyPress);
};

export const activeKeyPress = () => {
  window.addEventListener('keypress', keyPress);
};
