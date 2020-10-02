'use strict';

function displayResults(responseJson) {
    console.log(responseJson);
    for (let i = 0; i < responseJson.length; i++){
      $('.results').append(
        `<p><a href="${responseJson[i].html_url}">${responseJson[i].name}</a></p>`
      )}; 
    $('.results').removeClass('hidden');
  };

function getSearchUser(searchUser) {
    fetch(`https://api.github.com/users/${searchUser}/repos`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert(error));
};

const options = {
    headers: new Headers({
        'Accept': 'application/vnd.github.v3+json'
    })
};

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const searchUser = $('.js-search-user').val();
        console.log(searchUser)
        getSearchUser(searchUser);
    });
}

$(watchForm);