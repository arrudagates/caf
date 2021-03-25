<template>
<div>
  <v-card
    class="mx-auto"
    max-width="90%"
    tile
  >
    <v-list >
      <v-subheader>Executions</v-subheader>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
            :key="i"
            @click="itemClicked = item; popup = true"
        >
          <v-list-item-content>
              <v-list-item-title v-text="item._id + ' (' + item.sections.ocr.name + ')'"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
  <popup v-if="popup" :images="images()" :dialog="popup" :item="itemClicked" @interface="popup = false"/>
  </div>
</template>
<script>
 import popup from '../components/popup.vue';
 export default {
     components: {
         popup
     },
     data () {
         return {
             itemClicked: {},
             items: [],
             popup: false
         }
     },

     methods: {
         images(){
             let imagesData = []
             for ( var property in this.itemClicked.images ) {
                 imagesData.push({"property": property, "url": this.itemClicked.images[property]})
             }
                 return imagesData
         },
         fetchExecutions () {
             this.$store
                 .dispatch('getExecutions', {id: this.$route.params.id})
                 .then(({data}) => {
                     this.items = data.docs;
                     console.log(this.items)
                 })
                 .catch(err => {
                     console.log(err)
                 })
         }
     },
     created(){
         this.fetchExecutions();

     }
 }
</script>
<style>
 .column {
     margin-right: auto;
     margin-left: auto;
 }
</style>
