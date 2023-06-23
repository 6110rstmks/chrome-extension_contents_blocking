let siteTitle = document.title

    // googleの検索結果一覧の中にある埋め込みyoutube element
    // let embeddedYoutubeElement = document.querySelectorAll(".kSFuOd .rkqHyd")
let embeddedYoutubeElement = document.querySelectorAll(".kSFuOd")

let embeddedYoutubeElement2 = document.querySelectorAll(".sI5x9c")

const googleYoutubeBlock = () => {

    embeddedYoutubeElement.forEach(test => {
        test.addEventListener("click", () => {
            window.location.replace(
                "https://www.investopedia.com/"
            )
        })
    })
    
    embeddedYoutubeElement2.forEach(test => {
        test.addEventListener("click", () => {
            window.location.replace(
                "https://www.investopedia.com/"
            )
        })
    })
}


const blockWord = async () => {

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
            "https://www.investopedia.com/"
        )
        return;
    }
}

googleYoutubeBlock()
blockWord()

