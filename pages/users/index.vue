<template>
  <article class="flex flex-col items-center gap-4 py-6">
    <TheUser v-for="(user, i) in users" v-bind="user" :key="i" />
  </article>
</template>

<script>
import TheUser from "../../components/TheUser.vue";
export default {
  layout: "users",
  components: {
    TheUser,
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
  },
};
</script>
