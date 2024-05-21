document.getElementById('menuOpen').addEventListener('click',() => {
    const popup = document.querySelector('.popup');
    popup.classList.toggle('showing');
    
});


/*
const showing = popup.dataset.showing === "true";
    popup.dataset.showing = showing ? "false" : "true";

    // children
    const children = popup.children;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        child.style.display = showing ? "none" : "block";
    }
*/