

const loadingText = document.querySelector('.loading-text');
let text = '';
let currentIndex = 0;
const fullText = 'Loading...';

setInterval(() => {
    if (currentIndex <= fullText.length) {
        text = fullText.substring(0, currentIndex);
        currentIndex++;
    } else {
        text = '';
        currentIndex = 0;
    }
    loadingText.textContent = text;
}, 136);



/*interactive canvas */

const mouse = {
    x: undefined,
    y: undefined
};

const canvas = document.getElementById('loading-canvas');
const ctx = canvas.getContext('2d');
const particles = [];

class Particle {
    constructor(x, y, size,color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const speed = 1; 

        if (distance > 0) {
            const moveX = (dx / distance) * speed;
            const moveY = (dy / distance) * speed;

            this.x += moveX;
            this.y += moveY;
        }
    }
}

const init = () => {
    for (let i = 0; i < 1000; i++) {
        createNewParticle()
    }
};

function createNewParticle() {
    const size = (Math.random() * 5) + 1;
    const x = (Math.random() * (window.innerWidth - size * 2)) + size;
    const y = (Math.random() * (window.innerHeight - size * 2)) + size;
    particles.push(new Particle(x, y, size,getRandomColor()));
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const particle of particles) {
        particle.update();
        particle.draw();
    }

    createNewParticle();
    particles.shift(); //removes first element
    console.log(particles.length);
    requestAnimationFrame(animate);
};

init();
animate();


window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});


function getRandomColor() {
    const colors = [
        "#3498db", // Blue
        "#e74c3c", // Red
        "#2ecc71", // Green
        "#f39c12", // Orange
        "#9b59b6", // Purple
        "#1abc9c", // Teal
        "#e67e22", // Brown
        "#34495e"  // Dark Gray
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}