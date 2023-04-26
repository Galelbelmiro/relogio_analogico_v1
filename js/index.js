const ponteiro_das_horas = document.querySelector(".ponteiro.horas");
const ponteiro_dos_minutos = document.querySelector(".ponteiro.minutos");
const ponteiro_dos_segundos = document.querySelector(".ponteiro.segundos");

const setRotation = (elemento, rotacao_por_cento) => {
  elemento.style.setProperty("--rotacao", rotacao_por_cento * 360);
};

const setRelogio = () => {
  const dataAtual = new Date();

  const segundos_por_cento = dataAtual.getSeconds() / 60;
  const minutos_por_cento = dataAtual.getMinutes() / 60;
  const horas_por_cento = dataAtual.getHours()/ 12;

  setRotation(ponteiro_dos_segundos, segundos_por_cento);
  setRotation(ponteiro_dos_minutos, minutos_por_cento);
  setRotation(ponteiro_das_horas, horas_por_cento);
};

setRelogio();

setInterval(setRelogio, 1000);
