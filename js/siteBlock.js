let url = window.location.href

url = url.replace(/^https?:\/\//, '')

const blockSite = async () => {

    const response2 = await fetch('https://witorz.com/api/return_site', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: url,
        })
    })
    
    const data2 = await response2.text()
    console.log(data2)

    if (data2 == 1) {
        window.location.replace(
            "https://www.forbes.com/"
        )
        return;
    }
}

blockSite()