import '../normalize.css';
import '../styles.scss';
import { keyClick, keyClickUp } from './keyClick';
import { onKeyDown } from './keyDown';
import { onKeyUp } from './keyUp';
import { mainRender } from './render/mainRender';

document.addEventListener('DOMContentLoaded', () => {
  mainRender();
  const formButtonsInner = document.querySelector('.form__buttons-inner');
  formButtonsInner.addEventListener('mousedown', keyClick);
  formButtonsInner.addEventListener('mouseup', keyClickUp);
  formButtonsInner.addEventListener('mousemove', keyClickUp);
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  document.querySelector('.form__textarea').focus();
});
