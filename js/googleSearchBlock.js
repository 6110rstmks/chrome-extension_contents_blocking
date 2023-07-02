let embeddedYoutubeElements = document.querySelectorAll(".kSFuOd")

let embeddedYoutubeElements2 = document.querySelectorAll(".sI5x9c")

let siteTitleElements = document.querySelectorAll(".LC20lb, .MBeuO, .DKV0Md")

    // googleの検索結果一覧の中にある埋め込みyoutube element
    // let embeddedYoutubeElement = document.querySelectorAll(".kSFuOd .rkqHyd")
const googleYoutubeBlock = () => {

    embeddedYoutubeElements.forEach(youtubeElement => {
        youtubeElement.addEventListener("click", () => {
            window.location.replace(
                "https://www.investopedia.com/"
            )
        })
    })
    
    embeddedYoutubeElements2.forEach(youtubeElement => {
        youtubeElement.addEventListener("click", () => {
            window.location.replace(
                "https://www.news.google.com/"
            )
        })
    })
}

// 
const clickSiteTitleCheck = () => {
    siteTitleElements.forEach(siteElement => {
        siteElement.addEventListener("mouseover", async () => {
            let siteTitle = siteElement.textContent

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
        
            if (data2 == 1) {
                window.location.replace(
                    "https://www.news.google.com/"
                )
                return;
            }
        })
    })
}

clickSiteTitleCheck()
googleYoutubeBlock()
