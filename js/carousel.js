var prev = document.getElementById('prev');
var next = document.getElementById('next');
var images = document.getElementById('images');
var links = document.getElementById('links');

fetch('assets/articles.json').then(function(res){
// get json resources
    res.json().then(function(json){
        for(var i = 0; i <json.length; i++){
            var a = document.createElement('a');
            // create an "a" element for linking to webpage we want
            a.href = json[i].a;
            // json.a is the link to the webpage and set attibute "href" as it 
            images.appendChild(a);
            var image = document.createElement('img');
            // creae a "img" element set up all attibute from json
            image.setAttribute('alt', json[i].title);
            image.setAttribute('title', json[i].title);
            image.setAttribute('src', json[i].url);
            a.appendChild(image)
        }
        //impelement two different function depends on webpages' size 
        if (window.innerWidth < 768){
            carouselMobile(json)
        }
        else{
            carousel(json)
        }
    })
})

function carousel(json) {
    var currentImage = 1;
    var imageWidth = 45;
    // define the width of image
    prev.addEventListener('click', function() {
        // when the displayed image is not the first one
        if(currentImage !=1){
            --currentImage;
            images.style.left = imageWidth - (currentImage * imageWidth) + 'vw';
            // image will move to right, showing prev image
        }
        // when the displayed image is the fisrt one
        else if(currentImage == 1){
            currentImage = 5;
            images.style.left = - imageWidth * 4 + 'vw';
            // current image will jump to last one
        }
        links.innerText = json[currentImage- 1].title;
        links.href = json[currentImage- 1].a;
        // update links and titles of images
    });
    next.addEventListener('click', function() {
        // when the displayed image is not the last one
        if(currentImage !== 5){
            ++currentImage;
            images.style.left = imageWidth - (currentImage * imageWidth) + 'vw';
            // image will move to left and show next image
        }
        // when currently it shows the last image
        else if(currentImage == 5){
            currentImage = 1;
            images.style.left = 0 + 'vw';
            // current iamge will set up to 1 and jump back to the first image
        }
        links.innerText = json[currentImage- 1].title;
        links.href = json[currentImage- 1].a;
    });
    links.innerText = json[currentImage- 1].title;
}

// this function is same as the one above, just changed image width to fit mobile devices
function carouselMobile(json) {
    var currentImage = 1;
    var imageWidth = 81;
    prev.addEventListener('click', function() {
        if(currentImage !=1){
            --currentImage;
            images.style.left = imageWidth - (currentImage * imageWidth) + 'vw';
        }
        else if(currentImage == 1){
            currentImage = 5;
            images.style.left = - imageWidth * 4 + 'vw';
        }
        caption.innerText = json[currentImage- 1].title;
        caption.href = json[currentImage- 1].a;
    });
    next.addEventListener('click', function() {
        if(currentImage !== 5){
            ++currentImage;
            images.style.left = imageWidth - (currentImage * imageWidth) + 'vw';
        } 
        else if(currentImage == 5){
            currentImage = 1;
            images.style.left = 0 + 'vw';
        }
        links.innerText = json[currentImage- 1].title;
        links.href = json[currentImage- 1].a;
    });
    links.innerText = json[currentImage- 1].title;
}