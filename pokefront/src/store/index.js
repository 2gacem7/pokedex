import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    async getPokemonInformation() {
      const response = await axios.get("http://127.0.0.1:8000/api/v1/pokedex/" + this.id)
      this.pokeInfo = response.data.data,
      this.description = this.pokeInfo.Description[0].description,
      this.type1 = this.pokeInfo.Types[0].type1,
      this.type2 = this.pokeInfo.Types[0].type2,
      this.image = this.pokeInfo.Images[0].Images,
      this.name = this.pokeInfo.Name[0].nom_pok
    },

    async getPokemonStats() {
      const response = await axios.get("http://127.0.0.1:8000/api/v1/pokedex/" + this.id);
      this.pokeInfo = response.data.data,
      this.hp = this.pokeInfo.Stats[0].hp,
      this.attack = this.pokeInfo.Stats[0].attack,
      this.defense = this.pokeInfo.Stats[0].defense,
      this.sp_attack = this.pokeInfo.Stats[0].sp_attack,
      this.sp_defense = this.pokeInfo.Stats[0].sp_defense,
      this.speed = this.pokeInfo.Stats[0].speed
    },

    async getWeaknesses() {

      const response = await axios.get("http://127.0.0.1:8000/api/v1/pokedex/" + this.id);
      this.pokeInfo = response.data.data,
      this.weaknesses = this.pokeInfo.Weaknesses[0],
      this.bug = this.weaknesses.bug,
      this.dark = this.weaknesses.dark,
      this.dragon = this.weaknesses.dragon,
      this.electric = this.weaknesses.belectricug,
      this.fairy = this.weaknesses.fairy,
      this.fight = this.weaknesses.fight,
      this.fire = this.weaknesses.fire,
      this.flying = this.weaknesses.flying,
      this.ghost = this.weaknesses.ghost,
      this.grass = this.weaknesses.grass,
      this.ground = this.weaknesses.ground,
      this.ice = this.weaknesses.ice,
      this.normal = this.weaknesses.normal,
      this.poison = this.weaknesses.bupoisong,
      this.psychic = this.weaknesses.psychic,
      this.rock = this.weaknesses.rock,
      this.steel = this.weaknesses.steel,
      this.water = this.weaknesses.water
    },

    async getPokemonIdEvolution() {
      const response = await axios.get("http://127.0.0.1:8000/api/v1/pokedex/" + this.id);
      this.pokeInfo = response.data.data;
      this.ImagePokemonBase = this.pokeInfo.Images[0].Images;

      if (this.pokeInfo.Evolutions != "") {
        this.evolutions = this.pokeInfo.Evolutions;
        this.idEvolution = this.pokeInfo.Evolutions[0].id_pok_evol;

        if (this.pokeInfo.Evolutions.length > 1) {
          this.otherEvolution = true;
          this.pokeInfo.Evolutions.forEach(Evolution => {
          this.idEvolution = Evolution.id_pok_evol;
          console.log(this.otherEvolution);


           axios.get("http://127.0.0.1:8000/api/v1/pokedex/" + this.idEvolution)
             .then(test =>{ 
             this.multipleEvolutions = test.data.data.Name[0].nom_pok;
             this.idPok = test.data.data.No;
             this.arrayP.push({
               id: this.idPok, 
               nameEvolution:this.multipleEvolutions});
            })
          })
        }
      }      
      else {
        this.idEvolution = null;
        this.otherEvolution = false
        console.log(this.otherEvolution);

      }
      if (this.idEvolution != null && this.pokeInfo.Evolutions.length < 2) {
        this.otherEvolution=false
        const response = await axios.get("http://127.0.0.1:8000/api/v1/pokedex/" + this.idEvolution);
        this.infoEvolution = response.data.data,
        this.nomEvolution = this.infoEvolution.Name[0].nom_pok,
        this.ImageEvolution = this.infoEvolution.Images[0].Images
      }
    },

    async getPokemonDescription() {

      const response = await axios.get("http://127.0.0.1:8000/api/v1/pokedex/" + this.id)
      this.pokeInfo = response.data.data,
      this.description = this.pokeInfo.Description[0].description,
      this.type1 = this.pokeInfo.Types[0].type1,
      this.type2 = this.pokeInfo.Types[0].type2,
      this.height = this.pokeInfo.Information[0].height,
      this.weight = this.pokeInfo.Information[0].weight
    },
  },

  getters: {

  },
  mutations: {},
  actions: {

  },
  modules: {}
})