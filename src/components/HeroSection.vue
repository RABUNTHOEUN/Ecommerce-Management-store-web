<template>
    <section class="relative bg-cover bg-center h-screen" style="background-image: url('/path-to-your-image.jpg');">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 class="text-5xl font-bold mb-4">Agriculture & Eco Farming</h1>
        <p class="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button class="bg-green-500 text-white px-6 py-2 rounded-full">Discover More</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection'
  }
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  