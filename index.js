function calculateArea(x,y) {
    if (x > 0 && y > 0) {
        return x * y;
    } else {
        alert2();
    }
}

function newalert() {
    alert("YOU FOOL WHAT HAVE YOU DONE");

}

function alert2() {
    alert("you need to enter a positive number")
}

function getUserInput() {
    let userinput = document.getElementById('triangle').value;
    let value = userinput.split(',')
    if (value.length === 2) {
        let x = value[0];
        let y = value[1]; 
    console.log(calculateArea(x, y));
    alert("The area of your traingle is: " + calculateArea(x,y) + " \nArea also logged to console");
    } else {
        alert("Please put a comma");
}}



function changeColor() {
    document.getElementById('buttonChanger').style.backgroundColor = hexRandomColor();
}

function hexRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
        for (var x = 0; x < 6; x++) {
            color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function randomTextGenerator (length) {
    const randomText = 'abcdefghijklmnopqrstuvwxyz';
    var result = '';
    for (var x = 0; x < length; x++) {
        const randomString = Math.floor(Math.random() * randomText.length);
                result += randomText[randomString];
    }
    return result;
}

function forthLi() {
    const ul = document.getElementById('elements');
    const li = document.createElement('li');
    li.textContent = 'Fourth Element'
    ul.appendChild(li);
}

function liTextChange (event) {
    event.target.textContent = randomTextGenerator(6);
}

window.onload = function() {
    forthLi();

const listItems = document.querySelectorAll('li');
            listItems.forEach(item => {
                item.addEventListener('click', liTextChange);
            });

        }
