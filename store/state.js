import ua from './ua'
import markerStatus from '~/enums/markerStatus'
export default {
  cities: ua,
  markers: [
    {
      "city": "Kyiv",
      "lat": "50.4500",
      "lng": "30.5236",
      "status": markerStatus.TODO,
      "id": '1'
    },
    {
      "city": "Kharkiv",
      "lat": "50.0000",
      "lng": "36.2292",
      "status": markerStatus.INPROGRESS,
      "id": '2'
    },
    {
      "city": "Odesa",
      "lat": "46.4775",
      "lng": "30.7326",
      "status": markerStatus.DONE,
      "id": '3'
    }
  ]
}
