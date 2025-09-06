var inputGreutate = document.getElementById('greutate');
var inputInaltime = document.getElementById('inaltime');
var paragrafrezultat = document.getElementById('rezultat');

function calculeazaIMC() {
  var greutate = Number(inputGreutate.value);
  var inaltime = Number(inputInaltime.value);
  var imc = greutate / (inaltime * inaltime);
  if (imc < 18.5) {
    paragrafrezultat.innerHTML =
      'Risc pentru sănătate: ridicat Această valoare indică riscuri pentru sănătatea ta, este mult prea mică pentru o sănătate optimă.' +
      imc;
  } else if (imc < 24.9) {
    paragrafrezultat.innerHTML = 'Risc pentru sănătate: minim/scăzut' + imc;
  } else if (imc < 29.9) {
    paragrafrezultat.innerHTML = 'Risc pentru sănătate: scăzut/moderat' + imc;
  } else if (imc < 34.9) {
    paragrafrezultat.innerHTML =
      'Risc pentru sănătate: moderat/ridicat Acesta e un semn de avertisment: schimbă-ți dieta acum!' +
      imc;
  } else {
    paragrafrezultat.innerHTML =
      'Risc pentru sănătate: ridicat Greutatea iți afectează în mod radical sănătatea. Scapă de surplusul de greutate!' +
      imc;
  }
}
