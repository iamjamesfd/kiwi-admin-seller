<script setup>
const props = defineProps(['head', 'body'])

// console.table(props.body[3])
</script>

<template>
  <table class="w-full">
    <thead class="text-center text-sm">
      <tr>
        <td v-for="x in props.head" :key="x">
          <div class="py-2">
            <span> {{ x.label }}</span>
          </div>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="x in props.body" :key="x">
        <!-- <td v-for="i in x" :key="i" class="text-center border-b text-black text-sm">
          <div class="py-3">{{ i }}</div>
        </td> -->
        <td v-for="i in props.head" :key="i" class="text-center border-b text-black text-sm py-3">
          <div class="w-10 h-10 bg-gray-400 mx-auto rounded" v-if="i.type == 'image'"></div>
          <div v-if="!(i.type == 'image')">{{ x[i.key] }}</div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
