var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5f90389c-f1a6-45b2-8136-9aa970668a54","233b1eb4-be9d-4eb5-9442-274c7842bf71","efb1a028-7157-43a0-aaa6-7dcb2b1c48d7"],"propsByKey":{"5f90389c-f1a6-45b2-8136-9aa970668a54":{"name":"target","sourceUrl":null,"frameSize":{"x":70,"y":73},"frameCount":1,"looping":true,"frameDelay":12,"version":"9d8kFSQMczZ5E3c7E2ekOcSOClN7sQUO","categories":["game_blocks"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":73},"rootRelativePath":"assets/5f90389c-f1a6-45b2-8136-9aa970668a54.png"},"233b1eb4-be9d-4eb5-9442-274c7842bf71":{"name":"ghost","sourceUrl":null,"frameSize":{"x":25,"y":52},"frameCount":1,"looping":true,"frameDelay":12,"version":"JYPXUdS_wHOPjHhhHuAfh1u3zsJiYL5R","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":52},"rootRelativePath":"assets/233b1eb4-be9d-4eb5-9442-274c7842bf71.png"},"efb1a028-7157-43a0-aaa6-7dcb2b1c48d7":{"name":"player","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"ew62bgsK.OIS6yGYkAx3w8t.RTdYvWNl","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/efb1a028-7157-43a0-aaa6-7dcb2b1c48d7.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1=createSprite(155,272,300,2);
wall1.shapeColor="red";

var wall2=createSprite(200,390,400,2);
wall2.shapeColor="red";

var wall3=createSprite(4,196,2,400);
wall3.shapeColor="white";

var wall4=createSprite(299,170,2,200);
wall4.shapeColor="white";

var wall5=createSprite(185,73,230,2);
wall5.shapeColor="yellow";

var wall6=createSprite(395,190,2,400);
wall6.shapeColor="skyblue";

var wall7=createSprite(190,2,400,2);
wall7.shapeColor="purple";

var wall8=createSprite(72,137,2,130);
wall8.shapeColor="darkgreen";

var wall9=createSprite(150,200,150,2);
wall9.shapeColor="red";

var wall10=createSprite(222,170,2,60);
wall10.shapeColor="orange";

var target=createSprite(131,129,100,100);
target.setAnimation("target");

var player=createSprite(40,326,10,10);
player.setAnimation("player");


var enemy1=createSprite(112,282,10,10);
enemy1.shapeColor="red";
enemy1.velocityY=6;

var enemy2=createSprite(166,369,10,10);
enemy2.shapeColor="red";
enemy2.velocityY=-6;

var enemy3=createSprite(228,282,10,10);
enemy3.shapeColor="red";
enemy3.velocityY=6;

var enemy4=createSprite(289,369,10,10);
enemy4.shapeColor="red";
enemy4.velocityY=-6;

var enemy5=createSprite(313,120,10,10);
enemy5.shapeColor="red";
enemy5.velocityX=5;

var enemy6=createSprite(384,195,10,10);
enemy6.shapeColor="red";
enemy6.velocityX=-5;

var enemy7=createSprite(246,8,10,10);
enemy7.shapeColor="red";
enemy7.velocityY=7;

var enemy8=createSprite(120,60,10,10);
enemy8.shapeColor="red";
enemy8.velocityY=6;

var enemy9=createSprite(14,134,10,10);
enemy9.shapeColor="red";
enemy9.velocityX=-6;

var enemy10=createSprite(155,230,10,10);
enemy10.shapeColor="red";
enemy10.velocityX=-8;
enemy10.setAnimation("ghost");
enemy10.scale=1.0;


var death=0;




function draw() {
  background("black");
 player.bounceOff(wall1);
 player.bounceOff(wall2);
 player.bounceOff(wall3);
 player.bounceOff(wall4);
 player.bounceOff(wall5);
 player.bounceOff(wall6);
 player.bounceOff(wall7);
 player.bounceOff(wall8);
 player.bounceOff(wall9);
 player.bounceOff(wall10);
 player.bounceOff(target);
enemy1.bounceOff(wall1);
enemy1.bounceOff(wall2);
enemy2.bounceOff(wall1);
enemy2.bounceOff(wall2);
enemy3.bounceOff(wall1);
enemy3.bounceOff(wall2);
enemy4.bounceOff(wall1);
enemy4.bounceOff(wall2);
enemy5.bounceOff(wall4);
enemy5.bounceOff(wall6);
enemy6.bounceOff(wall4);
enemy6.bounceOff(wall6);
enemy7.bounceOff(wall7);
enemy7.bounceOff(wall5);
enemy8.bounceOff(wall7);
enemy8.bounceOff(wall5);
enemy9.bounceOff(wall3);
enemy9.bounceOff(wall8);
enemy10.bounceOff(wall3);
enemy10.bounceOff(wall4);
  
playSound("assets/default.mp3", false);
  
if (keyDown("left")) {
 player.x=player.x-3;
 
}

if (keyDown("right")) {
  player.x=player.x+3;
 
  
}

if (keyDown("up")) {
  player.y=player.y-3;
  
}

if (keyDown("DOWN")) {
  player.y=player.y+3;
  
}

if (player.isTouching(target)) {
  textSize(45);
  text("YOU WIN",200,200);
}
stroke("blue");
textSize(15);
text("DEATH:"+death,217,100);

if (player.isTouching(enemy1)||player.isTouching(enemy2)||player.isTouching(enemy3)||player.isTouching(enemy4)||player.isTouching(enemy5)||player.isTouching(enemy6)||player.isTouching(enemy7)||player.isTouching(enemy8)||player.isTouching(enemy9)||player.isTouching(enemy10)) {
  player.x=40;
  player.y=326;
  death=death+1;
}
stroke("white");
textFont("ITALIC");
textSize(20);
text("TARGET",129,196);
  drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
