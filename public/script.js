const dinoBtn = document.querySelector("#dinoBtn");
const dinoName = document.querySelector("#dinoName");
const img = document.querySelector("img");
/*EVENT LISTENERS*/

dinoBtn.addEventListener('click',() => {
    getDinoName();
    getDinoImage();
});

/* FUNCTIONS */

/* from server to client*/
async function getDinoName() {
    const dinoResponse = await fetch('/dinoname');
    const data = await dinoResponse.json();
    let dinoNames = data[0].join(' ');
    dinoName.innerText = `${dinoNames}`;
}

async function getDinoImage() {
    const dinoImageResponse = await fetch('/dinoimage');
    const data = await dinoImageResponse.json();
    const dinoImageData = data.value[Math.floor(Math.random() * data.value.length)];
    const dinoImageUrl = dinoImageData.thumbnailUrl;
    const altName = dinoImageData.name;

    if(document.querySelector("#dinoImg") != null) document.querySelector("#dinoImg").remove();
    let img = document.createElement('img');
    img.src = dinoImageUrl;
    img.alt = altName;
    img.id = 'dinoImg';
    document.querySelector('.dino-content').appendChild(img);

}