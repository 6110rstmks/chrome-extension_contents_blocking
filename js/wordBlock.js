let siteTitle = document.title


const blockWord = async (videoId) => {

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
        window.location.assign(
            "https://www.investopedia.com/"
        )
        return;
    }
}

blockWord()
