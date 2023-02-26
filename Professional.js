

var actor1 = new ClaseProfessional_1.Professional("Brad Pitt", 59, 78, 180, false, "Estadounidense", 2, "actor");
exports.actor1 = actor1;
var actor2 = new ClaseProfessional_1.Professional("Leonardo Di Caprio", 48, 85, 183, false, "Estadounidense", 1, "actor");
exports.actor2 = actor2;
var actriz3 = new ClaseProfessional_1.Professional("Meryl Streep", 73, 63, 167, false, "Estadounidense", 3, "actriz");
exports.actriz3 = actriz3;
var director = new ClaseProfessional_1.Professional("Alejandro Amenabar", 54, 68, 165, false, "Spanish", 3, "director");
exports.director = director;
var director1 = new ClaseProfessional_1.Professional("Quentin Tarantino", 65, 95, 190, false, "Italian", 2, "director");
exports.director1 = director1;
var director2 = new ClaseProfessional_1.Professional("Steven Spielberg", 70, 68, 165, false, "Estadounidense", 4, "director");
exports.director2 = director2;
var writer = new ClaseProfessional_1.Professional("Juan Alias", 45, 65, 180, false, "Portuguese", 0, "guionista");
exports.writer = writer;
var writer1 = new ClaseProfessional_1.Professional("Mary Watson", 35, 54, 157, false, "Australian", 2, "guionista");
exports.writer1 = writer1;
var writer2 = new ClaseProfessional_1.Professional("Silviana Petrucci", 70, 63, 125, true, "Italian", 1, "guionista");



class Professional {

    constructor (name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo, ){

    this.name= name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.isRetired = isRetired;
    this.nationality = nationality;
    this.oscarsNumber = oscarsNumber;
    this.profession = profession;
    this.photo=photo;
}





}