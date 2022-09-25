<template>
  <l-circle
    v-bind="markerOptions"
    :lat-lng="[marker.lat, marker.lng]"
    :color="color"
  >
    <l-popup>
      <v-card
        flat
        light
        class="ma-0 pa-0"
      >
        <v-card-title>{{ marker.city }}</v-card-title>
        <v-card-text>
          {{ marker.description || "Lorem Ipsum" }}
        </v-card-text>
        <v-card-actions>
          <v-btn
            v-if="marker.status !== markerStatus.INPROGRESS"
            small
            class="text-none"
            elevation="0"
            color="warning"
            @click="onClickInProgress"
          >
            Взято в роботу
          </v-btn>
          <v-btn
            v-if="marker.status !== markerStatus.DONE"
            small
            class="text-none"
            elevation="0"
            color="success"
            @click="onClickDone"
          >
            Зроблено!
          </v-btn>
          <v-btn
            v-if="marker.status !== markerStatus.TODO"
            small
            class="text-none"
            elevation="0"
            color="error"
            @click="onClickTodo"
          >
            Зробити
          </v-btn>
        </v-card-actions>
      </v-card>
    </l-popup>
<!--    <l-tooltip :options="{ permanent: true, direction: 'center' }">-->
<!--      {{ city.inquiries ?? "?" }}-->
<!--    </l-tooltip>-->
  </l-circle>
</template>
<script>
  import { mapActions } from 'vuex'
  import markerStatus from '~/enums/markerStatus'
  export default {
    props: {
      marker: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {
        markerOptions: {
          stroke: true,
          opacity: 0.6,
          weight: 100,
        },
        markerStatus
      }
    },
    computed: {
      color () {
        switch(this.marker.status) {
          case markerStatus.TODO:
            return 'red'
          case markerStatus.INPROGRESS:
            return 'yellow'
          case markerStatus.DONE:
            return 'green'
          default:
            return 'grey'
        }
      }
    },
    methods: {
      ...mapActions(['setMarkerDone', 'setMarkerTodo', 'setMarkerInProgress']),
      onClickTodo () {
        this.setMarkerTodo(this.marker)
      },
      onClickInProgress () {
        this.setMarkerInProgress(this.marker)
      },
      onClickDone () {
        this.setMarkerDone(this.marker)
      }
    }
  }
</script>
