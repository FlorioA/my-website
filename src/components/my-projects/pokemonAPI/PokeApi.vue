<template>
<div class="row" id="pokedex">
  <div id="all_list" class="col-md-3 p-0 overflow-auto">
    <ul class="list-group" id="generations_list">
      <div v-for="(generation, idx) in generations" :key="idx">
        <li
          class="list-group-item list-group-item-action list-header"
          @click="switchDisplayList(idx)"
        >
          {{ generation[0] }}
        </li>
        <ul class="list-group d-none" :id="'pokemon_list_' + idx">
          <li
            class="list-group-item list-group-item-action text-capitalize text-left list-pokemon"
            v-for="(pokemon, idx) in generation[1]" :key="idx"
            @click="showDetails(pokemon)"
          >
            {{ pokemon.name }}
          </li>
        </ul>
      </div>
    </ul>
  </div>

  <div v-show="selected" class="col-md-9 p-5" id="display_stats">
    <div class="row justify-content-center">
      <h5 class="text-capitalize pb-4">
        {{ pokeStats.pokeName }} <span class="text-muted font-italic">{{ pokeStats.order }}</span>
      </h5>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="mb-3 mt-5 text-right">
          Types :
          <span v-for="(type, idx) in pokeStats.types" :key="idx">{{ type }} </span>
        </div>
        <div class="mb-3 text-right">{{ pokeStats.genera }}</div>
        <div class="row">
          <div class="col-6 mb-3">Taille : {{ pokeStats.height }} cm</div>
          <div class="col-6 mb-3">Poids : {{ pokeStats.weight }} kg</div>
        </div>
      </div>

      <div class="col-md-4">
        <div id="carouselExampleControls" class="carousel slide img-thumbnail" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                :src="`${pokeStats.sprites.front_default}`"
                class="d-block w-100"
                alt="Pokémon de face"
              >
            </div>
            <div class="carousel-item">
              <img
                :src="`${pokeStats.sprites.back_default}`"
                class="d-block w-100"
                alt="Pokémon de dos"
              >
            </div>
            <div class="carousel-item">
              <img
                :src="`${pokeStats.sprites.front_shiny}`"
                class="d-block w-100"
                alt="Pokémon shiny de face"
              >
            </div>
            <div class="carousel-item">
              <img
                :src="`${pokeStats.sprites.back_shiny}`"
                class="d-block w-100"
                alt="Pokémon shiny de dos"
              >
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div class="col-md-4">
        <ul class="text-left ml-0 mt-3 p-0">
          <li
            class="mb-2"
            v-for="(stat, idx) in pokeStats.stats"
            :key="idx"
          >
            {{ stat[0] }}: {{ stat[1] }}
          </li>
        </ul>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selected: false,
      generations: [],
      pokeStats: {
        pokeName: '',
        order: '',
        stats: [],
        types: [],
        genera: '',
        sprites: [],
        height: '',
        weight: '',
      },
    };
  },
  beforeMount() {
    this.getPokeList();
  },
  methods: {
    getPokeList() {
      axios
        .get('https://pokeapi.co/api/v2/generation/')
        .then((responseGens) => {
          // Pour chaque génération, récup du nom et de la liste des pokémon
          responseGens.data.results.forEach((generation) => {
            axios
              .get(generation.url)
              .then((response) => {
                const newGen = [];
                const newList = [];

                // Push le nom de la gen
                if (response.data.names[2]) newGen.push(response.data.names[2].name);
                else newGen.push(response.data.names[0].name);

                // Push les pokémon de la gen
                response.data.pokemon_species.forEach((pokemon) => {
                  newList.push(pokemon);
                });
                newGen.push(newList);

                this.generations.push(newGen);
                this.generations.sort();
                this.generations.push(this.generations.shift());
              })
              .catch((error) => console.log(error));
          });
        })
        .catch((error) => console.log(error));
    },
    switchDisplayList(idx) {
      const pokeList = document.getElementById(`pokemon_list_${idx}`);
      pokeList.classList.toggle('d-none');
    },
    showDetails(pokemon) {
      // Extraction de l'id du pokémon
      const numberPattern = /\d+/g;
      const UrlNumbers = pokemon.url.match(numberPattern);
      const pokeId = UrlNumbers[1];

      // ||||||| Récup infos pokémon species |||||||
      axios
        .get(pokemon.url)
        .then((response) => {
          // envoi N° dans pokédex
          if (response.data.order !== null) this.pokeStats.order = `n°${response.data.order}`;
          else this.pokeStats.order = '';

          // envoi nom
          if (response.data.names.length > 0) {
            response.data.names.forEach((name) => {
              if (name.language.name === 'fr') this.pokeStats.pokeName = name.name;
            });
          } else {
            this.pokeStats.pokeName = response.data.name;
          }

          // envoi genera
          response.data.genera.forEach((genera) => {
            if (genera.language.name === 'fr') this.pokeStats.genera = genera.genus;
          });
        })
        .catch((error) => console.log(error));

      // ||||||| Récup infos pokémon |||||||
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
        .then((response) => {
          // envoi sprites
          this.pokeStats.sprites = {
            front_default: response.data.sprites.front_default,
            back_default: response.data.sprites.back_default,
            front_shiny: response.data.sprites.front_shiny,
            back_shiny: response.data.sprites.back_shiny,
          };

          // envoi types
          response.data.types.forEach((type) => {
            axios
              .get(type.type.url)
              .then((responseType) => {
                this.pokeStats.types = [];
                responseType.data.names.forEach((name) => {
                  if (name.language.name === 'fr') this.pokeStats.types.push(name.name);
                });
              })
              .catch((error) => console.log(error));
          });

          // envoi height et weight
          this.pokeStats.height = response.data.height;
          this.pokeStats.weight = response.data.weight;

          // envoi stats
          response.data.stats.forEach((stat) => {
            this.pokeStats.stats = [];
            axios
              .get(stat.stat.url)
              .then((responseStat) => {
                responseStat.data.names.forEach((name) => {
                  if (name.language.name === 'fr') {
                    this.pokeStats.stats.push([name.name, stat.base_stat]);
                  }
                });
              })
              .catch((error) => console.log(error));
          });

          // Affichage stats
          if (this.selected === false) this.selected = true;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss" scoped>
#all_list {
  cursor: pointer;
  max-height: 400px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 100px;
  width: 100px;
  outline: black;
  background-size: 100%, 100%;
  border-radius: 50%;
  background-image: none;
}

.carousel-control-next-icon:after
{
  content: '>';
  font-size: 55px;
  color: gray;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 55px;
  color: gray;
}

li {
  list-style-type: none;
}

#pokedex {
  background-color: #eebe06;
}

#display_stats {
  color: #d84f4d;
}

.list-header {
  background-color: #d84f4d;
  color: #fcedb7;
}

.list-pokemon {
  background-color: #eebe06;
}
</style>
