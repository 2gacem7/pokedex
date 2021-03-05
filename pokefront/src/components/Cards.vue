<template>
    <div class="row justify-content-center mt-3">
        <div class="mt-2 mr-3" v-for="card in cards" :key="card.id" style="max-width:30%">
            <a :href="card.images.large" target="_blank">
                <img :src="card.images.large" alt="no card" class="img-fluid">
            </a>
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
            id: Number,
            name: String
        },
        data() {
            return {
                cards: {},
                nameCard: ""
            }
        },
        async beforeMount() {

            const response = await axios.get("http://127.0.0.1:8000/api/v1/pokedex/" + this.id)
            this.pokeInfo = response.data.data,
                this.nameCard = this.pokeInfo.Name[0].nom_pok,
                axios.get(`https://api.pokemontcg.io/v2/cards?q=supertype:pokemon name:` + this.nameCard)
                .then(response => {
                    this.cards = response.data.data;
                })
        },

        watch: {
            name() {
                this.card();
            }
        },

        methods: {
            async card() {
                const response = await axios.get(`https://api.pokemontcg.io/v2/cards?q=supertype:pokemon name:` + this.name);
                this.cards = response.data.data;
            }
        },
    }
</script>