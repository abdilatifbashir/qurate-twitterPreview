<template>
  <div class="bg-gray-300 h-screen">
    <div class="grid grid-cols-7 bg-white h-10">
      <div class="py-2 px-10 flex gap-4">
        <span class="text-gray-500 hover:text-black">Brief</span>
        <span class="text-gray-500 hover:text-black">Content</span>
      </div>
    </div>

    <div>
      <!------preview ------>
      <div class="absolute top-32 left-66 bg-gray-100 w-2/5 h-92 rounded">
        <div class="flex justify-between">
          <div class="flex items-start pl-4 pt-4">
            <span class="pr-2 w-12 mb-4"
              ><img src="../assets/abdilatif.jpg" class=" rounded-full"
            /></span>
            <span class="text-gray-900">SparkS Gym</span>
            <span
              ><svg
                class="w-4 pt-1  text-twitterBlue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                /></svg
            ></span>
            <span class="pl-2 text-gray-500">@sparksgym</span>
            <span class="pl-2 text-gray-500">Mar 24</span>
          </div>
          <div class="pr-4 pt-4">
            <svg
              class="h-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </div>
        </div>
        <div>
          <!-----text box ---->
          <span class="absolute top-10 left-20 pr-10 text-gray-800 leading-5">
            Lorem Ipsum is simply industry. Lorem Ipsum has been the industry's
            standard dummy
          </span>
          <span class="absolute top-24 left-20 pr-10 text-gray-800 leading-5">
            Lorem Ipsum is simply industry. Lorem Ipsum has been the industry's
            standard dummy
          </span>
        </div>
        <div class="absolute top-36 left-20 pb-12">
          <img class="h-44 w-96 rounded-lg	" src="../assets/gym1.jpg" />
          <div class="flex justify-between gap-2">
            <!-----footer here ----->
            <div class="flex mr-10 pt-1">
              <span
                ><svg
                  class="h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  /></svg
              ></span>
              <span class="bg-gray-300 w-4 h-2 rounded-full mt-2 ml-2"></span>
            </div>

            <div class="flex mr-10 pt-1">
              <span
                ><svg
                  class="w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                  /></svg
              ></span>
              <span class="bg-gray-300 w-4 h-2 rounded-full mt-2 ml-2"></span>
            </div>

            <div class="flex mr-10 pt-1">
              <span
                ><svg
                  class=" w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  /></svg
              ></span>
              <span class="bg-gray-300 w-4 h-2 rounded-full mt-2 ml-2"></span>
            </div>
            <div class="flex mr-10 pt-1">
              <span
                ><svg
                  class=" w-4 pt-1 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span class="bg-gray-300 w-4 h-2 rounded-full mt-2 ml-2"></span>
            </div>
          </div>
        </div>
        <div>
          <!------footer here ------>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainPage",
  components: {},
});
</script>
