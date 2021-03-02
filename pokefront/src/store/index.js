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
      //this.$store.state.getPokemonStats(this.id)
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


  },
  getters:{
    
  },
  mutations: {
  },
  actions: {
    
  },
  modules: {
  }
})
