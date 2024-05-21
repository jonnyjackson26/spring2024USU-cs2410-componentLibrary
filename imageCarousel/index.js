
car=document.getElementById('car')

let images = ["dog.jpg","grandma.jpg","sun.jpeg","tree.jpg"]; //must be at least 3
let whichIndex=3;
let pictures=[];

//initalize the first pictures
for(let i=0; i<3; i++) {
    pic = document.createElement("img");
    pic.src=images[i];
    pic.classList.add("picture");
    pictures.push(pic);
    car.appendChild(pic);
}

setInterval(()=> {
    console.log("hi");
    removeFirstPic();
    addNextPic();
},1000);

function addNextPic() {
    pic = document.createElement("img");
    pic.src=images[whichIndex%images.length];
    whichIndex=whichIndex+1;
    pic.classList.add("picture");
    pictures.push(pic);
    car.appendChild(pic);
}

function removeFirstPic() {
    element = pictures.shift();
    element.style.left="-200px";
    element.addEventListener("transitionend", () => {
        element.parentNode.removeChild(element);
        console.log("removed");
    }, false);
}