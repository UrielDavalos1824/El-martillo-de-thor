// El sketch conserva la lógica original de la aventura.
// IMPORTANTE: las imágenes y trueno.mp3 deben estar en la misma carpeta que este archivo.

let pantalla0, pantalla1, pantalla2, pantalla3, pantalla4, pantalla5, pantalla6;
let pantalla7, pantalla8, pantalla9, pantalla10, pantalla11, pantalla12, pantalla13, pantalla14, pantalla15;

let pantalla = 0;
let trueno;

function preload() {
  // rutas relativas simples: todos los archivos en la misma carpeta
  pantalla0 = loadImage("pantalla0.png");
  pantalla1 = loadImage("pantalla1.png");
  pantalla2 = loadImage("pantalla2.png");
  pantalla3 = loadImage("pantalla3.png");
  pantalla4 = loadImage("pantalla4.png");
  pantalla5 = loadImage("pantalla5.png");
  pantalla6 = loadImage("pantalla6.png");
  pantalla7 = loadImage("pantalla7.png");
  pantalla8 = loadImage("pantalla8.png");
  pantalla9 = loadImage("pantalla9.png");
  pantalla10 = loadImage("pantalla10.png");
  pantalla11 = loadImage("pantalla11.png");
  pantalla12 = loadImage("pantalla12.png");
  pantalla13 = loadImage("pantalla13.png");
  pantalla14 = loadImage("pantalla14.png");
  pantalla15 = loadImage("pantalla15.png");

  // sonido: p5.sound está cargado desde CDN en aventura.html
  trueno = loadSound("trueno.mp3");
}

function setup() {
  // creamos el canvas dentro del body; p5 lo insertará automáticamente
  let cnv = createCanvas(640, 480);
  cnv.parent('canvas-holder'); // asegurar que quede dentro del DIV designado
  textFont('Arial');
}

function draw() {
  background(0);

  // colocamos todas las imágenes en un array y mostramos la correspondiente
  let imgs = [
    pantalla0, pantalla1, pantalla2, pantalla3, pantalla4, pantalla5, pantalla6, pantalla7,
    pantalla8, pantalla9, pantalla10, pantalla11, pantalla12, pantalla13, pantalla14, pantalla15
  ];

  // Si por alguna razón una imagen no cargó, dibujo un fondo distintivo
  if (imgs[pantalla]) image(imgs[pantalla], 0, 0, width, height);
  else {
    background(30);
    fill(255, 200, 0);
    textAlign(CENTER, CENTER);
    textSize(18);
    text("Imagen no disponible: " + pantalla, width/2, height/2);
  }

  // Lógica de texto y botones (sin alterar la narrativa)
  if (pantalla == 0) {
    mostrarPantallaInicio();
  }
  else if (pantalla == 1) {
    texto("Loki, en un arrebato de soberbia, corta la cabellera dorada de Sif, esposa de Thor. La risa se apaga cuando Thor lo descubre: su furia hace temblar los cielos.");
    boton("Continuar", width/2, 400, 155, 40);
  }
  else if (pantalla == 2) {
    texto("Aterrorizado, Loki promete reparar su falta: irá al reino subterráneo de los enanos para forjar una nueva cabellera de oro.");
    boton("Continuar", width/2, 400, 155, 40);
  }
  else if (pantalla == 3) {
    texto("Los enanos crean tres maravillas: La cabellera dorada de Sif, Skidbladnir, el barco de Freyr, que siempre tiene viento favorable, y Gungnir, la lanza de Odín, que nunca falla su blanco.");
    boton("Continuar", width/2, 400, 155, 40);
  }
  else if (pantalla == 4) {
    texto("Loki se burla de Brokkr y Sindri. Los enanos lo desafían: 'Si ganamos, tu cabeza será nuestra.' Loki acepta.");
    boton("Acepta el desafío", 150, 400, 250, 40);
    boton("Rechaza el reto y huye", 440, 400, 200, 40);
  }
  else if (pantalla == 5) {
    texto("Sindri trabaja en la forja; Brokkr mantiene el fuego constante. Loki, temiendo perder su cabeza, toma forma de mosca para sabotearlos.");
    boton("Continuar", width/2, 400, 155, 40);
  }
  else if (pantalla == 6) {
    texto("La mosca pica los párpados de Brokkr. Aun así, el enano no deja de accionar el fuelle. Del fuego emergen tres nuevas maravillas...");
    boton("Continuar", width/2, 400, 155, 40);
  }
  else if (pantalla == 7) {
    texto("Loki entrega todos los tesoros a los dioses, y ellos juzgan cuál grupo creó los mejores objetos. Pero cuando aparece el martillo Mjölnir, el destino cambia.");
    boton("Continuar", width/2, 400, 155, 40);
  }
  else if (pantalla == 8) {
    texto("Aunque su mango quedó corto, Mjölnir es poderoso. Loki intenta escapar antes de pagar su deuda.");
    boton("Loki intenta engañar de nuevo", 150, 400, 250, 40);
    boton("Loki acepta su destino", 440, 400, 200, 40);
  }
  else if (pantalla == 9) {
    texto("Loki argumenta: 'Prometí mi cabeza, no mi cuello.' Los enanos cosen sus labios como castigo.");
    boton("Continuar", width/2, 400, 155, 40);
  }
  else if (pantalla == 10) {
    texto("Con la boca sellada, Loki se aleja. Mjölnir pasa a Thor, pero el destino nunca está sellado.");
    boton("Thor protege a los dioses", 150, 400, 250, 40);
    boton("Thor duda del castigo", 440, 400, 200, 40);
  }
  else if (pantalla == 11) {
    texto("Thor observa el martillo y se pregunta si tanta crueldad fue justa. Recuerda que Loki también salvó a los dioses muchas veces.");
    boton("Thor destruye el martillo", 150, 400, 250, 40);
    boton("Thor acepta su destino", 440, 400, 200, 40);
  }
  else if (pantalla == 12) {
    texto("Final 1 — El Cobarde Engaño...");
    boton("Reiniciar", width/2, 400, 155, 40);
  }
  else if (pantalla == 13) {
    texto("Final 2 — La Cabeza de Loki...");
    boton("Reiniciar", width/2, 400, 155, 40);
  }
  else if (pantalla == 14) {
    texto("Final 3 — El Martillo del Trueno...");
    boton("Reiniciar", width/2, 400, 155, 40);
  }
  else if (pantalla == 15) {
    texto("Final 4 — El Trueno Calla...");
    boton("Reiniciar", width/2, 400, 155, 40);
  }
}

function mousePressed() {
  // El primer click en pantalla 0 inicia la historia y reproduce trueno (si está cargado)
  if (pantalla == 0) {
    pantalla = 1;
    if (trueno && trueno.isLoaded && !trueno.isPlaying()) {
      // Algunos navegadores requieren interacción del usuario antes de reproducir audio;
      // como esto ocurre dentro de mousePressed, debería funcionar.
      try { trueno.play(); } catch (e) { console.log("No se pudo reproducir trueno:", e); }
    }
  }
  else if (pantalla == 1) pantalla = 2;
  else if (pantalla == 2) pantalla = 3;
  else if (pantalla == 3) pantalla = 4;
  else if (pantalla == 4) {
    if (colisionRectangular(150, 400, 250, 40)) pantalla = 5;
    else if (colisionRectangular(440, 400, 200, 40)) pantalla = 12;
  }
  else if (pantalla == 5) pantalla = 6;
  else if (pantalla == 6) pantalla = 7;
  else if (pantalla == 7) pantalla = 8;
  else if (pantalla == 8) {
    if (colisionRectangular(150, 400, 250, 40)) pantalla = 9;
    else if (colisionRectangular(440, 400, 200, 40)) pantalla = 13;
  }
  else if (pantalla == 9) pantalla = 10;
  else if (pantalla == 10) {
    if (colisionRectangular(150, 400, 250, 40)) pantalla = 14;
    else if (colisionRectangular(440, 400, 200, 40)) pantalla = 15;
  }
  else if (pantalla >= 12 && pantalla <= 15) pantalla = 0;
}

function colisionRectangular(x, y, w, h) {
  return mouseX > x - w/2 && mouseX < x + w/2 &&
         mouseY > y - h/2 && mouseY < y + h/2;
}

function mostrarPantallaInicio() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("El Origen del Martillo de Thor", width/2, height/2 - 10);
  textSize(16);
  text("Click para empezar", width/2, height/2 + 30);
}

function boton(txt, x, y, w, h) {
  push();
  translate(x, y);
  rectMode(CENTER);
  fill(50, 100, 200);
  rect(0, 0, w, h, 8);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(14);
  text(txt, 0, 0);
  pop();
}

function texto(t) {
  fill(255, 255, 0);
  textAlign(LEFT, TOP);
  textSize(14);
  // caja de texto en la parte superior, ajustada para no salirse
  text(t, 30, 30, width - 60, 160);
}
