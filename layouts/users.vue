<template>
  <div>
    <TheHeader />
    <div class="text-center py-4 text-3xl text-white bg-black">USERS PAGE</div>
    <nuxt />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>
