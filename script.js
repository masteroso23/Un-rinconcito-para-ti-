"use strict";
/* ===== CONFIGURACIÓN: agrega tus canciones aquí (archivos dentro de assets/audio/) ===== */
const PLAYLIST = ["musica.mp3"]; // pon tu archivo en assets/audio/musica.mp3
const AUDIO_DIR = "assets/audio/";

const WELCOME = `Ola mi niña linda. :>

Hice este pequeño lugar pensando en ti.

Sé q a veces hay días en los que tenemos demasiadas cosas en la cabeza, en los que parece q no alcanza el tiempo para nada y en los que simplemente quisiéramos detenernos un ratito.

Así que quería hacerte un lugar al q pudieras venir cuando necesitaras descansar, distraerte o simplemente no pensar en nada.

No tienes que hacer nada aki, no tienes que terminar nada ni cumplir con nada.

Este lugar es tuyo preciosa.

Bienvenida a tu pekeño refugio. ♡`;

const MAIN_MSG = `Oye helmosa.

Quiero que recuerdes algo, no tienes q poder con todo siempre.

Sé que tienes muchas cosas en las q pensar y que a veces puedes llegar a sentir que todo se junta al mismo tiempo.

Pero está bien descansar, está bien tomarte tu tiempo y está bien tener días en los q simplemente no quieras hacer demasiado.

No quiero que este lugar sea otra cosa que tengas que atender.

Quiero que sea un lugar donde puedas venir a respirar un poquito, escuchar música y olvidarte por un momento de todo lo demás.

Te amo mucho mi niña :3`;

const SECRETS = [
  "Sabías ke entre tantas personitas en este mundo tuve la suerte de encontrarte a ti :>?",
  "Si pudiera volver a elegir, volvería a elegirte a ti mi pleciosa",
  "Mi parte favolita de mis días eres tú",
  "Espero que nunka dudes de lo mucho que te amo",
  "Ojalá pudiera darte un abracito cada vez que lo necesitaras",
  "Mi serendipia, qué bonita casualidad fue conocerte",
  "No tienes una idea de lo mucho que me gusta tenerte en mi vida",
  "No necesito que todos los días sean perfektos, me basta con compartirlos contigo",
  "Amol t amo m enkanta tu labo",
  "Mi lugar favorito eres tú mi princesa hermosa.",
  "Gracias por seguir construyendo cositas bonitas conmigo :>",
  "Kiero seguir compartiendo toda mi vida contigo amol.",
  "Te amo mi hadita d champu <3"
];

/* Los 100 chistes. */
const JOKES = [
  "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
  "¿Qué le dijo un techo a otro? Techo de menos.",
  "¿Qué hace una vaca cuando sale el sol? Sombra.",
  "¿Cómo se despiden los químicos? Ácido un placer.",
  "¿Qué hace un pez con corbata? Nada elegante.",
  "¿Qué le dice una pared a otra? Nos vemos en la esquina.",
  "¿Cuál es el café más peligroso? El ex-preso.",
  "¿Cómo se llama un bumerán que no vuelve? Palo.",
  "¿Qué hace un ordenador cuando tiene frío? Cierra Windows.",
  "¿Cuál es el colmo de un jardinero? Que siempre lo dejen plantado.",
  "¿Por qué el libro de matemáticas estaba triste? Porque tenía demasiados problemas.",
  "¿Qué le dijo el cero al ocho? Bonito cinturón.",
  "¿Qué hace una caja en el gimnasio? Boxeo.",
  "¿Por qué el calendario estaba preocupado? Porque tenía los días contados.",
  "¿Qué le dijo el cuchillo al tenedor? No me pinches.",
  "¿Qué hace una lámpara cuando se enfada? Se enciende.",
  "¿Qué le dijo el café al azúcar? Sin ti mi vida es amarga.",
  "¿Qué hace una escoba en una fiesta? Barre con todo.",
  "¿Por qué el reloj fue al psicólogo? Porque sentía que su tiempo se acababa.",
  "¿Cuál es el animal que más lee? El león, porque siempre está leyendo.",
  "¿Qué hace un perro con un taladro? Taladrando-guau.",
  "¿Qué pez siempre llega último? El delfín, porque va al fin.",
  "¿Qué hace un gato en una fotocopiadora? Saca miaupias.",
  "¿Por qué los pájaros no utilizan redes sociales? Porque ya tienen Twitter natural.",
  "¿Qué le dice una iguana a su hermana gemela? Somos iguanitas.",
  "¿Qué hace un pato delante de un ordenador? Busca el web-cuac.",
  "¿Qué le dice un pez a otro cuando chocan? Nada, hombre, nada.",
  "¿Qué hace una araña con un ordenador? Una página web.",
  "¿Por qué el portátil se fue de vacaciones? Porque necesitaba desconectar.",
  "¿Qué hace una impresora cuando tiene hambre? Se come unas hojas.",
  "¿Por qué el ratón del ordenador no come queso? Porque prefiere hacer clic.",
  "¿Qué le dijo una contraseña a otra? No se lo digas a nadie.",
  "¿Qué hace una persona con un sobre en la cabeza? Tiene una carta pendiente.",
  "¿Cómo se llama el primo vegetariano de Bruce Lee? Broco Lee.",
  "¿Cómo se llama el campeón japonés de buceo? Tokofondo.",
  "¿Y el segundo? Kasitoko.",
  "¿Qué le dice un árbol a otro? ¡Qué pasa, tronco!",
  "¿Qué hace una cebolla en una película triste? Llora por solidaridad.",
  "¿Por qué la escalera consiguió trabajo tan rápido? Porque tenía muchos peldaños de experiencia.",
  "¿Qué le dijo el número 1 al número 10? Para llegar donde estás tú necesito un cero a mi lado.",
  "¿Qué hace un banco cuando tiene sueño? Se va a descansar a la cuenta corriente.",
  "¿Qué le dijo una taza a otra? ¿Qué tazaciendo?",
  "¿Qué hace un semáforo cuando nadie lo mira? Cambia.",
  "¿Qué hace una persona corriendo alrededor de una universidad? Una carrera universitaria.",
  "¿Qué le dijo el mar a la playa? Nada, solo le hizo una ola.",
  "¿Qué tiene cuatro letras, a veces nueve y nunca cinco? Correcto.",
  "¿Qué le dice un signo de interrogación a otro? ¿Qué miras?",
  "¿Cómo se llama un diccionario enfadado? Uno que ha perdido las palabras.",
  "¿Qué hace una abeja cuando se peina? Se hace un panal.",
  "¿Por qué el lápiz fue al médico? Porque se encontraba sin punta.",
  "¿Qué hace un caracol sobre una tortuga? ¡Un viaje a toda velocidad!",
  "¿Qué le dijo una uva verde a una morada? ¡Respira, por favor!",
  "¿Por qué el tomate se puso rojo? Porque vio a la ensalada desnuda.",
  "¿Qué le dice un jardinero a otro? Disfrutemos mientras podamos.",
  "¿Qué hace una computadora en el mar? Navega por Internet.",
  "¿Por qué el libro de historia estaba cansado? Porque tenía muchos años encima.",
  "¿Cuál es el colmo de un electricista? Tener mala corriente.",
  "¿Qué hace un pez mago? Nada por aquí, nada por allá.",
  "¿Qué le dijo una pizza a otra? ¡Qué masa tan bonita tienes!",
  "¿Qué hace una naranja en una computadora? Se conecta a la red-naranja.",
  "¿Qué le dijo una escoba a otra? Nos vemos en el barrido.",
  "¿Por qué el pan fue al gimnasio? Para ponerse más duro.",
  "¿Qué hace un gato cuando sale de fiesta? ¡Miau-sica!",
  "¿Qué le dijo el lápiz al papel? Me tienes escrito.",
  "¿Cuál es el colmo de un fotógrafo? Que se le revele todo.",
  "¿Por qué el plátano fue al doctor? Porque no se pelaba bien.",
  "¿Qué hace un pollo mirando una computadora? Busca la página de huevo.",
  "¿Qué le dijo una nube a otra? ¡Qué tormento de vida!",
  "¿Por qué el calendario fue al médico? Porque tenía los días contados.",
  "¿Qué hace un músico en una panadería? Toca la masa.",
  "¿Cómo se llama el campeón de natación de los peces? Nada-dor.",
  "¿Por qué el fantasma no miente? Porque se le ve a través.",
  "¿Qué hace una vaca en un terremoto? Leche agitada.",
  "¿Qué le dijo una silla a otra? ¡Qué sentada nos dimos!",
  "¿Cuál es el colmo de un astronauta? Tener los pies en la Tierra.",
  "¿Por qué el teléfono fue al psicólogo? Porque tenía problemas de comunicación.",
  "¿Qué hace un caramelo en el gimnasio? Se pone en forma de dulce.",
  "¿Qué le dijo una puerta a otra? Te veo en el marco.",
  "¿Por qué el hielo nunca discute? Porque siempre se derrite.",
  "¿Qué hace un libro debajo de la cama? Sueña con una buena historia.",
  "¿Cuál es el animal más antiguo? La cebra, porque está en blanco y negro.",
  "¿Qué hace una gallina en una biblioteca? Busca un libro de huevos.",
  "¿Qué le dijo el sol a la luna? ¡De noche me haces falta!",
  "¿Por qué el ordenador fue al médico? Porque tenía un virus.",
  "¿Qué hace una papa cuando tiene frío? Se pone una chaqueta de puré.",
  "¿Qué le dijo el tenedor a la sopa? ¡Me tienes hasta los dientes!",
  "¿Por qué el reloj no fue a la fiesta? Porque no tenía tiempo.",
  "¿Qué hace un pez en el cine? Ve una película de acción submarina.",
  "¿Cómo se llama un perro que hace magia? Labracadabrador.",
  "¿Qué le dijo el ascensor a la escalera? Tú siempre me dejas abajo.",
  "¿Por qué el árbol no fue a la escuela? Porque ya tenía muchas ramas de conocimiento.",
  "¿Qué hace un mosquito en una fiesta? Pica la música.",
  "¿Qué le dijo una bombilla a otra? ¡Me haces brillar!",
  "¿Cuál es el colmo de un peluquero? Perder el hilo de la conversación.",
  "¿Por qué el esqueleto no fue a la fiesta? Porque no tenía cuerpo para ir.",
  "¿Qué hace una fresa cuando está triste? Se pone roja de vergüenza.",
  "¿Qué le dijo el agua al vaso? ¡Contigo me siento llena!",
  "¿Por qué el zapato estaba cansado? Porque llevaba todo el día trabajando de pie.",
  "¿Qué hace una rana en una computadora? Salta de ventana en ventana.",
  "¿Qué le dijo un globo a otro en el desierto? Cuidado con el cactusssssss."
];
const JOKE_BTNS = ["Otlo", "Esta olible dame otlo", "Ya kallate yarciano q olibles"];
const JOKE_INTRO = "Jejej kieres un poko de mis bromas glaciosas?";
const JOKE_END = "Jejeje ya no tengo más pipipi, tendré ke investigar otlos 100 para ti";

const EXPS = [
  { id: "Necesito un abrazo", mood: "warm", html: `<div class="hug">🫂</div>Ven aki mi niña te mando el abrazo más grandote del universo, de esos que duran mucho y que no necesitan decir absolutamente nada ⊂((・▽・))⊃` },
  { id: "Hoy fue un día difícil", mood: "warm", html: `Ay mi corazon, rimero que nada, quiero que sepas que estoy muy orgulloso de ti.

No todos los días tienen que salir bien y no todos los días tienes que estar al 100 vade

Descansa un poquito vade amol, mañana será otro día y espero uno mucho mejor :>
Te amo labona <3` },
  { id: "Estoy estresada", mood: "calm", fn: stress },
  { id: "Quiero sonreír", mood: "warm", fn: jokes },
  { id: "Necesito recordar algo", mood: "warm", html: `Ola mi niña.

Solamente paso a rekordarte que te amo muchísimo.

Ke eres una personita maravillosa y que me siento muy afortunado de tenerte en mi vida.

No importa ke tan complicado esté el día, nunca dudes de lo mucho que significas para mí.

Te amo mi Jarciana preciosa <3` },
  { id: "No quiero hacer nada", mood: "calm", html: `Entonces no hagamos nada helmosa.

Qudate un latito, escucha musik y deskansa.

También mereces disfrutar de no hacer absolutamente nada :>` },
  { id: "Estoy feliz :>", mood: "happy", html: `Q MENO MI NIÑA LINDA :>

Me enkanta saber que estás feliz, espero que tengas muchísimos días así mi preciosa.

Disfruta mucho tu día, sonríe muchisimo y nunka olvides lo maravillosa que eres.

T mando muchísimos besitos mi cielo (〃ﾟ3ﾟ〃)` },
  { id: "Tengo sueñito", mood: "sleepy", html: `A mimir mi niña hermosa.

Espero ke descanses muchísimo y ke sueñes conmigo

T doy tus abrazitos y besitos de menas noches ⊂((・▽・))⊃ (〃ﾟ3ﾟ〃)

T doy tu bendicion, en el nombre del padre del hijo del espirtu santo amen miamol

T dejo la puerta abierta korazon, q Diosito, itachi, cristiano y yoongi y protegan en la nochecita amol

Menas dinonoches madesaurio

Te amo muchísimo mi preciosa, baissss <3` }
];

const $ = s => document.querySelector(s);
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
/* Solo se guardan: música, volumen y mensajes descubiertos. Nunca estados de ánimo. */
let timers = [];
const later = (f, ms) => { const t = setTimeout(f, ms); timers.push(t); return t; };
const clearAll = () => { timers.forEach(clearTimeout); timers = []; };

/* ---------- Pantallas ---------- */
function show(id) {
  clearAll();
  ["welcome", "room", "menu", "exp", "coll"].forEach(s => $("#" + s).classList.toggle("hidden", s !== id));
  document.body.className = "";
  window.scrollTo(0, 0);
}

/* ---------- Lluvia (canvas) ---------- */
(function rain() {
  const c = $("#rain"), x = c.getContext("2d");
  let drops = [];
  const size = () => { c.width = innerWidth; c.height = innerHeight; drops = Array.from({ length: Math.min(160, Math.floor(innerWidth / 6)) }, () => ({ x: Math.random() * c.width, y: Math.random() * c.height, l: 10 + Math.random() * 14, v: 6 + Math.random() * 6 })); };
  size(); addEventListener("resize", size);
  (function tick() {
    x.clearRect(0, 0, c.width, c.height); x.strokeStyle = "rgba(170,195,225,.6)"; x.beginPath();
    drops.forEach(d => { x.moveTo(d.x, d.y); x.lineTo(d.x - 2, d.y + d.l); d.y += d.v; if (d.y > c.height) { d.y = -20; d.x = Math.random() * c.width; } });
    x.stroke(); requestAnimationFrame(tick);
  })();
  const dust = $("#dust");
  for (let i = 0; i < 14; i++) { const p = document.createElement("i"); p.style.left = Math.random() * 100 + "%"; p.style.animationDuration = 12 + Math.random() * 14 + "s"; p.style.animationDelay = -Math.random() * 20 + "s"; dust.appendChild(p); }
})();

/* ---------- Audio ---------- */
let audio = null, idx = 0, musicOn = store.get("musicOn", true), vol = store.get("musicVol", 0.5), started = false;
let fadeT;
function fade(to, ms, done) {
  clearInterval(fadeT); if (!audio) return;
  const step = (to - audio.volume) / (ms / 50);
  fadeT = setInterval(() => {
    const v = audio.volume + step;
    if ((step > 0 && v >= to) || (step <= 0 && v <= to)) { audio.volume = Math.max(0, Math.min(1, to)); clearInterval(fadeT); done && done(); } else audio.volume = Math.max(0, Math.min(1, v));
  }, 50);
}
function playTrack() {
  if (!PLAYLIST.length) return;
  audio = audio || new Audio();
  audio.src = AUDIO_DIR + PLAYLIST[idx % PLAYLIST.length]; audio.volume = 0;
  audio.onended = () => { idx++; playTrack(); };
  audio.onerror = () => { if (PLAYLIST.length > 1) { idx++; later(playTrack, 500); } };
  audio.ontimeupdate = () => { if (audio.duration && audio.duration - audio.currentTime < 2 && audio.volume > 0.05 && musicOn) fade(0, 1800); };
  audio.play().then(() => musicOn && fade(vol, 1500)).catch(() => {});
}
function setMusicBtn() { $("#musicBtn").textContent = musicOn && started ? "Pausar" : "Escuchar"; }
function toggleMusic() {
  musicOn = !musicOn; store.set("musicOn", musicOn);
  if (!audio || !started) { started = true; musicOn = true; store.set("musicOn", true); playTrack(); }
  else if (musicOn) { audio.play().catch(() => {}); fade(vol, 800); }
  else fade(0, 600, () => audio.pause());
  setMusicBtn();
}
/* Efectos discretos con WebAudio (sin archivos) */
let ac = null;
function blip(f) {
  try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); const o = ac.createOscillator(), g = ac.createGain();
    o.frequency.value = f; o.type = "sine"; g.gain.value = 0.03; o.connect(g); g.connect(ac.destination); o.start(); g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.5); o.stop(ac.currentTime + 0.5); } catch (e) {}
}


/* ---------- Ambiente sintético (lluvia y noche, sin archivos) ---------- */
const amb = { rain: store.get("rainOn", true), night: store.get("nightOn", true), vol: store.get("ambVol", 0.5), rg: null, ng: null, on: false };
function ambGains() {
  if (!amb.rg) return;
  amb.rg.gain.value = amb.rain ? amb.vol * 0.25 : 0;
  amb.ng.gain.value = amb.night ? amb.vol * 0.05 : 0;
  $("#rainBtn").textContent = amb.rain ? "🌧️ Lluvia: sí" : "🌧️ Lluvia: no";
  $("#nightBtn").textContent = amb.night ? "🌙 Noche: sí" : "🌙 Noche: no";
}
function startAmbient() {
  if (amb.on) return;
  try {
    ac = ac || new (window.AudioContext || window.webkitAudioContext)(); ac.resume();
    const buf = ac.createBuffer(1, ac.sampleRate * 3, ac.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const src = ac.createBufferSource(); src.buffer = buf; src.loop = true;
    const f = ac.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = 1500; f.Q.value = 0.4;
    amb.rg = ac.createGain(); src.connect(f); f.connect(amb.rg); amb.rg.connect(ac.destination); src.start();
    amb.ng = ac.createGain(); const o = ac.createOscillator(), o2 = ac.createOscillator(), lfo = ac.createOscillator(), lg = ac.createGain();
    o.type = o2.type = "sine"; o.frequency.value = 98; o2.frequency.value = 147; lfo.frequency.value = 0.08; lg.gain.value = 0.4;
    lfo.connect(lg); lg.connect(amb.ng.gain); o.connect(amb.ng); o2.connect(amb.ng); amb.ng.connect(ac.destination);
    o.start(); o2.start(); lfo.start(); amb.on = true; ambGains();
  } catch (e) {}
}
$("#rainBtn").onclick = () => { startAmbient(); amb.rain = !amb.rain; store.set("rainOn", amb.rain); ambGains(); };
$("#nightBtn").onclick = () => { startAmbient(); amb.night = !amb.night; store.set("nightOn", amb.night); ambGains(); };
$("#ambVol").value = amb.vol;
$("#ambVol").oninput = e => { amb.vol = +e.target.value; store.set("ambVol", amb.vol); ambGains(); };

/* ---------- Habitación ---------- */
const found = () => store.get("found", []);
function buildSky() {
  const sky = $("#sky"); sky.innerHTML = "";
  for (let i = 0; i < 40; i++) { const s = document.createElement("span"); s.className = "st"; s.textContent = "·"; s.style.cssText = `left:${Math.random() * 95}%;top:${Math.random() * 90}%;animation-delay:${Math.random() * 3}s;pointer-events:none`; sky.appendChild(s); }
  SECRETS.forEach((m, i) => {
    const b = document.createElement("button"); b.className = "st" + (found().includes(i) ? " found" : ""); b.textContent = "★"; b.setAttribute("aria-label", "Estrella");
    b.style.left = 6 + (i % 5) * 18 + (i % 2) * 4 + "%"; b.style.top = 8 + Math.floor(i / 5) * 28 + (i % 3) * 5 + "%";
    b.onclick = () => openSecret(i, b); sky.appendChild(b);
  });
}
function openSecret(i, b) {
  const f = found(); if (!f.includes(i)) { f.push(i); store.set("found", f); b.classList.add("found"); }
  blip(660 + i * 20); $("#secretText").textContent = SECRETS[i]; $("#secret").classList.remove("hidden");
}
function enterRoom() { show("room"); setMusicBtn(); }

/* ---------- Experiencias ---------- */
function openExp(e) {
  show("exp"); document.body.className = e.mood;
  const box = $("#expBody"); box.innerHTML = "";
  if (e.fn) e.fn(box); else box.innerHTML = e.html;
}
function stress(box) {
  box.innerHTML = `<p>Respira un pokito mi niña.

No tienes que resolver las siguientes diez cosas en este preciso instante.

Vamos de una en una vade

Poquito a poquito también se llega muy lejos. No te me agobies tanto mi preciosa.

T mando todo mi cariño mi cielo q juntos salimos de esta, t dediko un pedito</p><button class="btn" id="goBreath">Continuar</button>`;
  $("#goBreath").onclick = () => {
    box.innerHTML = `<p>Avel mi niña, vamos a tomarnos un ratito para nosotros vade?

No tienes que pensar en nada más por ahora, solamente respira conmigo :></p><span class="star" id="bStar">★</span><p id="bText" aria-live="polite"></p>
<label>Ritmo <input type="range" id="pace" min="3" max="8" value="4"></label>
<p>Muy bn mi corazoncito.

Rekuerda que no tienes que resolver toda tu vida hoy preciosa.

Una kosita a la vez vade.

T mando un kisesito enolme (〃ﾟ3ﾟ〃)</p>`;
    const star = $("#bStar"), txt = $("#bText"), phases = [["Toma aire despacito mi niña", 1], ["ananeeee, muy bien", 1], ["Ahora suelta el aire poquito a poquito", 0], ["Una vez más mi pleciosa", 0]];
    let i = 0;
    (function cycle() {
      const s = +$("#pace").value, p = phases[i % 4];
      txt.textContent = p[0]; star.style.transitionDuration = s + "s"; if (i % 4 === 0) star.classList.add("big"); if (i % 4 === 2) star.classList.remove("big");
      i++; later(cycle, s * 1000);
    })();
  };
}
function jokes(box) {
  let bag = [], done = false;
  const next = () => {
    if (!bag.length) { if (done) return; bag = JOKES.map((_, i) => i).sort(() => Math.random() - 0.5); }
    return JOKES[bag.pop()];
  };
  let used = 0;
  const render = () => {
    if (used >= JOKES.length) { box.innerHTML = `<p>${JOKE_END}</p>`; done = true; return; }
    const j = next(); used++;
    box.innerHTML = `<p>${j}</p><div id="menuBtns">${JOKE_BTNS.map(t => `<button class="btn jb">${t}</button>`).join("")}</div>`;
    box.querySelectorAll(".jb").forEach(b => b.onclick = render);
  };
  box.innerHTML = `<p>${JOKE_INTRO}</p><button class="btn" id="jStart">Sí</button>`;
  $("#jStart").onclick = render;
}

/* ---------- Colección ---------- */
function openColl() {
  show("coll"); const l = $("#collList"); l.innerHTML = "";
  found().sort((a, b) => a - b).forEach(i => { const d = document.createElement("div"); d.className = "card"; d.textContent = SECRETS[i]; l.appendChild(d); });
}

/* ---------- Inicio ---------- */
$("#welcomeText").textContent = WELCOME;
$("#mainMsg").textContent = MAIN_MSG;
const mb = $("#menuBtns");
EXPS.forEach(e => { const b = document.createElement("button"); b.className = "btn"; b.textContent = e.id; b.onclick = () => openExp(e); mb.appendChild(b); });
buildSky();
$("#enter").onclick = () => { startAmbient(); if (PLAYLIST.length && musicOn) { started = true; playTrack(); } enterRoom(); };
$("#goMenu").onclick = () => show("menu");
$("#goColl").onclick = openColl;
$("#goRoom").onclick = enterRoom;
$("#musicBtn").onclick = toggleMusic;
$("#radio").onclick = toggleMusic;
document.querySelectorAll(".back").forEach(b => b.onclick = enterRoom);
$("#secretClose").onclick = () => $("#secret").classList.add("hidden");
$("#lamp").onclick = () => { document.querySelector(".scene").classList.toggle("dim"); blip(440); };
$("#cat").onclick = e => { e.currentTarget.classList.add("go"); blip(520); setTimeout(() => $("#cat").classList.remove("go"), 700); };
$("#env").onclick = () => { const f = found(), rest = SECRETS.map((_, i) => i).filter(i => !f.includes(i)); openSecret(rest.length ? rest[Math.floor(Math.random() * rest.length)] : f[Math.floor(Math.random() * f.length)], $("#sky").querySelectorAll("button")[0]); };
