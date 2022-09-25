import { v4 as uuidv4 } from 'uuid'
import { find } from 'lodash'
import markerStatus from '~/enums/markerStatus'
export const ADD_MARKER = 'ADD_MARKER'
export const CHANGE_MARKER_STATUS = 'CHANGE_MARKER_STATUS'
export const DELETE_MARKER = 'DELETE_MARKER'
export default {
  [ADD_MARKER] (state, marker = {}) {
    const id = uuidv4()
    state.markers.push({ ...marker, id, status: markerStatus.TODO})
  },
  [CHANGE_MARKER_STATUS] (state, { id, status }) {
    const marker = find(state.markers, {id})
    marker.status = status
  }
}
