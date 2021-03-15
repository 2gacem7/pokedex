<template>
    <div v-if="checkPokemonExist === true" class="fontPokemon" >
        <Navbar />
        
        <h5 class="font-weight-bolder text-center mt-3">{{name}}</h5>
        <h6 class="text-center mb-5">(No.{{id}})</h6>

        <div class="container border" v-bind:class="{Grass: type1=='grass', Fire :type1=='fire', 
                            Water :type1=='water', Poison :type1=='poison', Flying :type1=='flying',
                            Bug :type1=='bug', Normal :type1=='normal', Dark :type1=='dark',
                            Ice :type1=='ice',Ground :type1=='ground', Electric :type1=='electric',
                            Fairy :type1=='fairy',Psychic :type1=='psychic', Fighting :type1=='fighting',
                            Rock :type1=='rock', Steel :type1=='steel',Ghost :type1=='ghost',
                            Dragon :type1=='dragon',}">
            <div class="text-center">
                <img :src="return_Image(image)" class="img-fluid" alt="no pokemon's image" type="button"
                    data-toggle="modal" data-target="#pokeImage">
            </div>
            <div class="text-center row">
                <div class="col">
                    <router-link v-bind:to="'/pokedex/' + id">
                        <a v-show="id > 1" v-on:click="previousPokemon()" class="changePage">
                            &#8249;
                        </a>
                    </router-link>
                </div>
                <div class="col">
                    <router-link v-bind:to="'/pokedex/' + id">
                        <a v-on:click="id++" class="changePage">
                            &#8250;
                        </a>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal" id="pokeImage" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog mt-5 justify-content-center" role="document">
                <div class="modal-content text-center" style="max-width:200%">
                    <img :src="return_Image(image)">
                </div>
            </div>
        </div>
        <div class="mt-5">
            <TabBar :id="id" :name="name" />
        </div>
    </div>
    <div v-else>
        Missing no
    </div>
</template>

<script>
    import TabBar from '@/components/TabBar.vue';
    import Navbar from '@/components/Navbar.vue';

    export default {
        components: {
            TabBar,
            Navbar
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
                getPokemonInformation: this.$store.state.getPokemonInformation,
                cards: {},
                checkPokemonExist: true
            }
        },
        mounted() {
          this.getPokemonInformation();
          console.log(this.checkPokemonExist)
        },
        watch: {
            id() {
                this.getPokemonInformation();
            }
        },
        computed:{

        },

        methods: {

     
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
    .changePage {
        text-decoration: none;
        display: inline-block;
        padding: 4px 11px;
        border-radius: 50%;

        background: rgb(250, 0, 0);
        background: linear-gradient(180deg, rgba(250, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(255, 255, 255, 1) 100%);
        color: white;
        border: solid;
        border-color: black;
    }

    .yo {
        background: linear-gradient(rgba(0, 128, 200, 0.5), rgba(255, 255, 0, 0.5)),
            url("../../public/assets/pokeball-icon-png-27.jpg");
    }

    .Grass {
        background: rgb(0, 0, 0);
        background: linear-gradient(49deg, rgba(0, 0, 0, 1) 0%, rgba(32, 150, 32, 1) 40%, rgba(22, 255, 0, 1) 90%);
        color: white;
    }

    .Fire {
        background: rgb(255, 0, 0);
        background: linear-gradient(214deg, rgba(255, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%);
        color: white;
    }

    .Fairy {
        background-image: linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%);
    }

    .Water {
        background-color: #0033ff;
        background-image: linear-gradient(34deg, #0033ff 0%, #00e2ff 100%);
        color: white;
    }

    .Poison {
        background-color: #5300de;
        background-image: linear-gradient(27deg, #5300de 0%, #FC00FF 100%);
        color: white;
    }

    .Psychic {
        background: rgb(0, 0, 0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(252, 82, 249, 1) 48%, rgba(0, 0, 0, 1) 100%);
        color: white;
    }

    .Bug {
        background: rgb(0, 210, 0);
        background: linear-gradient(227deg, rgba(0, 210, 0, 1) 5%, rgba(62, 255, 62, 1) 39%, rgba(159, 238, 159, 1) 62%);
        color:black;
    }

    .Ice {
        background-color: #00ffc7;
        background-image: linear-gradient(34deg, #00ffc7 0%, #009dd8 100%);
        color: black;
    }

    .Flying {
        background: rgb(187, 223, 255);
        background: linear-gradient(0deg, rgba(187, 223, 255, 1) 0%, rgba(255, 255, 255, 1) 46%, rgba(37, 142, 238, 1) 100%);
    }

    .Steel {
        background: rgb(178, 178, 178);
        background: linear-gradient(23deg, rgba(178, 178, 178, 1) 0%, rgba(255, 255, 255, 1) 51%, rgba(106, 106, 106, 1) 100%);
    }

    .Ghost {
        background: rgb(43, 0, 96);
        background: linear-gradient(18deg, rgba(43, 0, 96, 1) 3%, rgba(189, 189, 189, 1) 44%, rgba(0, 0, 0, 1) 84%);
        color: white;
    }

    .Dragon {
        background-color: #FBAB7E;
        background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
        color: black;
    }

    .Electric {
        background: rgb(0, 0, 0);
        background: linear-gradient(38deg, rgba(0, 0, 0, 1) 5%, rgba(255, 223, 0, 1) 41%, rgba(247, 255, 62, 1) 73%);
        color: white;
    }

    .Rock {
        background: rgb(0, 0, 0);
        background: linear-gradient(23deg, rgba(0, 0, 0, 1) 9%, rgba(182, 109, 52, 1) 42%, rgba(121, 53, 0, 1) 74%);
    }

    .Ground {
        background: rgb(110, 107, 99);
        background: linear-gradient(23deg, rgba(110, 107, 99, 1) 40%, rgba(125, 67, 22, 1) 89%);
        color: white;
    }

    .Fighting {
        background: rgb(131, 41, 11);
        background: linear-gradient(23deg, rgba(131, 41, 11, 1) 22%, rgba(218, 69, 10, 1) 47%, rgba(255, 30, 0, 1) 82%);
        color:black;
    }

    .Dark {
        background: rgb(0, 0, 0);
        background: linear-gradient(23deg, rgba(0, 0, 0, 1) 16%, rgba(34, 34, 34, 1) 52%, rgba(106, 106, 106, 1) 96%);
    }

    .Normal {
        background: rgb(52, 52, 52);
        background: linear-gradient(0deg, rgba(52, 52, 52, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(177, 177, 177, 1) 100%);
        color:black;
    }
</style>