const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

onClock();

function onClock(){
    const time = new Date();
    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();

    hour.innerHTML = makeLen(h);
    min.innerHTML = makeLen(m);
    sec.innerHTML = makeLen(s);

    requestAnimationFrame(onClock);
}

function makeLen(num){
    return String(num).padStart(2,'0');
}