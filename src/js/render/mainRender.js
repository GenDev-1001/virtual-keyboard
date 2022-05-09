import { store } from '../store';
import { keyRender } from './keyRender';

const body = document.querySelector('body');

const createElem = (tag, className, text, attr) => {
  const elem = document.createElement(tag);
  elem.classList.add(className);
  elem.textContent = text;
  if (attr) {
    elem.setAttribute(attr.name, attr.value);
    elem.setAttribute(attr.rows, attr.count);
  }
  return elem;
};

export const uniqSize = (keys) => {
  keys.forEach((key) => {
    if (key.getAttribute('data-keyName') === 'Backspace') key.classList.add('backspace');
    if (key.getAttribute('data-keyName') === 'Delete') key.classList.add('del');
    if (key.getAttribute('data-keyName') === 'Enter') key.classList.add('enter');
    if (key.getAttribute('data-keyName') === 'Space') key.classList.add('space');
    if (key.getAttribute('data-keyName') === 'ShiftLeft') key.classList.add('shift-left');
    if (key.getAttribute('data-keyName') === 'ShiftRight') key.classList.add('shift-right');
    if (key.getAttribute('data-keyName') === 'Tab') key.classList.add('tab');
    if (key.getAttribute('data-keyName') === 'CapsLock') key.classList.add('caps-lock');
    if (key.getAttribute('data-keyName') === 'ControlLeft') key.classList.add('ctrl-left');
  });
};

export const mainRender = () => {
  const container = createElem('div', 'container', '');
  const formInner = createElem('div', 'form__inner', '');
  const formLeftDecoration = createElem('div', 'form__left-decoration', '');
  const formRightDecoration = createElem('div', 'form__right-decoration', '');
  const formCirclDecoration = createElem('div', 'form__circl-decoration', '');
  const form = createElem('div', 'form');
  const textarea = createElem('textarea', 'form__textarea', '', {
    name: 'name',
    value: 'text',
    rows: 'rows',
    count: '8',
  });
  const formButtonsInner = createElem('div', 'form__buttons-inner', '');
  const textInner = createElem('div', 'text', '');
  const textP1 = createElem('p', 'text-p', 'Клавиатура создана в операционной системе Windows.');
  const textP2 = createElem('p', 'text-p2', 'Для переключения языка комбинация: левыe ctrl + alt.');

  body.append(container);
  container.append(formInner, textInner);
  formInner.append(formLeftDecoration, formRightDecoration, formCirclDecoration, form);
  form.append(textarea, formButtonsInner);
  const keys = keyRender();
  uniqSize(keys);
  formButtonsInner.append(...keys);
  store.keyboardKeys = [...formButtonsInner.children];
  textInner.append(textP1, textP2);
};
