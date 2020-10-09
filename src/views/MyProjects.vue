<template>
  <div class="bg">
    <div style="height: 55px"></div>
    <div class="container py-5">
      <p class="text-left">
        Dans cette section, j'ai choisi de montrer des petits projets que j'ai
        réalisés pour apprendre à manipuler VueJS. <br>
        Le code de ces projets est disponible sur mon GitHub avec le code de ce site
      </p>
      <div class="mb-3 d-flex flex-row-reverse" data-aos="zoom-in">
        <a href="https://github.com/FlorioA" target="_blank"><img src="@/assets/images/github-icon.png" alt="Logo GitHub" class="ext-link"></a>
      </div>

      <div data-aos="zoom-in">
        <h2 class="title-light text-left">Contact Manager</h2>
        <p class="text-left">
          L'idée était d'apprendre à créer un CRUD avec VueJS et Firebase.
          Allez-y, créez, modifiez, supprimez des contacts !
        </p>
        <!-- CONTACT-MANAGER -->
        <div class="card mb-5">
          <div class="card-body">
            <ContactManager/>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in">
        <h2 class="title-light text-left">Pokédex</h2>
        <p class="text-left">
          Le but ici était de manipuler une api, en l'occurence pokeAPI.
          Voici donc un pokédex que vous êtes libres d'explorer !
        </p>
        <!-- POKEMON-API -->
        <div class="card container mb-5">
          <div class="card-body p-0">
            <PokeApi/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactManager from '@/components/my-projects/contact-manager/ContactManager.vue';
import PokeApi from '@/components/my-projects/pokemonAPI/PokeApi.vue';

export default {
  components: {
    ContactManager,
    PokeApi,
  },
};
</script>

<style lang="scss" scoped>

</style>
