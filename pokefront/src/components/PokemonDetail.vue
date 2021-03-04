<template>
    <div class="fontPokemon">
        <h5 class="font-weight-bolder text-center">{{name}}</h5>
        <h6 class="text-center">(No.{{id}})</h6>

        <div class="justify-content-center">
            <div>
                <img :src="return_Image(image)" class="img-fluid" alt="no pokemon's image">
            </div>
            <div>

             <router-link v-bind:to="'/pokedex/' + id">
                <a v-on:click="previousPokemon()" class="changePage ">
                    &#8249;
                </a>
            </router-link>
            <router-link v-bind:to="'/pokedex/' + id">
                <a v-on:click="nextPokemon()" class="changePage text-right">
                    &#8250;
                </a>
            </router-link>
            </div>
        </div>
        <div class="mt-5">
            <TabBar :id="id" :name="name" />
        </div>
    </div>
</template>

<script>
    //import axios from "axios"
    import TabBar from '@/components/TabBar.vue'

    export default {
        components: {
            TabBar
        },
        name: 'PokemonDetail',
        data() {
            return {
                id: Number(this.$route.params.id),
                pokeInfo: {},
                description: "",
                type1: "",
                type2: "",
                image: "",
                name: "",
                getPokemonInformation: this.$store.state.getPokemonInformation
            }
        },
        mounted() {
            this.getPokemonInformation();
        },
        watch: {
            id() {
                this.getPokemonInformation();
            }
        },
        methods: {

            nextPokemon() {
                this.id++;
            },
            previousPokemon() {
                this.id--;
            },
            return_Image(image) {
                return `/assets/${image}`
            },
            return_type(type1) {
                return `/assets/types/${type1}.png`
            },
            return_type2(type2) {
                return `/assets/types/${type2}.png`
            },
            return_type_written(type1) {
                return `/assets/types_ecriture/${type1}.png`
            },
            return_type2_written(type2) {
                return `/assets/types_ecriture/${type2}.png`
            },
        },
    }
</script>

<style scoped>
    .Fire {
        background: rgb(255, 0, 0);
        background: linear-gradient(214deg, rgba(255, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%);
        color: white;
    }

    .changePage {
        background-color: #f1f1f1;
        color: black;
        text-decoration: none;
        display: inline-block;
        padding: 8px 16px;
        border-radius: 50%;
    }
</style>