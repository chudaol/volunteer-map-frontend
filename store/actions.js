import {
  ADD_MARKER,
  CHANGE_MARKER_STATUS
} from '~/store/mutations'
import markerStatus from '~/enums/markerStatus'

export default {
  addMarker: ({ commit }, marker) => {
    commit(ADD_MARKER, marker)
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
