// new implementation (Using HTML data-attributes)

let drumKit = document.querySelectorAll('.playable');

drumKit.forEach((drum) => {
    let audioPath = drum.getAttribute('data-audio');
    let createAudio = new Audio(audioPath);
    drum.addEventListener('click', () => {
        createAudio.play();
    });
});



// Previous rendition (using Javascript primarily)

// let drumKitAudio = {
//     crash: new Audio('audio/crash.wav'),
//     highHat: new Audio('audio/highhat-open.wav'),
//     kick: new Audio('audio/kick.wav'),
//     snare: new Audio('audio/snare.wav'),
//     tom1: new Audio('audio/tom1.wav'),
//     tom2: new Audio('audio/tom2.wav'),
//     tom3: new Audio('audio/tom3.wav')
// };

// let drumKit = document.querySelectorAll('#drumKit g');

// for (let item of drumKit) {
//     for (let key = 0; key < Object.keys(drumKitAudio).length; ++key) {
//         if (item.id == Object.keys(drumKitAudio)[key]) {
//             document.querySelector(`#${item.id}`).addEventListener('click', () => {
//                 Object.values(drumKitAudio)[key].play();
//             })
//         }
//     }
// }