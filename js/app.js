const canvas =document.querySelector("canvas");
const lineWidth =document.getElementById("line-width");
const allColor =document.getElementById("allcolor");
const colorOption =Array.from(document.getElementsByClassName("control_color"));

//3d or 2d
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 400;
ctx.lineWidth = lineWidth.value;


// // ctx.fillRect(0,0,800,200);
// ctx.rect(100,50,100,100);
// ctx.fillStyle ="red";
// ctx.fill();

// ctx.moveTo(200,200);
// ctx.lineTo(300,200);
// ctx.stroke();


//https://flatuicolors.com/

const colors =[ 
    "black",
    "white",
    "orangered",
    "yellow",
    "greenyellow",
    "skyblue",
    "dodgerblue",
    "darkorchid"
]

ctx.lineWidth = 1;


// function onClickCanvas(event){
//     ctx.beginPath();
//     ctx.moveTo(0,0);
//     const color= colors[Math.floor(Math.random()*colors.length)];
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX,event.offsetY);
//     ctx.stroke();
// }

let isPainting = false;
function onClickMove(e){
    if (isPainting) {
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.stroke();
        return;
    }

    ctx.moveTo(e.offsetX,e.offsetY);
}


function startDraw(){
    isPainting = true;
}

function cancleDraw(){
    isPainting = false;
    ctx.beginPath();
}

function onLineWidthChange(e){
    ctx.lineWidth = e.target.value;
}

function onColorChange(e){
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
}

function onClickColor(e){
    const colorValue = e.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}


// canvas.addEventListener("mousemove", onClickCanvas);
canvas.addEventListener("mousemove", onClickMove);
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", cancleDraw);
canvas.addEventListener("mouseleave", cancleDraw);

lineWidth.addEventListener("change",onLineWidthChange);
allColor.addEventListener("change",onColorChange)

colorOption.forEach((color)=>{
    color.addEventListener("click",onClickColor);
});