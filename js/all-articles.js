// in my json file, I set "url", "title" and "a" for each article
// "url" is the link for image
// "title" is the name of link, it will update to span element
// "a" is link for article, it will update to "href" attibute for "a" element
fetch('assets/articles.json').then(function(res){
    res.json().then(function(json){
    // load all articles from json
        for(var i = 0; i <json.length; i++){
            var div = document.createElement('div');
            div.className = "article-img";
            // give it a className
            var allarticles = document.getElementById("all-articles");
            allarticles.appendChild(div)
            var a = document.createElement('a');
            var image = document.createElement('img');
            var span = document.createElement('span');
            // all element such as img, a and span will be created by JavaScript
            image.setAttribute('src', json[i].url);
            image.setAttribute('title', json[i].title);
            div.appendChild(a);
            a.href = json[i].a;
            a.appendChild(image);
            a.appendChild(span);
            span.innerText = json[i].title;
            // update span title from json
        }
    })
})