<template>
  <div id="accordion" class="col-12">
    <contact-details
      v-bind:contact='contact'
      v-for='contact in contacts'
      v-bind:key='contact.data().id'
      v-on:save-edit="saveEdit"
      v-on:delete-contact="deleteContact"
    >
    </contact-details>
  </div>
</template>

<script>
import ContactDetails from '@/components/my-projects/contact-manager/ContactDetails.vue';

export default {
  props: ['contacts'],
  components: {
    ContactDetails,
  },
  methods: {
    deleteContact(contact) {
      this.$emit('delete-contact', contact);
    },
    saveEdit(editedContact) {
      this.$emit('save-edit', editedContact);
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
</style>
