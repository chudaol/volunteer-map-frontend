<template>
  <div class="login-page">
    <div class="login-page-content">
      <Tabs :tabs="tabs">
        <template v-for="tab in tabs" #[tab]>
          <LoginForm :key="tab" @submit="submitHandler" />
        </template>
      </Tabs>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import Tabs from "../components/Tabs.vue";
export default {
  name: "Login",
  components: { LoginForm, Tabs },
  data() {
    return {
      tabs: ["Лок пред", "Волонтер", "Модератор"],
    };
  },
  methods: {
    submitHandler(e) {
      console.log(e);
      // Connect api here
    },
  },
};
</script>

<style lang="scss" scoped>
.login-page-content {
  max-width: 468px;
  margin: 0 auto;
}
</style>
