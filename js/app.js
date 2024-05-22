var slide = document.getElementsByClassName("slide");
var perv = document.querySelector(".perv");
var next = document.querySelector(".next");

// slide[1].style.display='block';

var count=0;

function DisplayNone(){
    for(var i=0; i<slide.length; i++ ){
        slide[i].style.display='none';
    }
}

next.addEventListener("click",function (e){
    e.preventDefault();
    count++;
    if(count>slide.length-1){
        count=0;
    }
    DisplayNone();
    slide[count].style.display='block';
})
perv.addEventListener("click",function (e){
    e.preventDefault();
    count--;
    if(count<0){
        count=slide.length-1;
    }
    DisplayNone();
    slide[count].style.display='block';
})
