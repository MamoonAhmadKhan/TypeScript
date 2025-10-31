enum Direction {
	UP,
	DOWN, 
	RIGHT, 
	LEFT
}

function doSomethingOnKeyPress (keyPressed: Direction) {
	if (keyPressed === Direction.UP) console.log(`Going Upwards`);
	else if (keyPressed === Direction.DOWN) console.log(`Going Downwards`);
	else if (keyPressed === Direction.RIGHT) console.log(`Going Right`);
	else if (keyPressed === Direction.LEFT) console.log(`Going Left`);
	else console.log(`Pressed the wrong key !!`);
}

doSomethingOnKeyPress(Direction.RIGHT);
doSomethingOnKeyPress(Direction.LEFT);
doSomethingOnKeyPress(Direction.UP);
doSomethingOnKeyPress(Direction.DOWN);

console.log(Direction.UP); // 0 by default, but these can be changed in enum manually
console.log(Direction.DOWN); // 1 by default
