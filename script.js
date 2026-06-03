//input Handling
//teste
var input = {
    keys:[],
    mouse:{
        left:false,
        right:false,
        middle:false,
        x:0,
        y:0
    }
};

for(var i = 0; i < 230; i++) Input.keys.push(false);

document.addEventListener("keydown", function(event){
    input.keys[event.keyCode] = true;
});
document.addEventListener("keyup", function(event){
    input.keys[event.keyCode] = false;
});

document.addEventListener("mousedown", function(event){
    if(event.button === 0) input.mouse.left = true;
    if(event.button === 1) input.mouse.middle = true;
    if(event.button === 2) input.mouse.right = true;
});

document.addEventListener("mouseup", function(event){
    if(event.button === 0) input.mouse.left = false;
    if(event.button === 1) input.mouse.middle = false;
    if(event.button === 2) input.mouse.right = false;
});

document.addEventListener("mousemove", function(event){
    Input.mouse.x = event.clientX;
    Input.mouse.y = event.clientY;
});
var canvas = document.getElementById("canvas");
document.boddy.appendChild(canvas);
function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);
canvas.style.position = "absolute";
canvas.style.top = "0px";
canvas.style.left = "0px";
document.body.style.overflow = "hidden";

var ctx = canvas.getContext("2d");

var segmentCount = 0;

class Segment{
    constructor(parent,size,angle,stiffness){
        segmentCount++;
        this.isSegment = true;
        this.parent = parent;
        if(typeof parent.children == "object") parent.children.push(this);
        this.children = [];
        this.reAngle = angle;
        this.defAngle = angle;
        this.absAngle = parent.absAngle + angle;
        this.range = range;
        this.stiffness = stiffness;
        this.updateRelative(false,true);
}






    //Effect scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const serviceModals = document.querySelector(".service-modal");
const learnmoreBtns = document.querySelector(".learn-more-btn");
const modalCloseBtns = document.querySelector(".modal-close-btn");

var modal = function (modalClick) {
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () =>{
        modal(i);
    })
})

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
         serviceModals.forEach((modalView) => {
             modalView.classList.remove("active");
         })
    })
})