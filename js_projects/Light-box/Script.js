// function to include html popup code

function includePopupHtml(){

    let html = '<div id="pop-up"><span id="close" onclick="closePopup()"> <img id="npop" src="images/close.png"></span><img id="leftarrow"  src="images/left-arrow.png"><img id="rightarrow" src="images/right-arrow.png"><img id="mainpopimage" src="images/mac.png"></div>';

    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv, document.body.firstChild);
}

let img;
let current;

// function to initialize plugin

function imagePopupInIt(target){


    //select all the images with class target
    img = document.getElementsByClassName(target);

    //add eventlistener on all selected images

    for(var i = 0; i < img.length ; i++){
       //add pointer
       img[i].style.cursor = 'pointer';

       //add event listener
       img[i].addEventListener("click",function(){
        document.getElementById("mainpopimage").src = this.src;
        document.getElementById("pop-up").style.display = 'block';
        checkArrow();
       })
    }
    includePopupHtml();
    //next button
      document.getElementById('rightarrow').addEventListener('click',function(){
        nextimg();
      });
    //prev button
    document.getElementById('leftarrow').addEventListener('click',function(){
        previmg();
      });
}

// close button

function closePopup(){
    document.getElementById("mainpopimage").src = "";
    document.getElementById("pop-up").style.display = 'none';
}


//next image

function nextimg(){
   getCurrentImage();
   current++;
   document.getElementById("mainpopimage").src = img[current].src;
   checkArrow()
}

//prev image

function previmg(){
    getCurrentImage();
    current--;
    document.getElementById("mainpopimage").src = img[current].src;
    checkArrow()
}

function getCurrentImage(){
    for(var i = 0; i< img.length; i++){
       if(img[i].src == document.getElementById("mainpopimage").src){
         current = i;
       }
    
    }
}

function checkArrow(){   
    getCurrentImage();
    if(current == "0"){
        document.getElementById('leftarrow').style.display = 'none';
        document.getElementById('rightarrow').style.display = 'block';
    }else if(current == img.length - 1){
        document.getElementById('rightarrow').style.display = 'none';
    }else{
        document.getElementById('leftarrow').style.display = 'block';
        document.getElementById('rightarrow').style.display = 'block';
    }
}




