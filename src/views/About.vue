<template>
  <div class="about">
    <h1>This is an about page</h1>
    <app-list></app-list>
  </div>
</template>

<script>
import List from "@/views/List.vue";

export default {
  name: "About",
  components: {
    appList: List,
  },
};
</script>
