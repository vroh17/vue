<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <FootballClubForm v-on:add-club="addClub($event)" />
    <FootballClubTable v-bind:clubsList="clubsList" />
  </div>
</template>

<script>
// @ is an alias to /src
import FootballClubForm from '@/components/FootballClubForm.vue'
import FootballClubTable from '@/components/FootballClubTable.vue'

export default {
  name: 'home',
  components: {
    FootballClubForm,
    FootballClubTable
  },
  data() {
    return {
      clubsList: []
    }
  },
  methods: {
    addClub(club) {
      this.clubsList = [...this.clubsList, club]
    }
  }
}
</script>
