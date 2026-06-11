const months = [
  { num:"01", name:"La Creación del Mundo", tag:"🌍 Apertura", virtue:"Admiración",
    areas:[
      {t:"Matemáticas",items:["Conteo 1-10 con objetos naturales","Clasificación por tamaño, color y forma","Patrones en la naturaleza","Canciones de conteo estilo ruso"]},
      {t:"Lenguaje",items:["Libro vivo: cuento de creación","Poesía: 'El mundo' — 4 versos memorizados","Narración oral: el niño recuenta","Letra Waldorf: M = Montaña"]},
      {t:"Mundo Natural",items:["Primera entrada del diario de naturaleza","Los cuatro elementos: observación directa","Plantación de semilla personal","Observar y dibujar nubes"]},
      {t:"Artes",items:["Acuarela: el cielo al amanecer","Arcilla: modelar semilla y flor","Vivaldi: Las Cuatro Estaciones"]},
      {t:"Carácter",items:["Virtud: Admiración — ver lo común como extraordinario","Gratitud diaria: 3 cosas hermosas del mundo","Ritual de cierre: 2 min de silencio"]}
    ],
    quote:'"El asombro es el inicio de la filosofía." — Aristóteles'
  },
  { num:"02", name:"Los Números Tienen Secretos", tag:"🔢 Matemáticas", virtue:"Diligencia",
    areas:[
      {t:"Matemáticas",items:["Del 1 al 20: comparación con manipulativos","Bar Modeling introductorio con dibujo","Descomposición del 10 con rekenrek","Números pares e impares","Primer problema de múltiples pasos"]},
      {t:"Lenguaje",items:["Libro vivo: El sastrecillo valiente","Poesía numérica memorizada","Letras Waldorf: S, O, L","Narración escenificada"]},
      {t:"Mundo Natural",items:["Registro de germinación semanal","Fibonacci en pétalos de flores","Insectos del jardín con lupa","¿Por qué las abejas hacen hexágonos?"]},
      {t:"Artes",items:["Formas geométricas en naturaleza","Ritmo y patrón con palmas y voz","Acuarela: amarillo + rojo = naranja"]},
      {t:"Carácter",items:["Virtud: Diligencia — el trabajo bien hecho","Historia: ¿Quién inventó el cero?","Reflexión: los números nunca cambian"]}
    ],
    quote:'"Las matemáticas son la música de la razón." — Sylvester'
  },
  { num:"03", name:"Las Palabras son Mundos", tag:"📚 Lenguaje", virtue:"Atención",
    areas:[
      {t:"Matemáticas",items:["Geometría corporal: formas con el cuerpo","Suma como juntar grupos","El número 0: diálogo filosófico","Medición informal: pies del salón"]},
      {t:"Lenguaje",items:["El flautista de Hamelín — lectura dramatizada","Poesía de García Lorca adaptada","Completa el alfabeto Waldorf","Primer dictado de estudio","Nombre propio con letras Waldorf"]},
      {t:"Mundo Natural",items:["Observar el cambio de temporada","Clasificación de hojas: forma y textura","Álbum de naturaleza del mes"]},
      {t:"Artes",items:["Arcilla: letras del nombre en 3D","Teatro de mesa con figuras de arcilla","Bach: Minueto en Sol"]},
      {t:"Carácter",items:["Virtud: Atención — solo ves lo que miras de verdad","Reflexión: ¿quién creó las palabras?","Carta de gratitud dictada"]}
    ],
    quote:'"En el principio era el Verbo." — Juan 1:1'
  },
  { num:"04", name:"El Agua que da Vida", tag:"💧 Ciencias", virtue:"Generosidad",
    areas:[
      {t:"Matemáticas",items:["Medición con líquidos: litros y fracciones","Resta concreta con agua en recipientes","Gráfica de barras del clima del mes"]},
      {t:"Lenguaje",items:["Libro vivo: El río y el mar","Poesía de Neruda — extracto","Narración en cadena","Vocabulario científico vivido"]},
      {t:"Mundo Natural",items:["Ciclo del agua: experimento con sol","Observar gotas con lupa","¿Qué pasa si no regamos 3 días?"]},
      {t:"Artes",items:["Acuarela: azules y verdes del agua","Debussy: La mer — movimiento libre","Escultura: el río en arcilla"]},
      {t:"Carácter",items:["Virtud: Generosidad — el agua da sin pedir","Reflexión: ¿quién le enseñó el camino al agua?","Proyecto: llevar plantas a la comunidad"]}
    ],
    quote:'"El agua es la fuerza motriz de toda la naturaleza." — Leonardo da Vinci'
  },
  { num:"05", name:"Los Animales son Maestros", tag:"🦋 Mundo Animal", virtue:"Cuidado",
    areas:[
      {t:"Matemáticas",items:["Simetría en figuras de animales","Conteo de 2 en 2: patas","Gráfica: ¿qué animal les gusta más?","Figuras 3D: ¿qué forma tiene un huevo?"]},
      {t:"Lenguaje",items:["Fábulas de Esopo","Poesía: descripción del animal favorito","Vocabulario: mamífero, ave, reptil","Narración comparativa"]},
      {t:"Mundo Natural",items:["Cadena alimenticia del jardín","Metamorfosis: ciclo de la mariposa","Diccionario de animales ilustrado"]},
      {t:"Artes",items:["Arcilla: escultura del animal favorito","Euritmia: moverse como animales","El Carnaval de los Animales — Saint-Saëns"]},
      {t:"Carácter",items:["Virtud: Cuidado — el que cuida lo pequeño cuida lo grande","Reflexión: ¿quién dio a cada animal lo que necesita?","Navidad: el pesebre como historia de humildad"]}
    ],
    quote:'"Los animales son una ventana a la maravilla de la creación." — John Muir'
  },
  { num:"06", name:"El Cuerpo: Máquina de Milagros", tag:"❤️ Mi Cuerpo", virtue:"Respeto",
    areas:[
      {t:"Matemáticas",items:["Medir el cuerpo: altura, envergadura","Gráfica de alturas del grupo","Contar pulsaciones × 10 segundos","Fracciones informales con silueta"]},
      {t:"Lenguaje",items:["Libro vivo de ciencias narrativo","Poesía corporal memorizada","Vocabulario anatómico: 10 palabras","Narración en 1ª persona: soy el corazón"]},
      {t:"Mundo Natural",items:["Estación de sentidos: olores, texturas, sonidos","¿Qué pasa después de correr?","Huesos: observar hueso de pollo cocido"]},
      {t:"Artes",items:["Silueta corporal: trazar y decorar","Beethoven: Para Elisa — dibujar lo que sientes","Impresiones de manos en arcilla"]},
      {t:"Carácter",items:["Virtud: Respeto — comenzar por el propio cuerpo","Reflexión: ¿quién diseñó que el ojo vea millones de colores?","Yoga matutino: el cuerpo como templo"]}
    ],
    quote:'"El cuerpo humano es la obra maestra más compleja del universo." — Darwin'
  },
  { num:"07", name:"El Cielo: Un Libro Abierto", tag:"🌟 Astronomía", virtue:"Humildad",
    areas:[
      {t:"Matemáticas",items:["Números grandes: 100, 1,000, 1,000,000","El calendario lunar","Fracciones con la Luna: llena, media, cuarto","Distancias relativas con pasos"]},
      {t:"Lenguaje",items:["Stellaluna — murciélago y astronomía","Mitología estelar: Orión, Osa Mayor","Poesía: Luna de García Lorca","Escritura: si yo fuera una estrella..."]},
      {t:"Mundo Natural",items:["Observación lunar: dibujar 4 semanas","Experimento: papel quemado con lupa","Día y noche: globo y linterna"]},
      {t:"Artes",items:["Acuarela: cielo nocturno húmedo sobre húmedo","Van Gogh: La noche estrellada — versión propia","Planetario de papel con constelaciones"]},
      {t:"Carácter",items:["Virtud: Humildad — somos pequeños y eso es maravilloso","Reflexión: el universo tiene 13,800 millones de años","Noche de estrellas con familia"]}
    ],
    quote:'"Dos cosas llenan el ánimo con admiración: el cielo estrellado sobre mí..." — Kant'
  },
  { num:"08", name:"Los Constructores del Mundo", tag:"🏛️ Historia", virtue:"Excelencia",
    areas:[
      {t:"Matemáticas",items:["Geometría en edificios","Suma y resta hasta 50 con materiales","Multiplicación intuitiva: 4 filas de 3","Planos con cuadrícula"]},
      {t:"Lenguaje",items:["Los tres cerditos — versión Grimm","Historia de Egipto narrada","Vocabulario de oficios","Proyecto: el oficio de mi familia"]},
      {t:"Mundo Natural",items:["Materiales de construcción en la naturaleza","Las abejas como arquitectas","Experimento: resistencia de materiales"]},
      {t:"Artes",items:["Construcción libre en bloques de madera","Mosaico romano con papel","Händel: Música Acuática"]},
      {t:"Carácter",items:["Virtud: Excelencia — lo que vale hacerse, vale hacerse bien","Reflexión: el hombre construye porque fue hecho a imagen de un Creador","Proyecto: reparar juguetes para donar"]}
    ],
    quote:'"La arquitectura es música congelada." — Schopenhauer'
  },
  { num:"09", name:"La Música del Universo", tag:"🎵 Música", virtue:"Perseverancia",
    areas:[
      {t:"Matemáticas",items:["Fracciones en la música: negra, corchea, redonda","Patrones rítmicos de 4 tiempos","Pitágoras y el sonido: cuerdas y notas","Gráfica: agudo, medio, grave"]},
      {t:"Lenguaje",items:["Pedro y el lobo — narración + audición","Poesía sonora con onomatopeyas","Vocabulario musical: melodía, armonía, ritmo"]},
      {t:"Mundo Natural",items:["El sonido como onda: diapasón en agua","Animales que se comunican con sonido","Construir instrumentos: tambor, flauta, xilófono"]},
      {t:"Artes",items:["Xilófono diatónico: Do Re Mi Fa Sol","Orquesta del salón estrena su primera pieza","Beethoven sordo: Sinfonía del Destino"]},
      {t:"Carácter",items:["Virtud: Perseverancia — Beethoven siguió sin oír","Reflexión: ¿quién afinó las frecuencias del universo?","Gran Concierto para familias"]}
    ],
    quote:'"La música es la aritmética del sonido." — Debussy'
  },
  { num:"10", name:"Somos el Principio", tag:"🎓 Graduación", virtue:"Valentía",
    areas:[
      {t:"Matemáticas",items:["Portafolio: el niño presenta sus mejores problemas","Olimpiada interna: 5 problemas lúdicos","Del 1 al 100: ¿dónde estamos?","Libro: los números que yo descubrí"]},
      {t:"Lenguaje",items:["Narración del cuento favorito del año","Carta de graduación al maestro del año que sigue","Poesía de clausura memorizada","Libro autobiográfico: quién soy yo"]},
      {t:"Mundo Natural",items:["Diario de naturaleza: 10 meses presentados","Cosechar lo sembrado en mes 1","Mural: cadena de la vida del año"]},
      {t:"Artes",items:["Galería de arte: exposición para familias","Portafolio: 5 obras elegidas y explicadas","Canción de graduación del grupo"]},
      {t:"Carácter",items:["Virtud: Valentía — el año que viene aprenderás cosas más difíciles","Reflexión: ¿a quién le agradeces lo que aprendiste?","Ceremonia: recibir la planta que sembraron en mes 1"]}
    ],
    quote:'"No seas un producto de tu circunstancia; sé un producto de tus decisiones." — Frankl'
  }
];

const nav = document.getElementById('monthNav');
const cards = document.getElementById('monthCards');

months.forEach((m, i) => {
  const tab = document.createElement('button');
  tab.className = 'month-tab' + (i===0?' active':'');
  tab.textContent = `${i+1}. ${m.name.split(' ').slice(0,2).join(' ')}`;
  tab.onclick = () => {
    document.querySelectorAll('.month-tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.month-card').forEach(c=>c.classList.remove('visible'));
    tab.classList.add('active');
    document.getElementById('mc'+i).classList.add('visible');
  };
  nav.appendChild(tab);

  const card = document.createElement('div');
  card.className = 'month-card'+(i===0?' visible':'');
  card.id = 'mc'+i;
  card.innerHTML = `
    <div class="month-header">
      <div>
        <div class="month-num">Mes ${m.num} · Virtud: ${m.virtue}</div>
        <div class="month-name">${m.name}</div>
      </div>
      <span class="month-tag">${m.tag}</span>
    </div>
    <div class="areas-grid">
      ${m.areas.map(a=>`
        <div class="area-block">
          <div class="area-title">${a.t}</div>
          <ul class="area-items">
            ${a.items.map(it=>`<li>${it}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
    <div class="month-quote">${m.quote}</div>
  `;
  cards.appendChild(card);
});

// Billing toggle
const prices = {
  individual: { mensual: '$890<span>/mes</span>', anual: '$7,990<span>/año</span>' },
  familiar:   { mensual: '$1,490<span>/mes</span>', anual: '$13,390<span>/año</span>' },
  plus:       { mensual: '$2,500<span>/mes</span>', anual: '$22,500<span>/año</span>' }
};
const periods = {
  individual: { mensual: '1 hijo · Acceso completo · Cancela cuando quieras', anual: '1 hijo · Equivale a $665/mes · Ahorras 25%' },
  familiar:   { mensual: 'Hasta 3 hijos · Todos los niveles', anual: 'Hasta 3 hijos · Equivale a $1,115/mes · Ahorras 25%' },
  plus:       { mensual: 'Hasta 5 hijos · Todos los niveles', anual: 'Hasta 5 hijos · Equivale a $1,875/mes · Ahorras 25%' }
};
let isAnual = false;
function toggleBilling() {
  isAnual = !isAnual;
  const toggle = document.getElementById('billingToggle');
  const mode = isAnual ? 'anual' : 'mensual';
  toggle.classList.toggle('on', isAnual);
  document.getElementById('label-mensual').classList.toggle('active', !isAnual);
  document.getElementById('label-anual').classList.toggle('active', isAnual);
  document.getElementById('price-individual').innerHTML = prices.individual[mode];
  document.getElementById('price-familiar').innerHTML = prices.familiar[mode];
  document.getElementById('price-plus').innerHTML = prices.plus[mode];
  document.getElementById('period-individual').textContent = periods.individual[mode];
  document.getElementById('period-familiar').textContent = periods.familiar[mode];
  document.getElementById('period-plus').textContent = periods.plus[mode];
  const label = isAnual ? 'Comenzar anual →' : 'Comenzar mensual →';
  document.querySelectorAll('.plan-btn[data-plan]').forEach(btn => {
    if (!btn.disabled) btn.textContent = label;
  });
}

function askEmailModal() {
  return new Promise((resolve) => {
    const modal  = document.getElementById('email-modal');
    const input  = document.getElementById('em-input');
    const submit = document.getElementById('em-submit');
    const cancel = document.getElementById('em-cancel');

    input.value = '';
    modal.hidden = false;
    input.focus();

    function cleanup() {
      modal.hidden = true;
      submit.removeEventListener('click', onSubmit);
      cancel.removeEventListener('click', onCancel);
      input.removeEventListener('keydown', onKey);
    }

    function onSubmit() {
      const email = input.value.trim();
      if (!email) { input.focus(); return; }
      cleanup();
      resolve(email);
    }

    function onCancel(e) {
      e.preventDefault();
      cleanup();
      resolve(null);
    }

    function onKey(e) {
      if (e.key === 'Enter') onSubmit();
      if (e.key === 'Escape') onCancel(e);
    }

    submit.addEventListener('click', onSubmit);
    cancel.addEventListener('click', onCancel);
    input.addEventListener('keydown', onKey);
  });
}

async function startCheckout(plan, btn) {
  const billing = isAnual ? 'annual' : 'monthly';

  const email = await askEmailModal();
  if (!email) return;

  const originalText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Cargando...';

  try {
    const res = await fetch('https://trinity-oaks-api-production.up.railway.app/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': 'to-api-2025-secure' },
      body: JSON.stringify({ plan, billing, email })
    });
    if (!res.ok) throw new Error('Error del servidor');
    const data = await res.json();
    if (!data.url) throw new Error('URL no recibida');
    window.location.href = data.url;
  } catch (err) {
    console.error(err);
    btn.disabled = false;
    btn.textContent = originalText;
    alert('Hubo un problema al iniciar el pago. Por favor intenta de nuevo.');
  }
}
