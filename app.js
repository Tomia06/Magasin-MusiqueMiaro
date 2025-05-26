fetch("musique.json")
    .then(musique => musique.json())
    .then(magasin => {
        afficherProduit(magasin);
        afficherService(magasin);
        afficherTemoignage(magasin);
        afficherPromesse(magasin);
    });


// ROle: affiche les instruments dans la div qui a l'id di&vProduit
// Parametre : tableau, le tableau des instruments
// retour: rien 

function afficherProduit(tableau) {
    tableau.produits.forEach(articles => {
        document.getElementById("secProduit").innerHTML += `
            <div class="card w25">
            <img src= ${articles.image} alt="" class="w100" >
            <h2>${articles.nom}</h2>
            <p>${articles.description}</p>
            </div>
            `
    });
}
//
//
//
function afficherService(tableau) {
    tableau.services.forEach(service => {
        document.getElementById("secServices").innerHTML += `
            <!-- Div principale -->
            <div class= "flex justify-center gap16 w100 swiper-slide">
                <!-- Div pour l'image -->
                <div class="w30">
                    <img src="${service.imageSevices}" alt="" class="w100">
                </div>
                <!-- Div pour les écritures -->
                <div class="w25">
                    <h2>${service.nom}</h2>
                    <p>${service.description}</p>
                    <a href="" class="bouton">Click ici</a> 
                </div>  
                
            </div>
             `
    });

  
};

//
//
//
function afficherTemoignage(tableau) {
    tableau.temoignages.forEach(temoignage => {
        const etoilesPleines = '★'.repeat(temoignage.note);
        const etoilesVides = '☆'.repeat(5 - temoignage.note);
        const etoiles = etoilesPleines + etoilesVides

        document.getElementById("secTemoignage").innerHTML += `
        <div class="w25 flex carte">
        <div>
            <h2>${temoignage.prenom}</h2>
            <h3>${temoignage.prestation}</h3>
            <p>${temoignage.commentaire}</p>
        </div>    
        <div>
            <p>${etoiles}</p>
        </div>
        </div>
            `
    })
}

//
//
//
function afficherPromesse(tableau) {
    tableau.promesses.forEach(promesse => {
        document.getElementById("secPromesses").innerHTML += `
        <div class="carte">     
        <div>
            <img src="" alt="">
        </div>
        <!-- Div pour les promesses -->
        <div>
            <p>${promesse}</p>
        </div>
        </div>
        `
    });
}


setTimeout(()=>{
    const swiper = new Swiper('.swiper', {
 
    direction: "horizontal",

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

   
});
},500)
  