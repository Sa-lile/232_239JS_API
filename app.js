const liste = document.querySelector('.liste');
const btn = document.querySelector('.btn');
const xhr = new XMLHttpRequest();

btn.addEventListener('click', () => {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(reponse => reponse.json())
    .then(data => {
        
        for(i = 0; i < data.length; i++) {
    
            let newLi = document.createElement('li');
            let newTitreCarte = document.createElement('h2');
            let newBodyCarte = document.createElement('p');
                            
            newTitreCarte.innerText = data[i].title;
            newBodyCarte.innerText = data[i].body;
                            
            newLi.appendChild(newTitreCarte);
            newLi.appendChild(newBodyCarte);
            liste.appendChild(newLi);
            }

})
})



// }
    
//         const p1 = new Promise((resolve, reject) =>{
//         setTimeout(() => resolve('Action éffectiuée !'), 1000)
//     });

//     let resultat = await p1;
//     console.log(resultat);
// }

// foo();



// btn.addEventListener('click', () => {

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// xhr.reponseType = 'json';

// xhr.onload = function(){
//     // console.log(JSON.parse(xhr.response));
//     console.log(xhr.response);

//    for(i = 0; i < xhr.response.length; i++) {
    
//     let newLi = document.createElement('li');
//     let newTitreCarte = document.createElement('h2');
//     let newBodyCarte = document.createElement('p');
                
//     newTitreCarte.innerText = xhr.response[i].title;
//     newBodyCarte.innerText = xhr.response[i].body;
                
//     newLi.appendChild(newTitreCarte);
//     newLi.appendChild(newBodyCarte);
//     liste.appendChild(newLi);
//     }

// }

// xhr.send();

// })

// async function foo(){







// const promise1 = new Promise((resolve, reject) =>{

//     console.log("Hello async");

//     reject('les données sont arrivées')

// })

// promise1.then((value) => {
//     console.log(value);
// }).catch(() => {
//     console.log('Il y a eu une erreur');
// })

// console.log(promise1);




// let compteur = 0;



// clearInterval(setInterval(incr, 1000))

// function incr() {
//     compteur++;
//     console.log(compteur);
// }



// setTimeout(() => {
//     console.log("Hello world");
// }, 2000);
 
// console.log("Hello");



// const timeout = setTimeout(presentation, 2000);
 
// console.log("Hello");

// clearTimeout(timeout);

// function presentation (){
//     console.log("Hello world");

// }



