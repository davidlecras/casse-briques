const ball = [];
function addBall() {
  let idBall = createId();
  $(".playfield").prepend(
    '<div class="ball" data-id=" ' + idBall + ' "></div>'
  );
  ball.push({
    id: idBall;
,
left: 100,

  })
}
