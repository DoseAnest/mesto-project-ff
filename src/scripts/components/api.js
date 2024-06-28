import {config} from '../../index.js';
// render profile
function renderUserProfileOnServer({name, about}) {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: config.headers.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    }); 
};

function getUserInfoByServer() {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: {
        authorization: config.headers.authorization
      },
  })
  .then((res) => {
    return res.json()
  })
  .catch(err => console.log(err));
};

// Вывести карточки на страницe
function getCardInfoByServer() {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET',
    headers: {
        authorization: config.headers.authorization
        },
  })
  .then((res) => {
    return res.json()
  })
  .catch(err => console.log(err));
};


//add card on server
function addUserCardOnServer({link, name}) {
  return fetch(`${config.baseUrl}/cards`, {
      method: 'POST',
      headers: {
          authorization: config.headers.authorization,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          link: link,
          name: name
        })
      }); 
};
//remove card
function removeUserCardOnServer(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
  })
};
//add likes on server
function addUserlikesInfoOnServer(cardId) {
  return fetch(`${config.baseUrl}//cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
        authorization: config.headers.authorization,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return res.json();
  });
};
//remove likes
function removeUserlikesOnServer(cardId) {
  return fetch(`${config.baseUrl}//cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
  })
  .then(res => {
    return res.json();
});
};
function renderUserAvatarOnServer({avatar}) {
  return fetch(`${config.baseUrl}/users/me/avatar `, {
    method: 'PATCH',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: avatar
    })
  }); 
}
export {
  addUserCardOnServer, 
  renderUserProfileOnServer, 
  getUserInfoByServer, 
  getCardInfoByServer, 
  removeUserCardOnServer,
  addUserlikesInfoOnServer,
  removeUserlikesOnServer,
  renderUserAvatarOnServer
}