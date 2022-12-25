<template>
  <div
    class="w-5/12 p-2 flex flex-col gap-3 justify-center items-center border-2 border-blue-400 rounded-2xl"
  >
    <h2 class="text-blue-500 font-bold">
      First name: <span class="font-normal text-gray-700">{{ name }}</span>
    </h2>
    <h2 class="text-blue-500 font-bold">
      Last name:
      <span class="font-normal text-gray-700">{{ lastName }}</span>
    </h2>
    <h2 class="text-blue-500 font-bold">
      Age: <span class="font-normal text-gray-700">{{ age }}</span>
    </h2>
    <h2 class="text-blue-500 font-bold">
      City: <span class="font-normal text-gray-700">{{ city }}</span>
    </h2>
    <h2 class="text-blue-500 font-bold">
      Role: <span class="font-normal text-gray-700">{{ role }}</span>
    </h2>
    <h2 class="text-blue-500 font-bold">
      User ID: <span class="font-normal text-gray-700">{{ id }}</span>
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
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    id: {
      type: String,
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
