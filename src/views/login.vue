<template>
  <div>
    <v-form>
      <v-container>
        <v-col cols="1" md="4" class="column">
          <v-text-field v-model="email" label="Email" required></v-text-field>

          <v-text-field
            v-model="password"
            type="password"
            label="Password"
            required
          ></v-text-field>
          <v-btn color="" @click="login">
            Login
          </v-btn>
          <v-progress-circular
            v-if="loading"
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-col>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false
    };
  },

  methods: {
    login() {
      this.loading = true;
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "reports" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style>
.column {
  margin-right: auto;
  margin-left: auto;
}
</style>
