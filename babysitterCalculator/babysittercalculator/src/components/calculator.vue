<template>
  <div>
    <v-row
      ><v-col
        ><label for="hours">Number of hours (0-24):</label>

        <input
          v-model="hours"
          type="number"
          id="hours"
          name="hours"
          min="0"
          max="24"
          value="0" /></v-col
      ><v-col
        ><label for="minutes">Number of minutes (0-59):</label>

        <input
          v-model="minutes"
          type="number"
          id="minutes"
          name="minutes"
          min="0"
          max="59"
          value="0" /></v-col
    ></v-row>
    <v-row
      ><v-col>
        <label for="salary">Pay Per Hour:</label>

        <input
          v-model="salary"
          type="number"
          id="salary"
          name="salary"
          min="0"
          value="0.00" /></v-col
    ></v-row>
    Total Hours: {{ totalHours }} Total Pay: {{ totalPay }}
  </div>
</template>

<script>
export default {
  computed: {
    totalHours() {
      return parseInt(this.hours) + parseInt(this.minutes) / 60;
    },
    totalPay() {
      return this.totalHours * this.salary;
    },
  },
  data() {
    return {
      hours: 0,
      minutes: 0,
      salary: 0,
    };
  },
};
</script>

<style>
label {
  display: block;
  font: 2rem "Fira Sans", sans-serif;
}
input[type="number"] {
  border: 2px solid black;
}
input,
label {
  margin: 0.8rem 0;
}
</style>
