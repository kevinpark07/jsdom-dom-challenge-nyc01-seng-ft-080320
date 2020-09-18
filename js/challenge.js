document.addEventListener("DOMContentLoaded", function(e) {
    // const countDown = window.setTimeout(counterRun, 0)
    let timerRunning = true
    let timerId = setInterval(() => {
        incrementCounter(1)
    },1000)

    const likeMap = {}

    const incrementCounter = num => {
        const counter = document.querySelector('#counter')
        const newNum = timer() + num

        counter.textContent = newNum
    }

    
    

    function timer() {
        const timer = document.querySelector('#counter')
        const seconds = timer.textContent
        const integer = parseInt(seconds)
        
        return integer
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
            incrementCounter(1);
        })

        heartButton.addEventListener('click', e => {
            const num = timer();

            const likeUl = document.querySelector('.likes')
            
            if (likeMap[num]) {

                const likeLi = likeMap[num]
                const newCount = parseInt(likeLi.dataset.likeCount) + 1
                likeLi.dataset.likeCount = newCount;
                likeLi.textContent = `${num} has been like ${newCount} times`
            } else {
                const likeLi = document.createElement('li')
                likeLi.dataset.likeCount = 1
                likeLi.textContent = `${num} has been like 1 time`;
                likeMap[num] = likeLi
                likeUl.append(likeLi);
                   
            } 
        })

        pauseButton.addEventListener('click', e => {
            
            function pause(){
                console.log(pauseButton.textContent)
                if (timerRunning) {
                    clearInterval(timerId);
                    minusButton.disabled = true;
                    plusButton.disabled = true;
                    heartButton.disabled = true;
                    pauseButton.textContent = "resume";
                    timerRunning = false;
                } else {
                    timerId = setInterval(() => {
                        incrementCounter(1)
                    },1000)

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