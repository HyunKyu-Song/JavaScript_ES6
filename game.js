var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// ctx.fillStyle = 'coral';
// ctx.fillRect(10,10, 100,100);


var dino = {
   val : 'jump',
   x : 100,
   y : 200,
   width : 50,
   height : 50,
   draw(){
      ctx.fillStyle = 'green';
      ctx.fillRect(this.x,this.y, this.width,this.height);
   }
}
dino.draw()


class Cactus {
   constructor() {
      this.x = 500;
      this.y = 200;
      this.width = 50;
      this.height = 50;
   }
   draw() {
      ctx.fillStyle = 'red';
      ctx.fillRect(this.x, this.y, this.width, this.height);
   }
}


// var timer = 0;
// var cactusArr = [];
// function 프레임마다실행(){
//    requestAnimationFrame(프레임마다실행);
//    timer++;

//    ctx.clearRect(0,0, canvas.width,canvas.height); // canvas 지우기

//    if(timer % 120 === 0){  // 2초마다 새로 생성 (1초에 60프레임 모니터라서)
//       var cactus = new Cactus();
//       cactusArr.push(cactus);
//    }

//    cactusArr.forEach(function(i, j, arr){
//       if(i.x < 0){
//          arr.splice(j, 1);
//       }
//       i.x -= 5;   // 장애물 좌표x가 5씩 작아짐
//       i.draw()
//    })

//    dino.draw()
// }
// 프레임마다실행();

var time = 0;
window.addEventListener("keydown", function(){
   //점프();
   if(dino.val === 'jump'){
      ctx.clearRect(0,0, canvas.width,canvas.height);
      dino.y -= 100;
      dino.draw();
      dino.val = 'walk';
      점프();
   }
   else{
      ctx.clearRect(0,0, canvas.width,canvas.height);
      dino.y += 100;
      dino.draw();
      dino.val = 'jump';
   }
})

function 점프(){
   requestAnimationFrame(점프);
   time++;

   ctx.clearRect(0,0, canvas.width,canvas.height);

   if(time % 60 === 0){
      dino.y += 50;
      // dino.draw()
   }

   dino.draw()
}