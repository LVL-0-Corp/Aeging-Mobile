//import { API_PATH, API_PORT } from './.env';

async function getUser(id) {
  return {
    "userName": "Mon Pseudo",
    "userImage": "https://s1.qwant.com/thumbr/0x0/b/a/c2dd2bec69def6abf497b9b2add3d89e2c74d5d722a1be1c16b325635a8ead/_Ninja-2-256.png?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Favatars-15%2F64%2F_Ninja-2-256.png&q=0&b=1&p=0&a=1",
    "userFirstName": "Prenom",
    "userLastName": "Nom de Famille"
  };
}

export { getUser };