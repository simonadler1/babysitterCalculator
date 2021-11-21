<template>
  <v-app>
    <v-app-bar class="d-flex justify-center" app color="primary" dark>
      <h2 class="text-no-wrap">Minyan Confirmer</h2>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center"
        ><v-form id="main-form" ref="form">
          <v-text-field
            v-model="form.name"
            :counter="50"
            label="Name the Minyan/Tefillah  (optional)"
          ></v-text-field>
          <v-text-field
            v-model="form.place"
            :counter="100"
            label="Minyan Location"
          ></v-text-field>
          <v-row
            ><v-time-picker
              v-model="form.minyanTime"
              value="24hr hh:mm"
              ampm-in-title
            ></v-time-picker>
            <v-date-picker
              v-model="form.minyanDate"
              :show-current="true"
            ></v-date-picker
          ></v-row>
          <v-checkbox
            v-model="attending"
            :label="`I will be attending`"
          ></v-checkbox>
          <v-btn class="mr-4" @click="createMinyan()">
            Create A Minyan
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset()">
            Reset Form
          </v-btn>
        </v-form>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import ApiService from "../src/api/main";
export default {
  name: "App",
  computed: {
    numberOfAttending: function() {
      if (this.attending) {
        return 1;
      }
      return 0;
    }
  },
  created() {},
  data() {
    return {
      form: {
        name: "",
        place: "",

        minyanTime: "",
        minyanDate: new Date().toISOString().substr(0, 10)
      },
      attending: true
    };
  },
  methods: {
    createMinyan() {
      ApiService.createMinyan({
        ...this.form,
        numberOfAttending: this.numberOfAttending
      })
        .then(response => {
          this.handleMinyanCreation(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    reset() {
      this.form = {
        name: "",
        place: "",

        minyanTime: "",
        minyanDate: new Date().toISOString().substr(0, 10)
      };
    },
    handleMinyanCreation(response) {
      console.log("handle minyan creation is running");
      localStorage.setItem("minyan", JSON.stringify(response.data.data));
      localStorage.setItem("creator", true);
    }
  }
};
</script>
<style scoped>
#main-form {
  padding: 20px;
}
</style>
