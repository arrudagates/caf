<template>
  <v-card class="mx-auto" max-width="90%" tile>
    <v-list>
      <v-subheader>Reports</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" @click="clicked(item)">
          <v-list-item-content>
            <v-list-item-title
              v-text="item._id + ' (' + item.name + ')'"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      items: []
    };
  },

  methods: {
    clicked(item) {
      console.log(item);
      this.$router.push({ name: "executions", params: { id: item._id } });
    },
    fetchReports() {
      this.$store
        .dispatch("getReports")
        .then(({ data }) => {
          this.items = data.body;
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.fetchReports();
  }
};
</script>
<style>
.mx-auto {
  margin-right: auto;
  margin-left: auto;
}
.v-list {
  background-color: #2c2f33 !important;
}
</style>
