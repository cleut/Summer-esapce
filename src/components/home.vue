<template>
  <div class="progress fixed top-0 left-0 w-0 h-1 bg-blend-difference bg-white block z-50"></div>
  <div class="font-mono">
    <header class="fixed top-9 left-9 z-10">
      <h1 class="title">Summer Escapism</h1>
      <div class="client">Palm Trees</div>
      <div class="page tracking-tighter">1 / 4</div>
      <div class="pixels">0%</div>
    </header>
    <section data-title="Palm Trees" data-page="1 / 4" class="s1 h-screen bg-pink-200 p-20 flex justify-center align-middle items-center">
      <div class="relative">
        <div data-parallax="0.1" class="square w-24 h-24 bg-pink-400 absolute top-12 -left-12"></div>
        <img class="items-center relative" src="https://images.unsplash.com/photo-1572953745960-14685e3e9b49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=100" alt="">
        <div data-parallax="-0.1" class="circle rounded-full w-24 h-24 bg-blue-300 absolute bottom-12 -right-12"></div>
      </div>
    </section>
    <section data-title="Miami Dusk" data-page="2 / 4" class="s2 h-screen bg-cyan-200 flex justify-center align-middle items-center">
      <div class="relative">
        <div data-parallax="-0.2" class="circle rounded-full w-24 h-24 bg-pink-300 absolute bottom-12 -right-12"></div>
        <img class="items-center relative" src="https://images.unsplash.com/photo-1526791543726-88ffd5bcdc0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=100" alt="">
        <div data-parallax="0.2" class="square w-24 h-24 bg-cyan-400 absolute top-12 -left-12"></div>
      </div>
    </section>
    <section data-title="Poolside" data-page="3 / 4" data-is-dark="yes" class="s3 h-screen bg-yellow-50 flex justify-center align-middle items-center">
      <div class="relative">
        <div data-parallax="-0.3" class="circle rounded-full w-24 h-24 bg-cyan-400 absolute bottom-12 -right-12"></div>
        <img class="items-center relative" src="https://images.unsplash.com/photo-1591285713698-598d587de63e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=100" alt="">
        <div data-parallax="0.5" class="square w-24 h-24 bg-yellow-300 absolute top-12 -left-12"></div>
      </div>
    </section>
    <section data-title="Cool Touch" data-page="4 / 4" class="s4 h-screen bg-rose-100 flex justify-center align-middle items-center">
      <div class="relative">
        <div data-parallax="-0.6" class="circle rounded-full w-24 h-24 bg-cyan-400 absolute bottom-12 -right-12"></div>
        <img class="items-center relative" src="https://images.unsplash.com/photo-1562844275-857f6e7c429e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80" alt="">
        <div data-parallax="0.1" class="square w-24 h-24 bg-rose-300 absolute top-12 -left-12"></div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style lang="css">

.title, .client, .page, .pixels {
  @apply text-4xl text-gray-800 leading-tight font-semibold
}


</style>