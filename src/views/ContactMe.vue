<template>
  <div id="contact" class="bg">
    <div style="height: 55px"></div>
    <div class="container py-5" :style="{height: windowHeight + 'px'}">
      <div class="mb-3 row">
        <div class="col-12 text-left">
          <p>Mon adresse mail : adrien.florio@gmail.com</p>
        </div>
        <div class="col-md-1 col-6">
        <a href="https://www.linkedin.com/in/adrienflorio/" target="_blank"><img src="@/assets/images/linkedin-icon.png" alt="Logo LinkedIn" class="ext-link"></a>
        </div>
        <div class="col-md-1 col-6">
        <a href="https://github.com/FlorioA" target="_blank"><img src="@/assets/images/github-icon.png" alt="Logo GitHub" class="ext-link"></a>
        </div>
      </div>

      <SendMail/>
    </div>
  </div>
</template>

<script>
import SendMail from '@/components/contact-me/SendMail.vue';

export default {
  components: {
    SendMail,
  },
  data() {
    return {
      windowHeight: window.innerHeight - 55,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
