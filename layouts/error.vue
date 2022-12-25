<template>
  <section class="h-screen flex flex-col items-center justify-center gap-8">
    <h1 class="text-6xl font-bold text-red-700 text-center">
      An error occurred!
    </h1>
    <div class="flex flex-col items-start gap-2">
      <p class="text-red-700">- Make sure the user exists</p>
      <p class="text-red-700">- Make sure you entered a correct URL</p>
    </div>
    <div class="flex flex-col items-center gap-3">
      <p class="text-red-500">Any problem?</p>
      <button
        class="text-white bg-red-700 rounded-xl px-4 py-2 hover:bg-red-800"
      >
        Report Us
      </button>
    </div>
  </section>
</template>
