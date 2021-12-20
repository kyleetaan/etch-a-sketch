const range = document.getElementById("myRange");

// range.addEventListener('change', createDivs(range.value));

function createDivs(value){
    const container = document.getElementById("container");
    console.log(value);
    const grid_size = value * value;
    console.log(`${container.offsetHeight} heightu`);
    const size = container.offsetHeight / value;
    console.log(`${typeof(container.style.height)} ${typeof(value)}`)

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    for(let i = 0; i < grid_size; i++){
        const div = document.createElement('div');
        // div.textContent = "yes";

        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.className = "divs";
        container.appendChild(div);
    }
}