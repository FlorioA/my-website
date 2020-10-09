<template>
<div>
  <h1 class="mb-5 t-3" data-aos="zoom-in">Compétences</h1>
  <div class="mb-3 d-flex flex-row-reverse" data-aos="zoom-in">
    <a href="https://github.com/FlorioA" target="_blank"><img src="@/assets/images/github-icon.png" alt="Logo GitHub" class="ext-link"></a>
  </div>

  <div class="col-12">
    <div class="card-columns">

<!-- FRAMEWORKS -->
      <div class="card card-shadow" data-aos="zoom-in">
        <div class="card-header">
          Frameworks
        </div>
        <ul class="list-group list-group-flush text-left">

          <li class="list-group-item">
            Symfony 5
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated bg-dark"
                role="progressbar"
                style="width: 80%"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
          </li>

          <li class="list-group-item">
            VueJS 2.x
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                style="width: 60%"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
          </li>
          <li class="list-group-item">
            Bootstrap
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated bg-purple"
                role="progressbar"
                style="width: 90%"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
          </li>
          <li class="list-group-item">
            Angular
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                role="progressbar"
                style="width: 30%"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
          </li>
        </ul>
      </div>

<!-- LANGUES -->
      <div class="card card-shadow" data-aos="zoom-in">
        <div class="card-header">
          Langues
        </div>
        <ul class="list-group list-group-flush text-left">
          <li class="list-group-item">Anglais</li>
        </ul>
      </div>

<!-- LANGAGES -->
      <div class="card card-shadow" data-aos="zoom-in">
        <div class="card-header">
          Langages
        </div>
        <ul class="list-group list-group-flush text-left">
          <li class="list-group-item">PHP7</li>
          <li class="list-group-item">HTML5</li>
          <li class="list-group-item">CSS3 / SCSS</li>
          <li class="list-group-item">JavaScript / jQuery</li>
          <li class="list-group-item">MySQL</li>
        </ul>
      </div>

<!-- AUTRES -->
      <div class="card card-shadow" data-aos="zoom-in">
        <div class="card-header">
          Autres
        </div>
        <ul class="list-group list-group-flush text-left">
          <li class="list-group-item">Git</li>
          <li class="list-group-item">PhpMyAdmin</li>
          <li class="list-group-item">MongoDB</li>
          <li class="list-group-item">Visual Studio Code</li>
          <li class="list-group-item">PHPStorm</li>
          <li class="list-group-item">Suite Microsoft Office</li>
          <li class="list-group-item">Suite Open Office</li>
          <li class="list-group-item">Suite Adobe</li>
        </ul>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}

.bg-purple {
  background-color: purple;
}
</style>
