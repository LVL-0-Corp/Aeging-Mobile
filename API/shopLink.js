//import { API_PATH, API_PORT } from './.env';

async function getShops() {
    try {
      let result = await fetch('http://192.168.1.5:3000/api/0.1/shops').then((res) => res.json());
      return result;
    } catch (e) {
      console.error("FAIL BATARD", e);
      return [];
    }
}

export { getShops };