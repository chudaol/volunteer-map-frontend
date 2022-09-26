<template>
  <div>
    <v-tabs v-model="currentTab">
      <v-tab v-for="tab in tabs" :key="tab">{{ tab }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="currentTab">
      <v-tab-item
        ><v-row>
          <v-col cols="24">
            <v-text-field
              v-model="form.email"
              :rules="emailRules"
              label="Email"
              outlined
              required
            ></v-text-field>
          </v-col>
          <v-col cols="24">
            <v-text-field
              v-model="form.password"
              :rules="passwordRules"
              label="Password"
              outlined
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item> content 2 </v-tab-item>
      <v-tab-item> content 3 </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      currentTab: null,
      tabs: ["Локальний представник", "Волонтер", "Модератор"],
      form: {
        email: "",
        password: "",
      },
      rules: [],
    };
  },
};
</script>
