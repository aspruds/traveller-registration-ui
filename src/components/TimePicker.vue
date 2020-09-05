<template>
  <v-dialog
      ref="dialog"
      v-model="dialogVisible"
      :return-value.sync="timeValue"
      persistent
      width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
          class="time-picker-input"
          :value="timeValue"
          :rules="validationRules"
          :label="label"
          :hint="hint"
          :persistent-hint="persistentHint"
          readonly
          v-bind="attrs"
          v-on="on"
      ></v-text-field>
    </template>
    <v-time-picker
        ref="timePicker"
        :locale="$i18n.locale"
        format="24hr"
        v-model="timeValue"
        scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="dialogVisible = false">
        {{ $t('forms.buttons.cancel') }}
      </v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(value)">
        {{ $t('forms.buttons.confirm') }}
      </v-btn>
    </v-time-picker>
  </v-dialog>
</template>

<script>
export default {
  name: 'TimePicker',
  props: {
    'value': {
      type: String,
    },
    'validationRules': Array,
    'label': {
      type: String,
      required: true
    },
    'hint': {
      type: String,
      required: false
    },
    'persistentHint': {
      type: Boolean,
      required: false
    },
  },
  data: () => ({
    dialogVisible: false
  }),
  computed: {
    timeValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    },
  }
}
</script>