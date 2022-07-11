let img = document.getElementsByTagName("img");
let newForm = document.querySelector('form');
let button = document.querySelector('#generator');

newForm.addEventListener('submit', function(e){
    e.preventDefault();
    let meme = document.createElement('div');
    let textTop = document.createElement('div');
    let textBottom = document.createElement('div');
    let img = document.createElement("img");
    img.src = document.querySelector('#link').value;
    textTop.classList.add('textTop');
    textTop.innerHTML = document.getElementById('topText').value;
    textBottom.classList.add('textBottom');
    textBottom.innerHTML = document.querySelector('#bottomText').value;
 
    meme.classList.add('meme');
    meme.append(textTop);
    meme.append(textBottom);
    meme.append(img);
    let memeLocation = document.querySelector('#location');
    memeLocation.append(meme);
    
    newForm.reset();

})
// document.addEventListener('DOMContentLoaded', function(e){});

//references: W3 school on how to add texts on images.
