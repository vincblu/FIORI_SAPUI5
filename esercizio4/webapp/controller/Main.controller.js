sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
  //  "use strict";

    return Controller.extend("corsofiori.esercizio4.esercizio4.controller.Main", {
        onInit: function () {
          //Creazione modello
          var oData = { name:"Vincenzo",
                        surname:"Russo",
                        enabled:true,
                        lista: [{ nome:"Vincenzo", cognome:"Russo"},
                                { nome:"Antonio", cognome:"Esposito"},
                                { nome:"Vincenzo", cognome:"Romano"},
                                { nome:"Mario", cognome:"De Luca"}
                           
                               ]       
                       };

          var oModel = new JSONModel(oData);    

          this.getView().setModel(oModel);
   
        },


    });
});
