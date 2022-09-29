<template>
  <v-form
    ref="form"
    class="lp-registration-form w-full"
    @submit.prevent="submitHandler"
  >
    <v-text-field
      v-model="form.name"
      :label="$t(`lpRegistration.fullNameLabel`)"
      type="text"
      required
    ></v-text-field>
    <v-text-field
      v-model="form.position"
      type="text"
      :label="$t(`lpRegistration.positionLabel`)"
      required
    ></v-text-field>
    <v-text-field
      v-model="form.organization"
      type="text"
      :label="$t(`lpRegistration.organizationLabel`)"
      required
    ></v-text-field>
    <v-text-field
      v-model="form.phoneTel"
      :label="$t(`lpRegistration.telLabel`)"
      type="number"
      required
    ></v-text-field>
    <v-text-field
      v-model="form.email"
      type="email"
      :label="$t(`general.emailLabel`)"
      required
    ></v-text-field>
    <v-text-field
      v-model="form.password"
      type="password"
      :label="$t(`general.passwordLabel`)"
      required
    ></v-text-field>
    <v-select
      v-model="form.city"
      :items="items"
      :label="$t(`lpRegistration.locationLabel`)"
      required
    ></v-select>
    <v-btn elevation="2" type="submit">{{
      $t(`lpRegistration.registerButton`)
    }}</v-btn>
    <h4>{{ $t(`lpRegistration.reviewText`) }}</h4>
  </v-form>
</template>

<script>
export default {
  name: "LPRegistrationForm",
  data: () => ({
    form: {
      position: "",
      organization: "",
      name: "",
      phoneTel: null,
      email: "",
      password: "",
      city: null,
    },
    items: Array(10).fill("village Buzova, Kyiv Oblast"),
  }),
  methods: {
    submitHandler() {
      this.$emit("submit", this.form);
      // emit submit here
    },
  },
};
</script>

<style lang="scss" scoped>
.lp-registration-form {
  padding: 48px 50px 30px;
  background-color: #f2eff4;
}
</style>
