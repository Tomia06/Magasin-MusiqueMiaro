fetch("musique.json")
    .then(musique => musique.json())
    .then(magasin => {
        afficher(magasin);
    });


// ROle: affiche les instruments dans la div qui a l'id di&vProduit
// Parametre : tableau, le tableau des instruments
// retour: rien 
function afficher(tableau) {
    tableau.produits.forEach(articles => {
            document.getElementById("secProduit").innerHTML += `
            <div class="card w50">
            <img src= ${articles.image} alt="" class="w100">
            <h2>${articles.nom}</h2>
            <p>${articles.description}</p>
            </div>
            `
        });
}                                                   