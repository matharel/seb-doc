// utils
import initHiddenEmailPhone from './utils/init-hidden-email-phone.js';
import initScrollSpy from './utils/scroll-spy.js';

// features
// import "./features/anki/index.js";
import tuneStructure from "./features/tune-structure/index.js";
import initChecklist from "./features/checklist";
import initKeybindings from "./features/keybindings/index.js";

// utils
initScrollSpy();
initHiddenEmailPhone();

// features
tuneStructure();
initChecklist();
initKeybindings();
