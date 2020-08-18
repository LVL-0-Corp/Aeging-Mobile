//import { API_PATH, API_PORT } from './.env';
// yohann : 192.168.99.1
// moi : 192.168.1.5

async function getProduct() {
  return [{
    _id: "5f06f0252071b106e9d0ad8d",
    name: "lait",
    productType: "Produits laitiers",
    certification: "Bio euro",
    imageUrl: "https://s1.qwant.com/thumbr/0x380/2/1/8681033c09bf408311c713ba10c000d6b61e9aa6e0fdb2e3933d448bfdb956/bouteils-de-lait.jpg?u=http%3A%2F%2Fleblogdulait.fr%2Fwp-content%2Fuploads%2F2015%2F06%2Fbouteils-de-lait.jpg&q=0&b=1&p=0&a=1"
  },{
    _id: "5f06f8252071b106e9d0ad8d",
    name: "fromage",
    productType: "Produits laitiers",
    certification: "Bio euro",
    imageUrl: "https://s2.qwant.com/thumbr/0x380/4/2/7fc118cf2d1dedfda9d965372b49765b6ce62fb25300ca89ec70996daa7264/cheeses-1500x1000.jpg?u=https%3A%2F%2Fd28x3ey3vnaavc.cloudfront.net%2Fuploads%2F2013%2F09%2Fcheeses-1500x1000.jpg&q=0&b=1&p=0&a=1"
  }]
}

export { getProduct };