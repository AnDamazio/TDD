const chai = require("chai")
const expect = chai.expect
const Pokemon = require("../lib/pokemon")


describe("pokemon lib", function() {
    describe("pokemonBattle", function() {
        it("Magikarp ganha do camerupt", function() {
            expect(Pokemon.pokemonBattle("magikarp", "camerupt")).to.equal("magikarp")           
        })

        it("Pikachu ganha do Eevee", function() {
            expect(Pokemon.pokemonBattle("Pikachu", "Eevee")).to.equal("pikachu")   
        })

        it("camerupt perde pro Magikarp", function() {
            expect(Pokemon.pokemonBattle("camerupt", "magikarp")).to.equal("magikarp")           
        })
    })
})