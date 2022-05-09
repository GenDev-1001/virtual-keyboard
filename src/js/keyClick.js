import { keyRead } from './data/keyRead';
import { handleIsActiveCaps } from './fn';
import { store } from './store';

const ACTIVE_CLASS = 'form__button--active';
let isCapsLock = true;

export const keyClick = (event) => {
  const textarea = document.querySelector('.form__textarea');
  const clickKey = event.target;
  const cursorPosition = textarea.selectionStart;
  document.querySelector('.form__textarea').focus();

  if (clickKey.classList.contains('form__button')) {
    clickKey.classList.add(ACTIVE_CLASS);

    if (keyRead.includes(clickKey.dataset.keyname)) {
      textarea.value =
        textarea.value.substring(0, cursorPosition) +
        clickKey.textContent +
        textarea.value.substring(cursorPosition);

      const pos = textarea.value.indexOf(clickKey.textContent, cursorPosition);

      textarea.setRangeText(clickKey.textContent, pos, pos + 1, 'end');
    }

    if (clickKey.dataset.keyname === 'CapsLock') {
      isCapsLock = !isCapsLock;
      handleIsActiveCaps(store.keyboardKeys, store.lang, clickKey, isCapsLock);
    }

    if (clickKey.dataset.keyname === 'Enter') {
      const positionStart = textarea.selectionStart;
      textarea.setRangeText('\n', positionStart, positionStart, 'end');
    }

    if (clickKey.dataset.keyname === 'Tab') {
      const positionStart = textarea.selectionStart;
      textarea.setRangeText('\t', positionStart, positionStart, 'end');
    }

    if (clickKey.dataset.keyname === 'Space') {
      const positionStart = textarea.selectionStart;
      textarea.setRangeText(' ', positionStart, positionStart, 'end');
    }

    if (clickKey.dataset.keyname === 'Backspace') {
      const startPos = textarea.selectionStart;
      if (startPos > 0) {
        textarea.setRangeText('', startPos - 1, startPos, 'end');
      }
    }

    if (clickKey.dataset.keyname === 'Delete') {
      const startPos = textarea.selectionStart;
      textarea.setRangeText('', startPos, startPos + 1, 'end');
    }
  }
};

export const keyClickUp = (event) => {
  const clickKey = event.target;

  if (clickKey.classList.contains('form__button') && clickKey.dataset.keyname !== 'CapsLock') {
    clickKey.classList.remove(ACTIVE_CLASS);
  }
};
