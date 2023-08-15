export const mapContainerStyle = {
  height: "calc(100vh - 3rem)",
  width: "100%",
};
export const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export const centerjakarta = {
  // jakarta
  lat: -6.246831,
  lng: 106.877121,
  // rajabasa
  // lat: -5.384895,
  // lng: 105.254388,
};
export const centeroffice = {
  // lampung
  lat: -5.382372,
  lng: 105.25873,
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
