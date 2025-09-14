<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-lg sm:text-xl md:text-2xl font-bold text-primary-600">VueLand</router-link>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link to="/" class="text-gray-900 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
              <a href="#features" class="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#about" class="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <router-link to="/contact" class="text-gray-500 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Contact Us</router-link>
            </div>
          </div>
          <div class="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
            <button class="btn-secondary text-xs sm:text-sm px-2 py-1.5 sm:px-3 sm:py-2">Sign In</button>
            <button class="btn-primary text-xs sm:text-sm px-2 py-1.5 sm:px-3 sm:py-2">Get Started</button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Router View -->
    <router-view />

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">VueLand</h3>
            <p class="text-gray-400">
              Building the future of web development with Vue.js, Vite, and Tailwind CSS.
            </p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Product</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">About</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Support</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Help Center</a></li>
              <li><router-link to="/contact" class="hover:text-white transition-colors">Contact</router-link></li>
              <li><a href="#" class="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 VueLand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


