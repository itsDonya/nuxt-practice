<template>
  <article class="flex flex-col items-center gap-4 py-6">
    <TheUser v-bind="user" />
  </article>
</template>
<script>
export default {
  layout: "users",
  head() {
    return {
      title: this.user.name,
    };
  },
  async asyncData(context) {
    const userInfo = await fetch(
      `${process.env.baseUrl}/users/${context.params.slug}`
    )
      .then((res) => res.json())
      .catch((e) => context.error(e));
    return {
      user: { ...userInfo, city: userInfo.address.city },
    };
  },
};
</script>
