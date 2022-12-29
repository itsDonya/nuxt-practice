<template>
  <article class="flex flex-col items-center gap-4 py-6">
    <TheUser v-bind="user" />
  </article>
</template>
<script>
import TheUser from "../../components/TheUser.vue";
export default {
  layout: "users",
  validate(data) {
    return /^.{5}$/.test(data.params.id);
  },
  components: {
    TheUser,
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(context);
        resolve({
          user: {
            name: "Donya",
            lastName: "Davoodi",
            age: 17,
            role: "Junior front-end developer",
            city: "Babolsar",
            id: context.params.id,
          },
        });
      }, 150);
    })
      .then((data) => {
        return data;
      })
      .catch((e) => {
        context.error(e);
      });
  },
};
</script>
