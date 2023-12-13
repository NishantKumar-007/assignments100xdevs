function startClock() {
  setInterval(() => {
    const hr = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();

    if (hr > 12) console.log(hr - 12 + ":" + min + ":" + sec + " PM");
    else console.log(hr + ":" + min + ":" + sec + " AM");
  }, 1000);
}
startClock();
