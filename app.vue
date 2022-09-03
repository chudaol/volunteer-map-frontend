<template>
  <div class="content-wrapper" id="map"></div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import mapboxgl from "mapbox-gl";

interface City {
  name: string;
  lang: [number, number];
  inquiries?: number;
}

useHead({
  title: "Volunteer Map",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
});

onMounted(() => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZGF0aWsiLCJhIjoiY2w3NmliZ2t3MDgzaDQwcGFmdWQ5OG1kbCJ9.yQc11zxlAXJOYGDpJzdgcA";
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [30.5234, 50.4501],
    zoom: 11,
    minZoom: 6,
    maxZoom: 12,
  });

  for (const marker of cities) {
    const el = document.createElement("div");
    const width = 100;
    const height = 100;
    el.className = "marker";
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.lineHeight = `${height}px`;
    el.style.textAlign = "center";
    el.style.fontSize = "2rem";
    el.style.fontStyle = "bold";
    el.style.backgroundColor = getMarkerColor(marker.inquiries);
    el.style.borderRadius = "50%";
    el.style.opacity = "0.6";
    el.style.backgroundSize = "100%";
    el.innerText = String(marker.inquiries ?? "?");

    el.addEventListener("click", () => {
      viewDetails(marker.name);
    });

    // Add markers to the map.
    new mapboxgl.Marker(el).setLngLat(marker.lang).addTo(map);
  }
});

const cities = reactive<City[]>([
  {
    name: "Kyiv",
    lang: [30.5234, 50.4501],
    inquiries: 1,
  },
  {
    name: "Brovary",
    lang: [30.7903, 50.5114],
    inquiries: 1,
  },
  {
    name: "Irpin",
    lang: [30.25, 50.5167],
    inquiries: 3,
  },
  {
    name: "Bucha",
    lang: [30.212, 50.5434],
    inquiries: 4,
  },
  {
    name: "Vyshhorod",
    lang: [30.5, 50.5833],
  },
  {
    name: "Boryspil",
    lang: [30.95, 50.35],
    inquiries: 0,
  },
]);

function getMarkerColor(amount: number = 0): string {
  if (amount === 0) return "gray";
  return amount > 1 ? "red" : "yellow";
}

function viewDetails(city: string): void {
  console.log("emit sidebar");
  console.log(`show ${city} details`);
}
</script>

<style>
.content-wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
