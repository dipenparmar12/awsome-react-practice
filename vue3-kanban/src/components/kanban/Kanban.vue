<script setup>
import Sidebar from './Sidebar.vue'
import SvgIcon from '../SvgIcon.vue'
</script>

<template>
  <div class="h-screen flex">
    <Sidebar />

    <div class="flex-1 min-w-0 bg-white">
      <div class="border-b-2 border-gray-200">
        <header class="px-6">
          <div
            class="flex justify-between items-center border-b border-gray-200 py-2.5"
          >
            <div class="flex-1">
              <div class="relative w-64">
                <span class="absolute inset-y-0 pl-3 flex items-center">
                  <svg
                    class="w-4 h-4 text-gray-400 z-10"
                    viewBox="0 0 204 204"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M201.271 190.229L152.375 141.323C166.553 124.301 173.623 102.467 172.114 80.3654C170.604 58.2634 160.632 37.594 144.272 22.6571C127.911 7.72016 106.422 -0.334341 84.2739 0.169106C62.1261 0.672553 41.025 9.69519 25.3601 25.3601C9.69519 41.025 0.672553 62.1261 0.169106 84.2739C-0.334341 106.422 7.72016 127.911 22.6571 144.272C37.594 160.632 58.2634 170.604 80.3654 172.114C102.467 173.623 124.301 166.553 141.323 152.375L190.229 201.271C191.71 202.651 193.669 203.402 195.693 203.366C197.717 203.331 199.648 202.511 201.079 201.079C202.511 199.648 203.331 197.717 203.366 195.693C203.402 193.669 202.651 191.71 201.271 190.229V190.229ZM16.0625 86.375C16.0625 72.4685 20.1863 58.8743 27.9123 47.3115C35.6383 35.7486 46.6196 26.7365 59.4676 21.4147C72.3155 16.0929 86.453 14.7005 100.092 17.4135C113.732 20.1266 126.26 26.8232 136.093 36.6566C145.927 46.4899 152.623 59.0184 155.336 72.6577C158.049 86.297 156.657 100.434 151.335 113.282C146.014 126.13 137.001 137.112 125.439 144.838C113.876 152.564 100.282 156.688 86.375 156.688C67.7337 156.665 49.8623 149.25 36.6809 136.069C23.4995 122.888 16.0846 105.016 16.0625 86.375V86.375Z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  class="block w-full py-1.5 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-600 rounded-md border border-gray-400"
                  placeholder="Search"
                />
              </div>
            </div>

            <div class="flex items-center gap-5">
              <button>
                <span>
                  <SvgIcon class="w-5 h-5 text-gray-500" name="bell" />
                </span>
              </button>

              <button>
                <img
                  class="w-8 h-8 rounded-full bg-cover bg-center"
                  src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=144&h=144&q=80"
                  alt="avatar"
                />
              </button>
            </div>
          </div>

          <div class="flex justify-between items-center py-2">
            <div class="flex items-center gap-8">
              <h2 class="text-gray-900 text-lg font-semibold">All Issues</h2>
              <div class="flex">
                <img
                  class="w-6 h-6 rounded-full -ml-1 outline outline-white"
                  :src="`http://placeimg.com/50/50/people?${1}`"
                />
                <img
                  class="w-6 h-6 rounded-full -ml-1 outline outline-white"
                  :src="`http://placeimg.com/50/50/people?${2}`"
                />
                <img
                  class="w-6 h-6 rounded-full -ml-1 outline outline-white"
                  :src="`http://placeimg.com/50/50/people?${3}`"
                />
                <img
                  class="w-6 h-6 rounded-full -ml-1 outline outline-white"
                  :src="`http://placeimg.com/50/50/people?${4}`"
                />
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div
                class="flex items-center gap-1 justify-between bg-gray-200 rounded-md py-1 px-1.5"
              >
                <button class="flex-1 bg-transparent px-2 py-1 rounded-sm">
                  <SvgIcon name="hamburger" class="w-4 h-4 text-gray-400" />
                </button>
                <button class="flex-1 bg-white px-2 py-1 rounded-sm shadow-lg">
                  <SvgIcon name="hamburger-v" class="w-4 h-4 text-gray-500" />
                </button>
              </div>
              <button
                class="bg-gray-800 text-white px-3 py-1.5 rounded-md flex items-center gap-2"
              >
                <SvgIcon name="plus" class="w-3 h-3 text-white inline-block" />
                New Issue
              </button>
            </div>
          </div>
        </header>
      </div>

      <div>main</div>
    </div>
  </div>
</template>
