// send videoID to aws server.
// the server program do main process, and minimize processes that occurred in browser. 

const blockChannel = async (videoId) => {

    const response2 = await fetch('https://witorz.com/api/return_channel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            videoid: videoId,
        })
    })

    const data2 = await response2.text()

    if (data2 == 1) {
        window.location.replace(
            "https://www.investopedia.com/"
        )
    }

}

chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { videoId } = obj;

    blockChannel(videoId)

})


// -------------------------------------------------------------



