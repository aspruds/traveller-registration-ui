<template>
  <v-card
      :class="$vuetify.breakpoint.smAndUp ? 'elevation-1' : 'elevation-0'"
      class="form-block mx-auto">
    <slot></slot>
  </v-card>
</template>