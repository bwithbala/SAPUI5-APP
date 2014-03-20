var oOCTraining = new sap.ui.ux3.OverlayContainer("OLCTraining",{
    width : "1024px",
    height : "720px" ,   	
	
});


var oLabelVideo = new sap.ui.commons.Label("lblVideo",{text: "Engg. Change Administrator Function Groups"});
var videoHtmlZmmecagrp = new sap.ui.core.HTML("videoHtmlZmmecagrp", {
  content:
          "<video width=640 height=360 controls>" +
          "<source src='http://www.w3schools.com/html/movie.mp4' type='video/mp4'>" +
          "Your browser does not support the video tag." +
          "</video>"
});

var videoHtmlZmmecaview = new sap.ui.core.HTML("videoHtmlZmmecaview", {
	  content:
	          "<video  width=640 height=360 controls>" +
	          "<source src='http://clips.vorwaerts-gmbh.de/VfE_html5.mp4' type='video/mp4'>" +
	          "<source src='http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm' type='video/webm'>" +
	          "<source src='http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv' type='video/ogg'>" +
	          "Your browser does not support the video tag." +
	          "</video>"
	});

var oVLTrainVideoGrp = new sap.ui.commons.layout.VerticalLayout("oVLTrainVideoGrp", {
});	
var oVLTrainVideoView = new sap.ui.commons.layout.VerticalLayout("oVLTrainVideoView", {
});	
var oVLTrainVideoFields = new sap.ui.commons.layout.VerticalLayout("oVLTrainVideoFiedls", {
});
var oVLTrainVideoDefaults = new sap.ui.commons.layout.VerticalLayout("oVLTrainVideoDefaults", {
});	

//create a horizontal Splitter
var oSVTraining = new sap.ui.commons.Splitter("TrainingSplitterV"); 
oSVTraining.setSplitterOrientation(sap.ui.commons.Orientation.vertical);
oSVTraining.setSplitterPosition("20%");
oSVTraining.setMinSizeFirstPane("20%");
oSVTraining.setMinSizeSecondPane("60%");
oSVTraining.setWidth("100%");
oSVTraining.setHeight("720px");

//adding Labels to both panes
/*var oLabelTopic = new sap.ui.commons.Label({text: "Choose Topic"});
oSVTraining.addFirstPaneContent(oLabelTopic);*/

//Create the Accordion control
var oAccTraining = new sap.ui.commons.Accordion("accTraining"); 
			
//Building Defaults
var oAccSecDef = new sap.ui.commons.AccordionSection( "AccSecDef" );		
  oAccSecDef.setTitle("Defaults");		
  oAccSecDef.setTooltip("Defaults");
 // oAccSecDef.setMaxHeight("200px");			
  
var oButZmmecagrp = new sap.ui.commons.Button({
    text : "Engg. Change Administrator Function Groups",
    tooltip: "Help Video - Engg. Change Administrator Function Groups",
    lite: true,
    press : function() {
    	var vVLTrainVideoInit =  sap.ui.getCore().byId('oVLTrainVideo');
    	if (vVLTrainVideoInit != undefined){
    		vVLTrainVideoInit.removeContent(videoHtmlZmmecagrp);	
    	}
    	
    	var vVLTrainVideoView =  sap.ui.getCore().byId('oVLTrainVideoView');
    	if (vVLTrainVideoView != undefined){
    		vVLTrainVideoView.removeContent(videoHtmlZmmecaview);	
    	}    	
    	
    	var vVLTrainVideoGrp =  sap.ui.getCore().byId('oVLTrainVideoGrp');
    	vVLTrainVideoGrp.addContent( oLabelVideo);
    	vVLTrainVideoGrp.addContent( videoHtmlZmmecagrp); 
    	
    	var vSVTraining =  sap.ui.getCore().byId('TrainingSplitterV');
    	vSVTraining.removeSecondPaneContent();
    	vSVTraining.addSecondPaneContent(vVLTrainVideoGrp);	
    	
    	var vOCTraining =  sap.ui.getCore().byId('OLCTraining');
    	vOCTraining.removeContent();
    	vOCTraining.addContent(vSVTraining);	    	
    }
});

var oButZmmview = new sap.ui.commons.Button({
    text : "Update Engg. Change Admin Functions View",
    tooltip: "Help Video - Update Engg. Change Admin Functions View",
    lite: true,
    press : function() {
    
	var vVLTrainVideoInit =  sap.ui.getCore().byId('oVLTrainVideo'); 
	if (vVLTrainVideoInit != undefined){
		vVLTrainVideoInit.removeContent(videoHtmlZmmecagrp);	
	}	

	var vVLTrainVideoGrp =  sap.ui.getCore().byId('oVLTrainVideoGrp');
	if (vVLTrainVideoGrp != undefined){
		vVLTrainVideoGrp.removeContent(videoHtmlZmmecagrp);	
	}	
	
	var vVLTrainVideoView =  sap.ui.getCore().byId('oVLTrainVideoView');
	vVLTrainVideoView.addContent( oLabelVideo);
	vVLTrainVideoView.addContent( videoHtmlZmmecaview); 
	

	var vSVTraining =  sap.ui.getCore().byId('TrainingSplitterV');
	vSVTraining.removeSecondPaneContent();
	vSVTraining.addSecondPaneContent(vVLTrainVideoView);	
	
	var vOCTraining =  sap.ui.getCore().byId('OLCTraining');
	vOCTraining.removeContent();
	vOCTraining.addContent(vSVTraining);		
	
    }
});

var oButZmmfldchk = new sap.ui.commons.Button({
    text : "Update Fields",
    tooltip : "Help Video - Update Fields",
    lite: true,
    press : function() {alert('Alert from ' + oButZmmfldchk.getText());}
});

var oButZmmdefaults = new sap.ui.commons.Button({
    text : "Update Defaults for Part Extension",
    tooltip : "Help Video - Update Defaults for Part Extension",
    lite: true,
    press : function() {alert('Alert from ' + oButZmmdefaults.getText());}
});

var oVLTrainingButtons = new sap.ui.commons.layout.VerticalLayout("oVLTrainingButtons", {
	content: [oButZmmecagrp, oButZmmview, oButZmmfldchk, oButZmmdefaults]
});
oAccSecDef.addContent( oVLTrainingButtons);

oAccTraining.addSection( oAccSecDef );
			
var oAccSecExt = new sap.ui.commons.AccordionSection( "AccSecExt");
  oAccSecExt.setTitle("Extension");		

  var oButExtSingle = new sap.ui.commons.Button({
	    text : "Single Material",
	    tooltip : "Help Video - Extend-Single Material",
	    lite: true,
	    press : function() {alert('Alert from ' + oButExtSingle.getText());}
	});

	var oButExtMulti = new sap.ui.commons.Button({
	    text : "Multiple Material",
	    tooltip : "Help Video - Extend Multiple Material",
	    lite: true,
	    press : function() {alert('Alert from ' + oButExtMulti.getText());}
	});

	var oVLTrainButExt = new sap.ui.commons.layout.VerticalLayout("oVLTrainButExt", {
		content: [oButExtSingle, oButExtMulti]
	});
	oAccSecExt.addContent( oVLTrainButExt);
  
  oAccTraining.addSection( oAccSecExt );	
			
var oAccSecCopy = new sap.ui.commons.AccordionSection( "AccSecCopy");		
  oAccSecCopy.setTitle("Copy");

  var oButCopySingle = new sap.ui.commons.Button({
	    text : "Single Material",
	    tooltip : "Help Video - Extend-Single Material",
	    lite: true,
	    press : function() {alert('Alert from ' + oButCopySingle.getText());}
	});

	var oButCopyMulti = new sap.ui.commons.Button({
	    text : "Multiple Material",
	    tooltip : "Help Video - Extend Multiple Material",
	    lite: true,
	    press : function() {alert('Alert from ' + oButCopyMulti.getText());}
	});

	var oVLTrainButCopy = new sap.ui.commons.layout.VerticalLayout("oVLTrainButCopy", {
		content: [oButCopySingle, oButCopyMulti]
	});
	oAccSecCopy.addContent( oVLTrainButCopy);  
  
  oAccTraining.addSection( oAccSecCopy );	
			
var oAccSecChange = new sap.ui.commons.AccordionSection( "AccSecChange");
  oAccSecChange.setTitle("Change");		

  var oButChangeSingle = new sap.ui.commons.Button({
	    text : "Single Material",
	    tooltip : "Help Video - Change-Single Material",
	    lite: true,
	    press : function() {alert('Alert from ' + oButChangeSingle.getText());}
	});

	var oButChangeMulti = new sap.ui.commons.Button({
	    text : "Multiple Material",
	    tooltip : "Help Video - Change Multiple Material",
	    lite: true,
	    press : function() {alert('Alert from ' + oButChangeMulti.getText());}
	});

	var oVLTrainButChange = new sap.ui.commons.layout.VerticalLayout("oVLTrainButChange", {
		content: [oButChangeSingle, oButChangeMulti]
	});
	oAccSecChange.addContent( oVLTrainButChange);				
			
//Accordion properties settings
  oAccTraining.addSection( oAccSecChange );							
  oAccTraining.setWidth("400px");

  oSVTraining.addFirstPaneContent(oAccTraining);

var oVLTrainVideo = new sap.ui.commons.layout.VerticalLayout("oVLTrainVideo", {
	content: [oLabelVideo, videoHtmlZmmecagrp]
});
//oVLTrainVideo.removeAllContent();

oSVTraining.addSecondPaneContent(oVLTrainVideo);	
oOCTraining.addContent(oSVTraining);	

oOCTraining.attachClose(handleOCTrainingClose);
oOCTraining.attachOpen(handleOCTrainingOpen);
oOCTraining.attachOpenNew(handleOCTrainingOpenNew);	



function handleOCTrainingClose(oEvent) {
	//alert("close Triggered");
			
}

function handleOCTrainingOpen(oEvent) {
	
}


function handleOCTrainingOpenNew(oEvent) {
	
}

