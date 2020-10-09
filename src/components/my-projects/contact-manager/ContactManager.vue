<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-4 container">
          <ContactForm v-on:created="getAllContacts" />
        </div>
        <div class="col-md-8">
          <ContactList
            v-bind:contacts="contacts"
            v-on:delete-contact="deleteContact"
            v-on:save-edit="saveEdit"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactList from '@/components/my-projects/contact-manager/ContactList.vue';
import ContactForm from '@/components/my-projects/contact-manager/ContactForm.vue';
import db from '@/shared/db';

export default {
  data() {
    return {
      contacts: [],
    };
  },
  created() {
    this.getAllContacts();
  },
  methods: {
    getAllContacts() {
      db.read().then((snapshot) => {
        this.contacts = snapshot.docs;
      }).catch((error) => {
        console.error(error);
      });
    },
    deleteContact(contact) {
      db.delete(contact.id).then(() => {
        this.getAllContacts();
      }).catch((error) => {
        console.error(error);
      });
    },
    saveEdit(editedContact) {
      db.update(editedContact).then(() => {
        this.getAllContacts();
      }).catch((error) => {
        console.error(error);
      });
    },
  },
  name: 'app',
  components: {
    ContactForm,
    ContactList,
  },
};
</script>

<style>

</style>
