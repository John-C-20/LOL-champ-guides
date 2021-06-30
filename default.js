function defaultPage() {

    fetch("https://ddragon.leagueoflegends.com/cdn/11.13.1/data/en_US/champion.json/")
        .then(res => res.json())
        .then(data => Object.values(data.data).forEach(champ => {
            let list = document.getElementById("champion-list")
            let li = document.createElement("li")
            li.innerHTML = 
            `
            ${champ.name}
            <img src=${championImg(champ.id)}>
            <a href="https://u.gg/lol/champions/${champ.name}/build/">
                Summoner's Rift
            </a>
            <a href="https://u.gg/lol/champions/aram/${champ.name}-aram/">
                ARAM
            </a>
            `
            list.appendChild(li)
        }))


    // fetch("http://ddragon.leagueoflegends.com/cdn/11.13.1/data/en_US/champion.json")
    //     .then(res => res.json())
    //     .then(data => Object.keys(data.data).forEach(champ => {
    //         let list = document.getElementById("aram-list")
    //         let li = document.createElement("li")
    //         li.innerHTML = `<a href="https://u.gg/lol/champions/aram/${champ}-aram"><img src=${championImg(champ)}>${champ}</a>`
    //         list.appendChild(li)
    //     }))
}

// loads default page