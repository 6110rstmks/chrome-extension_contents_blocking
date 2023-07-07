let siteTitle = document.title

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
    if (data2 != 0) {
        window.location.replace(
            "https://www.investopedia.com/"
        )
        return;
    }
}

blockWord()

