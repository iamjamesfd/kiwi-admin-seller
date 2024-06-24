<!-- <template>
  <h1>Asosiy sozlamalar</h1>
</template> -->

<script setup>
import { ref } from 'vue'

// const msg = ref('Hello World!')

const defaultOption = { name: '', values: [] }

const options = ref([

])

const currentOption = ref(defaultOption)

const createOptionValue = (e) => {
  currentOption.value.values.push(e.target.value)
  e.target.value = '';
}

const createOption = () => {
  options.value.push(currentOption.value)
  currentOption.value = defaultOption
}
</script>

<template>
  <div v-for="option in options" :key="option">
    <p>u can display your options in any format you want</p>
    <p><b>Option name:</b>{{ option.name }}</p>
    <p><span v-for="optionValue in option.values" :key="optionValue">{{ optionValue + ', ' }}</span></p>
    
  </div>
  <div>

    <div>
    <h3>option name</h3>
    <input placeholder="Color, Size" v-model="currentOption.name"/>
  </div>

  <div>
    <h3>option values</h3>
    <p v-for="optionValue in currentOption.values" :key="optionValue">
      <input :value="optionValue"  />
    </p>
    <input @keydown.enter="createOptionValue" />
  </div>
  <br>
  <button @click="createOption">submit</button>
  </div>
</template>