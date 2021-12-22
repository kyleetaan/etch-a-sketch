
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
        const divs = document.createElement('div');
        // div.textContent = "yes";
        divs.style.width = `${size}px`;
        divs.style.height = `${size}px`;
        divs.className = "cell";
        container.appendChild(divs);
    }
}

function applyBlack(node) {
    node.className = "draw-black";
}

const cells = document.querySelectorAll('.cell');
    
cells.forEach(cell => cell.addEventListener('mouseenter', applyBlack(cell)));