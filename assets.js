function setVersion() {
    fetch("https://ddragon.leagueoflegends.com/api/versions.json")
    .then(res => res.json())
    .then(data => (
        document.getElementById("ddragon-version").innerHTML = data[0]
        ))
}

function championImg(championName) {
    //championName must be properly capitalized
    return `https://ddragon.leagueoflegends.com/cdn/11.13.1/img/champion/${championName}.png`
}

function itemImg(version, itemNumber) {
    return `https://ddragon.leagueoflegends.com/cdn/11.13.1/img/item/${itemNumber}.png`
}

function mapImg(version, mapNumber) {
    return `https://ddragon.leagueoflegends.com/cdn/11.13.1/img/map/${mapNumber}.png`
}
function passiveImg(version, passive) {
    return `https://ddragon.leagueoflegends.com/cdn/11.13.1/img/passive/${passive}.png`
}
function spellImg(version, spell) {
    return `https://ddragon.leagueoflegends.com/cdn/11.13.1/img/spell/${spell}.png`
}
function spriteImg(version, sprite) {
    return `https://ddragon.leagueoflegends.com/cdn/11.13.1/img/sprite/${sprite}.png`
}