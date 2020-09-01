
async function getCertif() {
    try {
      let result = await fetch('http://192.168.99.1:3000/api/0.1/certifications').then((res) => res.json());
      return result;
    } catch (e) {
      console.error("FAIL BATARD", e);
      return [];
    }
}

export { getCertif };