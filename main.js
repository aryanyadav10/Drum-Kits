const kits = ["crash","kick","snare","tom"];

const containerEl = document.querySelector(".container");

kits.forEach(kits=> {
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kits;
    btnEl.style.backgroundImage = "url(images/"+kits+".png)";
    containerEl.appendChild(btnEl);
    const audioEl = document.createElement("audio");
    containerEl.appendChild(audioEl);
    audioEl.src = "Drum-Kits/Sounds/"+kits+".mp3"
    btnEl.addEventListener("click",(event)=> {
        audioEl.play();
    });
    window.addEventListener("keydown",(event)=> {
        if(event.key === kits.slice(0,1)){
            audioEl.play();
            btnEl.style.transform = "scale(.9)";
            setTimeout(()=> {
               btnEl.style.transform = "scale(1)";
            },100);
        };
    })
});
