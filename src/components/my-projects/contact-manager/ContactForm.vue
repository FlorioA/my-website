<template>
    <form v-on:submit.prevent="createContact">
      <div class="form-group">
        <input class="form-control" type="text" placeholder="Prénom" v-model="contact.firstName">
      </div>
      <div class="form-group">
        <input class="form-control" type="text" placeholder="Nom" v-model="contact.lastName">
      </div>
      <div class="form-group">
        <input class="form-control" type="text" placeholder="Email" v-model="contact.email">
      </div>
      <div class="form-group">
        <input class="form-control" type="text" placeholder="Téléphone" v-model="contact.phone">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-sm btn-block btn-success">Créer</button>
      </div>
    </form>
</template>

<script>
import db from '@/shared/db';

export default {
  data() {
    return {
      contact: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
    };
  },
  methods: {
    createContact() {
      db.create(this.contact)
        .then(() => {
          this.$emit('created');
          this.resetForm();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    resetForm() {
      this.contact.firstName = '';
      this.contact.lastName = '';
      this.contact.email = '';
      this.contact.phone = '';
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
