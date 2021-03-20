var car = {
  position: ''
};

var $car = document.querySelector('#car');

document.addEventListener('keydown', turnCar);

function turnCar(event) {
  if (event.code === 'ArrowUp') {
    $car.className = 'north';
  }
  if (event.code === 'ArrowRight') {
    $car.className = 'east';
  }
  if (event.code === 'ArrowDown') {
    $car.className = 'south';
  }
  if (event.code === 'ArrowLeft') {
    $car.className = 'west';
  }
  car.position = $car.className;
};

document.addEventListener('keydown', startCar);

var position = 0;
$car.style.left = '0px';

function startCar (event) {
  if (event.code === 'Space') {
    var intervalID = setInterval(moveCar,  16);
  };
};

function moveCar () {
  position+= 5;
  $car.style.left = position + 'px';
}
