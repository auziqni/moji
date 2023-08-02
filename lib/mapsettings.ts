export const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
export const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export const center = {
  // jakarta
  lat: -6.246831,
  lng: 106.877121,
  // rajabasa
  // lat: -5.384895,
  // lng: 105.254388,
};

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
export const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
export const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
export const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};
