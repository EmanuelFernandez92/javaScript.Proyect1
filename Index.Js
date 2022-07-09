class Auto {
    constructor() {
        this.branch = "Sin marca";
        this.model = "Sin modelo";
        this.year = "Sin año";
        this.price = 300;
    }

    costo() {
        if (this.year >2000) {
            return this.price * 5; 
        }
        return this.price * 2;
    }
}

let auto = new Auto();
auto.branch = prompt('Ingrese su Marca?');
auto.model = prompt('Ingrese su modelo?');
auto.year = prompt(' De que año es ?');
 
// const currentDate = new Date();
// const  = currentDate.getFullYear() - Number(año);
 
document.getElementById('content').innerHTML = `<h2>La marca de tu auto es ${auto.branch} su modelo es ${auto.model} .<h2/><h3>Tu auto es del año ${auto.year}. Y el costo es de ${auto.costo()}</h3>`