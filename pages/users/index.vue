<template>
  <article class="flex flex-col items-center gap-4 py-6">
    <TheUser v-for="(user, i) in users" v-bind="user" :key="i" />
  </article>
</template>

<script>
import TheUser from "../../components/TheUser.vue";
export default {
  components: {
    TheUser,
  },
  data() {
    return {
      users: [
        {
          name: "Donya",
          lastName: "Davoodi",
          age: 17,
          role: "Junior front-end developer",
          city: "Babolsar",
          id: "23f8d",
        },
        {
          name: "Arezoo",
          lastName: "Rezaei",
          age: 23,
          role: "Back-end developer",
          city: "Ahvaz",
          id: "pa21d",
        },
        {
          name: "Armita",
          lastName: "Jahani",
          age: 37,
          role: "Full-stack developer",
          city: "Tehran",
          id: "8c3x1",
        },
      ],
    };
  },
};
</script>
