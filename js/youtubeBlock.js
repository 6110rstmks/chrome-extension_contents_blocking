// send videoID to aws server.
// the server program do main process, and minimize processes that occurred in browser. 

const blockChannel = async (videoId) => {
    let siteTitle = document.title

    console.log(siteTitle)

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
            "https://www.techopedia.com/"
        )
    }

}
const blockWord2 = async () => {

    let siteTitle = document.title

    console.log(siteTitle)

    const response2 = await fetch('https://witorz.com/api/return_word', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: siteTitle,
        })
    })
    
    const data2 = await response2.text()
    console.log(data2)

    if (data2 == 1) {
        window.location.replace(
            "https://www.insider.com/"
        )
        return;
    }
}

chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { videoId } = obj;

    blockChannel(videoId)

    blockWord2()

})


// -------------------------------------------------------------



