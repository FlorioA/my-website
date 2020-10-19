<template>
  <div class="home">
    <div style="height: 55px"></div>
    <div class="d-flex" id="bg_intro" :style="{height: windowHeight + 'px'}">
      <div class="mx-auto my-auto">
        <h2 data-aos="zoom-in">Adrien Florio</h2>
        <p data-aos="zoom-in">Développeur Web</p>
        <a id="link_resume" href="#bg_resume"><font-awesome-icon icon="sort-down" /></a>
      </div>
    </div>

    <div id="bg_resume" class="bg">
      <div class="container py-5 border-bottom border-info">
        <Resume id="resume" />
      </div>
    </div>

    <div id="bg_experiences" class="bg">
      <div class="container py-5 border-bottom border-info">
        <Experiences/>
      </div>
    </div>

    <div id="bg_competences" class="bg">
      <div class="container py-5 px-0 border-bottom border-info">
        <Competences/>
      </div>
    </div>

    <div id="bg_education" class="bg">
      <div class="container py-5 px-0">
        <Education/>
      </div>
    </div>

  </div>
</template>

<script>
import Resume from '@/components/presentation/Resume.vue';
import Experiences from '@/components/presentation/Experiences.vue';
import Competences from '@/components/presentation/Competences.vue';
import Education from '@/components/presentation/Education.vue';

export default {
  name: 'Presentation',
  components: {
    Resume,
    Experiences,
    Competences,
    Education,
  },
  data() {
    return {
      windowHeight: window.innerHeight - 55,
      hover: false,
    };
  },
};
</script>

<style scoped>
#bg_intro {
  background-color: #127196;
}

/* INTRO */
h2, p, #arrow_down {
  color: beige;
}

h2 {
  font-size: 4rem;
}

p {
  font-size: 2rem;
  font-style: italic;
}

#link_resume {
  color: white;
  font-size: 5rem;
  transition: all .5s ease-out;
}
#link_resume:hover {
  color: #c7dcff;
  font-size: 7rem;
}
</style>
