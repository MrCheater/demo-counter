/* eslint-disable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
import { jsdom } from 'jsdom';
/* eslint-enable */

global.document = jsdom('');
global.window = document.defaultView;

global.navigator = {
    userAgent: 'node.js'
};

window.documentRef = document;
