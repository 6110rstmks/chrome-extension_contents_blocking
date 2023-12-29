import {main} from "./returnURL"
let siteTitle = document.title

main()

const blockWord = async () => {

    // const response2 = await fetch(`https://{contentMain}/api/return_word`, {

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
        window.location.replace("https://www.investopedia.com/")
        alert(data2)
        return;
    }
}

blockWord()

