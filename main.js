var car = {
  position: ''
};

var $car = document.querySelector('#car');

document.addEventListener('keydown', turnCar);

function turnCar() {
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
