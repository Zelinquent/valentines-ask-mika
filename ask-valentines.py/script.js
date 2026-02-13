const envelope = document.getElementById("envelope");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiPieces = [];
let yesSize = 10;

// Open envelope
envelope.addEventListener("click", () => {
    envelope.classList.toggle("open");
});

// YES CLICK
yesBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    launchConfetti();
    startHeartBalloons();

    // Create full-length paper
    const fullLetter = document.createElement("div");
    fullLetter.classList.add("full-letter");
    fullLetter.innerHTML = `
        <h1 style="color:#c9184a; text-align:center;">YAYYYY YOU SAID YESYESYESYESYES!!! 💖</h1>
        <p>
            My Pretty Mikaela,<br><br>
            I LOVE YOU I LOVE YOU I LOVE YOU!!!!! I just want you to know how much you mean to me. Every time I see your pretty face, your mesmerizing eyes, your sosososso pretty lips, and your supa nice slim muscular body, I fall in love with you even more. You’re not just gorgeous, you’re my garden warden, my safe place, and the most amazing person in the whole wide world.<br><br>
            I love you more than words can say, and I’m so grateful to have you in my life. You make every day brighter, sweeter, and better just by being you. I can’t wait to make more memories with you like dates n hangouts n mwa n also i will forever keep loving you. Forever n ever n ever n ever!!!<br><br>
            All my love,<br>
            The Ace, Top 1, Main Character, Lightning Mcqueen, Your boyfriend, SUNMIN E. KWONNNNNN!!!!!!!<br><br>
            <strong>HAPPY VALENTINES DAY MY LOVE!!!</strong>
        </p>
    `;

    document.body.appendChild(fullLetter);

    // Slide down after appending
    setTimeout(() => {
        fullLetter.style.top = "5%"; // slide into view
    }, 100);
});




// NO RUNS AWAY
noBtn.addEventListener("mouseover", (e) => {
    e.stopPropagation();

    const area = document.querySelector(".buttons");
    const rect = area.getBoundingClientRect();

    const maxX = rect.width - noBtn.offsetWidth;
    const maxY = rect.height - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    yesSize += 2;
    yesBtn.style.fontSize = yesSize + "px";
});


// Floating flowers
function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("pixel-flower");
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.top = window.innerHeight + "px";
    flower.style.position = "fixed";
    document.body.appendChild(flower);

    setTimeout(() => flower.remove(), 5000);
}

setInterval(createFlower, 600);

// Confetti
function launchConfetti() {
    for (let i = 0; i < 150; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 8,
            speed: Math.random() * 3 + 2,
            color: ["#ff4d6d", "#ff99c8", "#ffccd5", "#c9184a"][Math.floor(Math.random()*4)]
        });
    }
    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiPieces.forEach((p, i) => {
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        p.y += p.speed;

        if (p.y > canvas.height) {
            confettiPieces.splice(i, 1);
        }
    });
    if (confettiPieces.length > 0) {
        requestAnimationFrame(animateConfetti);
    }
}

function startHeartBalloons() {
    setInterval(() => {
        const balloon = document.createElement("div");
        balloon.classList.add("pixel-balloon");

        balloon.style.left = Math.random() * window.innerWidth + "px";
        balloon.style.bottom = "0px";

        document.body.appendChild(balloon);

        setTimeout(() => balloon.remove(), 6000);
    }, 400);
}
