const ball = [];
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
  const code = "";
}
