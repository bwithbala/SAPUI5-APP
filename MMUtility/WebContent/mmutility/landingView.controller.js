sap.ui.controller("mmutility.landingView", {
	


/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf mmutility.landingView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf mmutility.landingView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf mmutility.landingView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf mmutility.landingView
*/
//	onExit: function() {
//
//	}
	
				  onFirstLoad : function() {
					  //alert("on First Load Controller");
					 

    			   	},
    			   	
    			   	onFeedDisplay : function() {
					  //alert("on First Load Controller");
    			   		
    					sap.ui.localResources("mmutility");
    					jQuery.sap.require("mmutility.resources.util.connectivity");

    					sap.ui.getCore().getModel(oModel);
    					sap.ui.getCore().setModel(oModel);    			   		
    			   		
    					oFeed.setModel(oModel);
    					oFeed.bindChunks("/ZmmUtilityPostSet", oChunkTemplate);    			   		
    			   		oOverlayContainer.open();
    			   		

    			   	},
	
	
				   onHome : function(oShell) {
					   oShell.setContent(oTI);
					},
			
					onDefaults : function(oShell) {
						oShell.setContent(oSplitterH);
						//oShell.setContent(oForm1);
					},

					onDefView : function(oShell) {
						oShell.setContent(oSplitVDefFunc);
					},
					
					onDefFields : function(oShell) {
						oShell.setContent(oFormECAFields);
					},					
					onExt : function(oShell) {

					},

					onExtSingle : function(oShell) {
						oShell.setContent(oSingleExtFrame);
					},
					onExtMulti : function(oShell) {
						oShell.setContent(oMultiExtFrame);
					},

					onCopy : function(oShell) {

					},
					onCopySingle : function(oShell) {

					},
					onCopyMulti : function(oShell) {

					},

					onChange : function(oShell) {

					},
					onChangeSingle : function(oShell) {

					},
					onChangeMulti : function(oShell) {

					},

					onReports : function(oShell) {

					},
					onSc : function(oShell) {

					},
					onBomext : function(oShell) {

					},
					oncosting : function(oShell) {

					},
					
					onFeedSubmit: function(event) {

/*						alert("Feed entry submitted: "
								+ event.getParameter("text"));	*/					
						//alert("On Feed Submit Button Clicked");
						sap.ui.localResources("mmutility");
						jQuery.sap.require("mmutility.resources.util.connectivity");							
						
						sap.ui.getCore().getModel(oModel);
						var globalModel = oModel;
						
						  var oEntry = {};
						  oEntry.APPL        = "ALL";
						  oEntry.TYPE        = "G";
						  oEntry.MESSAGE     = event.getParameter("text");
						  
						  var now = (new Date()).toUTCString();

						  globalModel.create('/ZmmUtilityPostSet', oEntry, null, function(){
								
								var message = "Message:" +oEntry.MESSAGE + "Posted Successfully!!!";
								shell.getNotificationBar().getMessageNotifier().addMessage(new sap.ui.core.Message({
									text : message,
									timestamp : now,
									level : sap.ui.core.MessageType.Success
								}));      							  
						        
						          globalModel.refresh();
						         },
						      function(){
										var message = "Failed to Post Message:" +oEntry.MESSAGE + "Posted Successfully!!!";
										shell.getNotificationBar().getMessageNotifier().addMessage(new sap.ui.core.Message({
											text : message,
											timestamp : now,
											level : sap.ui.core.MessageType.Error
										}));    						        	 
						        	 
						          }
						         );						
						
					},
					
					


});
