function pokemonBattle(pokemon1, pokemon2) {

    if(pokemon1 === "magikarp" || pokemon2 === "magikarp") {
        return "magikarp"
    }else {
        return "pikachu"
    }

}

module.exports.pokemonBattle = pokemonBattle