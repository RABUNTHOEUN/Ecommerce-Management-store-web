<template>
    <header class="bg-white shadow-md">
      <nav class="container mx-auto ">
        <div class="sub-navbar-1">
          <div class="flex justify-between items-center py-4">
            <!-- Logo Section -->
            <div class="text-3xl font-bold text-green-700 mr-11">Acom</div>
            
            <!-- Navigation Links -->
            <nav class="flex justify-center items-center space-x-4">
              <div class="facebook flex justify-center items-center p-2 bg-gray-200/50 w-10 h-10 rounded-full">
                <a href="#" class="text-gray-700 hover:text-green-700"><p><i class="ri-facebook-circle-fill"></i></p></a>
              </div>
              <div class="telegram flex justify-center items-center p-2 bg-gray-200/50 w-10 h-10 rounded-full">
                <a href="#" class="text-gray-700 hover:text-green-500"><i class="ri-telegram-fill"></i></a>
              </div>
              <div class="linkin flex justify-center items-center p-2 bg-gray-200/50 w-10 h-10 rounded-full">
                <a href="#" class="text-gray-700 hover:text-green-500"><i class="ri-linkedin-fill"></i></a>
              </div>
              <div class="wechat flex justify-center items-center p-2 bg-gray-200/50 w-10 h-10 rounded-full">
                <a href="#" class="text-gray-700 hover:text-green-500"><i class="ri-wechat-fill"></i></a>
              </div>
              <div class="tiktok flex justify-center items-center p-2 bg-gray-200/50 w-10 h-10 rounded-full">
                <a href="#" class="text-gray-700 hover:text-green-500"><i class="ri-tiktok-line"></i></a>
              </div>
            </nav>
            
            <!-- Contact Info -->
            <div class="text-sm text-gray-500 border-l border-orange-500 flex gap-4 justify-center items-center">
              <div class="ml-3">Call Icon</div>
              <div>
                <p>Call us anytime</p>
                <p>+855 11 443 664</p>
                </div>
            </div>
            <!-- Contact Info -->
            <div class="text-sm text-gray-500 border-l border-orange-500 flex gap-4 justify-center items-center">
              <div class="ml-3">Mail Icon</div>
              <div>
                <p>Mail to us</p>
                <p>acomcambodia@gmail.com</p>
              </div>
            </div>
            <!-- Contact Info -->
            <div class="text-sm text-gray-500 border-l border-orange-500 flex gap-4 justify-center items-center">
              <div class="ml-3">Map Icon</div>
              <div>
                <p>Call us: +855 11 443 664</p>
                <p>Ratankiri, Cambodia</p>
              </div>
            </div>
          </div>
        </div>
        <div class="sub-navbar-2">
          <div class="flex justify-between items-center py-4">
            <!-- Navigation Links -->
            <nav class="space-x-4">
              <a href="#" class="text-gray-700 hover:text-green-500">Home</a>
              <a href="#" class="text-gray-700 hover:text-green-500">About</a>
              <a href="#" class="text-gray-700 hover:text-green-500">Services</a>
              <a href="#" class="text-gray-700 hover:text-green-500">Projects</a>
              <!-- <a href="#" class="text-gray-700 hover:text-green-500">Shop</a> -->
            </nav>
            
            <!-- Contact Info -->
            <div class="text-sm text-gray-500 border-l-1 flex items-center">
              <input type="search" placeholder="Search" class="px-2 pl-7 py-1 text-black border rounded-md">
              <p class="absolute z-10 ml-2"><i class="ri-search-2-line"></i></p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  