<template>
  <div class="about">
      <!-- <div v-for="">

           </div> -->
  </div>
</template>
<script>
 export default {
     data () {
         return {
             token: ''
         }
     },

     methods: {
         fetchReports () {
             this.$store
                 .dispatch('getReports')
                 .catch(err => {
                     console.log(err)
                 })
         }
     },
     created(){
             this.fetchReports();
        
     }
 }
</script>
