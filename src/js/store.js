import capsKey from './data/capsKey';
import mainKeycode from './data/mainKeycode';

export const store = {
  keyboardKeys: [],
  lang: mainKeycode.keyCodeEn,
  caps: capsKey.capsEn,
  pressed: new Set(),
};
