'use strict';

function generateButton() {
    console.log('generateButton');
    document.getElementById('buttons').innerHTML += '</br><input class="awesomplete" data-list="sipuli, tomaatti, jauheliha, juusto, mustapippuri, oregano " />';
}

function getIngredients() {
    var ingredient = document.getElementById('ingredient').value;
    console.log(ingredient);
    getRecipes(ingredient);
}

function getRecipes(args) {
    console.log(args + ' in getRecipes function');
    var url = 'https://spreadsheets.google.com/feeds/list/1yiXmE1coF-prtfwZYqtJYESIIGwc-E-TwdQEQhCelpY/od6/public/basic?alt=json';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {

            var result = JSON.parse(xhr.responseText);

            for (var i = 0; i < 4; i++) {
                console.log(i);
                //console.log(result.feed.entry[0].content.$t);
                document.getElementById('recipes').innerHTML += result.feed.entry[i].content.$t + '</br>';
            }



        }


    };
    xhr.send();
}