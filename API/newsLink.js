
async function getNews() {
    try {
      let result = await fetch('http://192.168.99.1:3000/api/0.1/news').then((res) => res.json());
      return result;
    } catch (e) {
      console.error("FAIL BATARD", e);
      return [];
    }
}

export { getNews };