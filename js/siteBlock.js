// chrome-extensionでmoduleを読み込む際には以下のようにする必要がある。
(async () => {
    const src = chrome.runtime.getURL("./returnURL.js");
    const contentMain = await import(src);
    contentMain.main();
  })();

let originalUrl = window.location.href
var domain = new URL(originalUrl).hostname;
domain = domain.replace("www.", "");

const blockSite = async () => {
    const response2 = await fetch('https://witorz.com/api/return_site', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: domain,
        })
    })    
    const data2 = await response2.text()
    if (data2 === "1") {
        window.location.replace(
            "https://www.forbes.com/"
        )
        return;
    }
}

blockSite()