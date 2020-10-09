<template>
<div>
    <h2>Envoyez-moi un mail !</h2>

  <form id="contact-form" @submit.prevent="sendEmail">
    <input type="hidden" name="contact_number">
    <div class="row">
      <div class="form-group col-md-6">
        <input
          type="text"
          name="user_name"
          class="form-control"
          placeholder="Votre nom"
        >
      </div>

      <div class="form-group col-md-6">
        <input
          type="email"
          name="user_email"
          class="form-control"
          placeholder="Votre email"
        >
      </div>
    </div>

    <div class="form-group">
      <textarea class="form-control" name="message" rows="5"></textarea>
    </div>

    <div class="form-group">
      <input type="submit" value="Envoyer" class="btn btn-block btn-success">
    </div>
  </form>

  <div id="alert" class="alert fade fixed-bottom" role="alert"></div>

</div>
</template>

<script>
import emailjs from 'emailjs-com';
import $ from 'jquery';

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_6w88prv', 'template_g8aurzt', e.target, 'user_ScIVJIiTk1weApqBJNLnQ')
        .then(() => {
          $('.alert')
            .text('Le mail a été envoyé !')
            .addClass('alert-success show');

          setTimeout(() => {
            $('.alert')
              .text('')
              .removeClass('alert-success show');
          }, 2000);

          $('input[type=text], input[type=email], textarea').val('');
        }, () => {
          $('.alert')
            .text('Le mail n\'a pas été envoyé, veuillez réessayer ou me contacter à adrien.florio@gmail.com')
            .addClass('alert-danger show');

          setTimeout(() => {
            $('.alert')
              .text('')
              .removeClass('alert-danger show');
          }, 5000);
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
