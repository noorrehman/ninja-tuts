<template>
    <div class="flex flex-col min-h-screen">
      <!-- Navbar -->
      <header class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
        <div class="container mx-auto px-6 py-4">
          <div class="flex items-center justify-between">
            <div>
              <NuxtLink to="/" class="text-lg font-semibold">ClimeSoft</NuxtLink>
            </div>
            <!-- Mobile menu button -->
            <div class="md:hidden">
              <button @click="toggleMobileMenu" class="text-white focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
            <!-- Desktop menu links -->
            <div class="hidden md:flex space-x-4">
              <NuxtLink to="/" class="hover:text-gray-300 a">Home</NuxtLink>
              
              <div class="dropdown">
                <button class="hover:text-gray-300 a">Products</button>
                <div class="dropdown-content">
                  <NuxtLink to="/products/mobiles">Moblies</NuxtLink>
                  <NuxtLink to="/products/tablets">Tablets</NuxtLink>
                  <NuxtLink to="/products/laptops">Laptops</NuxtLink>
                </div>
              </div>
              <NuxtLink to="/about" class="hover:text-gray-300 a">About</NuxtLink>
              <NuxtLink to="/contact" class="hover:text-gray-300 a">Contact</NuxtLink>
              <NuxtLink to="/abc" class="hover:text-gray-300 a">FAQ</NuxtLink>
            </div>
          </div>
          <!-- Mobile menu -->
          <div id="mobile-menu" :class="{ 'hidden': !isMobileMenuOpen }" class="md:hidden mt-4">
            <div id="mobile-menu-list" class="space-y-4">
              <NuxtLink to="/" class="a block py-2 px-4 bg-blue-700 text-white font-bold rounded-lg">Home</NuxtLink>
              
              <div class="dropdown">
                <button class="a block py-2 px-4 bg-blue-700 text-white font-bold rounded-lg">Products</button>
                <div class="dropdown-content">
                  <NuxtLink to="/products/mobiles" class="a block py-2 px-4 bg-blue-700 text-white font-bold rounded-lg">Mobiles</NuxtLink>
                  <NuxtLink to="/products/tablets" class="a block py-2 px-4 bg-blue-700 text-white font-bold rounded-lg">Tablets</NuxtLink>
                  <NuxtLink to="/products/laptops" class="a block py-2 px-4 bg-blue-700 text-white font-bold rounded-lg">Laptops</NuxtLink>
                </div>
              </div>
              <NuxtLink to="/about" class="a block py-2 px-4 bg-blue-700 text-white font-bold rounded-lg">About</NuxtLink>
              <NuxtLink to="/contact" class="a block py-2 px-4 bg-blue-700 text-white font-bold rounded-lg">Contact</NuxtLink>
            </div>
          </div>
        </div>
      </header>
  
      <!-- Page content -->
      <div>
        <slot />
      </div>
  
      <!-- Footer -->
      <footer class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
        <div class="container mx-auto text-center">
          <p>&copy; 2024 My Nuxt App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
    const isMobileMenuOpen = ref()
    function  toggleMobileMenu() {
        isMobileMenuOpen.value = !isMobileMenuOpen.value;
    }
  </script>
  
  <style scoped>
  /* Custom dropdown styles */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .dropdown-content a:hover {
    background-color: #dbd9d9;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  </style>
  