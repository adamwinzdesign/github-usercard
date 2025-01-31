/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const followersArray = ['falmatad', 'theolamide', 'sjeremich23', 'donutwizard666', 'viewgo', 'jaytee-padilla'];

const cards = document.querySelector('.cards');

axios
  .get('https://api.github.com/users/adamwinzdesign')
  .then(response => {
    console.log(response);
      const newCard = createCard(response.data);
      cards.appendChild(newCard);
    })
  .catch(error => {
    console.log("The data was not returned", error);
  });

followersArray.forEach(function(e) {
  console.log(e)
  axios
  .get(`https://api.github.com/users/${e}`)
  .then(response => {
    console.log(response);
      const newCard = createCard(response.data);
      cards.appendChild(newCard);
    })
  .catch(error => {
    console.log("The data was not returned", error);
  });
});

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

function createCard(obj) {
  // create HTML elements
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const userName = document.createElement('h3');
  const gitUserName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userLink = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  // append new HTML to existing
  cards.appendChild(userImg);
  cards.appendChild(cardInfo);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(gitUserName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  cardInfo.appendChild(userLink);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

  // set class names
  cards.classList.add('card')
  cardInfo.classList.add('card-info');
  userName.classList.add('name');
  gitUserName.classList.add('username');

  // set text content
  userImg.src = obj.avatar_url,
  userName.textContent = `Name: ${obj.name}`,
  gitUserName.textContent = `Git User Name: ${obj.login}`,
  userLocation.textContent = `Location: ${obj.location}`,
  userLink.textContent = `Git URL: ${obj.html_url}`,
  userFollowers.textContent = `Followers: ${obj.followers}`,
  userFollowing.textContent = `Following: ${obj.following}`

  return cardInfo;
};

// createCard(adamProfile);

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
