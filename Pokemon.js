class Pokemon {
  constructor(adat, szuloELEM) {
    this.nev = adat.pokemonNeve;
    this.kep = adat.eleresiUt;
    szuloELEM.append(`<div style=position: absoulte:> class="pokemon" 
                          <h2>${this.nev} </h2> 
                          <img src='${this.kep}' alt="Pokiii">
                          </div>`);
        this.pokeELEM=$(".pokemon:last-child");
        console.log(this.pokeELEM);
        $(window).on("keydown",(event) => {
            console.log(event.key)
            let bill = event.key
            let poz = this.pokeELEM.position();
            console.log(poz);
            switch(bill) {
                case "a":
                  console.log("bal");
                  let xPoz=poz.left - 10;
                  this.pokeELEM.css("left",poz.left - 10);
                  break;
                case "d":
                  console.log("jobb")
                  let yPoz=poz.left - 10;
                  this.pokeELEM.css("left",poz.left - 10);
                  break;
                  case "s":
                  console.log("le");
                  break;
                case "w":
                  console.log("fel")
                  break;
                default:
                  // code block
              }
    })
}
  
}
export default Pokemon;
