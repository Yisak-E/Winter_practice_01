document.addEventListener('DOMContentLoaded', function (event) {
    let btn = document.getElementsByTagName('button')[0];

    btn.onclick = function (event) {
        event.preventDefault();
       // event.target.style.backgroundColor = "yellow";
        //alert("Hello");
    }

});

//mouseover
document.addEventListener('mouseover', function () {
let area = document.querySelector('button');
let heading = document.querySelector('h1');

    area.addEventListener('mouseover', function (event) {
    heading.innerHTML = "Web Programming";
 });
});


//mouseleft
document.addEventListener('mouseout', function () {
let area = document.querySelector('button');
let heading = document.querySelector('h1');

    area.addEventListener('mouseout', function (event) {
    heading.innerHTML = "Web Design";
 });
});


//presing on keyboard
document.addEventListener('keydown', function () {
    //alert("A key was presssed!");
});

//to identify which key is pressed in number A=20, a = 65
document.addEventListener('keydown', function (event) { 
   // alert(`the ${event.which} key was pressed`);
    console.log(event.key);
   // console.log(event.keycode);//undefined
});


// Window resizing
window.addEventListener('resize', function(){
   // console.log(`page width is ${window.innerWidth}`);
    //console.log(`page height is ${window.innerHeight}`);
});

//random coloring the color of the button background

document.addEventListener('DOMContentLoaded', function (event) {
    let btn = document.getElementsByTagName('button')[0];

     function random(number) {
        return Math.floor(Math.random() * (number + 1));
    }
    let rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    
    btn.onclick = function (event) {
       
        event.target.style.backgroundColor = rndCol ;
        //alert("Hello");
    }
    

});
