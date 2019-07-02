<template>
  <div>
    <form @submit.prevent="addClub($event)" class="club-form">
      <input type="text" v-model="club.name" />
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      club: {
        name: null
      }
    }
  },
  methods: {
    addClub() {
      this.$emit('add-club', { ...this.club })
      this.club.name = null
    }
  }
}
</script>

<style lang="scss" scoped>
.club-form {
  display: flex;
  flex-direction: column;
  width: 200px;
}
</style>
