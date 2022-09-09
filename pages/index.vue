<template>
  <div class="content-wrapper">
    <l-map v-bind="mapOptions">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <v-marker-cluster :options="{}">
        <l-circle
          v-for="(city, index) in cities"
          :key="index"
          v-bind="markerOptions"
          :lat-lng="city.lang"
          :color="getMarkerColor(city.inquiries)"
          @click="viewDetails(city.name)"
        >
          <l-tooltip :options="{ permanent: true, direction: 'center' }">
            {{ city.inquiries ?? "?" }}
          </l-tooltip>
        </l-circle>
      </v-marker-cluster>
    </l-map>
  </div>
</template>

<script>
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";
export default {
  components: {
    "v-marker-cluster": Vue2LeafletMarkerCluster,
  },
  data() {
    return {
      mapOptions: {
        center: [50.4501, 30.5234],
        zoom: 11,
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
        },
        {
          name: "Mykolaiv",
          lang: [46.9667, 32.0],
          inquiries: 3,
        },
        {
          name: "Zaporizhzhia",
          lang: [47.8378, 35.1383],
          inquiries: 2,
        },
        {
          name: "Pavlohrad",
          lang: [48.52, 35.87],
        },
        {
          name: "Kramatorsk",
          lang: [48.7208, 37.5556],
          inquiries: 1,
        },
        {
          name: "Sloviansk",
          lang: [48.87, 37.625],
          inquiries: 10,
        },
        {
          name: "Horlivka",
          lang: [48.3336, 38.0925],
          inquiries: 4,
        },
        {
          name: "Svyatohirs’k",
          lang: [49.0333, 37.5833],
        },
        {
          name: "Barvynkove",
          lang: [48.9067, 37.0131],
          inquiries: 1,
        },
        {
          name: "Savyntsi",
          lang: [49.4105, 37.0617],
        },
        {
          name: "Barvynkove",
          lang: [48.9067, 37.0131],
          inquiries: 1,
        },
        {
          name: "Balakliia",
          lang: [49.4564, 36.8389],
          inquiries: 10,
        },
        {
          name: "Krasnokutsk",
          lang: [50.0567, 35.1492],
        },
        {
          name: "Krasnopavlivka",
          lang: [49.0825, 36.1925],
        },
        {
          name: "Staryi Merchyk",
          lang: [49.5845, 35.4536],
        },
        {
          name: "Kharkiv",
          lang: [50.0, 36.2292],
        },
      ],
    };
  },
  methods: {
    getMarkerColor(amount) {
      if (amount === 0) return "gray";
      return amount > 1 ? "red" : "yellow";
    },
    viewDetails(city) {
      console.log("emit sidebar");
      console.log(`show ${city} details`);
    },
  },
};
</script>

<style>
@import "leaflet/dist/leaflet.css";
@import "leaflet.markercluster/dist/MarkerCluster.css";
@import "leaflet.markercluster/dist/MarkerCluster.Default.css";
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

.content-wrapper {
  width: 100vw;
  height: 100vh;
}

.leaflet-tooltip {
  font-size: 2rem;
  border: none;
  box-shadow: none;
  background: transparent;
}
</style>
