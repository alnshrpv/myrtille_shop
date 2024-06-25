<template>
  <div class="store-map-container">
    <div class="store-list">
      <v-list>
        <v-list-item
          v-for="(store, index) in stores"
          :key="index"
          @click="zoomToMarker(store)">
          <v-list-item-content>
            <v-list-item-title>{{ store.name }}</v-list-item-title>
            <v-list-item-subtitle>
              <span>{{ store.hours.weekdays }}</span><br>
              <span>{{ store.hours.weekends }}</span>
            </v-list-item-subtitle>
            <v-list-item-subtitle>{{ store.phone }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
    <div class="map-wrapper">
      <l-map ref="map" v-model:zoom="zoom" :center="mapCenter" style="height: 100%;">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>
        <l-marker
          v-for="(store, index) in stores"
          :key="index"
          :lat-lng="store.coords"
          @click="setActiveStore(store)"
        ></l-marker>
      </l-map>
      <div class="map-info-window">
        <p>г.Братск</p>
      </div>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 11,
      mapCenter: [56.22770510981186, 101.73975213584798],
      stores: [
        { 
          name: "Магазин на ул. Кирова 5", 
          address: "г. Братск, улица Кирова 5",
          hours: { weekdays: "Пн-Пт: 9:00 - 18:00", weekends: "Сб-Вс: 10:00 - 16:00" },
          phone: "+7 123 456 7890",
          coords: [56.157784, 101.616554] 
        },
        { 
          name: "Магазин на ул. Макаренко 20", 
          address: "г. Братск, улица Макаренко 20",
          hours: { weekdays: "Пн-Пт: 9:00 - 18:00", weekends: "Сб-Вс: 10:00 - 16:00" },
          phone: "+7 123 456 7891",
          coords: [56.307462, 101.754589] 
        },
        { 
          name: "Магазин на ул. Енисейская 52Г", 
          address: "г. Братск, улица Енисейская 52Г",
          hours: { weekdays: "Пн-Пт: 9:00 - 18:00", weekends: "Сб-Вс: 10:00 - 16:00" },
          phone: "+7 123 456 7892",
          coords: [56.284869, 101.884028] 
        },
      ],
      activeStore: null,
    };
  },
  methods: {
    setActiveStore(store) {
      this.activeStore = store;
      this.mapCenter = store.coords;
    },
    zoomToMarker(store) {
      this.mapCenter = store.coords;
      this.zoom = 17;
    },
  },
};
</script>

<style scoped>

.map-info-window {
  background-color: rgb(255, 255, 255);
    font-size: 12px;
    width: 61px;
    bottom: 17px;
    position: relative;
    z-index: 1000;
    left: 732px;
    height: 16px;
}

.store-map-container {
  display: flex;
  height: 600px;
  border-radius: 15px;
  width: 1200px;
  margin: 0 auto; 
  margin-top: 10px;
}

.store-list {
  flex: 1;
  overflow-y: auto;
  padding-right: 10px; 
}

.map-wrapper {
  flex: 2;
  position: relative;
  height: 100%;
}

.v-list {
  height: 100%;
  overflow-y: auto;
  border-radius: 15px;

}

.v-list-item {
  cursor: pointer;
  margin-bottom: 10px;
  font-family: "Phenomena-Light";
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  
}

.v-list-item-title {
  font-weight: bold;
  font-size: 26px;
}

.v-list-item-subtitle {
  color: gray;
  display: block; 
  margin-bottom: 5px; 
  font-size: 20px;
}
</style>
