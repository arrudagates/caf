<template>
  <v-row justify="center">
    <v-dialog v-model="popup" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ item.status }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
              <v-col>
                  <v-text-field
                      label="Nome"
                      readonly
                      :value="item.sections.ocr ? item.sections.ocr.name : item.data.name ? item.data.name : 'Name not found'"
                  />
                  <v-text-field
                      label="CPF"
                      readonly
                      :value="item.sections.ocr ? item.sections.ocr.cpf : item.data.cpf ? item.data.cpf : 'CPF not found'"
                  />
                  <v-text-field
                      label="Data do Documento"
                      readonly
                      :value="item.sections.ocr ? item.sections.ocr.issueDate : item.data.issueDate ? item.data.issueDate : 'Issue date not found'"
                  />
              <v-text-field label="Tipo" readonly :value="item.type" />
              <v-text-field label="ID" readonly :value="item._id" />
              <v-text-field
                v-if="item.status != 'APROVADO'"
                label="Ultima Validação"
                readonly
                :value="
                  this.item.validations[this.item.validations.length - 1].title
                "
              />
              Fraude:
              <v-icon>{{ item.fraud ? "mdi-check" : "mdi-cancel" }}</v-icon>
              <v-select
                hint="Imagens"
                :items="this.imagesData"
                item-text="property"
                item-value="url"
                label="Select"
                persistent-hint
                return-object
                single-line
                max-width="40%"
                v-model="selected"
              ></v-select>
              <v-btn color="blue darken-1" text @click="open">
                View Image
              </v-btn>
            </v-col>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('interface')">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "popup",
  data() {
    return {
      imagesData: [],
      selected: "",
      popup: false
    };
  },
  props: {
    dialog: { type: Boolean, default: false },
    item: { type: Object },
    images: { type: Array }
  },
  beforeMount() {
    this.popup = this.dialog;
    this.imagesData = this.images;
  },
  watch: {
    popup: function(event) {
      if (event == false) {
        this.$emit("interface");
      }
    }
  },
  methods: {
    open() {
      window.open(this.selected.url, "_blank");
    }
  }
};
</script>
