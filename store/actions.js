import {
  ADD_MARKER,
  CHANGE_MARKER_STATUS,
  SET_MAP_CENTER
} from '~/store/mutations'
import markerStatus from '~/enums/markerStatus'

export default {
  addMarker: ({ commit }, marker) => {
    commit(ADD_MARKER, marker)
    commit(SET_MAP_CENTER, [marker.lat, marker.lng])
  },
  setMarkerInProgress: ({ commit }, marker) => {
    commit(CHANGE_MARKER_STATUS, {id: marker.id, status: markerStatus.INPROGRESS})
  },
  setMarkerDone: ({ commit }, marker) => {
    commit(CHANGE_MARKER_STATUS, {id: marker.id, status: markerStatus.DONE})
  },
  setMarkerTodo: ({ commit }, marker) => {
    commit(CHANGE_MARKER_STATUS, {id: marker.id, status: markerStatus.TODO})
  }
}
