const ball = [];
$(document).ready(init);

function init() {
  addBall();
}
function addBall() {
  var idBall = createId();
  $(".playfield").prepend(
    '<div class="ball" data-id=" ' + idBall + ' "></div>'
  );
  ball.push({
    id: idBall,
    left: 100,
    top: 100,
    hSpeed: 2,
    vSpeed: 2,
  });
}

function createId() {
  var code = "";
  for (let $compteur = 0; $compteur < 8; $compteur++) {
    code += String.fromCharCode(65 + Math.random() * 26);
  }
  return code;
}
