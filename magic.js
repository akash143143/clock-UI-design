function clock() {
    let hours = document.getElementById('hour');
    let minutes = document.getElementById('minute');
    let seconds = document.getElementById('second');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

let interval = setInterval(clock, 1000);