//Switch statment better/easier to read than if/else statement
var colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

document.getElementById("button-tog").addEventListener("click", colorChange);
function colorChange() {
  var body = document.querySelector("body");
  switch(body.style.backgroundColor){
      case 'red':
          body.style.backgroundColor = 'orange';
          break;
      case 'orange':
          body.style.backgroundColor = 'yellow';
          break;
      case 'yellow':
          body.style.backgroundColor = 'green';
          break;
      case 'green':
          body.style.backgroundColor = 'blue';
          break;
      case 'blue':
          body.style.backgroundColor = 'indigo';
          break;
      case 'indigo':
          body.style.backgroundColor = 'violet';
          break;
      case 'violet':
          body.style.backgroundColor = 'white';
          break;
      default:
          body.style.backgroundColor = 'red';
        }
        stopProp();
  }

  function stopProp(){
    event.stopPropagation();
  }
