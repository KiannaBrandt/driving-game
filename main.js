var car = {
  position: '',
  on: ''
};

var $car = document.querySelector('#car');
var intervalID;

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
}

document.addEventListener('keydown', moveCar);

function moveCar(event) {
  var position = 0;
  $car.style.left = '0px';
  if (event.code === 'Space') {
    intervalID = setInterval(startCar, 16);
  }
  function startCar() {
    position += 5;
    $car.style.left = position + 'px';
    car.on = true;
  }
  if (car.on === true) {
    clearInterval(intervalID);
    car.on = false;
  }
}
