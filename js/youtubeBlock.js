// send videoID to aws server.
// the server program do main process, and minimize processes that occurred in browser. ]

const blockYoutube = async (videoId) => {
    const response2 = await fetch('https://witorz.com/api/return_youtube', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            videoid: videoId,
        })
    })

    const data2 = await response2.text()

    if (data2 != 0) {
        window.location.replace(
            "https://www.techopedia.com/"
        )
        alert(data2)
    }

}
const blockSearch = async (searchWord) => {

    const response2 = await fetch('https://witorz.com/api/return_word', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: searchWord,
        })
    })
    
    const data2 = await response2.text()

    if (data2 != 0) {
        window.location.replace(
            "https://www.insider.com/"
        )
        alert(data2)
        return;
    }
}

chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, videoId } = obj;
    if (type === "video") {
        blockYoutube(videoId)
    } else if (type === "search") {
        blockSearch(videoId)
    } else if (type === "short") {
        window.location.replace(
            "https://www.insider.com/"
        )
    } else if (type === "twitter") {
        console.log("ほや")
        window.location.replace(
            "https://www.insider.com/"
        )
    }

    // 関連動画非表示
    const element = document.querySelector('.style-scope.ytd-watch-next-secondary-results-renderer#items');
    element.remove()


    
})


// -------------------------------------------------------------



