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
import Tabs from '../components/Tabs.vue';
import LPRegistrationForm from '../components/LPRegistrationForm.vue';
export default {
  name: 'LPRegistration',
  components: { Tabs, LPRegistrationForm },
  data() {
    return {
      tabs: ['userType.localAuthority'],
    };
  },
  methods: {
    submitHandler(data) {
      console.log(data);
      // Connect api here
      fetch('https://api.i-map.site/api/v1/accounts/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.error(e);
        });
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
