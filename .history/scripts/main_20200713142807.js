const ball = [];
const gameRefresh;
$(document).ready(init);

function init() {
  addBall();
  gameRefresh= setInterval(drawBall,10);
}
function addBall() {
  let idBall = createId();
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
  let code = "";
  for (let $compteur = 0; $compteur < 8; $compteur++) {
    code += String.fromCharCode(65 + Math.random() * 26);
  }
  return code;
}

function drawBall() {
  ball.forEach(function (e) {
    e.left += e.hSpeed;
    e.top += e.vSpeed;
    $('.ball [data-id="' + e.id + '"]').css({
      left: e.left + "px",
      top: e.top + "px",
    });
  });
}
