<template>
  <div class="new-lp-page">
    <div class="new-lp-page-content">
      <Tabs :tabs="tabs">
        <template v-for="tab in tabs" #[tab]>
          <LPRegistrationForm :key="tab" @submit="submitHandler" />
        </template>
      </Tabs>
    </div>
  </div>
</template>

<script>
import Tabs from "../components/Tabs.vue";
import LPRegistrationForm from "../components/LPRegistrationForm.vue";
export default {
  name: "LPRegistration",
  components: { Tabs, LPRegistrationForm },
  data() {
    return {
      tabs: ["userType.localAuthority", "userType.volunteer"],
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
.new-lp-page-content {
  max-width: 800px;
  margin: 0 auto;
}
</style>
