<template>
  <v-form
    ref="form"
    class="lp-registration-form w-full"
    @submit.prevent="submitHandler"
  >
    <v-text-field
      v-model="form.name"
      label="ПІБ"
      type="text"
      required
    ></v-text-field>
    <v-text-field
      v-model="form.position"
      type="text"
      label="Ваша посада"
      required
    ></v-text-field>
    <v-text-field
      v-model="form.organization"
      type="text"
      label="Назва органу"
      required
    ></v-text-field>
    <v-text-field
      v-model="form.phoneTel"
      label="Номер телефону"
      type="number"
      required
    ></v-text-field>
    <v-text-field
      v-model="form.email"
      type="email"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="form.password"
      type="password"
      label="Пароль"
      required
    ></v-text-field>
    <v-select
      v-model="form.city"
      :items="items"
      label="Location"
      required
    ></v-select>
    <v-btn elevation="2" type="submit">Зареєструватись</v-btn>
    <h4>ваш акаунт буде перевірено та надіслано вам сповіщення</h4>
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
    items: Array(10).fill("Київська область, Село Бузове"),
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
