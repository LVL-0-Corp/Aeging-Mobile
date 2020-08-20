//import { API_PATH, API_PORT } from './.env';
// yohann : 192.168.99.1
// moi : 192.168.1.5

async function getShops() {
    try {
      let result = await fetch('http://192.168.99.1:3000/api/0.1/shops').then((res) => res.json());
      return result;
    } catch (e) {
      console.error("FAIL BATARD", e);
      return [];
    }
}

// async function getShops3(lat,long) {
//   try {
//     let result = await fetch('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=50.2795249&lon=3.9749732').then((res) => res.json());
//     console.log(result.address.town);
//     if(result.address.town != null){
//       return result.address.town;
//     }else{
//       return result.address.village;
//     }
    
//   } catch (e) {
//     console.error("FAIL BATARD", e);
//     return [];
//   }
// }

async function getShops3(lat,long) {
  try {
    // console.log(lat,long, `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}`);
    console.log('bienvenu dans getshops3 avec comme params : ',lat, long,'pour le lien suivant : https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=37.421998333333335&lon=-122.08400000000002');
    let result = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=37.421998333333335&lon=-122.08400000000002`).then((res) => console.log(res)).catch(error => console.log(error.message));
    //res.json()
    console.log('Fin de l appel du lien avec resultat : ', result);
    // console.log("eeeeee")
    console.log(result);
    if(result.address.town != null){
      return result.address.town;
    }else{
      if(result.address.city != null){
        return result.address.city;
      }
      else{
        console.log("last chance")
        return 'result.address.village';
      }
    }
  } catch (e) {
    console.error("FAIL BATARD : ", e);
    return [];
  }
}

async function getShops2() {
  return [{
    imagesUrl: [
      "https://s2.qwant.com/thumbr/0x0/d/4/b5dbd118f26b7f9b5c5fe891af09c60acbee34ae68b6e6e83f7457befeda36/1200px-Solf%C3%A9rino_ferme_de_pouy_2.JPG?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fce%2FSolf%25C3%25A9rino_ferme_de_pouy_2.JPG%2F1200px-Solf%25C3%25A9rino_ferme_de_pouy_2.JPG&q=0&b=1&p=0&a=1",
      "https://s2.qwant.com/thumbr/0x380/e/8/0f05c615a8f69ea7c1dd38ad319bb6f8d1bf552cb073c43828321965a2c07a/produits-laitiers-ennemis.jpg?u=https%3A%2F%2Fs3-eu-west-1.amazonaws.com%2Ffitnext-blog-upload%2Ffr%2Fconseils%2Fwp-content%2Fuploads%2F2012%2F06%2F07153042%2Fproduits-laitiers-ennemis.jpg&q=0&b=1&p=0&a=1",
      "https://s1.qwant.com/thumbr/0x380/0/d/ce86828aef73b5fa4645c8f8d64ca3f5fa6d99c0908cd11a3036cbf70da0a4/CH_19092010_108.jpg?u=https%3A%2F%2Fstatic.produits-laitiers.com%2Fwp-content%2Fuploads%2F2011%2F06%2FCH_19092010_108.jpg&q=0&b=1&p=0&a=1"
    ],
    _id: "5f06f0252071b106e9d0ad8d",
    name: "Ferme des moulins",
    longDescription: "Exploitation sensible à l’agroécologie, ayant pour but de fournir des produits sains ! Nous tenons cette ferme familiale depuis plusieurs générations, nous prenons soin de animaux et ils nous le rendent bien ! Lait, beurre, crème, fromage blanc, … ainsi que de la viande que vous ne trouverez nulle part ailleurs. Nous avons, en ce sens, plusieurs certifications agricoles tel que l’HVE. N’hésitez pas a nous contacter et à venir nous voir, nous serons ravi de vous présentez notre exploitation ainsi que nos produits.",
    address: "Lieu-dit de la vachette 59330 hautmont",
    timeTable: "Ouvert du Lundi au Jeudi de 9h à 17h. Nous sommes également présents au marché d’Hautmont le 1 er samedi du mois et celui de Maubeuge tout les Dimanches.",
    mail: "fermedesmoulins@gmail.com",
    phone: "03.27.12.12.12",
    webSite: "www.lafermedesmoullins.fr",
    siret: "123456789",
    productType: "Produits laitiers, viande bovine",
    facebook: "https://www.facebook.com/Local-Go-105850004533318",
    instagram: "n/a",
    certification: "Bio euro",
    imageUrl: "https://s2.qwant.com/thumbr/0x0/d/4/b5dbd118f26b7f9b5c5fe891af09c60acbee34ae68b6e6e83f7457befeda36/1200px-Solf%C3%A9rino_ferme_de_pouy_2.JPG?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fce%2FSolf%25C3%25A9rino_ferme_de_pouy_2.JPG%2F1200px-Solf%25C3%25A9rino_ferme_de_pouy_2.JPG&q=0&b=1&p=0&a=1"
  }]
}

export { getShops, getShops3 };