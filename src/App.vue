<script setup lang="ts">
import Typewriter from 'typewriter-effect/dist/core';
import { onMounted, ref } from 'vue';
var tw = ref()



onMounted(() => {
var typewriter = new Typewriter(tw.value, {
    loop: false,
    delay: 25,
    deleteSpeed: 50,
})
  typewriter
    .pauseFor(1500)
    .typeString('cat dbdump.json | ssh sendit.zip')
    .pauseFor(300)
    .typeString('<br><br>Your download link -> <span class="underline text-white">sendit.zip/4h4j3dkkd7445</span>')
    .typeString('<br>Direct download link -> <span class="underline text-white">d.sendit.zip/4h4j3dkkd7445</span> 🚀')
    .typeString('<br><br><span class="text-green-500">❯ </span>')
    .pauseFor(1000)
    .typeString('tar cz dbdump | gzip | ssh sendit.zip')
    .pauseFor(300)
    .typeString('<br><br>Your download link -> <span class="underline text-white">sendit.zip/d4jkdkjfkjhdk3</span>')
    .typeString('<br>Direct download link -> <span class="underline text-white">d.sendit.zip/d4jkdkjfkjhdk3</span> 🚀')
    .start();
})
</script>

<template>
  <div class="h-screen bg-center bg-cover bg-no-repeat" id="main">
    <div class="container mx-auto flex flex-col justify-between h-full">
      <h1 class="pt-5 px-5 md:pt-20 text-white md:text-center text-5xl md:text-7xl font-bold leading-tight">
        Secure and pain free P2P file transfers without leaving your terminal
      </h1>

      <div class="px-5 grid lg:grid-cols-2 h-full gap-4">
        <div class="pt-5 lg:pt-25">
          <div class="w-full xl:w-120 mx-auto coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased bg-gray-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
            <div class="top mb-2 flex">
              <div class="h-3 w-3 bg-red-500 rounded-full"></div>
              <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
              <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
            </div>
            <div class="mt-4">
              <p class="text-green-300">~/sendit.zip</p>
              <p class="text-green-500">❯
                <span class="text-blue-400 flex-1 typing items-center" ref="tw"></span>
              </p>
            </div>
          </div>
        </div>
        <div class="pb-5">
          <div class="lg:mt-15 lg:w-120 mx-auto rounded rounded-lg h-90 shadow shadow-lg backdrop-opacity-20 backdrop-invert bg-white/40 ">
            <h2 class="text-xl text-center p-5">
              Sign in to setup your SSH pubkey
            </h2>
            <form class="flex flex-col p-5">
              <label for="email" class="text-sm">Email</label>
              <input type="email" id="email" placeholder="lets@sendit.zip" class="opacity-75 border border-gray-300 p-2 rounded-lg mb-5" />
              <button class="bg-[#190E48] hover:bg-[#190E48]/95 text-white p-2 rounded-lg">Sign in</button>
            </form>
            <hr class="w-70% mx-auto mx-5 h-px bg-gray-200 border-0 dark:bg-gray-700">
            <div clasS="flex flex-col p-5">
              <button class="bg-gray-100 border border-gray-200 text-black p-2 rounded-lg hover:bg-gray-200">
                <span class="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" fill-rule="evenodd" d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"/></svg>
                  <span class="ml-2">Sign in with GitHub</span>
                </span>
              </button>
              <button class="bg-gray-100 border border-gray-200 text-black p-2 mt-2 rounded-lg hover:bg-gray-200">
                <span class="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M27.39 13.82H16.21v4.63h6.44c-.6 2.95-3.11 4.64-6.44 4.64a7.09 7.09 0 0 1 0-14.18a7 7 0 0 1 4.42 1.58L24.12 7a12 12 0 1 0-7.91 21c6 0 11.45-4.36 11.45-12a9.56 9.56 0 0 0-.27-2.18Z"/></svg>
                  <span class="ml-2">Sign in with Google</span></span>
              </button>
            </div>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#main {
  background-image: url(./assets/bg2.png);
}
</style>
