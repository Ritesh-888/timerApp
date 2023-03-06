
let timerInterval= null;

function startTimer(){

     
    const hours=parseInt(document.getElementById('hours').value);
    const mins=parseInt(document.getElementById('mins').value);
    const secs=parseInt(document.getElementById('secs').value);
     console.log(hours,mins,secs);

    let totalseconds= hours*3600 + mins*60 +secs;

    if(totalseconds<=0){
        alert('enter a valid time');
        return ;
    }

    timerInterval = setInterval(()=>{
        const hoursleft= Math.floor(totalseconds/3600);
        const minsleft= Math.floor((totalseconds%3600)/60);
        const secsleft= totalseconds%60;

        document.getElementById('timer').textContent = `${hoursleft.toString().padStart(2,'0')}:${minsleft.toString().padStart(2,'0')}:${secsleft.toString().padStart(2,'0')}`
        
        if(totalseconds<=0){
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = 'time is up!';
            document.getElementById('audio').play();
        }
        else{
            totalseconds--;
        }
         
    
    
    },1000);
}

function stopTimer(){

    clearInterval(timerInterval);
    document.getElementById('timer').textContent='';
}


document.getElementById("start-button").addEventListener('click',startTimer);
document.getElementById("stop-button").addEventListener('click',stopTimer);


 