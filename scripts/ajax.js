var pageCounter = 1;
var container = document.getElementById('info');
var btn = document.getElementById('btn');
btn.addEventListener("click", function() {
    var theRequest = new XMLHttpRequest();
    theRequest.open('GET', 'https://jerrodthomas.github.io/scripts/info.json');
    theRequest.onload = function () {
        var theData = JSON.parse(theRequest.responseText);
        renderHTML(theData);
    };
    theRequest.send();
    pageCounter++;
    if (pageCounter > 1) {
        btn.classList.add("hide");
    }
});

function renderHTML(data) {
    var htmlString = "";
    for  (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is originally from " + data[i].home + ". his favorite comics are: "
        for (ii = 0; ii < data[i].faorites.comics.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].faorites.comics[ii];
            }
            
            else {
                htmlString += " and " + data[i].faorites.comics[ii];
            }
        }
        
        htmlString += ". His favorite music is ";
        
        for (ii = 0; ii < data[i].faorites.music.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].faorites.music[ii];
            }
            
            else {
                htmlString += " and " + data[i].faorites.music[ii];
            }
        }
        
        htmlString += ". His favorite movies are ";
        
        for (ii = 0; ii < data[i].faorites.movies.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].faorites.movies[ii];
            }
            
            else {
                htmlString += " and " + data[i].faorites.movies[ii];
            }
        }
        
        htmlString += ". His favorite tv show are ";
        
        for (ii = 0; ii < data[i].faorites.shows.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].faorites.shows[ii];
            }
            
            else {
                htmlString += " and " + data[i].faorites.shows[ii];
            }
        }
        
        htmlString += '.</p>'
    }
    container.insertAdjacentHTML('beforeend', htmlString);
}