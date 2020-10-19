<template>
<div>
  <h1 class="mb-5 t-3" data-aos="zoom-in">Expériences professionnelles</h1>
  <div class="mb-3 d-flex flex-row-reverse" data-aos="zoom-in">
    <a href="https://www.linkedin.com/in/adrienflorio/" target="_blank"><img src="@/assets/images/linkedin-icon.png" alt="Logo LinkedIn" class="ext-link"></a>
  </div>

<div class="accordion card-shadow" data-aos="zoom-in" id="accordionExp">
  <div class="card">
    <div class="card-header" id="headingDevWeb">
      <h2 class="mb-0">
        <button
          class="btn btn-block text-left"
          type="button" data-toggle="collapse"
          data-target="#devWeb" aria-expanded="true"
          aria-controls="devWeb"
        >
          Développement Web
        </button>
      </h2>
    </div>

    <div id="devWeb" class="collapse show"
      aria-labelledby="headingDevWeb" data-parent="#accordionExp"
    >
      <div class="card-body text-left">
        <ul class="list-group list-group-flush">

          <!-- EVALANDGO -->
          <li class="list-group-item">
            <div class="row">
              <div class="col-md-8">
                <h4 class="card-title ml-3">Développeur Web Fullstack (stage)</h4>
                <h5 class="card-subtitle mb-2 text-muted">Entreprise Eval&Go - Montpellier</h5>
                <p class="card-text">
                  - Changement de version PHP (7.1 > 7.3) pour l'ensemble d'un projet<br>
                  - Migration de Symfony 2.8 à 4.4<br>
                  - Utilisation de MongoDB et Symfony 5.1 sur un autre projet<br>
                  - Participation aux réunions de la création du cahier des
                  charges et de la conception<br>
                </p>
              </div>
              <div class="col-md-4 text-right d-flex justify-content-end border-left">
                <p class="my-auto">Février 2020 - Août 2020</p>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingVideoGames">
      <h2 class="mb-0">
        <button
          class="btn btn-block text-left collapsed"
          type="button" data-toggle="collapse"
          data-target="#videoGames" aria-expanded="false"
          aria-controls="videoGames"
        >
          Jeux vidéo
        </button>
      </h2>
    </div>
    <div id="videoGames" class="collapse"
      aria-labelledby="headingVideoGames" data-parent="#accordionExp"
    >
      <div class="card-body text-left">
        <ul class="list-group list-group-flush">

          <!-- COOPGAME -->
          <li class="list-group-item">
            <div class="row">
              <div class="col-md-8">
                <h4 class="card-title ml-3">Pixel Artist | Scénariste | Game Designer</h4>
                <h5 class="card-subtitle mb-2 text-muted">Coop Game - Projet personnel</h5>
                <p class="card-text">
                  Projet pas (encore) terminé, réalisé à deux. <br>
                  - Réalisation de tout le pixel art <br>
                  - Création des mécaniques de jeu <br>
                  - Création et mise en place du design des niveaux <br>
                  - <a href="https://www.youtube.com/watch?v=ZBp0iL5YHGA" target="_blank">Lien vers le trailer</a>
                </p>
              </div>
              <div class="col-md-4 text-right d-flex justify-content-end border-left">
                <p class="my-auto">Démarré en Décembre 2017</p>
              </div>
            </div>
          </li>

          <!-- ERULE -->
          <li class="list-group-item">
            <div class="row">
              <div class="col-md-8">
                <h4 class="card-title ml-3">Chef de Projet | Scénariste | Game Designer</h4>
                <h5 class="card-subtitle mb-2 text-muted">
                  Jeu de Rôle Papier - Erule (Association Mad Beard)
                </h5>
                <p class="card-text">
                  Réalisé dans le cadre d'une association culturelle que j'ai
                  co-fondée avec deux autres membres. <br>
                  - Création de l'univers : géographie, histoire, mythologie,
                  systèmes politiques et religieux <br>
                  - Embauche et gestion de plusieurs graphistes <br>
                  - Présentation des différents projets de l'association lors des
                  Intergalactiques de Lyon 2017 <br>
                  - <a href="https://madbeardcontact.wixsite.com/erule" target="_blank">Lien vers le site</a>
                </p>
              </div>
              <div class="col-md-4 text-right d-flex justify-content-end border-left">
                <p class="my-auto">Septembre 2016 - Août 2017</p>
              </div>
            </div>
          </li>

          <!-- STAGE -->
          <li class="list-group-item">
            <div class="row">
              <div class="col-md-8">
                <h4 class="card-title ml-3">Game Designer (stage)</h4>
                <h5 class="card-subtitle mb-2 text-muted">Gaya Technologies - Sofia Antipolis</h5>
                <p class="card-text">
                  Réalisation d'un jeu éducatif ciblant les 6-12 ans <br>
                  - Proposition de briques de gameplay à insérer dans des mini-jeux <br>
                  - Design de l'UX globale du jeu <br>
                </p>
              </div>
              <div class="col-md-4 text-right d-flex justify-content-end border-left">
                <p class="my-auto">Mai 2016 - Août 2016</p>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingOther">
      <h2 class="mb-0">
        <button
          class="btn btn-block text-left collapsed"
          type="button" data-toggle="collapse"
          data-target="#other" aria-expanded="false"
          aria-controls="other"
        >
          Autre
        </button>
      </h2>
    </div>
    <div id="other" class="collapse"
      aria-labelledby="headingOther" data-parent="#accordionExp"
    >
      <div class="card-body text-left">
        <ul class="list-group list-group-flush">

          <!-- PROMAN -->
          <li class="list-group-item">
            <div class="row">
              <div class="col-md-8">
                <h4 class="card-title ml-3">Intérimaire</h4>
                <h5 class="card-subtitle mb-2 text-muted">Proman - Marseille</h5>
                <p class="card-text">
                  - Nettoyage après sinistre <br>
                  - Mise en place de tableaux interactifs dans des écoles primaires <br>
                </p>
              </div>
              <div class="col-md-4 text-right d-flex justify-content-end border-left">
                <p class="my-auto">Mai 2019 - Juillet 2019</p>
              </div>
            </div>
          </li>

          <!-- MONOPRIX -->
          <li class="list-group-item">
            <div class="row">
              <div class="col-md-8">
                <h4 class="card-title ml-3">Employé de rayon</h4>
                <h5 class="card-subtitle mb-2 text-muted">Monoprix - Marseille</h5>
                <p class="card-text">
                  - Mise en rayon<br>
                  - Gestion des stocks <br>
                  - Renseignement clients
                </p>
              </div>
              <div class="col-md-4 text-right d-flex justify-content-end border-left">
                <p class="my-auto">Juillet 2018 - Août 2018</p>
              </div>
            </div>
          </li>

          <!-- Firplast -->
          <li class="list-group-item">
            <div class="row">
              <div class="col-md-8">
                <h4 class="card-title ml-3">Intérimaire</h4>
                <h5 class="card-subtitle mb-2 text-muted">Firplast - Lyon</h5>
                <p class="card-text">
                  - Vente de sapins, emballage, gestion des stocks et de la vitrine <br>
                  - Chargement / déchargement de camions
                </p>
              </div>
              <div class="col-md-4 text-right d-flex justify-content-end border-left">
                <p class="my-auto">Novembre 2017 - Mars 2018</p>
              </div>
            </div>
          </li>

          <!-- LYCEE -->
          <li class="list-group-item">
            <div class="row">
              <div class="col-md-8">
                <h4 class="card-title ml-3">Maître d'internat (remplaçant)</h4>
                <h5 class="card-subtitle mb-2 text-muted">Lycée François Rabelais - Lyon</h5>
                <p class="card-text">
                  - Accueil et surveillance des élèves <br>
                  - Aide au devoir
                </p>
              </div>
              <div class="col-md-4 text-right d-flex justify-content-end border-left">
                <p class="my-auto">Septembre 2017</p>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</div>

  <!-- <div class="card text-left card-shadow" data-aos="zoom-in">
    <ul class="list-group list-group-flush">

      EVALANDGO
      <li class="list-group-item">
        <div class="row">
          <div class="col-md-8">
            <h4 class="card-title ml-3">Développeur Web Fullstack (stage)</h4>
            <h5 class="card-subtitle mb-2 text-muted">Entreprise Eval&Go - Montpellier</h5>
            <p class="card-text">
              - Changement de version PHP (7.1 > 7.3) pour l'ensemble d'un projet<br>
              - Migration de Symfony 2.8 à 4.4<br>
              - Utilisation de MongoDB et Symfony 5.1 sur un autre projet<br>
              - Participation aux réunions de la création du cahier des charges et de conception<br>
            </p>
          </div>
          <div class="col-md-4 text-right d-flex justify-content-end border-left">
            <p class="my-auto">Février 2020 - Août 2020</p>
          </div>
        </div>
      </li>

    </ul>
  </div> -->
</div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

</style>
