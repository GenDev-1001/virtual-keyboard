const keycodeRu = [
  {
    lowerCase: 'ё',
    upperCase: 'Ё',
    code: 'Backquote',
  },
  {
    lowerCase: '1',
    upperCase: '!',
    code: 'Digit1',
  },
  {
    lowerCase: '2',
    upperCase: '"',
    code: 'Digit2',
  },
  {
    lowerCase: '3',
    upperCase: '№',
    code: 'Digit3',
  },
  {
    lowerCase: '4',
    upperCase: ';',
    code: 'Digit4',
  },
  {
    lowerCase: '5',
    upperCase: '%',
    code: 'Digit5',
  },
  {
    lowerCase: '6',
    upperCase: ':',
    code: 'Digit6',
  },
  {
    lowerCase: '7',
    upperCase: '?',
    code: 'Digit7',
  },
  {
    lowerCase: '8',
    upperCase: '*',
    code: 'Digit8',
  },
  {
    lowerCase: '9',
    upperCase: '(',
    code: 'Digit9',
  },
  {
    lowerCase: '0',
    upperCase: ')',
    code: 'Digit0',
  },
  {
    lowerCase: '-',
    upperCase: '_',
    code: 'Minus',
  },
  {
    lowerCase: '=',
    upperCase: '+',
    code: 'Equal',
  },
  {
    lowerCase: 'Backspace',
    upperCase: null,
    code: 'Backspace',
  },
  {
    lowerCase: 'Tab',
    upperCase: null,
    code: 'Tab',
  },
  {
    lowerCase: 'й',
    upperCase: 'Й',
    code: 'KeyQ',
  },
  {
    lowerCase: 'ц',
    upperCase: 'Ц',
    code: 'KeyW',
  },
  {
    lowerCase: 'у',
    upperCase: 'У',
    code: 'KeyE',
  },
  {
    lowerCase: 'к',
    upperCase: 'К',
    code: 'KeyR',
  },
  {
    lowerCase: 'е',
    upperCase: 'Е',
    code: 'KeyT',
  },
  {
    lowerCase: 'н',
    upperCase: 'Н',
    code: 'KeyY',
  },
  {
    lowerCase: 'г',
    upperCase: 'Г',
    code: 'KeyU',
  },
  {
    lowerCase: 'ш',
    upperCase: 'Ш',
    code: 'KeyI',
  },
  {
    lowerCase: 'щ',
    upperCase: 'Щ',
    code: 'KeyO',
  },
  {
    lowerCase: 'з',
    upperCase: 'З',
    code: 'KeyP',
  },
  {
    lowerCase: 'х',
    upperCase: 'Х',
    code: 'BracketLeft',
  },
  {
    lowerCase: 'ъ',
    upperCase: 'Ъ',
    code: 'BracketRight',
  },
  {
    lowerCase: '\\',
    upperCase: '/',
    code: 'Backslash',
  },
  {
    lowerCase: 'Del',
    upperCase: null,
    code: 'Delete',
  },
  {
    lowerCase: 'Caps Lock',
    upperCase: null,
    code: 'CapsLock',
  },
  {
    lowerCase: 'ф',
    upperCase: 'Ф',
    code: 'KeyA',
  },
  {
    lowerCase: 'ы',
    upperCase: 'Ы',
    code: 'KeyS',
  },
  {
    lowerCase: 'в',
    upperCase: 'В',
    code: 'KeyD',
  },
  {
    lowerCase: 'а',
    upperCase: 'А',
    code: 'KeyF',
  },
  {
    lowerCase: 'п',
    upperCase: 'П',
    code: 'KeyG',
  },
  {
    lowerCase: 'р',
    upperCase: 'Р',
    code: 'KeyH',
  },
  {
    lowerCase: 'о',
    upperCase: 'О',
    code: 'KeyJ',
  },
  {
    lowerCase: 'л',
    upperCase: 'Л',
    code: 'KeyK',
  },
  {
    lowerCase: 'д',
    upperCase: 'Д',
    code: 'KeyL',
  },
  {
    lowerCase: 'ж',
    upperCase: 'Ж',
    code: 'Semicolon',
  },
  {
    lowerCase: 'э',
    upperCase: 'Э',
    code: 'Quote',
  },
  {
    lowerCase: 'Enter',
    upperCase: null,
    code: 'Enter',
  },
  {
    lowerCase: 'Shift',
    upperCase: null,
    code: 'ShiftLeft',
  },
  {
    lowerCase: 'я',
    upperCase: 'Я',
    code: 'KeyZ',
  },
  {
    lowerCase: 'ч',
    upperCase: 'Ч',
    code: 'KeyX',
  },
  {
    lowerCase: 'с',
    upperCase: 'С',
    code: 'KeyC',
  },
  {
    lowerCase: 'м',
    upperCase: 'М',
    code: 'KeyV',
  },
  {
    lowerCase: 'и',
    upperCase: 'И',
    code: 'KeyB',
  },
  {
    lowerCase: 'т',
    upperCase: 'Т',
    code: 'KeyN',
  },
  {
    lowerCase: 'ь',
    upperCase: 'Ь',
    code: 'KeyM',
  },
  {
    lowerCase: 'б',
    upperCase: 'Б',
    code: 'Comma',
  },
  {
    lowerCase: 'ю',
    upperCase: 'Ю',
    code: 'Period',
  },
  {
    lowerCase: '/',
    upperCase: '?',
    code: 'Slash',
  },
  {
    lowerCase: '▲',
    upperCase: null,
    code: 'ArrowUp',
  },
  {
    lowerCase: 'Shift',
    upperCase: null,
    code: 'ShiftRight',
  },
  {
    lowerCase: 'Ctrl',
    upperCase: null,
    code: 'ControlLeft',
  },
  {
    lowerCase: 'Win',
    upperCase: null,
    code: 'Win',
  },
  {
    lowerCase: 'Alt',
    upperCase: null,
    code: 'AltLeft',
  },
  {
    lowerCase: '&nbsp',
    upperCase: null,
    code: 'Space',
  },
  {
    lowerCase: 'Alt',
    upperCase: null,
    code: 'AltRight',
  },
  {
    lowerCase: 'Ctrl',
    upperCase: null,
    code: 'ControlRight',
  },
  {
    lowerCase: '◄',
    upperCase: null,
    code: 'ArrowLeft',
  },

  {
    lowerCase: '▼',
    upperCase: null,
    code: 'ArrowDown',
  },
  {
    lowerCase: '►',
    upperCase: null,
    code: 'ArrowRight',
  },
];

export default keycodeRu;
