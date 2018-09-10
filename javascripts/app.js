var rover = {
  direction: "N",
  x: 0,
  y: 0
};


// Rover initial position ***********************************

console.log(
`The airship C456 has travel to Mars. Mars it's even weirder than we first though,
it's a 2 dimensional planet based on coordinates x and y, both of them go from 0 to 9. 

On our mission we left Rover to explore this grid. Rover will move through and tell us his positions, 
it's all Rover can do. Rover will move forward and backwards, it will also turn 90º degrees facing always North, South, 
East and West. At some point in his life Rover  could move also left and right but Rover lost this functions, it's old. 
Probably this will be his last trip. Take care of him.

Control commands:

turnLeft(rover) = turn 90º left
turnRight(rover) = turn 90º right
moveForward(rover) = move 1 position on x or y depending the direction
moveBackward(rover) = move 1 position on x or y depending the direction
  
Rover also got an extra trick. It can make several moves calling the function: multipleMovements('').
You must put into the '' r = turn right, l = turn left, f = move forward, b = move backward. As an example:

multipleMovements('llffflfff')

Situation:

Rover decided to start on position 0, 0 (upside left corner). Facing north. 

To begin with you should turn until he face East or South. If not, Rover can't move. We recommend to print the map
to get an idea. Make use of: printMars()

Have luck.`)


//  Turning Functions ***************************************

function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case rover.direction = "N": rover.direction = "W"; break;
    case rover.direction = "S": rover.direction = "E"; break;
    case rover.direction = "E": rover.direction = "N"; break;
    case rover.direction = "W": rover.direction = "S"; break;
  };   
  console.log(`Now rover is facing ${rover.direction}!`);
};

function turnRight(rover) {
  console.log("turnRight was called!");
  switch (rover.direction) {
    case rover.direction = "N": rover.direction = "E"; break;
    case rover.direction = "S": rover.direction = "W"; break;
    case rover.direction = "E": rover.direction = "S"; break;
    case rover.direction = "W": rover.direction = "N"; break;
  }
 console.log(`Now rover is facing: ${rover.direction}!`);
};

// move Forward Function ************************************

function moveForward(rover){
//heading south
  if (rover.direction === "S" && rover.y < 9) {
    rover.y += 1
    console.log(`Move forward was called!`)  
  }
  else if (rover.y === 9 && rover.direction === "S") {
    console.log("We cannot move forward! We are getting out of our zone! Turn to another direction!")
  }

//heading north
  else if (rover.direction === "N" && rover.y > 0) {
    rover.y -= 1
    console.log(`Move forward was called!`)  
  } 
  else if (rover.direction === "N" && rover.y === 0) {
    console.log("We cannot move forward! We are getting out of our zone! Turn to another direction!")    
  } 

  //heading east
  else if (rover.direction === "E" && rover.x < 9) {
    rover.x += 1
    console.log(`Move forward was called!`)  
  }
  else if (rover.direction === "E" && rover.x === 9) {
    console.log("We cannot move forward! We are getting out of our zone! Turn to another direction!")
  }

  //heading west
  else if (rover.direction === "W" && rover.x > 0) {
    rover.x -= 1
    console.log(`Move forward was called!`)  
  }
  else if (rover.direction === "W" && rover.x === 0) {
    console.log("We cannot move forward! We are getting out of our zone! Turn to another direction!")
  }
};

// move Backwards **************************************

function moveBackward(rover){
  //facing south
    if (rover.direction === "S" && rover.y > 0) {
      rover.y -= 1
      console.log(`Move backward was called!`)  
    }
    else if (rover.y === 0 && rover.direction === "S") {
      console.log("We cannot move backwards! We are getting out of our zone! Turn to another direction!")
    }
  
  //facing north
    else if (rover.direction === "N" && rover.y < 9) {
      rover.y += 1
      console.log(`Move backward was called!`)  
    } 
    else if (rover.direction === "N" && rover.y === 9) {
      console.log("We cannot move backward! We are getting out of our zone! Turn to another direction!")    
    } 
  
    //facing east
    else if (rover.direction === "E" && rover.x > 0) {
      rover.x -= 1
      console.log(`Move backwards was called!`)  
    }
    else if (rover.direction === "E" && rover.x === 0) {
      console.log("We cannot move backward! We are getting out of our zone! Turn to another direction!")
    }
  
    //facing west
    else if (rover.direction === "W" && rover.x < 9) {
      rover.x += 1;
      console.log(`Move backwards was called!`)  
    }
    else if (rover.direction === "W" && rover.x === 9) {
      console.log("We cannot move backward! We are getting out of our zone! Turn to another direction!")
    }
  };

  //multiple Movements *********************************
    
 function multipleMovements(str) {
   var history = '';
   for (var index = 0; index < str.length; index++) {
      switch (str[index]) {
        case 'r' : turnRight(rover) ; break;
        case 'f' : moveForward(rover) ; break;
        case 'l' : turnLeft(rover) ; break;
        case 'b' : moveBackward(rover) ; break;
        default : console.log(`'${str[index]}' is an unknown movement! I'll continue with the next command in line, if there are any.`); break;
      }
      rover.travelLog = [rover.x, rover.y] 
      var travel = rover.travelLog;
      history += ' position : ' + travel + ' \n'

    }
    console.log(`Rover's Travel Log:\n${history}`) 
  };
 

// Print Mars ******************************************** 

function printMars() { 
  var mars = [ 
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
  ];
  mars[rover.y][rover.x] = 'R';
  console.log(mars.join('\n') + '\n\n');

  console.log(`Rover is facing ${rover.direction} on position x = ${rover.x}, y = ${rover.y}.`)
};


 

  


