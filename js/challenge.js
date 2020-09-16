document.addEventListener("DOMContentLoaded", function(e) {
    const countDown = window.setInterval(timer, 1000)
    let timerRunning = true

    function timer() {
        const timer = document.querySelector('#counter')
        const seconds = timer.textContent
        const integer = parseInt(seconds)
        const newSeconds = integer + 1
        
        timer.textContent = newSeconds;
    }

    function clickHandler() {
        const buttons = document.querySelectorAll('button');
        const minusButton = buttons[0];
        const plusButton = buttons[1];
        const heartButton = buttons[2];
        const pauseButton = buttons[3];

        minusButton.addEventListener('click', function(e) {
            const timer = document.querySelector('#counter')
            const seconds = timer.textContent
            const integer = parseInt(seconds)
            const newSeconds = integer - 1
        
            timer.textContent = newSeconds;
        })

        plusButton.addEventListener('click', e => {
            timer();
        })

        heartButton.addEventListener('click', e => {
            const likeUl = document.querySelector('.likes')

            likeMap = {}
            
            //if (likeMap) {

            //} else {
            const likeLi = document.createElement('li')
            const seconds = document.querySelector('#counter').textContent
            likeLi.dataset.time = seconds
            //const numberLikes = 0
            likeLi.textContent = `${seconds}`;
            //likeMap= [likeLi]
            likeUl.append(likeLi)   
            }
            console.dir(likeMap)
        })

        pauseButton.addEventListener('click', e => {
            
            function pause(){
                console.log(pauseButton.textContent)
                if (timerRunning) {
                    clearInterval(countDown);
                    minusButton.disabled = true;
                    plusButton.disabled = true;
                    heartButton.disabled = true;
                    pauseButton.textContent = "resume";
                    timerRunning = false;
                } else {
                    setInterval(timer, 1000);
                    minusButton.disabled = false;
                    plusButton.disabled = false;
                    heartButton.disabled = false;
                    pauseButton.textContent = 'pause';
                    timerRunning = true
                }
            }
            pause()
        } )
    }
    
    clickHandler();
})