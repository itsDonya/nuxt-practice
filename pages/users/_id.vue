<template>
  <article class="flex flex-col items-center gap-4 py-6">
    <TheUser v-bind="user" />
  </article>
</template>
<script>
import TheUser from "../../components/TheUser.vue";
export default {
  layout: "users",
  components: {
    TheUser,
  },
  async asyncData(context) {
    const userInfo = await fetch(
      `https://jsonplaceholder.ir/users/${context.params.id}`
    ).then((res) => res.json());
    return {
      user: { ...userInfo, city: userInfo.address.city },
    };
  },
};
</script>
