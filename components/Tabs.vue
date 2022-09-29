<template>
  <div class="tabs">
    <v-tabs v-model="currentTab">
      <v-tab :ripple="false" v-for="tab in tabs" :key="tab">{{
        $t(`${tab}`)
      }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="currentTab">
      <v-tab-item v-for="tab in tabs" :key="`tab-item-${tab}`">
        <slot :name="tab" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      required: true,
    },
  },
  data() {
    return {
      currentTab: null,
    };
  },
};
</script>

<style lang="scss" scoped>
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
  :deep(.v-tabs-slider-wrapper) {
    display: none;
  }
}
</style>
