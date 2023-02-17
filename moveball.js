let ball = document.getElementById('ball');
let slide = 10;



window.addEventListener('load', () =>{
    ball.style.position = 'absolute';
    ball.style.left = 0;
    ball.style.top = 0;
});

window.addEventListener('keydown', (e) =>{
    switch (e.key) {
        case "w":
            ball.style.top = parseInt(ball.style.top) - slide + 'px';
            break; //W

        case "a":
            ball.style.left = parseInt(ball.style.left) - slide + 'px';
            break;  // A
    
        case "s":
            ball.style.top = parseInt(ball.style.top) + slide + 'px';
            break; //S

        case "d":
            ball.style.left = parseInt(ball.style.left) + slide + 'px';
            break;  // D

        default:
            break;
    }
});







// const ctx = ball.getContext('2d');
// var obj = ball.getBoundingClientRect();
// var wid = ball.offsetWidth;

// xdir = 100;
// ydir = 100;


// document.addEventListener('keydown', function(e){
//     if (e.keyCode === 87) {
//         console.log("W");
//         ydir--
//         return;
//     }
//     else if (e.keyCode === 65) {
//         console.log("A");
//         xdir--
//         return;
//     }
//     else if (e.keyCode === 83) {
//         console.log("S");
//         ydir++
//         return;
//     }
//     else if (e.keyCode === 68) {
//         console.log("D");
//         xdir++
//         return;
//     }
// })

// function moveBall():

// if else use 
// if --> 1 property. condition check a ball for screen end clientwidth and client height offsetWidth(ball pos) in fuction
// ball.style.top












// let ball = document.querySelector("#ball");
// let move_it = 10;
// let w = move_it.87;
// let a = move_it.65;
// let s = move_it.83;
// let d = move_it.68;



// window.addEventListener('load', () =>{
//     ball.style.position = 'absolute';
//     ball.style.left = 0;
//     ball.style.top = 0;
// })

// ball.addEventListener("keydown", (event) => {
//     if (event.keyCode === 87) {
//         ball.style.top = parseInt(ball.style.top) - move_it + 'px';
//         return;
//     }
// //     if (event.isComposing || event.keyCode === 65) {
// //         ball.style.left = parseInt(ball.style.left) - move_it + 'px';
// //         return;
// //     }
// //     if (event.isComposing || event.keyCode === 83) {
// //         ball.style.top = parseInt(ball.style.top) + move_it + 'px';
// //         return;
// //     }
// //     if (event.isComposing || event.keyCode === 68) {
// //         ball.style.left = parseInt(ball.style.left) + move_it + 'px';
// //         return;
// //     }

// function pressed(keyPress){
//     let key = keyPress.key;
//     if (key == "A"){
//         ball.style.left = parseInt(ball.style.left) - move_it + 'px';
//     }
//     if (key == "D"){
//         ball.style.left = parseInt(ball.style.left) - move_it + 'px';
//     }
//     if (key == "W"){
//         ball.style.top = parseInt(ball.style.top) - move_it + 'px';
//     }
//     if (key == "S"){
//         ball.style.top = parseInt(ball.style.top) + move_it + 'px';
//     }
// } 

// // window.addEventListener('keydown', (e) => {
// //     switch(e.key){
// //         case 'A':
// //             ball.style.left = parseInt(ball.style.left) - move_it + 'px';
// //         break;
// //         case 'D':
// //             ball.style.left = parseInt(ball.style.left) + move_it + 'px';
// //         break;
// //         case 'W':
// //             ball.style.top = parseInt(ball.style.top) - move_it + 'px';
// //         break;
// //         case 'S':
// //             ball.style.top = parseInt(ball.style.top) + move_it + 'px';
// //         break;
// //     }
// // })