<template>
    <div>
        <div v-if="idEvolution!=null && otherEvolution === false" class="mt-3 row justify-content-center text-center">
            <div class="card border-0" style="max-width: 5rem;">
                <img :src="return_ImagePokeBase(ImagePokemonBase)" alt="no pokemon's image">
                {{name}}
            </div>
            <span class="ml-5 mr-5" style='font-size:3rem;'>&#8594;</span>
            <div class="card border-0" style="max-width: 5rem;">
                <img :src="return_ImageEvolution(ImageEvolution)" alt="no pokemon's image">
                {{nomEvolution}}
            </div>
        </div>
        <div v-if="idEvolution!=null && otherEvolution === true ">
            <div v-for="evolution in evolutions" :key="evolution.id_pok_evol"
                class="mt-3 row justify-content-center text-center">
                <div style="max-width: 5rem;">
                    <img :src="return_ImagePokeBase(ImagePokemonBase)" class="img-fluid" alt="no pokemon's image">
                    {{name}}
                </div>
                <span class="ml-5 mr-5" style='font-size:3rem;'>&#8594;</span>
                <div style="max-width: 5rem;">
                    <img :src="returnImgageOtherEvolutions(evolution.id_pok_evol)" class="img-fluid"
                        alt="no pokemon's image">
                    <div v-for="evo in arrayP" :key="evo.id">
                        <p v-if="evolution.id_pok_evol == evo.id">
                            {{evo.nameEvolution}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="idEvolution === null" class="text-center mt-3">
            Ce pokémon n'a pas d'évolution selon le pokedex de Kanto
        </div>
    </div>
</template>


<script>
    export default {
        name: 'DescriptionPokemon',
        components: {

        },
        props: {
            id: Number,
            name: String,
        },
        data() {
            return {
                pokeInfo: {},
                idEvolution: "",
                ImagePokemonBase: "",
                infoEvolution: "",
                ImageEvolution: "",
                nomEvolution: "",
                evolutions: "",
                otherEvolution: false,
                getPokemonIdEvolution: this.$store.state.getPokemonIdEvolution,
                multipleEvolutions: "",
                arrayP: []
            }
        },
        beforeMount() {
            this.getPokemonIdEvolution();            
        },
        watch: {
            id() {
                this.getPokemonIdEvolution();
                this.arrayP=[];
            }
        },
        methods: {
            return_ImagePokeBase(ImagePokemonBase) {
                return `/assets/${ImagePokemonBase}`
            },
            return_ImageEvolution(ImageEvolution) {
                return `/assets/${ImageEvolution}`
            },
            returnImgageOtherEvolutions(id_pok_evol) {
                return `/assets/pokemon_image/${id_pok_evol}.png`
            },

            // test() {
            //     for( )
            // }

        },
    }
</script>
<style>

</style>