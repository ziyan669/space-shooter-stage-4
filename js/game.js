class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    player1.scale=0.45;

    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    player2.scale=0.45;
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         // to display player name on the basket.
                        fill("black");
                        textSize(25);
                        text(allPlayers[plr].name, x-25,y+25);
                         
                     }
                    
                     //text to display player score.
                    textSize(25);
                    fill("white");
                    text("player1 :"+allPlayers.player1.score, 50,50);
                    text("player2 :"+allPlayers.player2.score, 50,100);
                 }
                
                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
                if(keyIsDown(UP_ARROW) && player.index!==null){
                    bullet = createSprite(players[index-1].x,players[index-1].y,5,5);
                    bullet.velocityY=-7;
                    bullet.shapeColor="yellow";
                    bullet.lifetime=175;
                    bulletGroup.add(bullet);
                }
                
            
                 if (frameCount % 150 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     fruits.scale=0.15;
                     fruits.addImage(fruit1_img);
                     fruits.lifetime=175;
                     fruitGroup.add(fruits);
                     
                     
                 }
                 if (frameCount % 20 === 0) {
                    fruit2 = createSprite(random(100, 1000), 0, 100, 100);
                    fruit2.velocityY = 6;
                    fruit2.scale=0.15;
                    fruit2.addImage(fruit2_img);
                    fruit2.lifetime=175;
                    fruit2Group.add(fruit2);
                    
                    
                }
                if (frameCount % 75 === 0) {
                    fruit3 = createSprite(random(100, 1000), 0, 100, 100);
                    fruit3.velocityY = 6;
                    fruit3.scale=0.15;
                    fruit3.addImage(fruit3_img);
                    fruit3.lifetime=175;
                    fruit3Group.add(fruit3);                   
                }
                if (frameCount % 125 === 0) {
                    fruit4 = createSprite(random(100, 1000), 0, 100, 100);
                    fruit4.velocityY = 6;
                    fruit4.scale=0.15;
                    fruit4.addImage(fruit4_img);
                    fruit4.lifetime=175;
                    fruit4Group.add(fruit4);      
                }
                 
                  if (player.index !== null) {
                    for (var i = 0; i < fruitGroup.length; i++) {
                        if (fruitGroup.get(i).isTouching(bulletGroup)) {
                       fruitGroup.get(i).destroy(); 
                       player.score =player.score+4; 
                       player.update(); } }
                  }
                  if (player.index !== null) {
                    for (var i = 0; i < fruit2Group.length; i++) {
                        if (fruit2Group.get(i).isTouching(bulletGroup)) {
                       fruit2Group.get(i).destroy(); 
                       player.score =player.score+1; 
                       player.update(); } }
                  }
                  if (player.index !== null) {
                    for (var i = 0; i < fruit3Group.length; i++) {
                        if (fruit3Group.get(i).isTouching(bulletGroup)) {
                       fruit3Group.get(i).destroy(); 
                       player.score =player.score+2; 
                       player.update(); } }
                  }
                  if (player.index !== null) {
                    for (var i = 0; i < fruit4Group.length; i++) {
                        if (fruit4Group.get(i).isTouching(bulletGroup)) {
                       fruit4Group.get(i).destroy(); 
                       player.score =player.score+3; 
                       player.update(); } }
                  }
                  if(player.score===50){
                      console.log("50")
                   //gameState=2;
                   //game.update(2);
                  }
                  
         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}