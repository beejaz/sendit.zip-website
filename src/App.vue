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
        <div class="pt-10 md:pt-30">
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
          <div class="bg-gray/75 lg:mt-15 lg:w-120 mx-auto rounded rounded-lg h-90 shadow shadow-lg">
            <h2 class="text-xl text-center p-5">
              Sign in to setup your SSH pubkey
            </h2>
            <form class="flex flex-col p-5">
              <label for="email" class="text-sm">Email</label>
              <input type="email" id="email" placeholder="lets@sendit.zip" class="opacity-75 border border-gray-300 p-2 rounded-lg mb-5" />
              <button class="bg-[#190E48] text-white p-2 rounded-lg">Sign in</button>
            </form>
            <hr class="w-70% mx-auto mx-5 h-px  bg-gray-200 border-0 dark:bg-gray-700">
            <div clasS="flex flex-col p-5">
              <button class="bg-gray-100 border border-gray-200 text-black p-2 rounded-lg">Sign in with GitHub</button>
              <button class="bg-gray-100 border border-gray-200 text-black p-2 mt-2 rounded-lg">Sign in with Google</button>
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
