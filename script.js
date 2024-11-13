// EXERCICE 1

// console.log("Hello, world !")

// EXERCICE 2

// let nombre1 = 5 ;
// let nombre2 = 10;

// console.log(nombre1 + nombre2)

// EXERCICE 3

// let panier = ["pomme", "banane", "cerise"];

// panier.forEach((article) => {
//   console.log(article);
// });

// EXERCICE 4

// for (let pairs =  2; pairs <= 20; pairs += 2){
//     console.log(pairs)
// }

// EXERCICE 5

// const mot = "bonjour";
// var regex = /["a"-"e"-"i"-"o"-"u"-"y"]/g;
// console.log(
//   "le nombre de voyelles dans le mot " + mot + " est " + mot.match(regex).length
// );

// EXERCICE 6

// const phrase = "Bonjour je m'appelle Clement"
// let count = {}

// for (let index = 0; index < phrase.length; index++) {
//   let ch = phrase.charAt(index);
//   if (!count[ch]) {
//     count[ch] = 1;
//   } else {
//     count[ch] += 1;
//   }
// }
// console.log(
//   "Le nombre d'apparition de chaque lettres dans la phrase est " , count
// );

// EXERCICE 7

// let chiffres = [40,-59,42,69,-38];
// let positif = [];
// let negatif = [];

// for(let index = 0; index < chiffres.length; index++){
//     if(chiffres[index] < 0){

//         negatif.push(chiffres[index]);
//     }
//     else{
//         positif.push(chiffres[index])
//     }
// }
// console.log("Les chiffres positifs sont " + positif + " et les chiffres négatifs sont " + negatif)

// EXERCICE 8

// let nombres = [4,6,1,8,7];
// let compare = nombres[0];

// for(let i = 0; i < nombres.length; i++){
    
//     if(nombres[i] > compare ){
//         compare = nombres[i]
//     } 

// }
// console.log("Le nombre le plus grand est " + compare)


// EXERCICE 9

// let mot = prompt("Donne un mot");
// let separateur = mot.split("");
// separateur.reverse()

// console.log(separateur)