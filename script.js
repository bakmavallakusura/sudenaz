const flash = document.getElementById("flash");
const text = document.getElementById("text");
const heartContainer = document.getElementById("heartContainer");
const particles = document.getElementById("particles");
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i=0;i<200;i++){
    stars.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        s:Math.random()*0.5+0.2
    });
}

function drawStars(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    stars.forEach(star=>{

        ctx.beginPath();
        ctx.arc(star.x,star.y,star.r,0,Math.PI*2);
        ctx.fillStyle="rgba(220,180,255,0.8)";
        ctx.fill();

        star.y += star.s;

        if(star.y > canvas.height){
            star.y = 0;
            star.x = Math.random()*canvas.width;
        }

    });

    requestAnimationFrame(drawStars);
}

drawStars();

for(let i=0;i<80;i++){

    const spark = document.createElement("div");

    spark.className="spark";

    spark.style.left=Math.random()*100+"%";
    spark.style.bottom="-20px";

    spark.style.animationDelay=Math.random()*8+"s";

    spark.style.opacity=Math.random();

    particles.appendChild(spark);
}

setTimeout(()=>{

    flash.classList.add("flash");

    heartContainer.style.transform =
    "translate(-50%,-50%) scale(6)";

    heartContainer.style.opacity = "0";

},7000);

setTimeout(()=>{

    text.classList.add("show");

},7600);

window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});
