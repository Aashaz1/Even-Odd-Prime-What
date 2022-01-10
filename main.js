function oddEve(){
    input = document.getElementById("input").value;
    if(input % 2 == 0){
        document.getElementById("label").innerHTML = `${input} is an Even Number`
    }
    else {
        document.getElementById("label").innerHTML = `${input} is an Odd Number`
    }
    synth = window.speechSynthesis;
    data = document.getElementById("label").innerHTML;
    utterThis = new SpeechSynthesisUtterance(data);
    synth.speak(utterThis);
}

function primeComposite(){
    input = Number(document.getElementById("input").value);
    let isPrime = true;
    
    //Check if the number is equal to 1
    if (input === 1){
        document.getElementById("label").innerHTML = `1 is neither prime nor composite`
    } else if (input > 1){
        for(let i = 2; i < input; i++){
            if(input % i == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            document.getElementById("label").innerHTML = `${input} is a prime number` 
        } else{
            document.getElementById("label").innerHTML = `${input} is not a prime number`
        }
    }
    synthS = window.speechSynthesis;
    dataA = document.getElementById("label").innerHTML;
    utterThisS = new SpeechSynthesisUtterance(dataA);
    synthS.speak(utterThisS);
}