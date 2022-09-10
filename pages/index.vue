<template>
  <div class="content-wrapper">
    <l-map v-bind="mapOptions">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <div
        v-for="(city, index) in cities"
        :key="index"
      >
        <l-circle
          v-bind="markerOptions"
          :lat-lng="city.lang"
          :color="getMarkerColor(city.inquiries)"
          @click="viewDetails(city.name)"
        >
          <l-popup>
            <v-card
              flat
            >
              <v-card-title>{{ city.name }}</v-card-title>
              <v-card-text>
                {{ city.description || 'Lorem Ipsum' }}
              </v-card-text>
              <v-card-actions>
                <v-btn>Щось зробити</v-btn>
              </v-card-actions>
            </v-card>
          </l-popup>
          <l-tooltip :options="{ permanent: true, direction: 'center' }">
            {{ city.inquiries ?? "?" }}
          </l-tooltip>
        </l-circle>
      </div>
    </l-map>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mapOptions: {
          center: [50.4501, 30.5234],
          zoom: 11,
          minZoom: 8,
          maxZoom: 12,
        },
        markerOptions: {
          stroke: true,
          opacity: 0.6,
          weight: 100,
        },
        cities: [
          {
            name: "Kyiv",
            lang: [50.4501, 30.5234],
            inquiries: 1,
          },
          {
            name: "Brovary",
            lang: [50.5114, 30.7903],
            inquiries: 1,
          },
          {
            name: "Irpin",
            lang: [50.5167, 30.25],
            inquiries: 3,
          },
          {
            name: "Bucha",
            lang: [50.5434, 30.212],
            inquiries: 4,
          },
          {
            name: "Vyshhorod",
            lang: [50.5833, 30.5],
          },
          {
            name: "Boryspil",
            lang: [50.35, 30.95],
            inquiries: 0,
          }
        ]
      }
    },
    methods: {
      getMarkerColor (amount) {
        if (amount === 0) return "gray"
        return amount > 1 ? "red" : "yellow"
      },
      viewDetails (city) {
        this.dialog = true
        console.log("emit sidebar");
        console.log(`show ${city} details`);
      }
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

.content-wrapper {
  width: 100vw;
  height: 90vh;
}

.leaflet-tooltip {
  font-size: 2rem;
  border: none;
  box-shadow: none;
  background: transparent;
}
</style>
