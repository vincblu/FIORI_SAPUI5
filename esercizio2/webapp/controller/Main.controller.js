sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("festinante.corso.esercizio2.controller.Main", {
        onInit: function () {

        },

        pressbutton: function (oEvent) {
            MessageToast.show(oEvent.getSource().getId() + " Pressed");
        }
    });
});
