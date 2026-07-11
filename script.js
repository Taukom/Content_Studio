const elements = document.querySelectorAll(".reveal");


function reveal(){

elements.forEach(el=>{

let position = el.getBoundingClientRect().top;

if(position < window.innerHeight - 100){

el.classList.add("active");

}

});

}


window.addEventListener(
"scroll",
reveal
);


reveal();
