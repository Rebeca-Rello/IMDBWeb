



// let actor1= ("Brad Pitt", 59, 78, 180, false, "Estadounidense", 2, "actor");
// let actor2= ("Leonardo Di Caprio", 48, 85, 183, false, "Estadounidense", 1, "actor");
// let actriz3= ("Meryl Streep", 73, 63, 167, false, "Estadounidense", 3, "actriz");



// let director = ("Alejandro Amenabar", 54, 68, 165, false, "Spanish", 3, "director");
// let director1 = ("Quentin Tarantino", 65, 95, 190, false, "Italian", 2, "director");
// let director2 = ("Steven Spielberg", 70, 68, 165, false, "Estadounidense", 4, "director");



// let writer = ("Juan Alias", 45, 65, 180, false, "Portuguese", 0, "guionista");
// let writer1 = ("Mary Watson", 35, 54, 157, false, "Australian", 2, "guionista");
// let writer2 = ("Silviana Petrucci", 70, 63, 125, true, "Italian", 1, "guionista");

class Movie {


  constructor(title, releaseYear, director, photo) {

    this.title = title;
    this.releaseYear = releaseYear;
    this.director = director
    this.photo = photo;

  }
}





let pelicula1 = new Movie("Thelma & Louis", 1991, "pepe", "./assets/Thelma&Louise.jpg");
let pelicula2 = new Movie("Titanic", 1997, "RomaJunance", "./assets/Titanic.jfif");
let pelicula3 = new Movie("Mamma Mia", 2008, "Rebe", "./assets/MammaMia.jpg");

let movies = [pelicula1, pelicula2, pelicula3];

function pelis() {

  let pelis = "";


  for (let i = 0; i < movies.length; i++) {

    pelis += ` 
        <div class="card" style="width: 18rem;">
        <img src=${movies[i].photo} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${movies[i].title}</h5>
          <p class="card-text">${movies[i].releaseYear}</p>
          <p class="card-text">${movies[i].director}</p>
        </div>
      </div>`


  }
  $("#pelis").append(pelis);


}


function addmovies() {


  let title = $("#title").val();
  let releaseYear = $("#releaseYear").val()
  let director = $("#director").val()
  let foto = $("#photo").val()



  let nuevaPeli = new Movie(title, releaseYear, director, foto);

  movies.push(nuevaPeli);
  console.log(nuevaPeli);


}


class Professional {

  constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo) {

    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.isRetired = isRetired;
    this.nationality = nationality;
    this.oscarsNumber = oscarsNumber;
    this.profession = profession;
    this.photo = photo;
  }
}


let director = new Professional("Dani de la Orden", 54, 68, 165, "No", "Spanish", 3, "director", "./assets/danidelaorden.jpg");
let actor = new Professional("Javier Camara", 65, 95, 190, "No", "Spanish", 2, "actor", "./assets/javiercamara.jpg");
let writer = new Professional("Matt Groening", 70, 68, 165,  "No", "US", 2, "writer", "./assets/mattgroening.jpg");


let profesionales = [director, actor, writer];

function prof() {

  let profession = "";

  for (let i = 0; i < profesionales.length; i++) {


    profession +=
      ` 
<div class="card" style="width: 18rem;">
<img src=${profesionales[i].photo} class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${profesionales[i].name}</h5>
  <p class="card-text">${profesionales[i].age}</p>
  <p class="card-text">${profesionales[i].weight}</p>
  <p class="card-text">${profesionales[i].height}</p>
  <p class="card-text">${profesionales[i].isRetired}</p>
  <p class="card-text">${profesionales[i].nationality}</p>
  <p class="card-text">${profesionales[i].oscarsNumber}</p>
  <p class="card-text">${profesionales[i].profession}</p>
</div>
</div>`
  }

  $("#prof").append(profession)


}