<template>
  <article class="flex flex-col items-center gap-4 py-6">
    <TheUser v-if="selectedUser" v-bind="selectedUser" />
    <section v-else>
      <h1 class="text-5xl font-bold text-center text-red-500 mt-12">
        User not found!
      </h1>
    </section>
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
      selectedUser: null,
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
  mounted() {
    const identifiedUser = this.users.find(
      (user) => user.id === this.$route.params.id
    );
    this.selectedUser = identifiedUser;
  },
};
</script>
