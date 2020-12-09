let crash = document.querySelector('#crash');

crash.addEventListener('click', (e) => {
    let crashAudio = new Audio('../audio/crash.wav');
    crashAudio.play();
});

let crashAudio = new Audio('../audio/crash.wav');
let highHatClosedAudio = new Audio('../audio/highhat-closed.wav');
let highHatOpenAudio = new Audio('../audio/highhat-open.wav');
let kickAudio = new Audio('../audio/kick.wav');
let snareAudio = new Audio('../audio/snare.wav');
let tom1Audio = new Audio('../audio/tom1.wav');
let tom2Audio = new Audio('../audio/tom2.wav');
let tom3Audio = new Audio('../audio/tom3.wav');

let drumKitAudio = {
    crash: crashAudio,
    highHat: highHatOpenAudio,
    kick: kickAudio,
    snare: snareAudio,
    tom1: tom1Audio,
    tom2: tom2Audio,
    tom3: tom3Audio
};

let drumKit = document.querySelectorAll('#drumKit g');
for (let item of drumKit) {
    for (let value = 0; value < Object.keys(drumKitAudio).length; ++value) {
        if (item.id == Object.keys(drumKitAudio)[value]) {
            document.write(`${item.id} equals ${Object.keys(drumKitAudio)[value]} is true`)
            document.querySelector(`#${Object.keys(drumKitAudio)[value]}`).addEventListener('click', (e) => {
                Object.values(drumKitAudio)[value].play();
            })
        }
    }
}