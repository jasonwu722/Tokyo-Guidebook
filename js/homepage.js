fetch('assets/articles.json').then(function(res){
    res.json().then(function(json){
        for(var i = 1; i < 4; i++){
            var NEWa = document.getElementById("container-" + (i));
            NEWa.href = json[i].a;
            var img = document.createElement('img');
            img.setAttribute('src', json[i].url);
            img.setAttribute('title', json[i].title);
            var title = document.createElement('span');
            title.innerText = json[i].title;
            NEWa.appendChild(img);
            NEWa.appendChild(title);
        }

        var TOPa = document.getElementById("toparticle");
        TOPa.href = json[0].a;
        var TOPimg = document.getElementById("toparticleimg");
        TOPimg.src = json[0].url;
    })
})
