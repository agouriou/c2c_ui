<template>
  <icon-layer :name="name" :color="color">
    <span v-translate>ROMMA station</span>
    <template #overlay>
      <a :href="overlay.url" target="_blank">
        {{ overlay.title }}
        <fa-icon icon="external-link-alt" class="overlay-link-icon" />
      </a>
    </template>
  </icon-layer>
</template>

<script>
import IconLayer from './IconLayer.vue';

export default {
  components: {
    IconLayer,
  },
  data() {
    return {
      name: 'romma',
      color: 'hsl(185, 45%, 40%)',
      overlay: {
        title: null,
        url: null,
      },
    };
  },
  methods: {
    setOverlay(feature) {
      this.overlay.title = feature.get('name');
      this.overlay.url = feature.get('url');
    },
    unsetOverlay() {
      this.overlay.title = null;
      this.overlay.url = null;
    },
  },
};
</script>
