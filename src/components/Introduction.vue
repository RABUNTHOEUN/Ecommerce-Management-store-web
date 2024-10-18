<template>
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Image -->
        <div class="relative">
          <img src="" alt="Farming" class="rounded-lg shadow-lg">
          <img src="" alt="Vegetables" class="absolute bottom-0 right-0 w-20 h-20 rounded-full shadow-lg border-4 border-white">
        </div>
  
        <!-- Content -->
        <div class="flex flex-col justify-center">
          <h2 class="text-4xl font-bold mb-4">Agriculture & Organic Product Farm</h2>
          <p class="mb-4">Agrios is the largest global organic farm. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul class="list-disc list-inside mb-4">
            <li>Growing fruits & vegetables</li>
            <li>Tips for ripening your fruits</li>
          </ul>
          <button class="bg-green-500 text-white px-6 py-2 rounded-full">Discover More</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Introduction'
  }
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  