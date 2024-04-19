let timeremaning; 
let intervalId;

function startTimer(){
    let hours=Number(document.getElementById("hours").value);
    let minutes=Number(document.getElementById("minutes").value);
    let seconds=Number(document.getElementById("seconds").value);

    timeremaning=hours*3600 + minutes * 60 + seconds;
    intervalId=setInterval (function(){
        timeremaning --;

        let hrs=Math.floor(timeremaning/3600)
        let min=Math.floor((timeremaning%3600)/60)
        let sec=timeremaning%60;
        document.getElementById("hours").value=hrs
        document.getElementById("minutes").value=min
        document.getElementById("seconds").value=sec

        if(timeremaning<=0){
            clearInterval(intervalId)
            intervalId=null

            alert("Timer is over ⌛")
        }
    },1000)
}

function pauseTimer(){
    clearInterval(intervalId)
    intervalId=null
}

function resetTimer(){
    pauseTimer()
    document.getElementById("hours").value=0;
    document.getElementById("minutes").value=0;
    document.getElementById("seconds").value=0;
}