const keycodeEn = [
  {
    lowerCase: '`',
    upperCase: '~',
    code: 'Backquote',
  },
  {
    lowerCase: '1',
    upperCase: '!',
    code: 'Digit1',
  },
  {
    lowerCase: '2',
    upperCase: '@',
    code: 'Digit2',
  },
  {
    lowerCase: '3',
    upperCase: '#',
    code: 'Digit3',
  },
  {
    lowerCase: '4',
    upperCase: '$',
    code: 'Digit4',
  },
  {
    lowerCase: '5',
    upperCase: '%',
    code: 'Digit5',
  },
  {
    lowerCase: '6',
    upperCase: '^',
    code: 'Digit6',
  },
  {
    lowerCase: '7',
    upperCase: '&',
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
    lowerCase: 'q',
    upperCase: 'Q',
    code: 'KeyQ',
  },
  {
    lowerCase: 'w',
    upperCase: 'W',
    code: 'KeyW',
  },
  {
    lowerCase: 'e',
    upperCase: 'E',
    code: 'KeyE',
  },
  {
    lowerCase: 'r',
    upperCase: 'R',
    code: 'KeyR',
  },
  {
    lowerCase: 't',
    upperCase: 'T',
    code: 'KeyT',
  },
  {
    lowerCase: 'y',
    upperCase: 'Y',
    code: 'KeyY',
  },
  {
    lowerCase: 'u',
    upperCase: 'U',
    code: 'KeyU',
  },
  {
    lowerCase: 'i',
    upperCase: 'I',
    code: 'KeyI',
  },
  {
    lowerCase: 'o',
    upperCase: 'O',
    code: 'KeyO',
  },
  {
    lowerCase: 'p',
    upperCase: 'P',
    code: 'KeyP',
  },
  {
    lowerCase: '[',
    upperCase: '{',
    code: 'BracketLeft',
  },
  {
    lowerCase: ']',
    upperCase: '}',
    code: 'BracketRight',
  },
  {
    lowerCase: '\\',
    upperCase: '|',
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
    lowerCase: 'a',
    upperCase: 'A',
    code: 'KeyA',
  },
  {
    lowerCase: 's',
    upperCase: 'S',
    code: 'KeyS',
  },
  {
    lowerCase: 'd',
    upperCase: 'D',
    code: 'KeyD',
  },
  {
    lowerCase: 'f',
    upperCase: 'F',
    code: 'KeyF',
  },
  {
    lowerCase: 'g',
    upperCase: 'G',
    code: 'KeyG',
  },
  {
    lowerCase: 'h',
    upperCase: 'H',
    code: 'KeyH',
  },
  {
    lowerCase: 'j',
    upperCase: 'J',
    code: 'KeyJ',
  },
  {
    lowerCase: 'k',
    upperCase: 'K',
    code: 'KeyK',
  },
  {
    lowerCase: 'l',
    upperCase: 'L',
    code: 'KeyL',
  },
  {
    lowerCase: ';',
    upperCase: ':',
    code: 'Semicolon',
  },
  {
    lowerCase: "'",
    upperCase: '"',
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
    lowerCase: 'z',
    upperCase: 'Z',
    code: 'KeyZ',
  },
  {
    lowerCase: 'x',
    upperCase: 'X',
    code: 'KeyX',
  },
  {
    lowerCase: 'c',
    upperCase: 'C',
    code: 'KeyC',
  },
  {
    lowerCase: 'v',
    upperCase: 'V',
    code: 'KeyV',
  },
  {
    lowerCase: 'b',
    upperCase: 'B',
    code: 'KeyB',
  },
  {
    lowerCase: 'n',
    upperCase: 'N',
    code: 'KeyN',
  },
  {
    lowerCase: 'm',
    upperCase: 'M',
    code: 'KeyM',
  },
  {
    lowerCase: ',',
    upperCase: '<',
    code: 'Comma',
  },
  {
    lowerCase: '.',
    upperCase: '>',
    code: 'Period',
  },
  {
    lowerCase: '/',
    upperCase: '?',
    code: 'Slash',
  },
  {
    lowerCase: '△',
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
    lowerCase: '◁',
    upperCase: null,
    code: 'ArrowLeft',
  },
  {
    lowerCase: '▽',
    upperCase: null,
    code: 'ArrowDown',
  },
  {
    lowerCase: '▷',
    upperCase: null,
    code: 'ArrowRight',
  },
];

export default keycodeEn;
