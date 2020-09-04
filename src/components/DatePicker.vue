<template>
  <v-dialog
      ref="dialog"
      v-model="dialogVisible"
      :return-value.sync="dateValue"
      persistent
      width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
          v-model="dateValue"
          :rules="validationRules"
          :label="label"
          readonly
          v-bind="attrs"
          v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
        ref="datePicker"
        :locale="$i18n.locale"
        :min="minValue"
        :max="maxValue"
        v-model="dateValue"
        scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="dialogVisible = false">
        {{ $t('forms.buttons.cancel') }}
      </v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(value)">
        {{ $t('forms.buttons.confirm') }}
      </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  name: 'DatePicker',
  props: {
    'value': String,
    'validationRules': Array,
    'label': String,
    'minValue': String,
    'maxValue': String,
    'startWithYear': Boolean
  },
  data: () => ({
    dialogVisible: false
  }),
  watch: {
    dialogVisible (val) {
      this.startWithYear && val && setTimeout(() => (this.$refs.datePicker.activePicker = 'YEAR'))
    },
  },
  computed: {
    dateValue: {
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

