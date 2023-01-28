// $( document ).ready(function() {


//     // on va chercher l'article voulu 
// let promise1 = fetch("https://www.tbads.eu/greta/kercode/ajax/?article=1");

// // on selectionne les élémenents dans lesquels on va insérer nos données récupérer
// let datePremier = document.querySelector('#dateArticle1');
// let titrePremier = document.querySelector('#premierTitre1');
// let contenuPremier = document.querySelector('#contenuArticle1');
// let contenuPremierModal = document.querySelector('#contenuModal1');
// let titrePremierModal = document.querySelector('#titreModal');
// let imagePremierModal = document.querySelector('#premierImage');
// let auteurModal1 = document.querySelector('#nomAuteur1');
//  promise1.then((Response) => {
//     let article1 = Response.json();
//     article1.then((article)=>{

//         // on définit des variables pour faciliter l'écriture
//         let titre = (article.title);
//         let date = (article.date);
//         let auteur = (article.author);
//         let motsCle = (article.keyword);
//         let contenu = (article.content);
//         let image = (article.picture);


//         // on coupe le contenu au 130eme caractère pouyr l'aperçu
//         let str = contenu[0];
//         let aperçu = (str.substring(0 , 130)) 

//         //on insère les éléments récupérer aux différents endroits voulus

//         datePremier.innerHTML = date.day + " " + date.month + " " + date.year;
//         contenuPremier.innerHTML = aperçu + " ...";
//         contenuPremierModal.innerHTML = contenu[0]+ "</br>"+ contenu[1] + "</br>"+ contenu[2];
//         titrePremierModal.innerHTML = titre;
//         imagePremierModal.setAttribute("src",image);
//         auteurModal1.innerHTML = auteur.name + " " + auteur.surname +" rédigé le "+  date.day+ " "+ date.month + " " + date.year;
//     })
//  })

//     // on va chercher l'article voulu 
//     let promise2 = fetch("https://www.tbads.eu/greta/kercode/ajax/?article=2");

//     // on selectionne les élémenents dans lesquels on va insérer nos données récupérer
//     let dateDeuxieme = document.querySelector('#dateArticle2');
//     let titreDeuxieme = document.querySelector('#premierTitre2');
//     let contenuDeuxieme = document.querySelector('#contenuArticle2');
//     let contenuDeuxiemeModal = document.querySelector('#contenuModal2');
//     let titreDeuxiemeModal = document.querySelector('#titreModal2');
//     let imageDeuxiemeModal = document.querySelector('#deuxiemeImage');
//     let auteurModal2 = document.querySelector('#nomAuteur2');
//      promise2.then((Response) => {
//         let article2 = Response.json();
//         article2.then((article)=>{
    
//             // on définit des variables pour faciliter l'écriture
//             let titre2 = (article.title);
//             let date2 = (article.date);
//             let auteur2 = (article.author);
//             let motsCle2 = (article.keyword);
//             let contenu2 = (article.content);
//             let image2 = (article.picture);
    
    
//             // on coupe le contenu au 130eme caractère pour l'aperçu
//             let str = contenu2[0];
//             let aperçu = (str.substring(0 , 130)) 
    
//             //on insère les éléments récupérer aux différents endroits voulus
    
//             dateDeuxieme.innerHTML = date2.day + " " + date2.month + " " + date2.year;
//             contenuDeuxieme.innerHTML = aperçu + " ...";
//             contenuDeuxiemeModal.innerHTML = contenu2[0]+ "</br>"+ contenu2[1] + "</br>"+ contenu2[2];
//             titreDeuxiemeModal.innerHTML = titre2;
//             imageDeuxiemeModal.setAttribute("src",image2);
//             auteurModal2.innerHTML = auteur2.name + " " + auteur2.surname +" rédigé le "+  date2.day+ " "+ date2.month + " " + date2.year;


// }); 
//      });


//     });
function laFactorisation() {
    let articles = [
      {
        id: 1,
        url: "https://www.tbads.eu/greta/kercode/ajax/?article=1",
        date: document.querySelector('#dateArticle1'),
        title: document.querySelector('#premierTitre1'),
        content: document.querySelector('#contenuArticle1'),
        modalContent: document.querySelector('#contenuModal1'),
        modalTitle: document.querySelector('#titreModal'),
        modalImage: document.querySelector('#premierImage'),
        modalAuthor: document.querySelector('#nomAuteur1')
      },
      {
        id: 2,
        url: "https://www.tbads.eu/greta/kercode/ajax/?article=2",
        date: document.querySelector('#dateArticle2'),
        title: document.querySelector('#premierTitre2'),
        content: document.querySelector('#contenuArticle2'),
        modalContent: document.querySelector('#contenuModal2'),
        modalTitle: document.querySelector('#titreModal2'),
        modalImage: document.querySelector('#deuxiemeImage'),
        modalAuthor: document.querySelector('#nomAuteur2')
      }
    ];
  
    articles.forEach(function(article) {
      let promise = fetch(article.url);
      promise.then((response) => {
        let json = response.json();
        json.then((data) => {
          let title = data.title;
          let date = data.date;
          let author = data.author;
          let keywords = data.keywords;
          let content = data.content;
          let image = data.picture;
  
          let preview = content[0].substring(0, 130) + "...";
  
          article.date.innerHTML = date.day + " " + date.month + " " + date.year;
          article.content.innerHTML = preview;
          article.modalContent.innerHTML = content[0] + "</br>" + content[1] + "</br>" + content[2];
          article.modalTitle.innerHTML = title;
          article.modalImage.setAttribute("src", image);
          article.modalAuthor.innerHTML = author.name + " " + author.surname + " rédigé le " + date.day + " " + date.month + " " + date.year;
        });
      });
    });
  }
  
  $(document).ready(function() {
    lafeactorisation();
  });