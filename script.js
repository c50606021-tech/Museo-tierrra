/* =========================================================
   MUSEO INTERACTIVO DE LA TIERRA — script.js
   ========================================================= */

/* -----------------------------------------------------------
   1) URL DEL MUSEO (para el código QR)
   Cuando publiques el proyecto y tengas tu URL pública,
   solo cambia el texto de abajo por esa dirección.
   Ejemplo: "https://tuusuario.github.io/museo-tierra/"
----------------------------------------------------------- */
const URL_DEL_MUSEO = "AQUI_IRA_LA_URL";

/* -----------------------------------------------------------
   2) Menú móvil
----------------------------------------------------------- */
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

/* -----------------------------------------------------------
   3) Geosfera: capas desplegables
----------------------------------------------------------- */
document.querySelectorAll('.layer-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const detail = document.getElementById(btn.dataset.target);
    detail.classList.toggle('open');
  });
});

/* -----------------------------------------------------------
   4) Geosfera: pestañas de límites de placas
----------------------------------------------------------- */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

/* -----------------------------------------------------------
   5) Interacción entre esferas: mostrar ejemplo al tocar
----------------------------------------------------------- */
document.querySelectorAll('.link-card').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.link-detail p').forEach(p => p.classList.add('lhidden'));
    document.getElementById('ldefault').classList.add('lhidden');
    document.getElementById(btn.dataset.t).classList.remove('lhidden');
  });
});

/* -----------------------------------------------------------
   6) Código QR (se genera con la librería QRCode.js)
----------------------------------------------------------- */
window.addEventListener('load', () => {
  try {
    const target = URL_DEL_MUSEO === "AQUI_IRA_LA_URL" ? window.location.href : URL_DEL_MUSEO;
    // eslint-disable-next-line no-undef
    new QRCode(document.getElementById("qrcode"), {
      text: target,
      width: 130,
      height: 130,
      colorDark: "#080B1A",
      colorLight: "#ffffff"
    });
  } catch (e) {
    document.getElementById("qrcode").innerHTML =
      '<p style="color:#333;font-size:.7rem;padding:.5rem">QR no disponible</p>';
  }
});
