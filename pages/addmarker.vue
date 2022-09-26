<template>
  <div class="content-wrapper">
    <v-card
      width="80%"
    >
      <v-card-title>
        {{ $t('addMarker.addMarkerTitle') }}
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          lazy-validation
          style="width: 80%"
        >
          <v-autocomplete
            v-model="city"
            :items="cityNames"
            outlined
            :label="$t('addMarker.findCityLabel')"
          />
          <v-text-field
            v-model="description"
            :counter="256"
            outlined
            hide-details
            :label="$t('addMarker.descriptionLabel')"
          />
        </v-form>
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          :disabled="city === ''"
          elevation="0"
          color="primary"
          @click="onClickAdd"
        >
          {{ $t('addMarker.addMarkerButton') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { map, find } from 'lodash'

export default {
  name: 'AddMarker',
  data () {
    return {
      description: '',
      city: ''
    }
  },
  computed: {
    ...mapState(['cities']),
    cityNames () {
      return map(this.cities, (city) => {
        return city.city
      })
    },
    markerByCityName () {
      return find(this.cities, { city: this.city })
    },
    marker () {
      return {
        ...this.markerByCityName,
        description: this.description
      }
    }
  },
  methods: {
    ...mapActions(['addMarker']),
    onClickAdd () {
      this.addMarker(this.marker)
      this.$router.push('/')
    }
  }
}
</script>
