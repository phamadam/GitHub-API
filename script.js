'use strict';

function displayResults(responseJson) {
    console.log(responseJson);
    $('.results-list').empty();
    for (let i = 0; i < responseJson.value.length; i++){
      $('.results-list').append(
        `<li><h3><a href="${responseJson.value[i].url}">${responseJson.value[i].name}</a></h3>
        </li>`
      )}; 
    $('.results').removeClass('hidden');
  };

function getSearchUser(searchUser) {
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
};

const options = {
    headers: new Headers({
        Accept: application/vnd.github.v3+json
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

$watchForm();