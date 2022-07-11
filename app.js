const dino = document.querySelector(".dinosaur");
const container = document.querySelector(".container")
const bg = document.querySelector(".background")
document.getElementById("audio-src").load();
const btn = document.querySelector(".play-btn");
let scoreCard = document.querySelector(".score");
let btnState = false;

let obstacle = document.createElement("div");
obstacle.classList.add("obstacle");
obstacle.style.left = 590 + "px";

btn.addEventListener("click", function() {
    if(btnState==false)
    {
        btn.remove();       
        btnState = true;
        startGame();
    }
})


function overlap(element1, element2)
{
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return !(rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom);

}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    // audio.load();
}



function startGame()
{
    let score = 0;
    if(btnState==true)
    {
        container.addEventListener("click", (e)=>{
            console.log(dino);
            dino.style.top = "260px";
            setTimeout(()=>{
                dino.style.top = "288px";
            }, 450)
        })

        document.addEventListener("keyup", (e)=>{
            if(e.code=="Space")
            {

                dino.style.top = "260px";
                setTimeout(()=>{
                    dino.style.top = "288px";
                }, 450)

            }
        })

        
        
            // obstacle.style.top = "0px"; 
        bg.appendChild(obstacle);
        setInterval(()=>{
            let speed  = 5;
            obstacle.style.left = parseInt(obstacle.style.left) - speed + "px";
            if(parseInt(obstacle.style.left) < 10){
                obstacle.style.left = 590 + "px";
                score++;
                scoreCard.innerHTML = score;
            }
            if(overlap(dino, obstacle)){
                playSound("wrong");
                alert("Score: " + score);
                location.reload();
            }
            else
            {
                console.log("no overlap");
            }
        })

        
    
    }
}





console.log(obstacle);