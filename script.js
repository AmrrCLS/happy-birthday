import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/* =========================================================
   ДАННЫЕ ДЛЯ КАРТОЧЕК (40 записей)
========================================================= */
const cardsData = [
    { title: "The Day I Found You", image: "img/4.jpg", text: "Somewhere in this enormous universe, among billions of stars and endless galaxies, I found you.\n\nAnd honestly, I think that was the most beautiful thing that ever happened to me.\n\nYou became my favorite person, my happiness, and my reason to smile. ❤️" },
    { title: "You Are My Happiness", image: "img/2.jpg", text: "Your smile can make my worst day better.\n\nYour voice is something I could listen to forever.\n\nI don't need a perfect life. I just want beautiful moments with you, little conversations, silly jokes, and memories that we will remember years from now." },
    { title: "My Favorite Person", image: "img/3.jpg", text: "I hope you always remember how special you are.\n\nYou deserve happiness, peace, love, and all the beautiful things this world can offer.\n\nAnd I hope I can be one of the reasons you smile every day." },
    { title: "Happy Birthday, My Love", image: "img/1.jpg", text: "Happy birthday, my love! ❤️\n\nI wish you endless happiness, beautiful dreams, good health, and a life full of wonderful moments.\n\nIf I could give you anything, I would give you the ability to see yourself through my eyes.\n\nYou would understand how incredibly beautiful and precious you are.\n\nI love you." },
    { title: "Forever & Always", image: "img/5.jpg", text: "No matter how many galaxies we cross, my heart will always find its way back to you." },
    { title: "Your Beauty", image: "img/6.jpg", text: "You are the most beautiful person I have ever seen, inside and out. Every time I look at you, I fall in love all over again." },
    { title: "My Safe Place", image: "img/7.jpg", text: "In a world full of chaos, you are my peace. You are my safe place, my home, and my favorite adventure." },
    { title: "Your Laugh", image: "img/8.jpg", text: "Your laugh is my favorite sound in the whole universe. I would do anything just to hear it one more time." },
    { title: "My Promise", image: "img/9.jpg", text: "I promise to stand by your side through every storm, to hold your hand through every challenge, and to love you until the stars burn out." },
    { title: "Endless Love", image: "img/10.jpg", text: "My love for you is like this galaxy — endless, beautiful, and constantly growing. You are my infinity." },
    { title: "A Thousand Stars", image: "img/11.jpg", text: "I would give you a thousand stars, but you already shine brighter than all of them combined." },
    { title: "Just Because", image: "img/12.jpg", text: "I just want to remind you that you are loved. So deeply, so endlessly, and so completely." },
    { title: "The Way You Look", image: "img/13.jpg", text: "Sometimes I catch myself just looking at you and wondering how I got so lucky." },
    { title: "My Moon", image: "img/14.jpg", text: "You are the moon to my night sky. The light that guides me when everything else is dark." },
    { title: "Our Future", image: "img/15.jpg", text: "I am so excited to build a future with you. To grow old with you, to laugh with you, and to love you more every single day." },
    { title: "Every Little Thing", image: "img/16.jpg", text: "I love every little thing about you. From the way you smile to the way you sleep. Everything." },
    { title: "My Heart is Yours", image: "img/17.jpg", text: "My heart is yours, entirely. It always has been, and it always will be." },
    { title: "Sweetest Dreams", image: "img/18.jpg", text: "I hope you dream of something beautiful tonight. And I hope I am in those dreams." },
    { title: "The Best Part", image: "img/19.jpg", text: "The best part of my day is coming home to you. You are the best part of everything." },
    { title: "I Adore You", image: "img/20.jpg", text: "I adore you. More than words could ever say. More than any galaxy could hold." },
    { title: "You Are Magic", image: "img/21.jpg", text: "There is a magic in you that I can't explain. It captures me more every single time." },
    { title: "Lucky Me", image: "img/22.jpg", text: "I am the luckiest person in the world because I get to call you mine." },
    { title: "Pure Love", image: "img/23.jpg", text: "Your love is the purest thing I have ever known. It makes me a better person." },
    { title: "Stay With Me", image: "img/24.jpg", text: "Stay with me. Not just for a moment, but for a lifetime. And maybe even longer." },
    { title: "You Are My Home", image: "img/25.jpg", text: "Home isn't a place, it's a person. And that person is you." },
    { title: "Always Thinking of You", image: "img/26.jpg", text: "You are always on my mind. When I wake up, when I work, when I go to sleep. Always you." },
    { title: "My Dream", image: "img/27.jpg", text: "My dream isn't a big house or a fancy car. My dream is just to be happy with you." },
    { title: "Every Detail", image: "img/28.jpg", text: "I love you down to every single detail. Even the ones you think are imperfections." },
    { title: "The Best Love", image: "img/29.jpg", text: "The best love is the kind that awakens the soul. That is exactly what you do to me." },
    { title: "My Forever", image: "img/30.jpg", text: "You are my forever. My forever love, my forever best friend, my forever everything." },
    { title: "Cosmic Love", image: "img/31.jpg", text: "Our love is written in the stars. It's cosmic, infinite, and unbreakable." },
    { title: "My Sunshine", image: "img/32.jpg", text: "You are my sunshine on a cloudy day. You bring light into my life." },
    { title: "Perfect Imperfections", image: "img/33.jpg", text: "I love your imperfections. They make you perfect in my eyes." },
    { title: "You Complete Me", image: "img/34.jpg", text: "I was a puzzle missing a piece until I met you. You complete me." },
    { title: "A Million Reasons", image: "img/35.jpg", text: "I have a million reasons to love you, and I'm going to spend my whole life counting them." },
    { title: "The Way You Smile", image: "img/36.jpg", text: "The way you smile makes my heart skip a beat. Every single time." },
    { title: "My Soulmate", image: "img/37.jpg", text: "You are my soulmate, my other half, the one I was destined to find." },
    { title: "You Make Me Better", image: "img/38.jpg", text: "You make me want to be a better man. You bring out the best in me." },
    { title: "Our Story", image: "img/39.jpg", text: "Our story is my favorite fairytale. And I can't wait to see how it ends." },
    { title: "You Are Enough", image: "img/40.jpg", text: "You are enough. Exactly as you are. You don't need to change a thing." }
];

/* =========================================================
   SETUP
========================================================= */
const app = document.getElementById('app');
const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-btn');
const journeyText = document.getElementById('journey-text');
const galaxyUI = document.getElementById('galaxy-ui');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const bgMusic = document.getElementById('bg-music');

let scene, camera, renderer, controls;
let galaxy, galaxyGlow, heartGroup, clickableObjects = [];
let starStreamLines, backgroundStars;
let clock = new THREE.Clock();
let journeyStarted = false;
let journeyFinished = false;
let galaxyTime = 0;
let musicStarted = false;

scene = new THREE.Scene();
scene.background = new THREE.Color(0x030008);
scene.fog = new THREE.FogExp2(0x030008, 0.0008);

camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.set(0, 0, 100);

renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.4;
app.appendChild(renderer.domElement);

controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false;
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.minDistance = 8;
controls.maxDistance = 150;
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.3;

const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);
const pinkLight = new THREE.PointLight(0xff0066, 5, 500);
pinkLight.position.set(0, 0, 0);
scene.add(pinkLight);
const purpleLight = new THREE.PointLight(0xaa00ff, 4, 500);
purpleLight.position.set(30, 20, 0);
scene.add(purpleLight);

/* =========================================================
   ТЕКСТУРЫ
========================================================= */
function createStarTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(255, 200, 255, 0.6)');
    gradient.addColorStop(1, 'rgba(255, 0, 100, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
}
const starTexture = createStarTexture();

function createEmojiTexture(emoji) {
    const canvas = document.createElement('canvas');
    canvas.width = 128; canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.font = '90px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(emoji, 64, 64);
    return new THREE.CanvasTexture(canvas);
}

/* =========================================================
   ЗВЕЗДЫ И ГАЛАКТИКА
========================================================= */
function createBackgroundStars() {
    const count = 10000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorPalette = [new THREE.Color(0xffffff), new THREE.Color(0xffb6e6), new THREE.Color(0xaa88ff), new THREE.Color(0x88ccff)];

    for (let i = 0; i < count; i++) {
        const radius = 300 + Math.random() * 1500;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        colors[i * 3] = color.r; colors[i * 3 + 1] = color.g; colors[i * 3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({ size: 0.8, map: starTexture, vertexColors: true, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false });
    backgroundStars = new THREE.Points(geometry, material);
    scene.add(backgroundStars);
}
createBackgroundStars();

function createHyperspace() {
    const count = 500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 6);
    for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 200;
        const z = -Math.random() * 2000;
        positions[i * 6] = x; positions[i * 6 + 1] = y; positions[i * 6 + 2] = z;
        positions[i * 6 + 3] = x; positions[i * 6 + 4] = y; positions[i * 6 + 5] = z + 50;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.LineBasicMaterial({ color: 0xff00aa, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending });
    starStreamLines = new THREE.LineSegments(geometry, material);
    starStreamLines.visible = false;
    scene.add(starStreamLines);
}
createHyperspace();

function createGalaxy() {
    const particleCount = 30000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const colorPink = new THREE.Color(0xff0066);
    const colorPurple = new THREE.Color(0xaa00ff);
    const colorWhite = new THREE.Color(0xffdfff);
    const colorBlue = new THREE.Color(0x6633ff);

    for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 60;
        const arm = Math.floor(Math.random() * 4);
        const armAngle = (arm / 4) * Math.PI * 2;
        const spiralAngle = radius * 0.15;
        const randomSpread = (Math.random() - 0.5) * (0.8 + radius * 0.05);
        const angle = armAngle + spiralAngle + randomSpread;
        const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 2;
        const z = Math.sin(angle) * radius + (Math.random() - 0.5) * 2;
        const y = (Math.random() - 0.5) * (1 + radius * 0.05);

        positions[i * 3] = x; positions[i * 3 + 1] = y; positions[i * 3 + 2] = z;

        let color;
        if (radius < 15) color = colorWhite.clone().lerp(colorPink, Math.random() * 0.6);
        else if (radius < 35) color = colorPink.clone().lerp(colorPurple, Math.random());
        else color = colorPurple.clone().lerp(colorBlue, Math.random() * 0.5);

        color.multiplyScalar(0.6 + Math.random() * 1.2);
        colors[i * 3] = color.r; colors[i * 3 + 1] = color.g; colors[i * 3 + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({ size: 0.4, map: starTexture, vertexColors: true, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true });
    galaxy = new THREE.Points(geometry, material);
    galaxy.visible = false;
    scene.add(galaxy);
}
createGalaxy();

function createGalaxyGlow() {
    const glowGeometry = new THREE.SphereGeometry(10, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({ color: 0xff0088, transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending, depthWrite: false });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.scale.set(1, 0.2, 1);
    glow.visible = false;
    scene.add(glow);
    return glow;
}
galaxyGlow = createGalaxyGlow();

function createStarHeart() {
    heartGroup = new THREE.Group();
    const positions = [];
    for (let i = 0; i < 3000; i++) {
        const angle = Math.random() * Math.PI * 2;
        const r = Math.random();
        const hx = 16 * Math.pow(Math.sin(angle), 3);
        const hy = 13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle);
        const scale = 0.6;
        positions.push(hx * r * scale, hy * r * scale, (Math.random() - 0.5) * 2);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const heartMaterial = new THREE.PointsMaterial({ color: 0xff0066, size: 0.6, map: starTexture, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false });
    const heartPoints = new THREE.Points(geometry, heartMaterial);
    heartGroup.add(heartPoints);
    heartGroup.position.set(0, 8, 0);
    heartGroup.userData.cardIndex = 3;
    scene.add(heartGroup);
    clickableObjects.push(heartGroup);
}
createStarHeart();

/* =========================================================
   ОБЪЕКТЫ И ТЕКСТЫ
========================================================= */
function createFloatingObjects() {
    const objects = [];

    // Стикеры
    const stickers = [
        { emoji: "🐻", index: 0, pos: [25, 5, 15] }, { emoji: "🐰", index: 1, pos: [-30, 3, -20] },
        { emoji: "🎁", index: 2, pos: [20, 4, -35] }, { emoji: "💌", index: 4, pos: [-25, 6, 35] },
        { emoji: "🐱", index: 5, pos: [15, 8, 30] }, { emoji: "🌟", index: 6, pos: [-15, 5, -40] },
        { emoji: "🍓", index: 7, pos: [35, 3, -10] }, { emoji: "🦄", index: 8, pos: [-40, 7, 5] },
        { emoji: "🎈", index: 9, pos: [10, 9, 40] }
    ];

    stickers.forEach(sticker => {
        const mat = new THREE.SpriteMaterial({ map: createEmojiTexture(sticker.emoji), transparent: true });
        const sprite = new THREE.Sprite(mat);
        sprite.scale.set(8, 8, 1);
        sprite.position.set(...sticker.pos);
        sprite.userData.cardIndex = sticker.index;
        scene.add(sprite);
        clickableObjects.push(sprite);
        objects.push(sprite);
    });

    // Записи в самой галактике
    const galaxyTexts = [
        "You are my sun", "My love", "So beautiful", "My everything", "Sweetest", 
        "My angel", "Forever", "Dream girl", "Precious", "Adorable",
        "Lucky me", "My heart", "Pure love", "Stay with me", "My home",
        "My dream", "Perfect", "My soulmate", "You make me better", "Our story",
        "I adore you", "Always yours"
    ];

    galaxyTexts.forEach((text, i) => {
        const canvas = document.createElement('canvas');
        canvas.width = 512; canvas.height = 128;
        const ctx = canvas.getContext('2d');
        ctx.font = 'bold 40px Arial';
        ctx.fillStyle = '#ffb5dc';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = '#ff0066';
        ctx.shadowBlur = 15;
        ctx.fillText(text, 256, 64);

        const texture = new THREE.CanvasTexture(canvas);
        const mat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
        const sprite = new THREE.Sprite(mat);
        sprite.scale.set(12, 3, 1);
        
        const angle = (i / galaxyTexts.length) * Math.PI * 2;
        const radius = 20 + Math.random() * 40;
        const y = (Math.random() - 0.5) * 10;
        sprite.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
        
        const cardIndex = (i + 10) % cardsData.length;
        sprite.userData.cardIndex = cardIndex;

        scene.add(sprite);
        clickableObjects.push(sprite);
        objects.push(sprite);
    });

    return objects;
}
const floatingObjects = createFloatingObjects();

/* =========================================================
   RAYCASTER
========================================================= */
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
function handleClick(event) {
    if (!journeyFinished || modal.classList.contains('show')) return;
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(clickableObjects, true);
    if (intersects.length > 0) {
        let object = intersects[0].object;
        while (object && object.userData.cardIndex === undefined) object = object.parent;
        if (object && object.userData.cardIndex !== undefined) openCard(object.userData.cardIndex);
    }
}
renderer.domElement.addEventListener('pointerdown', handleClick);

/* =========================================================
   MODAL
========================================================= */
function openCard(index) {
    const data = cardsData[index];
    if (!data) return;
    modalTitle.textContent = data.title;
    modalText.textContent = data.text;
    modalImage.src = data.image;
    modal.classList.add('show');
    controls.autoRotate = false;
}
function closeCard() {
    modal.classList.remove('show');
    controls.autoRotate = true;
}
modalClose.addEventListener('click', closeCard);
modal.addEventListener('click', (event) => { if (event.target === modal) closeCard(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeCard(); });

/* =========================================================
   JOURNEY
========================================================= */
document.addEventListener('pointerdown', () => {
    if (!musicStarted) {
        bgMusic.volume = 0.5;
        bgMusic.play().catch(err => console.log("Музыка не загрузилась:", err));
        musicStarted = true;
    }
}, { once: true });

function startJourney() {
    if (journeyStarted) return;
    journeyStarted = true;
    startButton.disabled = true;

    if (!musicStarted) {
        bgMusic.volume = 0.5;
        bgMusic.play().catch(err => console.log("Музыка не загрузилась:", err));
        musicStarted = true;
    }

    startScreen.classList.add('hide');
    journeyText.classList.add('show');
    starStreamLines.visible = true; 

    galaxy.visible = false;
    galaxyGlow.visible = false;
    heartGroup.visible = false;
    floatingObjects.forEach(obj => obj.visible = false);

    camera.position.set(0, 0, 0);
    camera.rotation.set(0, 0, 0);

    const journeyDuration = 7000;
    const startTime = performance.now();

    function journeyAnimation(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / journeyDuration, 1);
        const speed = Math.pow(progress, 3);

        camera.position.z = -speed * 1200;
        camera.position.x = Math.sin(progress * 20) * 5;
        camera.position.y = Math.cos(progress * 18) * 4;

        const positions = starStreamLines.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 6) {
            positions[i + 2] += 30 + speed * 150; 
            positions[i + 5] += 30 + speed * 150;
            if (positions[i + 2] > 10) {
                const x = (Math.random() - 0.5) * 300;
                const y = (Math.random() - 0.5) * 300;
                positions[i] = x; positions[i + 1] = y; positions[i + 2] = -2000;
                positions[i + 3] = x; positions[i + 4] = y; positions[i + 5] = -1950;
            }
        }
        starStreamLines.geometry.attributes.position.needsUpdate = true;

        if (progress < 1) {
            requestAnimationFrame(journeyAnimation);
        } else {
            arriveAtGalaxy();
        }
    }
    requestAnimationFrame(journeyAnimation);
}

function arriveAtGalaxy() {
    journeyText.classList.remove('show');
    starStreamLines.visible = false;

    galaxy.visible = true;
    galaxyGlow.visible = true;
    heartGroup.visible = true;
    floatingObjects.forEach(obj => obj.visible = true);

    camera.position.set(0, 80, 0);
    camera.lookAt(0, 0, 0);

    controls.enabled = true;
    controls.target.set(0, 0, 0);
    controls.update();

    galaxyUI.classList.add('show');
    journeyFinished = true;

    const startPosition = camera.position.clone();
    const endPosition = new THREE.Vector3(0, 60, 0);
    const zoomDuration = 2500;
    const zoomStart = performance.now();

    function zoomAnimation(now) {
        const progress = Math.min((now - zoomStart) / zoomDuration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        camera.position.lerpVectors(startPosition, endPosition, eased);
        camera.lookAt(0, 0, 0);
        if (progress < 1) requestAnimationFrame(zoomAnimation);
    }
    requestAnimationFrame(zoomAnimation);
}

startButton.addEventListener('click', startJourney);

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    galaxyTime += delta;

    if (backgroundStars) {
        backgroundStars.rotation.y += delta * 0.0008;
        backgroundStars.rotation.x += delta * 0.0002;
    }
    if (galaxy && journeyFinished) {
        galaxy.rotation.y += delta * 0.015;
    }
    if (heartGroup && heartGroup.visible) {
        const pulse = 1 + Math.sin(galaxyTime * 3) * 0.08;
        heartGroup.scale.set(pulse, pulse, pulse);
    }
    
    // Плавное покачивание кликабельных объектов (стикеров и текстов)
    clickableObjects.forEach((object) => {
        if (object !== heartGroup) {
            object.position.y += Math.sin(galaxyTime * 2 + object.position.x) * 0.01;
        }
    });

    if (galaxyGlow && galaxyGlow.visible) {
        const glowPulse = 1 + Math.sin(galaxyTime * 1.5) * 0.1;
        galaxyGlow.scale.set(glowPulse, 0.2, glowPulse);
    }
    
    if (controls.enabled) controls.update();
    renderer.render(scene, camera);
}

// Запускаем цикл анимации
animate();