<template>
  <div
    class="w-5/12 p-2 flex flex-col gap-3 justify-center items-center border-2 border-blue-400 rounded-2xl"
  >
    <h2 class="text-blue-500 font-bold">
      User ID: <span class="font-normal text-gray-700">{{ id }}</span>
    </h2>
    <h2 class="text-blue-500 font-bold">
      Full name: <span class="font-normal text-gray-700">{{ name }}</span>
    </h2>
    <h2 class="text-blue-500 font-bold">
      City: <span class="font-normal text-gray-700">{{ city }}</span>
    </h2>
    <h2 class="text-blue-500 font-bold">
      Phone:
      <span class="font-normal text-gray-700">{{ phone }}</span>
    </h2>
    <h2 class="text-blue-500 font-bold">
      Email: <span class="font-normal text-gray-700">{{ email }}</span>
    </h2>
    <nuxt-link
      :to="'/users/' + id"
      v-if="isListOfUsers"
      class="px-4 py-1 rounded-lg bg-blue-500 text-white cursor-pointer"
      >Visit user</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: [String, Number],
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },
    id: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    isListOfUsers() {
      return this.$route.name === "users" ? true : false;
    },
  },
};
</script>
