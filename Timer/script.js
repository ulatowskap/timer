const timerForm = document.querySelector("form");
const minutes = timerForm.minutes;
const seconds = timerForm.seconds;

minutes.value = 0;
seconds.value = 0;

function countdown() {
    event.preventDefault();
    minutes.setAttribute("disabled", true);
    seconds.setAttribute("disabled", true);

    let m = Number(minutes.value);
    let s = Number(seconds.value);

    let then = new Date();
    then.setMinutes(then.getMinutes() + m);
    then.setSeconds(then.getSeconds() + s);

    let intervalId = setInterval(function tick() {
        let now = new Date();

        let timeLeft = then.getTime() - now.getTime();

        now.getTime();

        if (timeLeft > 0) {
            let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let secondsLeft = Math.ceil((timeLeft % (1000 * 60)) / 1000);

            minutes.value = minutesLeft;
            seconds.value = secondsLeft;
        } else {
            minutes.removeAttribute('disabled');
            seconds.removeAttribute("disabled");
            clearInterval(intervalId);
            alert("Czas się skończył :)")
            seconds.value = 0;
        }
    }, 1000);
};

timerForm.addEventListener("submit", countdown);