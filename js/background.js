chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
        const queryParameters = tab.url.split("?")[1]
        const urlParameters = new URLSearchParams(queryParameters);
        chrome.tabs.sendMessage(tabId, {
            type: "video",
            videoId: urlParameters.get("v"),
        });
    }

    if (tab.url && tab.url.includes("youtube.com/short")) {
        chrome.tabs.sendMessage(tabId, {
            type: "short",
            videoId: null,
        });
    }

    if (tab.url && tab.url.includes("youtube.com/result")) {
        const queryParameters = tab.url.split("?")[1]
        const urlParameters = new URLSearchParams(queryParameters);
        chrome.tabs.sendMessage(tabId, {
            type: "search",
            videoId: urlParameters.get("search_query"),
        });
    }
})

