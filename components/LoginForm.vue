<template>
  <form class="login-form" @submit.prevent="submitHandler">
    <div class="login-form-content">
      <input
        type="email"
        required
        placeholder="Email"
        class="login-row py-3 px-5 w-full bg-white rounded-lg"
        v-model="form.email"
      />
      <input
        type="password"
        required
        placeholder="Password"
        class="login-row py-3 px-5 w-full bg-white rounded-lg"
        v-model="form.password"
      />
      <a href="#" class="login-row forgot-password-btn pl-[18px] link">
        Forgot password?
      </a>
      <div class="login-row flex flex-col">
        <a
          href="#"
          class="
            external-auth-btn
            py-3
            px-5
            w-full
            bg-white
            rounded-lg
            mb-[10px]
            text-center
          "
        >
          Sign in with Google
        </a>
        <a
          href="#"
          class="
            external-auth-btn
            py-3
            px-5
            w-full
            bg-white
            rounded-lg
            text-center
          "
        >
          Sign in with Facebook
        </a>
      </div>
      <p class="login-row text-center mb-0">
        New to Map of Interaction?
        <a href="#" class="join-btn link">Join now</a>
      </p>
    </div>
    <button type="submit" class="submit-btn">вхiд</button>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitHandler() {
      this.$emit("submit", this.form);
      // emit submit here
    },
  },
};
</script>

<style lang="scss" scoped>
.login-row {
  display: block;
  margin-bottom: 20px;
}

.login-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 14px;
  color: #525252;
}

.login-form-content {
  padding: 48px 50px 30px;
  background-color: #f2eff4;
}

.submit-btn {
  padding: 14px 56px;
  margin: 20px auto;
  color: #fff;
  background-color: #f87493;
  border-radius: 5px;
  max-width: 140px;
  text-transform: uppercase;
}

.link {
  color: #872ab2;
}

.external-auth-btn {
  color: #525252;
}
</style>
	