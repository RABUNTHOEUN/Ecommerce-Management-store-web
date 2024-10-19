<template>
    <section class="py-16 bg-gray-50 pt-48">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Image -->
        <div class="relative">
          <img src="../assets/agriculture-farm-cover.jpg" alt="Farming" class="w-[560px] h-[560px] rounded-full shadow-lg">
          <img src="../assets/agriculture-green.jpg" alt="Vegetables" class="absolute z-50 bottom-0 left-0 w-64 h-64 rounded-full shadow-lg border-4 p-1 -m-4 border-white">
        </div>
  
        <!-- Content -->
        <div class="flex flex-col justify-center">
          <h2 class="text-4xl font-bold mb-4">Agriculture & Organic Product Farm</h2>
          <p class="mb-4">Acom is the largest global organic farm.</p>
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
  