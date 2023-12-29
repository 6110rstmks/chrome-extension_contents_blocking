// // chrome-extensionでmoduleを読み込む際には以下のようにする必要がある。
// (async () => {
//     const src = chrome.runtime.getURL("wordBlock.js");
//     const contentMain = await import(src)
//     // contentMain.main()
//   })()

'use strict';
    
const script = document.createElement('script');
script.setAttribute("type", "module");
script.setAttribute("src", chrome.runtime.getURL('wordBlock.js'));
const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
head.insertBefore(script, head.lastChild);