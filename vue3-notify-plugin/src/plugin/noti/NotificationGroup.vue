<script>
export default {
  name: 'NotificationGroup',
  inheritAttrs: false,
  customOptions: {},
};
</script>

<script setup>
import { provide } from 'vue';

const props = defineProps({ group: String });
const groupName = provide('GROUP', props.group);
</script>

<template>
  <slot :group="groupName"> </slot>
</template>
