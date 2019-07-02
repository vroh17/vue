<template>
  <div>
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr v-for="club in clubsList" :key="club.id">
        <td>{{ club.name }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['clubsList'],
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
