<template>
    <div class="row justify-content-center mt-5">
        <div class="modal-body mt-5" v-for="card in cards" :key="card.id" style="max-width:300px">

            <img :src="card.images.large" alt="no card" class="img-fluid">

        </div>
    </div>
</template>


<script>
    import axios from 'axios';

    export default {
        name: 'Cards',
        components: {

        },
        props: {
            id: Number
        },
        data() {
            return {
                cards: {},
                // getPokemonInformation: this.$store.state.getPokemonInformation,
                card: this.$store.state.card,
                name: ""
            }
        },
        async mounted() {

            const response = await axios.get("http://127.0.0.1:8000/api/v1/pokedex/" + this.id)
            this.pokeInfo = response.data.data,
            this.name = this.pokeInfo.Name[0].nom_pok
            this.card()
        },

        watch: {
            id() {
                this.card();
            }
        },

        methods: {
            
        },
    }
</script>