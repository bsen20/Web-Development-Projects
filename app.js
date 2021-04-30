const hours=document.getElementById('hour');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');

const set_alarm=document.getElementById('alarm-btn');
const disp=document.getElementById('alarm-section');
function clock(){
    
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s= time.getSeconds();
    if(h<10){
        h='0'+h;
    }
    if(m<10){
        m='0'+m;
    }
    if(s<10){
        s='0'+s;
    }
    // console.log(s)
    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    setTimeout(clock,1000)
}
clock()
disp.style.visibility='visible';
set_alarm.addEventListener('click',setting_alarm)
// function timeAdding(){
//     // disp.style.visibility='vi'
// }

function setting_alarm(e){
    e.preventDefault();
    console.log("clicked")
    // console.log(alarm_hr.value)
    
    let alarm_hr=document.getElementById('alarm_hr');
    console.log()
    let alarm_min=document.getElementById('alarm_min')
    now=new Date()
    let h=alarm_hr.value-now.getHours();
    let m= alarm_min.value - now.getMinutes();
    // console.log(typeof(alarm_hr.value));
    console.log(m)
    console.log(h)
    if(h==0 && m==0 ){
        setTimeout(()=>{
            console.log("Ringing");
            // if(m==0)
            playMusic();
        },setting_alarm);
    }
    setInterval(setting_alarm,1000);
    
    
}
let audio = new Audio('ringtone.mp3');
var c=document.getElementById('stop-alarm');
function timeMatching(){    
}
function playMusic(){
    
    audio.play();
    c.style.visibility='visible'
    set_alarm.style.visibility='hidden'
    
    
    
}
c.addEventListener('click',()=>{
    audio.pause();
    set_alarm.style.visibility='visible'
    c.style.visibility='hidden'
})
// timeMatching()

// console.log(pause_alarm)

