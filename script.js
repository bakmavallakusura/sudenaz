*{
margin:0;
padding:0;
box-sizing:border-box;
}

html,body{
width:100%;
height:100%;
overflow:hidden;
font-family:'Poppins',sans-serif;
background:#070010;
}

body{
background:
radial-gradient(circle at top,#4d148c 0%,#1a0033 45%,#05000a 100%);
}

/* Arkaplan */

#background{

position:fixed;

width:100%;
height:100%;

background:
radial-gradient(circle at 50% 20%,rgba(140,0,255,.18),transparent 40%),
radial-gradient(circle at 80% 70%,rgba(90,0,255,.15),transparent 35%),
radial-gradient(circle at 10% 80%,rgba(180,0,255,.12),transparent 40%);

animation:bgMove 12s ease-in-out infinite alternate;

z-index:0;

}

@keyframes bgMove{

0%{
transform:scale(1);
filter:blur(0px);
}

100%{
transform:scale(1.15);
filter:blur(10px);
}

}

/* Canvas */

#stars{

position:fixed;

left:0;
top:0;

width:100%;
height:100%;

z-index:1;

}

/* Kalp */

#heart-wrapper{

position:absolute;

left:50%;
top:50%;

transform:translate(-50%,-50%);

z-index:10;

animation:beat 1.25s infinite;

transition:1.5s;

}

#heart{

width:180px;

height:180px;

background:#b100ff;

transform:rotate(-45deg);

position:relative;

box-shadow:
0 0 20px #b100ff,
0 0 40px #b100ff,
0 0 80px #8d00ff,
0 0 140px #6500ff,
0 0 220px #6500ff;

}

#heart::before,
#heart::after{

content:"";

position:absolute;

width:180px;
height:180px;

background:#b100ff;

border-radius:50%;

}

#heart::before{

top:-90px;

left:0;

}

#heart::after{

left:90px;

top:0;

}

@keyframes beat{
