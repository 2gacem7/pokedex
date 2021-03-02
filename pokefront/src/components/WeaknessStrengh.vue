<template>
    <div class="">
        <div class="card border-0">
            <h5 class="mt-3 card-header border-0 bg-white" id="weaknesses">Weaknesses: </h5>
            <div class="ml-1 card-body row">
                <div class="mr-2" v-if="bug==2">
                    <img :src="return_type_written('bug')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="dark==2">
                    <img :src="return_type_written('dark')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="dragon==2">
                    <img :src="return_type_written('dragon')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="electric==2">
                    <img :src="return_type_written('electric')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="fairy==2">
                    <img :src="return_type_written('fairy')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="fight==2">
                    <img :src="return_type_written('fight')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="fire==2">
                    <img :src="return_type_written('fire')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="flying==2">
                    <img :src="return_type_written('flying')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="ghost==2">
                    <img :src="return_type_written('ghost')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="grass==2">
                    <img :src="return_type_written('grass')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="ground==2">
                    <img :src="return_type_written('ground')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="ice==2">
                    <img :src="return_type_written('ice')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="normal==2">
                    <img :src="return_type_written('normal')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="poison==2">
                    <img :src="return_type_written('poison')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="psychic==2">
                    <img :src="return_type_written('psychic')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="rock==2">
                    <img :src="return_type_written('rock')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="steel==2">
                    <img :src="return_type_written('steel')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="water==2" v-on:click="test()">
                    <img :src="return_type_written('water')" class="sizeItem" alt="no type's symbol">
                </div>
            </div>
        </div>
        <div class="card border-0">
            <h5 class="card-header border-0 bg-white" id="strenghs">Efficience & Resistance:</h5>
            <div class="ml-1 card-body row">
                <div class="mr-2" v-if="bug<1">
                    <img :src="return_type_written('bug')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="dark<1">
                    <img :src="return_type_written('dark')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="dragon<1">
                    <img :src="return_type_written('dragon')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="electric<1">
                    <img :src="return_type_written('electric')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="fairy<1">
                    <img :src="return_type_written('fairy')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="fight<1">
                    <img :src="return_type_written('fight')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="fire<1">
                    <img :src="return_type_written('fire')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="flying<1">
                    <img :src="return_type_written('flying')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="ghost<1">
                    <img :src="return_type_written('ghost')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="grass<1">
                    <img :src="return_type_written('grass')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="ground<1">
                    <img :src="return_type_written('ground')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="ice<1">
                    <img :src="return_type_written('ice')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="normal<1">
                    <img :src="return_type_written('normal')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="poison<1">
                    <img :src="return_type_written('poison')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="psychic<1">
                    <img :src="return_type_written('psychic')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="rock<1">
                    <img :src="return_type_written('rock')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="steel<1">
                    <img :src="return_type_written('steel')" class="sizeItem" alt="no type's symbol">
                </div>
                <div class="mr-2" v-if="water<1">
                    <img :src="return_type_written('water')" class="sizeItem" alt="no type's symbol">
                </div>
            </div>
        </div>
        <InfoLogoType style="min-width:20rem; max-width:30rem" />
    </div>
</template>


<script>
    import InfoLogoType from '@/components/InfoLogoType.vue';
    export default {
        name: 'StatsPokemon',
        components: {
            InfoLogoType
        },
        props: {
            id: Number
        },
        data() {
            return {
                pokeInfo: {},
                bug: "",
                dark: "",
                dragon: "",
                electric: "",
                fairy: "",
                fight: "",
                fire: "",
                flying: "",
                ghost: "",
                grass: "",
                ground: "",
                ice: "",
                normal: "",
                poison: "",
                psychic: "",
                rock: "",
                steel: "",
                water: "",
                weaknesses: "",
                getWeaknesses:this.$store.state.getWeaknesses,
            }
        },
        beforeMount() {
            this.getWeaknesses()
        },
        watch : {
            id() {
                this.getWeaknesses();
            }
        },
        methods: {
            return_type_written(type) {
                return `/assets/types/${type}` + `.png`
            },
        },
    }
</script>
<style scoped>
    #weaknesses {
        color: red;
        font-weight: bold;
    }

    #strenghs {
        color: green;
        font-weight: bold;
    }

    .sizeItem {
        width: 2.5rem;
    }
</style>