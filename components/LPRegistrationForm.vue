<template>
  <v-form ref="form" class="lp-registration-form w-full" @submit.prevent="submitHandler">
    <v-text-field v-model="form.name" :label="$t(`lpRegistration.fullNameLabel`)" type="text" required></v-text-field>
    <v-text-field
      v-model="form.position"
      type="text"
      :label="$t(`lpRegistration.positionLabel`)"
      required></v-text-field>
    <v-text-field
      v-model="form.alName"
      type="text"
      :label="$t(`lpRegistration.organizationLabel`)"
      required></v-text-field>
    <v-text-field v-model="form.alPhone" :label="$t(`lpRegistration.telLabel`)" type="number" required></v-text-field>
    <v-text-field v-model="form.email" type="email" :label="$t(`general.emailLabel`)" required></v-text-field>
    <v-text-field v-model="form.password" type="password" :label="$t(`general.passwordLabel`)" required></v-text-field>
    <v-select v-model="form.alAddress" :items="items" :label="$t(`lpRegistration.locationLabel`)" required></v-select>
    <v-btn elevation="2" type="submit">{{ $t(`lpRegistration.registerButton`) }}</v-btn>
    <h4>{{ $t(`lpRegistration.reviewText`) }}</h4>
  </v-form>
</template>

<script>
export default {
  name: 'LPRegistrationForm',
  data: () => ({
    form: {
      name: '',
      email: '',
      password: '',
      position: '',
      alPhone: null,
      alName: '',
      alAddress: null,
      user_type: 'local_authority',
    },
    items: Array(10).fill('village Buzova, Kyiv Oblast'),
  }),
  methods: {
    submitHandler() {
      const { name, password, ...otherFields } = this.form;
      const [firstName, lastName, middleName] = name.split(' ');
      this.$emit('submit', {
        firstName,
        lastName,
        middleName,
        password,
        passwordConfirm: password,
        ...otherFields,
      });
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
