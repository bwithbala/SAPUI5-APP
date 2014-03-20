/*sap.ui.localResources("mmutility");

jQuery.sap.require("mmutility.resources.util.connectivity");
jQuery.sap.require("sap.ui.model.odata.datajs");

sap.ui.getCore().getModel(oModel);*/

sap.ui.localResources("mmutility");
jQuery.sap.require("mmutility.resources.util.connectivity");

sap.ui.getCore().getModel(oModel);
var globalModel = oModel;
var vSelectedMtart ;
var vSelectedTheme;
vSelectedMtart = "ZFRT";

var shell =  sap.ui.getCore().byId('myShell');

var cbAccounting =  sap.ui.getCore().byId('cbAccounting');
var cbCosting =	sap.ui.getCore().byId('cbCosting');
var cbMrp =	sap.ui.getCore().byId('cbMrp');
var cbSales =	sap.ui.getCore().byId('cbSales');
var cbPurchasing =  sap.ui.getCore().byId('cbPurchasing');   
var cbStorage =	sap.ui.getCore().byId('cbStorage');   
var cbForecasting =	sap.ui.getCore().byId('cbForecasting');
var cbWorkScheduling =  sap.ui.getCore().byId('cbWorkScheduling');  
var cbProdResource =  sap.ui.getCore().byId('cbProdResource');
var cbQm =  sap.ui.getCore().byId('cbQM');
var cbWm =  sap.ui.getCore().byId('cbWM');
var cbPlantStocks =	sap.ui.getCore().byId('cbPlantStocks');
var cbStorageLoc =  sap.ui.getCore().byId('cbStorageLoc');   

var model = oTable.getModel();  

oTable.attachRowSelectionChange(function(oEvent) {
    //Get the  SPath of selected row   
      var sPath = oEvent.getParameter("rowContext").getPath();  
      //Get the model attached to the table  
      //Ensure that variable sysTable is visible   

      //get the selected  data from the model   
      var data  = model.getProperty(sPath);  

      var oEcagroup = sap.ui.getCore().byId("inputEcagroup");
      oEcagroup.setValue(data['Ecagroup']);
      
      var oEcafunc = sap.ui.getCore().byId("inputEcafunc");
      oEcafunc.setValue(data['Ecafunc']);
      
      var oEcagroup = sap.ui.getCore().byId("inputEcagrp_descr");
      oEcagroup.setValue(data['EcagrpDescr']);
      
      var oEcafunc = sap.ui.getCore().byId("inputEcafun_descr");
      oEcafunc.setValue(data['EcafunDescr']);                        
      
 });

/*var olyncSubmit = sap.ui.getCore().byId("lyncSubmit");
olyncSubmit.attachPress(function(){
	
});*/

var oddbTheme = sap.ui.getCore().byId("ddbTheme"); 

oddbTheme.attachChange(function(){

     vSelectedTheme = oddbTheme.getValue();
     
     if (vSelectedTheme == "Blue Crystal") {
    	 sap.ui.getCore().applyTheme("sap_bluecrystal"); 
    	sap.ui.getCore().byId("Theme").close();
       }
     
     if (vSelectedTheme == "Platinum") {
    	 sap.ui.getCore().applyTheme("sap_platinum");
    	 sap.ui.getCore().byId("Theme").close();
       }     
 
     if (vSelectedTheme == "Gold Reflection") {
    	 sap.ui.getCore().applyTheme("sap_goldreflection");
    	 sap.ui.getCore().byId("Theme").close();
       }     
     
     if (vSelectedTheme == "High Contrast Black") {
    	 sap.ui.getCore().applyTheme("sap_hcb");
    	 sap.ui.getCore().byId("Theme").close();
       }             
     
     if (vSelectedTheme == "Mobile Theme") {
    	 sap.ui.getCore().applyTheme("sap_mvi");
    	 sap.ui.getCore().byId("Theme").close();
       }           
     
});


var oddbMtart = sap.ui.getCore().byId("ddbMtart"); 
oddbMtart.attachChange(function(){

     vSelectedMtart = oddbMtart.getValue();
     
    var oPath = "/ZmmViewSet('" + vSelectedMtart + "')";

    globalModel.read(oPath , null, null, true, 

    function(oData, oResponse){
          
          var vZzview = oData['Zzview'];
      
      if (vZzview.indexOf('A') !== -1) {
        cbWorkScheduling.setEnabled(true);
      } else {
        cbWorkScheduling.setEnabled(false);
      }              

      if (vZzview.indexOf('B') !== -1) {
        cbAccounting.setEnabled(true);
      } else {
        cbAccounting.setEnabled(false);
      }
          
      if (vZzview.indexOf('D') !== -1) {
        cbMrp.setEnabled(true);
      } else {
        cbMrp.setEnabled(false);
      }
          
      if (vZzview.indexOf('E') !== -1) {
        cbPurchasing.setEnabled(true);
      } else {
        cbPurchasing.setEnabled(false);
      }

      if (vZzview.indexOf('F') !== -1) {
        cbProdResource.setEnabled(true);
      } else {
        cbProdResource.setEnabled(false);
      }

      if (vZzview.indexOf('G') !== -1) {
        cbCosting.setEnabled(true);
      } else {
        cbCosting.setEnabled(false);
      }

      if (vZzview.indexOf('L') !== -1) {
        cbStorage.setEnabled(true);
      } else {
        cbStorage.setEnabled(false);
      }

      if (vZzview.indexOf('P') !== -1) {
        cbForecasting.setEnabled(true);
      } else {
        cbForecasting.setEnabled(false);
      }    

      if (vZzview.indexOf('Q') !== -1) {
        cbQm.setEnabled(true);
      } else {
        cbQm.setEnabled(false);
      }

      if (vZzview.indexOf('S') !== -1) {
        cbWm.setEnabled(true);
      } else {
        cbWm.setEnabled(false);
      }   

      if (vZzview.indexOf('V') !== -1) {
        cbSales.setEnabled(true);
      } else {
        cbSales.setEnabled(false);
      }    

      if (vZzview.indexOf('X') !== -1) {
        cbPlantStocks.setEnabled(true);
      } else {
        cbPlantStocks.setEnabled(false);
      }

      if (vZzview.indexOf('Z') !== -1) {
        cbStorageLoc.setEnabled(true);
      } else {
        cbStorageLoc.setEnabled(false);
      }
      },
      
      function(){
          alert("Read failed");}
      );         
     
     
});


function onSaveZmmEca() {
  
   var oEntry = {};
  oEntry.Ecagroup        = sap.ui.getCore().byId('inputEcagroup').getValue();
  oEntry.Ecafunc         = sap.ui.getCore().byId('inputEcafunc').getValue();
  oEntry.EcagrpDescr     = sap.ui.getCore().byId('inputEcagrp_descr').getValue();
  oEntry.EcafunDescr     = sap.ui.getCore().byId("inputEcafun_descr").getValue();

  var oPath = "/ZMMECA(Ecagroup='" + oEntry.Ecagroup + "',Ecafunc='" + oEntry.Ecafunc + "')";
  alert("oPath" +oPath);

   var oParams = {};
   oParams.fnSuccess = function(){ 
	   
 //  alert("Update successful");
   model.refresh();
   
	var now = (new Date()).toUTCString();
	shell.getNotificationBar().getMessageNotifier().addMessage(new sap.ui.core.Message({
		text : "Data Saved Successfully (click to remove the Message)",
		timestamp : now,
		level : sap.ui.core.MessageType.Success
	}));      
   
   };
   oParams.fnError = function(){
	   
//	   alert("Update failed");
   
	var now = (new Date()).toUTCString();
	shell.getNotificationBar().getMessageNotifier().addMessage(new sap.ui.core.Message({
		text : "Could not save the changes (click to remove the Message)",
		timestamp : now,
		level : sap.ui.core.MessageType.Error
	}));      
   
   };
   oParams.bMerge = true;
   model.update( oPath, oEntry, oParams);   
   

}

function onDeleteZmmEca() {
    
     var oEntry = {};
    oEntry.Ecagroup        = sap.ui.getCore().byId('inputEcagroup').getValue();
    oEntry.Ecafunc         = sap.ui.getCore().byId('inputEcafunc').getValue();

    var oPath = "/ZMMECA(Ecagroup='" + oEntry.Ecagroup + "',Ecafunc='" + oEntry.Ecafunc + "')";
    alert("oPath" +oPath);

     var oParams = {};
     oParams.fnSuccess = function(){ 
    	 //alert("Deleted successfully");
    	 
         model.refresh();
     
	 	var now = (new Date()).toUTCString();
		shell.getNotificationBar().getMessageNotifier().addMessage(new sap.ui.core.Message({
			text : "Data Deleted Successfully (click to remove the Message)",
			timestamp : now,
			level : sap.ui.core.MessageType.Success
		}));         
     
     };
     oParams.fnError = function(){
    	 //alert("Deletion Failed");
     
    		var now = (new Date()).toUTCString();
    		shell.getNotificationBar().getMessageNotifier().addMessage(new sap.ui.core.Message({
    			text : "Could not delete the record (click to remove the Message)",
    			timestamp : now,
    			level : sap.ui.core.MessageType.Error
    		}));    
     };
     model.remove( oPath, oParams);   
     
  }

function onCreateZmmEca() {

  var oEntry = {};
  oEntry.Ecagroup        = sap.ui.getCore().byId('inputEcagroup').getValue();
  oEntry.Ecafunc         = sap.ui.getCore().byId('inputEcafunc').getValue();
  oEntry.EcagrpDescr     = sap.ui.getCore().byId('inputEcagrp_descr').getValue();
  oEntry.EcafunDescr     = sap.ui.getCore().byId("inputEcafun_descr").getValue();

  model.create('/ZMMECA', oEntry, null, function(){
     //     alert("Create successful");
          
  	 	var now = (new Date()).toUTCString();
		shell.getNotificationBar().getMessageNotifier().addMessage(new sap.ui.core.Message({
			text : "Record Created Successfully (click to remove the Message)",
			timestamp : now,
			level : sap.ui.core.MessageType.Success
		}));                   
          
          
          model.refresh();
         },
      function(){
    //      alert("Create failed");
          
  		var now = (new Date()).toUTCString();
		shell.getNotificationBar().getMessageNotifier().addMessage(new sap.ui.core.Message({
			text : "Could not Create the record (click to remove the Message)",
			timestamp : now,
			level : sap.ui.core.MessageType.Error
		}));          
          
         }
         );
  }

function onGetMaintStatus() {

}

function onSaveMaintStatus() {
     
     var oddbMtart = sap.ui.getCore().byId("ddbMtart");      
    // var vMtart = oddbMtart.getValue();
     var vZzview=null;

     if (cbWorkScheduling.getChecked() == true) {
      vZzview = "A";
    }
     
    if (cbAccounting.getChecked() == true) {
      if (vZzview == null ){
        vZzview = "B";
       }
      else{
        vZzview = vZzview + "B";
      }
    }

    if (cbMrp.getChecked() == true) {
      if (vZzview == null ){
        vZzview = "D";
       }
      else{
        vZzview = vZzview + "D";
      }
    }

    if (cbPurchasing.getChecked() == true) {
      if (vZzview == null ){
        vZzview = "E";
       }
      else{
        vZzview = vZzview + "E";
      }
    }

    if (cbProdResource.getChecked() == true) {
      if (vZzview == null ){
        vZzview = "F";
       }
      else{
        vZzview = vZzview + "F";
      }
    }

    if (cbCosting.getChecked() == true) {
      if (vZzview == null ){
        vZzview = "G";
       }
      else{
        vZzview = vZzview + "G";
      }
    }

    if (cbStorage.getChecked() == true) {
      if (vZzview == null ){
        vZzview = "L";
       }
      else{
        vZzview = vZzview + "L";
      }
    }

    if (cbForecasting.getChecked() == true) {
      if (vZzview == null ){
        vZzview = "P";
       }
      else{
        vZzview = vZzview + "P";
      }
    }

    if (cbQm.getChecked() == true) {
      if (vZzview == null ){
        vZzview = "Q";
       }
      else{
        vZzview = vZzview + "Q";
      }
    }

    if (cbWm.getChecked() == true) {
      if (vZzview == null ){
        vZzview = "S";
       }
      else{
        vZzview = vZzview + "S";
      }
    }

    if (cbSales.getChecked() == true) {
      if (vZzview == null ){
        vZzview = "V";
       }
      else{
        vZzview = vZzview + "V";
      }
    }

    if (cbPlantStocks.getChecked() == true) {
      if (vZzview == null ){
        vZzview = "X";
       }
      else{
        vZzview = vZzview + "X";
      }
    }

    if (cbStorageLoc.getChecked() == true) {
      if (vZzview == null ){
        vZzview = "Z";
       }
      else{
        vZzview = vZzview + "Z";
      }
    }


    var oEntry = {};
    oEntry.Mtart          = oddbMtart.getValue();
    oEntry.Ecagroup       = sap.ui.getCore().byId('inputViewEcagrp').getValue();
    oEntry.Ecafunc        = sap.ui.getCore().byId("inputViewEcafunc").getValue(); 
    oEntry.Zzview         = vZzview;

    model.create('/ZmmViewSet', oEntry, null, function(){
           // alert("Create successful");
            
      	 	var now = (new Date()).toUTCString();
    		shell.getNotificationBar().getMessageNotifier().addMessage(new sap.ui.core.Message({
    			text : "Record Created Successfully (click to remove the Message)",
    			timestamp : now,
    			level : sap.ui.core.MessageType.Success
    		}));              
            
           },
        function(){
           // alert("Create failed");
           
      		var now = (new Date()).toUTCString();
    		shell.getNotificationBar().getMessageNotifier().addMessage(new sap.ui.core.Message({
    			text : "Could not Create the record (click to remove the Message)",
    			timestamp : now,
    			level : sap.ui.core.MessageType.Error
    		}));                
            
           }
           
           );
}

function onSaveZmmFieldchk() {
     alert("Save Field Check Clicked from Actions");
}
