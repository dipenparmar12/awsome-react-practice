<template>
  <div class="w-64 border-r bg-gray-100 px-6 py-4">
    <img
      :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png'"
      alt="brand"
      class="w-9 h-9 bg-cover border-2"
    />
    <nav class="mt-8">
      <h2 class="text-xs font-semibold text-gray-600 uppercase tracking-wide">
        Issues
      </h2>
      <div class="mt-2 -mx-3">
        <a
          href="#"
          class="flex justify-between px-3 py-2"
          :class="{ 'bg-gray-200 rounded-lg ': true }"
        >
          <span class="text-sm font-medium text-gray-800">All</span>
          <span class="text-xs font-semibold text-gray-700">36</span>
        </a>
        <a href="#" class="flex justify-between px-3 py-2">
          <span class="text-sm text-gray-700 hover:text-blue-800">
            Assigned to me
          </span>
          <span class="text-xs font-semibold text-gray-700">36</span>
        </a>
        <a href="#" class="flex justify-between px-3 py-2">
          <span class="text-sm text-gray-700 hover:text-blue-800">
            Created by me
          </span>
          <span class="text-xs font-semibold text-gray-700">2</span>
        </a>
        <a href="#" class="flex justify-between px-3 py-2">
          <span class="text-sm text-gray-700 hover:text-blue-800">
            Archived
          </span>
          <!-- <span class="text-xs font-semibold text-gray-700"></span> -->
        </a>
      </div>

      <h2
        class="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide"
      >
        Tags
      </h2>
      <div class="mt-2 -mx-3">
        <a href="#" class="flex justify-between px-3 py-2">
          <span class="text-sm text-gray-700 hover:text-blue-800"> Bug </span>
        </a>
        <a href="#" class="flex justify-between px-3 py-2">
          <span class="text-sm text-gray-700 hover:text-blue-800">
            Feature request
          </span>
        </a>
        <a href="#" class="flex justify-between px-3 py-2">
          <span class="text-sm text-gray-700 hover:text-blue-800">
            Marketing
          </span>
        </a>
        <a href="#" class="flex justify-between px-3 py-2">
          <span class="text-sm text-gray-700 hover:text-blue-800"> V2.0 </span>
        </a>
        <a href="#" class="flex justify-between px-3 py-2">
          <span class="text-sm text-gray-700 hover:text-blue-800">
            Enhancement
          </span>
        </a>
        <a href="#" class="flex justify-between px-3 py-2">
          <span class="text-sm text-gray-700 hover:text-blue-800">
            Design
          </span>
        </a>
      </div>

      <button class="mt-2 flex gap-1 justify-center items-center text-sm">
        <svg
          class="w-3 h-3 text-gray-400 mt-0.5"
          viewBox="0 0 448 448"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M416 176H272V32C272 14.33 257.67 0 240 0H208C190.33 0 176 14.33 176 32V176H32C14.33 176 0 190.33 0 208V240C0 257.67 14.33 272 32 272H176V416C176 433.67 190.33 448 208 448H240C257.67 448 272 433.67 272 416V272H416C433.67 272 448 257.67 448 240V208C448 190.33 433.67 176 416 176Z"
          />
        </svg>
        <span class="text-gray-500 font-medium ml-1"> New Project </span>
      </button>
    </nav>
  </div>
</template>
