<script>
export default { name: 'ComponentName', components: {}, inheritAttrs: true }
</script>

<script setup>
import { reactive, computed, watchEffect } from 'vue'
import { onMounted, ref, defineEmits } from 'vue'

// const props = defineProps({
//   isOpen: { type: Boolean, required: true },
//   test: Number
// })

// const state = reactive({  name: '' })

// watchEffect(() => {
//   console.log('tab.vue::[16] ', Object.assign({}, state))
// })
// onBeforeMount(() => {
//   console.log('carbon-footprint.vue::[28] cmsData 1', cmsData)
// })
// watchEffect(() => {  })
</script>

<template>
  <div class="">
    <p>Test Component</p>
  </div>
</template>


v-bind="$attrs"

// Loading dots 
<pulse-loader :loading="loading" :color="'#eeeeee'" :size="'8px'" />


// const emit = defineEmits(['update:user'])
// import { useSlots, useAttrs } from 'vue'
// const state = reactive({  name: '' })
// const slots = useSlots()
// const attrs = useAttrs()

// emit('update:user', null)
// @update:user="(newVal) => (state.user = newVal)" 

🔥 Structuring Composables
To keep your composables — those extracted functions written using the composition API — neat and easy to read, here's a way to organize the code.

-->  Component and directives
-->  provide and inject
-->  defineProps, defineEmits, and defineExpose (when using script setup)
-->  refs and reactive variables
-->  Computed properties
-->  Immediate watchers
-->  Watchers
-->  Lifecycle methods, in their correct order
-->  Non-reactive state
-->  Methods
-->  Async code using await (or Promises if you're into that sort of thing)

<script>
  import {defineComponent} from "vue";
  export default defineComponent({
    name: "component-name",
    props: {},
    // setup: function (props, context) { },
  });
</script>

props: {
  label: { type: String, default: "Value" },
  buttonType: {
    default() {  return "button";},
    validator(value) {
      return ["button", "link"].includes(value);
    },
  },
},


/*
Pinia store
========================================================
import {defineStore} from 'pinia';
const NameStore = defineStore('TEST_NAME', {
  state: () => ({
    items: [],
  }),
  actions: {
    firstItem() { this.items[0] },
  },
  getters: {
    doubleCount: (state) => state.items.length,
  },
})
export default NameStore

NameStore.$patch({ items: [1,2,3] })


// Rout push

import { useRouter,useRoute } from 'vue-router'
const route = useRoute() // {{ route.query }}
const router = useRouter()
router.push({ name: 'profile' })
router.push({ name: 'profile',query: { from: 'onBeforeMount-128', massage: 'user-logged-in',}, })
router.push({  name: 'page-name',  params: { key1: value1 } })
<button @click="$router.push({ path: '/questionnaire' })" > GO </button>
/// Router remove query params 
router.replace('/')
route.name === 'current_route_name'
this.$router.push({path: this.$route.fullPath, query: {param2: test2} });

// console.log('App.vue::[25] ', {
//   location: window.location,
//   origin: window.location.origin,
//   host: window.location.host,
// })

routeOptions = {
  name: 'NotFound',
  // preserve current path and remove the first char to avoid the target URL starting with `//`
  params: { pathMatch: this.$route.path.substring(1).split('/') },
  // preserve existing query and hash if any
  query: this.$route.query,
  hash: this.$route.hash,
}

/* 
========================================================
(5:6) TWO column layout
<div class="grid grid-cols-12 gap-5">
  <!--  Left Side    -->
  <div
    class="flex items-end justify-center my-8 col-span-full md:col-span-5"
  ></div>

  <!--  Right Side    -->
  <div
    class="flex justify-center my-8 col-span-full md:col-span-7 md:justify-start"
  ></div>
</div>  
======================================================== 
*/

/* 
========================================================
ICONS Example 
  <q-icon
    name="fas fa-close"
    color="white"
    class="mx-1 p-1 inline-block cursor-pointer rounded-full bg-gray-xero-1 text-[10px]"
  />

  <q-icon
  name="fas fa-close"
  color="white"
  class=" transition-all transition duration-150 ease-out p-1.5 inline-block translate-x-3.5 absolute right-1/2 -top-3 cursor-pointer rounded-full text-[16px]"
  :class="
    state.isSelected.value
      ? ' -rotate-45 bg-orange-xero-1 '
      : ' bg-gray-xero-1 '
  "
  @click="state.toggle()"
  />
======================================================== 
*/



/* 
========================================================
//Syntax - this.$router.push(path);
this.$router.push("/path");
const username = 'eduardo'
// we can manually build the url but we will have to handle the encoding ourselves
router.push(`/user/${username}`) // -> /user/eduardo
// same as
router.push({ path: `/user/${username}` }) // -> /user/eduardo
// if possible use `name` and `params` to benefit from automatic URL encoding
router.push({ name: 'user', params: { username } }) // -> /user/eduardo
// `params` cannot be used alongside `path`
router.push({ path: '/user', params: { username } }) // -> /user

======================================================== 
*/


/* 
========================================================
  inputs 
======================================================== 

@blur="validate('email')"
@keypress="validate('email')"
@keyup.enter="submitEmail"
<div class="relative flex-1">
  <input
    class="input__1 block !text-base px-3 py-2.5 rounded-md border border-green-xero-1 focus:ring-1 focus:ring-green-xero-1"
    placeholder="Enter email address"
    v-model="state.email"
    @keyup.enter="submitEmail"
    style="width: calc(100%)"
  />
  <Transition name="fade">
    <span
      class="px-10 absolute bottom-0 translate-y-full bg-red-xero-1 text-[0.75rem] text-white"
      v-if="state.error"
    >
      {{ state.error }}
    </span>
  </Transition>
</div>

  <div class="relative">
    <input
      class="w-full px-3 py-1 mb-8 input__1"
      :placeholder="question?.placeholder || ''"
      v-model="state.input"
      @keyup.enter="questionStore.nextQuestion"
      @focus="state.isInputTouched = true"
      style="width: calc(100%)"
    />
    <Transition name="fade">
      <span
        class="px-10 absolute left-0 bottom-3.5 bg-red-xero-1 text-[0.75rem] text-white"
        v-if="state.hasError"
      >
        Type in a home address
      </span>
    </Transition>
  </div>

*/


/* 
========================================================
  Button
======================================================== 

        <button
          class="btn_outline__orange flex gap-2 justify-center items-center group shadow-md active:shadow-sm active:!border-orange-xero-2 active:!border-orange-xero-2"
          :class="
            state.email
              ? '!bg-orange-xero-1 text-white active:!bg-orange-xero-2 '
              : 'btn_disable'
          "
          @click="updateEmail"
          :disabled="!state.email"
        >
          OK
          <half-circle-spinner
            v-if="state.isLoading"
            :animation-duration="800"
            :dot-size="1"
            :dots-num="3"
            :size="18"
            color="white"
            class="inline-block"
          />
          <IconSvg
            v-else
            name="check"
            class="inline-block"
            color="gray-xero-1  "
            :inner-class="state.email ? '!fill-white' : ''"
          />
        </button>

        <button
          class="flex items-center justify-center btn_outline__orange__1"
          @click="updateEmail"
        >
          OK

          <half-circle-spinner
            v-if="state.isLoading"
            :animation-duration="800"
            :dot-size="1"
            :dots-num="3"
            :size="18"
            color="#ff8a00"
            class="inline-block ml-2.5"
          />

          <span v-else class="ml-2 text-xl">
            <img
              src="~assets/icons/check_grey.svg"
              alt="check"
              class="mb-0.5 inline-block h-6"
            />
          </span>
          <!-- <q-icon name="fas fa-check" class="pb-1" /> -->
        </button>
        <button class="btn_outline__blue" @click="updateModal">Cancel</button>
        
*/

/* 
========================================================
  Notify Example
======================================================== 
notify(
  {
    group: 'generic',
    type: 'success',
    title: 'Success',
    text: 'Home Detail updated successfully',
  },
  7000,
)
notify(
  {
    group: 'generic',
    type: 'error',
    title: 'Opps',
    message: err?.response?.data?.data,
  },
  12000,
)
*/


/* 
========================================================
  Button orange (loading and disable state)
======================================================== 
 <button
    class="btn_outline__orange group flex items-center justify-center gap-1.5 shadow-md active:!border-orange-xero-2 active:shadow-sm active:!bg-orange-xero-2"
    :class="hasErrors ? 'btn_disable' : 'btn_enabled'"
    @click="onSubmit"
    :disabled="state.isLoading"
  >
    <span> Next </span>

    <half-circle-spinner
      v-if="state.isLoading"
      :animation-duration="800"
      :dot-size="1"
      :dots-num="3"
      :size="18"
      color="white"
    />

    <icon-svg
      v-else
      name="check"
      color="gray-xero-1 "
      :inner-class="hasErrors ? '' : '!fill-white'"
    />
    <!-- <q-icon name="fas fa-forward" class="" /> -->
    <!-- <q-icon name="fas fa-arrow-right" class="" /> -->
  </button>
*/

/* 
========================================================
  Single file component redner 
======================================================== 

const hello = h(
  'div',
  { class: ['text-xl'], style: { color: 'red' } },
  'I am text',
)
<hello />
*/


/* 
========================================================
  
======================================================== 

// onMounted(() => {
//   console.log('package-card.vue::[78] props', props)
// })

// watchEffect(() => {
//  console.log('package-card.vue::[87] ', )
// })
*/

 console.log( error?.response?.data || error?.response || error, )




 /* 
 ========================================================
   Lottie Success
 ======================================================== 
 
    <Vue3Lottie
      :animation-link="'https://assets2.lottiefiles.com/packages/lf20_HYwuZB.json'"
      :height="70"
      :width="70"
      :loop="true"
      :delay="0"
      class="object-contain p-2 h-28 md:h-32"
    />

    <Vue3Lottie
      :animation-link="'https://assets10.lottiefiles.com/packages/lf20_lpzixonc.json'"
      :loop="true"
      :delay="0"
      class="object-contain h-56 p-2"
    />
 */


 /* 
 ========================================================
   Style css dumps 
 ======================================================== 
  break-words break-all  whitespace-nowrap text-overflow  
 */


 /* 
 ========================================================
   Try catch error response 
 ======================================================== 
 err?.response?.data || err?.response || err
 */



 /* 
 ========================================================
   Reactive state management 

   
const state2 = reactive({
  two: 22,
  three: 33,
  count: 0,
})
const count = toRef(state2, 'count')
count.value += 1

watchEffect(() => {
  console.log('recommendations-modal-desktop.vue::[61] state', state2)
  // state2.count === count -> true 
})

 ======================================================== 
 */