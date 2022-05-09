import { store } from './store';

const LOWER_CASE = 'data-lowerCase';
const KEY_NAME = 'data-keyName';
const ACTIVE_CLASS = 'form__button--active';

export const findKeyElement = (keys, code, attribute) =>
  keys.find((k) => k.getAttribute(attribute) === code);

export const handleUpperCase = (keyboardKeys, lang, attributes) => {
  keyboardKeys.forEach((key) => {
    const keyName = key.getAttribute(attributes.keyName);
    const upperCase = key.getAttribute(attributes.upperCase);

    if (upperCase) {
      key.innerHTML = upperCase;
    } else {
      key.innerHTML = lang.find((k) => k.code === keyName).lowerCase;
    }
  });
};

export const handleLowerCase = (keyboardKeys, attribute) => {
  keyboardKeys.forEach((key) => {
    const lowerCase = key.getAttribute(attribute);

    key.innerHTML = lowerCase;
  });
};

export const handleCapsLock = (keyboardKeys, lang, attribute) => {
  keyboardKeys.forEach((key) => {
    const keyName = key.getAttribute(attribute);

    if (store.caps.includes(keyName)) {
      key.innerHTML = lang.find((k) => k.code === keyName).upperCase;
    }
  });
};

export const handleIsActiveCaps = (keyboardKeys, lang, key, isCapsLock) => {
  if (isCapsLock) {
    handleLowerCase(keyboardKeys, LOWER_CASE);
    key.classList.remove(ACTIVE_CLASS);
  } else {
    handleCapsLock(keyboardKeys, lang, KEY_NAME);
    key.classList.add(ACTIVE_CLASS);
  }
};
