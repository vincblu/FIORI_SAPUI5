sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {


    return Controller.extend("festinante.corso.esercizio2.controller.Main", {
        onInit: function () {
          //var oData = { element1:"/Vincenzo",
           //              element2:"/Russo",
           //              element3:"/Marigliano"};

           var oData = { "dati": [ { "cliente": "ENI",
                                     "team":  [ { "nome":"Vincenzo"}, {"nome":"Luca"}]},
                                   { "cliente": "IREN",
                                     "team":[ { "nome":"Vincenzo"}, {"nome":"Mario"}]},
                                   { "cliente": "ACEA",
                                     "team":[ { "nome":"Vincenzo"}, {"nome":"Antonio"}]}
                                  ]};
                        
       
                         var oModel = new JSONModel(oData);    

                         this.getView().setModel(oModel);
           // oModel.setDefaultBindingMode("Oneway");  
        },

        onSelectionChange: function(oEvent) {
            var oItem = oEvent.getParameter("selectedItem");
            var spath = oItem.getBindingContext().getPath();
            var oList = this.getView().byId("list1");
            oList.bindElement(spath);
        }

    });
});
