<template>
  <div>
    <input
      type="text"
      name="contactName"
      id="contactName"
      placeholder="Name"
      v-model="newContact"
    />
    <button @click="addContact">Add Contact</button>
    <button @click="sortContacts">Sort</button>
    <!-- Transition group renders a span by default but we can change that using the tag attribute, here we are rendering a ul instead; we use ul to apply styles
    We are also using the "appear" attribute which applies our transition on the initial rended (e.g. first visit or reload) -->
    <transition-group name="slide-up" tag="ul" appear>
      <li v-for="contact in contacts" :key="contact">
        {{ contact }}
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "List",
  data: function () {
    return {
      newContact: "",
      contacts: ["Yui Hirasawa", "Ritsu Tainaka", "Azusa Nakano"],
    };
  },
  methods: {
    addContact: function () {
      this.contacts.push(this.newContact);
      this.newContact = "";
    },
    sortContacts: function () {
      this.contacts.sort();
    },
  },
};
</script>

<style>
ul {
  list-style: none;
}
</style>
