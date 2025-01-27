<template>
  <v-container class="calculator-container pa-0">
    <v-card class="mx-2">
      <v-card-title class="text-h5 text-sm-h4 text-center d-block py-4 primary white--text">
        Babysitter Calculator
      </v-card-title>

      <v-card-text class="pt-6">
        <!-- Time Input Section -->
        <div class="time-section mb-6">
          <div class="text-subtitle-1 mb-2">Enter Time</div>
          <v-row dense>
            <v-col cols="6">
              <v-text-field
                v-model="hours"
                label="Hours"
                type="number"
                min="0"
                outlined
                dense
                hide-details="auto"
                class="number-input"
                :rules="[(v) => v >= 0 || 'Hours must be positive']"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                v-model="minutes"
                label="Minutes"
                type="number"
                min="0"
                max="59"
                outlined
                dense
                hide-details="auto"
                class="number-input"
                :rules="[(v) => (v >= 0 && v <= 59) || 'Invalid']"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>

        <!-- Pay Rate Section -->
        <div class="pay-section mb-6">
          <div class="text-subtitle-1 mb-2">Enter Pay Rate</div>
          <v-text-field
            v-model="salary"
            label="Hourly Rate"
            type="number"
            min="0"
            step="0.01"
            outlined
            dense
            hide-details="auto"
            prefix="$"
            class="number-input"
          ></v-text-field>
        </div>

        <!-- Results Section -->
        <v-divider></v-divider>

        <v-card-text class="results-section text-center py-4">
          <div class="d-flex justify-space-between align-center flex-wrap">
            <div class="result-item flex-grow-1 py-2">
              <div class="text-subtitle-2 grey--text">Total Hours</div>
              <div class="text-h5">{{ formattedTotalHours }}</div>
            </div>

            <v-divider vertical class="mx-4 hidden-xs-only"></v-divider>
            <v-divider class="my-2 hidden-sm-and-up"></v-divider>

            <div class="result-item flex-grow-1 py-2">
              <div class="text-subtitle-2 grey--text">Total Pay</div>
              <div class="text-h5 primary--text">{{ formattedTotalPay }}</div>
            </div>
          </div>
        </v-card-text>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  computed: {
    totalHours() {
      return parseFloat(this.hours || 0) + parseFloat(this.minutes || 0) / 60;
    },
    totalPay() {
      return this.totalHours * parseFloat(this.salary || 0);
    },
    formattedTotalHours() {
      return this.totalHours.toFixed(2);
    },
    formattedTotalPay() {
      return `$${this.totalPay.toFixed(2)}`;
    },
  },
  data() {
    return {
      hours: "",
      minutes: "",
      salary: "",
    };
  },
};
</script>

<style scoped>
.calculator-container {
  max-width: 600px;
  margin: auto;
}

/* Prevent number input spinners */
.number-input :deep(input[type="number"]) {
  -moz-appearance: textfield;
}

.number-input :deep(input[type="number"]::-webkit-outer-spin-button),
.number-input :deep(input[type="number"]::-webkit-inner-spin-button) {
  -webkit-appearance: none;
  margin: 0;
}

/* Ensure tap targets are large enough */
.number-input :deep(.v-input__slot) {
  min-height: 48px;
}
</style>
