
function createDivs(value){
    const container = document.getElementById("container");
    // console.log(value);
    const grid_size = value * value;
    // console.log(`${container.offsetHeight} heightu`);
    const size = Math.round((((container.offsetHeight - 1) / value) + Number.EPSILON) * 100) / 100;
    // console.log(size)

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    for(let i = 0; i < grid_size; i++){
        let divs = document.createElement('div');
        // div.textContent = "yes";
        divs.style.width = `${size}px`;
        divs.style.height = `${size}px`;
        divs.className = "cell";

        divs.addEventListener('mouseenter', applyBlack);
        container.appendChild(divs);
    }
}

function applyBlack() {
    this.style.backgroundColor = "black";
}

function applyWhite() {
    this.style.backgroundColor = "white";
}

function applyRainbow() {
    let randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
    this.style.backgroundColor = randomColor;
}

function applyClear() {
    const container = document.getElementById("container");
    descendants = container.getElementsByTagName('*');

    for (let i = 0; i < descendants.length; ++i){
        let e = descendants[i];
        e.style.backgroundColor = "white"; 
    }
}

function applyErase() {
    const container = document.getElementById("container");
    descendants = container.getElementsByTagName('*');

    for (let i = 0; i < descendants.length; ++i){
        let e = descendants[i];
        e.removeEventListener('mouseenter', applyBlack);
        e.removeEventListener('mouseenter', applyRainbow)
        e.addEventListener('mouseenter', applyWhite);
    }

}

function applyDraw() {
    const container = document.getElementById("container");
    descendants = container.getElementsByTagName('*');

    for (let i = 0; i < descendants.length; ++i){
        let e = descendants[i];
        e.removeEventListener('mouseenter', applyWhite);
        e.removeEventListener('mouseenter', applyRainbow)
        e.addEventListener('mouseenter', applyBlack);
    }

}

function applyDrawRainbow() {
    const container = document.getElementById("container");
    descendants = container.getElementsByTagName('*');

    for (let i = 0; i < descendants.length; ++i){
        let e = descendants[i];
        e.removeEventListener('mouseenter', applyWhite);
        e.removeEventListener('mouseenter', applyBlack);
        e.addEventListener('mouseenter', applyRainbow);
    }
}

const container = document.getElementById("container");
console.log(container.childNodes);