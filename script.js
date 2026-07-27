const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

const heart = document.getElementById("heart-wrapper");
const message = document.getElementById("message");
const particles = document.getElementById("particles");

canvas.width = innerWidth;
canvas.height = innerHeight;

let stars = [];

// Yıldız oluştur
for(let i=0;i<250;i++){

    stars.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2+0.3,
        speed:Math.random()*0.5+0.2,
        alpha:Math.random()
    });

}

function animateStars(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    stars.forEach(s=>{

        ctx.beginPath();
        ctx.arc(s.x,s.y,s.r,0,Math.PI*2);

        ctx.fillStyle=`rgba(220,180,255,${s.alpha})`;

        ctx.fill();

        s.y+=s.speed;

        if(s.y>canvas.height){

            s.y=0;
            s.x=Math.random()*canvas.width;

        }

    });

    requestAnimationFrame(animateStars);

}

animateStars();


// Mor parçacıklar

for(let i=0;i<120;i++){

    const p=document.createElement("div");

    p.className="spark";

    p.style.left=Math.random()*100+"%";

    p.style.bottom="-30px";

    p.style.animationDelay=Math.random()*10+"s";

    p
