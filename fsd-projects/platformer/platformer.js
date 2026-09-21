$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    //TODO 1 - Enable the Grid
    // toggleGrid(true);


    // TODO 2 - Create Platforms
    createPlatform(300, 300, 8, 350);
    createPlatform(100, 400, 8, 200);
    createPlatform(250, 630, 50, 8);
    createPlatform(100, 500, 50, 8);
    createPlatform(100, 400, 50, 8);
    createPlatform(300, 280, 50, 8);
    createPlatform(450, 350, 50, 8);
    createPlatform(700, 300, 550, 8);
    createPlatform(1300, 170, 100, 8);
    createPlatform(700, 150, 500, 8);
    createPlatform(450, 100, 100, 8);
    createPlatform(600, 300, 50, 8);
    // TODO 3 - Create Collectables
createCollectable("max", 1320, 130);
createCollectable("steve", 500, 50);
createCollectable("max", 1050, 250);
    
    // TODO 4 - Create Cannons
 createCannon("bottom", 700, 800,);
 createCannon("bottom", 900, 700,);
 createCannon("bottom", 1100, 750,);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
