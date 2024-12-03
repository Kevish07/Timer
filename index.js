const start_Date = new Date("11 Aug, 2024 00:00:00").getTime();
const end_Date = new Date("11 Aug, 2028 00:00:00").getTime();



let x = setInterval(function updateTimer() {
    const now = new Date().getTime();

    const timeDone = now - start_Date;
    const timePending = end_Date - now;

    // for calculating timer [days,hrs,mins,secs]
    // Reference calculations
    const oneDayInMills = (24 * 60 * 60 * 1000);
    const oneHourInMills = (60 * 60 * 1000);
    const oneMinInMills = (60 * 1000);
    const oneSecInMills = (1000);

    const days = Math.floor(timePending / oneDayInMills);
    const hours = Math.floor(timePending % oneDayInMills / oneHourInMills);
    const minutes = Math.floor(timePending % oneHourInMills / oneMinInMills);
    const seconds = Math.floor(timePending % oneMinInMills / oneSecInMills);

    // updating on web
    document.getElementById("days").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;


    // setting up bar
    const total = end_Date - start_Date;
    const percentage = (timeDone/total)*100;

    // changing css of bar
    document.getElementById("progress_bar").style.width = percentage + "%";
    document.getElementById("progress_value").innerHTML = Math.floor(percentage) + "%"

    // handling negative dates
    if (timePending < 0) {
        clearInterval(x)
        document.getElementById("count_down").innerHTML = "EXPIRED";
        document.getElementById("progress_bar").style.width = "100%";
    }


    

}, 1000);