<template>
    <section class="py-16 bg-gray-50 pt-48">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
        <!-- Image -->
        <div class="relative">
          <img src="../assets/agriculture-farm-cover.jpg" alt="Farming" class="w-[560px] h-[560px] rounded-full shadow-lg">
          <img src="../assets/agriculture-green.jpg" alt="Vegetables" class="absolute z-50 bottom-0 left-0 w-64 h-64 rounded-full shadow-lg border-4 p-1 -m-4 border-white">
        </div>
  
        <!-- Content -->
        <div class="flex flex-col justify-center">
          <p class="text-green-600 font-bold text-2xl">Our Introductions</p>
          <h2 class="text-5xl font-bold mb-4">Agriculture & Organic Product Farm</h2>
          <p class="mb-4">Acom is the largest global organic farm.</p>
          <p>There are many variations of passages.  Modern agriculture integrates advanced technologies, sustainable practices, and science-based innovations to enhance productivity and resource efficiency.</p>

          <div class="py-6">
            <div class="flex items-center">
              <img src="../assets/farmVegetables.png" alt="" class="w-16 h-16">
              <p class="font-bold text-xl pl-5">Growing Fruits vegetables</p>
            </div>
            <div class="flex items-center">
              <img src="../assets/PersonFarmer.png" alt="" class="w-16 h-16">
              <p class="font-bold text-xl pl-5">Tips for ripening your fruits</p>
            </div>
          </div>

          <ul class="list-disc list-inside mb-4">
            <li>Growing fruits & vegetables</li>
            <li>Tips for ripening your fruits</li>
          </ul>

          <div class="bg-green-500 text-white px-6 py-2 mx-auto rounded-full ml-0 ">
            <router-link to="/agriculturedesc" class="hover:text-gray-800">Discover More</router-link>
          </div>
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
  