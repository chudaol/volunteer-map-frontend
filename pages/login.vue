<template>
  <div class="login-page">
    <v-btn
      rounded
      fab
      small
      icon
      :ripple="false"
      class="nav-back-btn"
      @click="goToBack"
    >
      <v-icon>mdi-arrow-left-circle-outline</v-icon>
    </v-btn>
    <div class="login-form">
      <v-tabs v-model="currentTab">
        <v-tab :ripple="false" v-for="tab in tabs" :key="tab">{{ tab }}</v-tab>
      </v-tabs>

      <v-tabs-items v-model="currentTab">
        <v-tab-item>
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
        </v-tab-item>
        <v-tab-item>
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
        </v-tab-item>
        <v-tab-item>
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
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      currentTab: null,
      tabs: ["Лок пред", "Волонтер", "Модератор"],
      form: {
        email: "",
        password: "",
      },
      rules: [],
    };
  },
  methods: {
    goToBack() {
      this.$router.go(-1);
    },

    submitHandler() {
      console.log(this.form);
      // Connect api here
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
  font-size: 12px;
  line-height: 14px;
  color: #525252;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 468px;
  margin: 0 auto;
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

.nav-back-btn {
  color: #c1b0c9 !important;
}

.link {
  color: #872ab2;
}

.external-auth-btn {
  color: #525252;
}

.v-window-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.v-tab {
  color: #525252;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  border-top: 1px solid #c1b0c9;
  margin-right: 14px;
}

.v-tab--active {
  background-color: #f2eff4;
  color: #525252;
  border: none;
}

.v-tabs {
  ::v-deep {
    .v-tabs-slider-wrapper {
      display: none;
    }
  }
}
</style>
