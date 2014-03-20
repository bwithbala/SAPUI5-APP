jQuery.sap.declare("util.Connectivity");
 //Service Root URL
//"http://sl2-sap.us.tycoelectronics.com/sap/opu/odata/sap/Z_TOMS_DATA_SRV/";
//Extract the relative URL to use this application for deployment on any Web Server
var serviceUrl = "../../../../opu/odata/sap/ZMM_PART_DEFAULT_SRV/";
var oModel = new sap.ui.model.odata.ODataModel(getServiceURL(), false, "", "", null,null, null, true);

//This feature is only relevant for SAP services.
//When an application supports multiple service versions, the best matching version URL is returned.
var useNegotiation = false;

var minVersion = 1;
var maxVersion = 1;

function getNegotiationService(){
	var serviceCatalog = "/sap/opu/odata/IWFND/CATALOGSERVICE";
		
	var oCatalogModel = new sap.ui.model.odata.ODataModel(serviceCatalog,false);
	var technicalServiceName = "Non SAP Service";
	var urlParam = 'TechnicalServiceVersionMin='+minVersion+"&TechnicalServiceName='"+technicalServiceName+"'"+'&TechnicalServiceVersionMax='+maxVersion;
	var sServiceUrl = "";
	
	oCatalogModel.read('BestMatchingService', null , [urlParam] , false ,
				function(oData, response) {
					var parser = document.createElement('a');
					parser.href = oData["ServiceUrl"];
					sServiceUrl = parser.pathname + parser.search;
			});
	
	return sServiceUrl;
}


function getServiceURL(){
	//Get the service URL from the SAP NetWeaver Gateway Catalog service.
//	jQuery.sap.require("util.ServiceNegotiation");
	return useNegotiation ? getNegotiationService() : serviceUrl;
}

function createModel(){
   

    oModel.setCountSupported(false);
	// set global models
	sap.ui.getCore().setModel(oModel);

	oModel.attachRequestCompleted(function(oEvent) {
	    sap.ui.getCore().getEventBus().publish("busyDialog","close");
	});

	oModel.attachRequestSent(function(oEvent) {
	    sap.ui.getCore().getEventBus().publish("busyDialog","open");
	});

	oModel.attachParseError(function(oEvent) {
	    displayError({
		message : oEvent.getParameter("message"),
		responseText : oEvent.getParameter("responseText"),
		statusCode : oEvent.getParameter("statusCode"),
		statusText : oEvent.getParameter("statusText")
	    });
	});

	oModel.attachRequestFailed(function(oEvent) {
	    displayError({
		message : oEvent.getParameter("message"),
		responseText : oEvent.getParameter("responseText"),
		statusCode : oEvent.getParameter("statusCode"),
		statusText : oEvent.getParameter("statusText")
	    });
	});
	
	return oModel;
	
}

	
