<template>
    <div class="container-fluid" style="max-width:35rem">
        <ul class="nav nav-tabs justify-content-center font-weight-bold" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active textColor" id="home-tab" data-toggle="tab" href="#description" role="tab"
                    aria-controls="home">About</a> 
            </li>
            <li class="nav-item">
                <a class="nav-link textColor" id="profile-tab" data-toggle="tab" href="#stats" role="tab"
                    aria-controls="profile">Stats</a>
            </li>
            <li class="nav-item">
                <a class="nav-link textColor" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                    aria-controls="contact">Weaknesses</a>
            </li>
            <li class="nav-item">
                <a class="nav-link textColor" id="contact-tab" data-toggle="tab" href="#evolution" role="tab"
                    aria-controls="contact">Evolutions </a>
            </li>
            <li class="nav-item">
                <a class="nav-link textColor" id="contact-tab" data-toggle="tab" href="#cards" role="tab"
                    aria-controls="contact">Cards </a>
            </li>
        </ul>
        <div class="tab-content mb-5" id="myTabContent">
            <div class="tab-pane fade show active text-center" id="description" role="tabpanel" aria-labelledby="home-tab">
                <DescriptionPokemon :id="id" :name="name" />
            </div>
            <div class="tab-pane fade text-center" id="stats" role="tabpanel" aria-labelledby="profile-tab">
                <StatsPokemon :id="id" />
            </div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <WeaknessStrengh :id="id" />
            </div>
            <div class="tab-pane fade" id="evolution" role="tabpanel" aria-labelledby="contact-tab">
                <EvolutionPokemon :id="id" :name="name" style="height:300px" />
            </div>
            <div class="tab-pane fade" id="cards" role="tabpanel" aria-labelledby="contact-tab">
                <Cards :id="id" :name="name" class="overflow-auto ml-3" style="max-height:400px" />
            </div>
        </div>
    </div>
</template>

<script>
    import DescriptionPokemon from '@/components/DescriptionPokemon.vue';
    import StatsPokemon from '@/components/StatsPokemon.vue';
    import EvolutionPokemon from '@/components/EvolutionPokemon.vue';
    import WeaknessStrengh from '@/components/WeaknessStrengh.vue';
    import Cards from '@/components/Cards.vue';

    export default {
        name: 'TabBar',
        components: {
            DescriptionPokemon,
            StatsPokemon,
            EvolutionPokemon,
            WeaknessStrengh,
            Cards
        },
        props:{
            id:Number,
            name:String,
        },
        data() {
            return {

            }
        },
        methods: {

        },
    }
</script>

<style scoped>
.textColor{
    color:black
}
</style>