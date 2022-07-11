<template>
  <div class="mb-20">
    <GMapMap
        :center="center"
        :zoom="15"
        :options="{
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: true,
          }"
        style="width: 500px; height: 300px; margin: auto"
    >
      <GMapMarker
          :key="index"
          v-for="(marker, index) in markers"
          :position="marker.position"
          :clickable="true"
          :draggable="true"
          @click="openMarker(marker.id)"
      >
        <GMapInfoWindow
            :closeclick="true"
            @closeclick="openMarker(null)"
            :opened="openedMarkerID === marker.id"
        >
          <div>{{ marker.description }}</div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapMap>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      openedMarkerID: null,
      center: { lat: 48.8773406, lng: 2.327774 },
      markers: [
        {
          description: "Google France",
          id: "1",
          position: {
            lat: 48.8773406,
            lng: 2.327774,
          },
        },
      ],
    }
  },
}
</script>
