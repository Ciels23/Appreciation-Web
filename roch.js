// All letter contents
const letters = {
    letter1: {
        title: "For Comforting Me",
        content: `
            <p>Dearest Best Friend,</p>
            <br>
            <p>Thank you for always being there when I'm down. You don't just listen — you understand. You know exactly what to say to make me feel better, and even in silence, your presence is enough to make things lighter.</p>
            <br>
            <p>Thank you for holding my heart when I can't hold it myself.</p>
            <br>
            <p class="signature">— With love </p>
        `
    },
    letter2: {
        title: "For Believing In Me",
        content: `
            <p>To my biggest cheerleader,</p>
            <br>
            <p>Thank you for believing in me even when I struggle to believe in myself. You see things in me that I don't see — potential, strength, and worth. When I feel small, you remind me how capable I am.</p>
            <br>
            <p>Thank you for being my confidence. Because you believe in me, I'm learning to believe too.</p>
            <br>
            <p class="signature">— Always grateful</p>
        `
    },
    letter3: {
        title: "For Staying By My Side",
        content: `
            <p>Through everything,</p>
            <br>
            <p>Thank you for staying. Not just in the good days — but especially on the hard ones. You don't walk away when things get messy. You stay. You wait. You care. And that means more to me than you'll ever know.</p>
            <br>
            <p>You are my constant. My safe place. My forever friend.</p>
            <br>
            <p class="signature">— Yours always </p>
        `
    },
    letter4: {
        title: "For Being One Call Away",
        content: `
            <p>My one call away,</p>
            <br>
            <p>It means the world to me knowing that no matter what time it is or what I'm going through — you're just one call away. I don't even have to explain much, because you already know. You answer. You show up. You care.</p>
            <br>
            <p>Thank you for being my person. I hope you know — I am also just one call away, always. </p>
            <br>
            <p class="signature">— One call away too </p>
        `
    },
    letter5: {
        title: "For Loving Me As I Am",
        content: `
            <p>Exactly as I am,</p>
            <br>
            <p>Thank you for loving me — not the perfect version, but me. The one who overthinks, who cries, who isn't always strong. You accept every part and love me deeper because of it.</p>
            <br>
            <p>You make me feel worthy just by being my friend. I love you so much, exactly as you are too. </p>
            <br>
            <p class="signature">— Your best friend</p>
        `
    },
    letter6: {
        title: " For Listening & Guiding Me",
        content: `
            <p>To my truest friend,</p>
            <br>
            <p>Thank you for always lending an ear and giving me the wisest advice — especially when things get hard between me and Pat. </p>
            <br>
            <p>Thank you for listening without judgment, for understanding both sides, and for speaking the truth gently. You help me see things more clearly when I feel lost. You remind me of what matters, and you guide me when I don't know what to do.</p>
            <br>
            <p>I don't know how I'd navigate these moments without you. Your advice doesn't just help me — it helps my relationship too. You care about my happiness, and that means everything.</p>
            <br>
            <p>Thank you for being honest, kind, and real. I appreciate you more than I can say. </p>
            <br>
            <p class="signature">— Forever grateful </p>
        `
    },
    letter7: {
        title: " For Everything — No Complaints, Just Us",
        content: `
            <p>Dearest Friend,</p>
            <br>
            <p>Thank you for listening to every problem I share — <strong>without ever complaining, without blaming, without holding anything against me</strong>. </p>
            <br>
            <p>You never make me feel like I'm too much, or that I talk too much, or that I'm a burden. You just listen. You just care. You take everything I say with kindness and never turn it against me. That is such a rare and beautiful thing.</p>
            <br>
            <p>And thank you for those <strong>late-night talks</strong> — the ones that go on until the early hours, when it's just us, talking about everything and nothing. Those moments mean the world to me. No matter how tired you are, you stay. You talk. You laugh. You listen. </p>
            <br>
            <p>Thank you for being my safe space — where I can be completely myself, at any hour, without fear of judgment. I cherish every conversation, every laugh, and every quiet moment we share.</p>
            <br>
            <p>You are truly one of a kind. I don't know what I'd do without you.</p>
            <br>
            <p class="signature">— So grateful for you </p>
        `
    }
};

// Open letter modal
function openLetter(letterId) {
    const letter = letters[letterId];
    const content = document.getElementById('letterContent');
    
    content.innerHTML = `
        <h3 style="font-family: 'Playfair Display', serif; font-size: 1.4rem; color: #a83460; margin-bottom: 20px; text-align: center;">${letter.title}</h3>
        ${letter.content}
    `;
    
    document.getElementById('letterModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    document.getElementById('letterModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close when clicking outside modal
window.onclick = function(event) {
    const modal = document.getElementById('letterModal');
    if (event.target === modal) closeModal();
};

// Create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💕';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 12 + 12) + 'px';
    heart.style.opacity = Math.random() * 0.2 + 0.08;
    heart.style.animation = `float ${Math.random() * 8 + 10}s linear infinite`;
    document.querySelector('.hearts-bg').appendChild(heart);
    setTimeout(() => heart.remove(), 20000);
}

// Start hearts
setInterval(createHeart, 3000);
for (let i = 0; i < 8; i++) {
    setTimeout(createHeart, i * 400);
}

// Enter site animation
function enterSite() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    
    welcomeScreen.classList.add('fade-out');
    
    setTimeout(() => {
        mainContent.classList.remove('hidden');
        setTimeout(() => {
            mainContent.classList.add('visible');
            document.body.style.overflow = 'auto';
        }, 100);
    }, 400);
}

// Disable scroll on welcome screen
document.body.style.overflow = 'hidden';