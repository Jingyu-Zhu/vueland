<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="relative py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Build Amazing
            <span class="text-primary-600">Vue.js</span>
            Applications
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create stunning, responsive web applications with Vue.js, Vite, and Tailwind CSS. 
            Fast, modern, and developer-friendly.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn-primary text-base px-6 py-3">
              Start Building
            </button>
            <button class="btn-secondary text-base px-6 py-3">
              View Examples
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Vue.js?
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Vue.js offers the perfect balance of simplicity and power for modern web development.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p class="text-gray-600">Built with Vite for instant hot module replacement and lightning-fast builds.</p>
          </div>
          
          <div class="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Developer Friendly</h3>
            <p class="text-gray-600">Intuitive API and excellent developer experience with comprehensive tooling.</p>
          </div>
          
          <div class="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Responsive Design</h3>
            <p class="text-gray-600">Beautiful, mobile-first designs with Tailwind CSS utility classes.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Join thousands of developers building amazing applications with Vue.js and modern tooling.
        </p>
        <button class="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg text-lg transition-colors duration-200">
          Start Your Project
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
