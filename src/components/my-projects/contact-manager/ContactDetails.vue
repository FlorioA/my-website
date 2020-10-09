<template>
<div>
  <!-- READ MODE  -->
  <div v-if="!isInEditMode" class="card">
    <div class="card-header">
      <div class="row justify-content-between">
        <h5
          class="mb-0 col-md-8 btn"
          v-bind:id="'heading_' + contact.id"
          data-toggle="collapse"
          v-bind:data-target="'#collapse_' + contact.id"
          aria-expanded="true"
          v-bind:aria-controls="'collapse_' + contact.id"
        >
          {{ contact.data().firstName }} {{ contact.data().lastName }}
        </h5>
        <div class="col-md-2 col-6">
          <button
            v-on:click="editContact(contact)"
            class="btn btn-sm btn-warning text-white"
          >
            <PencilOutline/>
          </button>
        </div>
        <div class="col-md-2 col-6">
          <button
            v-on:click="$emit('delete-contact', contact)"
            class="btn btn-sm btn-danger"
          >
            <DeleteOutline/>
          </button>
        </div>
      </div>
    </div>
    <div
      v-bind:id="'collapse_' + contact.id"
      class="collapse"
      v-bind:aria-labelledby="'heading_' + contact.id"
      data-parent="#accordion"
    >
      <div class="card-body">
        <div class="text-left">
          <p class="card-text">
            <span class="text-muted">Email : </span>{{ contact.data().email }}
          </p>
          <p class="card-text">
            <span class="text-muted">Phone : </span>{{ contact.data().phone }}
          </p>
        </div>
      </div>
    </div>
  </div>

<!-- EDIT MODE  -->
  <div v-if="isInEditMode" class="card">
    <div class="card-header btn">
      <div class="row justify-content-between">
        <input type="text" class="mb-0 col-4" v-model="contactCopy.firstName">
        <input type="text" class="mb-0 col-4" v-model="contactCopy.lastName">
        <div class="col-2">
          <button v-on:click="saveEdit" class="btn btn-sm btn-success"><PencilOutline/></button>
        </div>
        <div class="col-2">
          <button v-on:click="cancelEdit" class="btn btn-sm btn-danger"><WindowClose/></button>
        </div>
      </div>
    </div>

    <div class="collapse show">
      <div class="card-body">
        <div class="text-left">
          <p class="card-text">
            <span class="text-muted">Email : </span><input type="text" v-model="contactCopy.email">
          </p>
          <p class="card-text">
            <span class="text-muted">Phone : </span><input type="text" v-model="contactCopy.phone">
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import PencilOutline from 'vue-material-design-icons/PencilOutline.vue';
import DeleteOutline from 'vue-material-design-icons/DeleteOutline.vue';
import WindowClose from 'vue-material-design-icons/WindowClose.vue';

export default {
  components: {
    PencilOutline,
    DeleteOutline,
    WindowClose,
  },
  props: ['contact'],
  data() {
    return {
      contactCopy: {},
      isInEditMode: false,
    };
  },
  methods: {
    editContact() {
      const {
        firstName,
        lastName,
        email,
        phone,
      } = this.contact.data();

      this.contactCopy = {
        id: this.contact.id,
        firstName,
        lastName,
        email,
        phone,
      };

      this.isInEditMode = true;
    },
    saveEdit() {
      this.$emit('save-edit', this.contactCopy);
      this.isInEditMode = false;
    },
    cancelEdit() {
      this.isInEditMode = false;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
