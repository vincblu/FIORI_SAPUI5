sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/View"
],
function (Controller, JSONModel) {
    return Controller.extend("festinante.corsofiori.esrcizio3.controller.MainView", {
        onInit: function () {
          var oData = { element1:"/Vincenzo",
                        element2:"/Russo",
                        element3:"/Marigliano"};

          var oModel = new JSONModel(oData);

          this.getView().setModel(oModel);
          //oModel.setDefaultBindingMode("Oneway");          
          
        }
        

          //  var oModel = new ap.ui.model.json.JSONModel(oData);




           // oModel.loadData("path/al/tuo/file.json");
           // this.getView().setModel(oModel);
        
    });
});
