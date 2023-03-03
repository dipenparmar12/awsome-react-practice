<script>
export default {
  name: 'CustomName',
  inheritAttrs: false,
  customOptions: {},
};
</script>

<script setup>
import { reactive, onMounted, computed } from 'vue';
import { notify } from './plugin/noti/notify';

// import mitt from 'mitt';
// const Event = mitt();
// Event.emit('E', { msg: 'Success' });
// onMounted(() => {
//   Event.on('E', (res) => console.log(res));
//   console.log(Event.on('E', (res) => console.log(res)));
// });

function fireNoti(group = '') {
  // console.log(group);
  notify({
    group: group,
    title: Math.round(Math.random() * 10),
    // text: 'Your account was created',
  });
}
</script>

<template>
  <div>
    <button @click="fireNoti()">Default</button>
    <button @click="fireNoti('grouped')">Grouped</button>
    <button @click="fireNoti('grouped_2')">Group_2</button>

    <div class="noti_container">
      <h3>Default Noti</h3>
      <h3>Grouped</h3>
      <h3>Group_2</h3>
    </div>
    <div class="noti_container">
      <Notification v-slot="{ notifications, close }">
        <!-- <h3>Notifications</h3>s -->
        <!-- {{ notifications }} -->
        <div v-for="item in notifications" :key="item.id">
          <!-- <span>{{ item }}</span> -->
          <pre style="font-size: 12px; line-height: 1.3">
            {{ JSON.stringify(item, undefined, 2) }}
          </pre>
          <button @click="close(item.id)">Close</button>
        </div>
      </Notification>

      <NotificationGroup group="grouped">
        <!-- <h2>grouped</h2> -->
        <Notification v-slot="{ notifications }">
          <div v-for="item in notifications" :key="item.id">
            <span>{{ item.id + ' ' }} </span>
            <span>{{ ' ' + item.group }}</span>
          </div>
        </Notification>
      </NotificationGroup>

      <NotificationGroup group="grouped_2">
        <!-- <h2>grouped_2</h2> -->
        <Notification v-slot="{ notifications }">
          <div v-for="item in notifications" :key="item.id">
            <span>{{ item.id + ' ' }} </span>
            <span>{{ ' ' + item.group }}</span>
          </div>
        </Notification>
      </NotificationGroup>
    </div>
  </div>
</template>

<style>
.noti_container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
}

/* .noti_container {
  border: 1px solid red;
} */
</style>
