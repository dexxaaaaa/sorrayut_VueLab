<template>
  <input
    v-on:input="ConvertToUpperCase"
    type="text"
    placeholder="input"
    :value="massage"
  />
</template>

<script>
export default {
  data() {
    return { massage: "" };
  },
  method: {
    ConvertToUpperCase(event) {
      this.massage = event.target.value.toUpperCase();
    },
  },
};
</script>