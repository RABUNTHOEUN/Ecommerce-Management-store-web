<template>
    <div class="container mx-auto p-6">
      <h1 class="text-4xl font-bold mb-4 text-center text-green-700">Modern Agriculture</h1>
      
      <!-- Introduction Section -->
      <p class="text-lg text-gray-700 mb-6 text-center">
        Modern agriculture integrates advanced technologies, sustainable practices, and science-based innovations to enhance productivity and resource efficiency.
      </p>
  
      <!-- Features Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(feature, index) in features" :key="index" class="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <h2 class="text-xl font-semibold text-green-600 mb-2">{{ feature.title }}</h2>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
      
      <!-- Benefits Section -->
      <div class="mt-10">
        <h2 class="text-3xl font-bold text-center text-green-700 mb-4">Benefits of Modern Agriculture</h2>
        <ul class="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li v-for="(benefit, index) in benefits" :key="index">{{ benefit }}</li>
        </ul>
      </div>
  
      <!-- Challenges Section -->
      <div class="mt-10">
        <h2 class="text-3xl font-bold text-center text-red-700 mb-4">Challenges of Modern Agriculture</h2>
        <ul class="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li v-for="(challenge, index) in challenges" :key="index">{{ challenge }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        features: [
          {
            title: "Mechanization",
            description:
              "The use of machinery for planting, harvesting, and managing large-scale farms has increased efficiency and reduced labor costs.",
          },
          {
            title: "Biotechnology",
            description:
              "Genetically modified crops are designed to be more resistant to pests, diseases, and harsh climates, improving overall yields.",
          },
          {
            title: "Precision Agriculture",
            description:
              "The use of GPS, drones, and data analytics enables precise resource management, optimizing crop production and minimizing waste.",
          },
          {
            title: "Sustainable Practices",
            description:
              "Sustainability is achieved through methods like crop rotation, organic farming, and conservation agriculture, ensuring long-term productivity.",
          },
          {
            title: "Irrigation and Water Management",
            description:
              "Advanced irrigation systems like drip and sprinkler irrigation ensure efficient water usage, reducing wastage.",
          },
          {
            title: "Digital Agriculture",
            description:
              "Farmers use digital tools and IoT devices to monitor crops, track market trends, and automate farming processes, improving decision-making.",
          },
          {
            title: "Vertical Farming",
            description:
              "Innovative farming methods like vertical and urban farming allow for high-yield food production in limited spaces, especially in urban areas.",
          },
        ],
        benefits: [
          "Increased productivity and crop yield.",
          "Efficient use of resources such as water and fertilizers.",
          "Climate-resilient crop varieties.",
          "Reduced labor and automation of farming tasks.",
          "Economic growth and improved livelihoods for farmers."
        ],
        challenges: [
          "Environmental degradation from overuse of chemical inputs.",
          "High cost of modern technologies, limiting access for small-scale farmers.",
          "Technological dependency leading to risks of system failures.",
          "Balancing sustainability with increased productivity."
        ]
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  