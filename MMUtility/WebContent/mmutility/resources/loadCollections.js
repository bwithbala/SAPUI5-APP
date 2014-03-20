		var c = sap.ui.commons; /* shorthand */    
		
	    // helper fucntion to create a row with label and text
        function createLMatrixLayoutRowRow(sLabel, sText) {
            var oLabel = new c.Label({text : sLabel + ":"});
            var oTextView = new c.TextView({text : sText});
            
            var oMLCell1 = new c.layout.MatrixLayoutCell({hAlign : c.layout.HAlign.End, vAlign : c.layout.VAlign.Top,  content:[oLabel]});
            var oMLCell2 = new c.layout.MatrixLayoutCell({hAlign : c.layout.HAlign.Begin, vAlign : c.layout.VAlign.Top, content:[oTextView]});
            
            return new c.layout.MatrixLayoutRow({cells:[oMLCell1, oMLCell2]});
        }
		
        
		//function createTI() {
      	//Actions
	//	var oA1 = new sap.ui.ux3.ThingAction({id:"posts", text:"Posts"});
	//	var oA2 = new sap.ui.ux3.ThingAction({id:"delete", text:"Delete"});
		//var oA3 = new sap.ui.ux3.ThingAction({id:"dublicate", text:"Duplicate"});
		
		// Facets of the ThingInspector
		oNI1 = new sap.ui.ux3.NavigationItem({key:"Defaults", text:"Defaults"});
		oNI2 = new sap.ui.ux3.NavigationItem({key:"Extension", text:"Extension"});
		oNI3 = new sap.ui.ux3.NavigationItem({key:"Copy", text:"Copy"});
		oNI4 = new sap.ui.ux3.NavigationItem({key:"Change", text:"Change"});
		oNI5 = new sap.ui.ux3.NavigationItem({key:"Reports", text:"Reports"});
		oNI6 = new sap.ui.ux3.NavigationItem({key:"Supply Chain", text:"Supply Chain"});
		oNI7 = new sap.ui.ux3.NavigationItem({key:"BOM Extension", text:"BOM Extension"});
		oNI8 = new sap.ui.ux3.NavigationItem({key:"Costing", text:"Costing"});
		
		var oTI = new sap.ui.ux3.ThingInspector({
				//id: "thingMain",
				firstTitle:"Team MM", 
				secondTitle: "One Stop Utility", 
				type: "TE Connectivity", 
				icon:"images/TE_Logo.jpg", 
				//icon: "images/Falls_Animated.gif",
				favoriteActionEnabled: false,
				updateActionEnabled : false,
				followActionEnabled :false,
				flagActionEnabled: false,
				//actions: [oA1], 
				facets : [ oNI1, oNI2, oNI3, oNI4, oNI5, oNI6, oNI7, oNI8 ] , selectedFacet:oNI1
		});
		var oTC1 = new sap.ui.ux3.ThingGroup({title:"About"});
		var oTC2 = new sap.ui.ux3.ThingGroup({title:"Contact"});
		
		
		var iconEmailSteve = new sap.ui.core.Icon({
	      src: "sap-icon://email",
	      size: (jQuery.device.is.phone) ? "0.5em" : "1.5em",
	      color: "#8875E7",
	    });	
		
		var iconEmailConnie = new sap.ui.core.Icon({
		      src: "sap-icon://email",
		      size: (jQuery.device.is.phone) ? "0.5em" : "1.5em",
		      color: "#8875E7",
		    });			
		
		var iconEmailRaj = new sap.ui.core.Icon({
		      src: "sap-icon://email",
		      size: (jQuery.device.is.phone) ? "0.5em" : "1.5em",
		      color: "#8875E7",
		    });			

		var iconEmailBala = new sap.ui.core.Icon({
		      src: "sap-icon://email",
		      size: (jQuery.device.is.phone) ? "0.5em" : "1.5em",
		      color: "#8875E7",
		    });	
		
		var iconIMSteve = new sap.ui.core.Icon({
		      src: "sap-icon://discussion",
		      size: (jQuery.device.is.phone) ? "0.5em" : "1.5em",
		      color: "#64E4CE",
		    });	
			
			var iconIMConnie = new sap.ui.core.Icon({
			      src: "sap-icon://discussion",
			      size: (jQuery.device.is.phone) ? "0.5em" : "1.5em",
			      color: "#64E4CE",
			    });			
			
			var iconIMRaj = new sap.ui.core.Icon({
			      src: "sap-icon://discussion",
			      size: (jQuery.device.is.phone) ? "0.5em" : "1.5em",
			      color: "#64E4CE",
			    });			

			var iconIMBala = new sap.ui.core.Icon({
			      src: "sap-icon://discussion",
			      size: (jQuery.device.is.phone) ? "0.5em" : "1.5em",
			      color: "#64E4CE",
			    });			
			
			var iconPhoneSteve = new sap.ui.core.Icon({
			      src: "sap-icon://phone",
			      size: (jQuery.device.is.phone) ? "0.5em" : "1.5em",
			      color: "#1C4C98",
			    });	
				
				var iconPhoneConnie = new sap.ui.core.Icon({
				      src: "sap-icon://phone",
				      size: (jQuery.device.is.phone) ? "0.5em" : "1.5em",
				      color: "#1C4C98",
				    });			
				
				var iconPhoneRaj = new sap.ui.core.Icon({
				      src: "sap-icon://phone",
				      size: (jQuery.device.is.phone) ? "0.5em" : "1.5em",
				      color: "#1C4C98",
				    });			

				var iconPhoneBala = new sap.ui.core.Icon({
				      src: "sap-icon://phone",
				      size: (jQuery.device.is.phone) ? "0.5em" : "1.5em",
				      color: "#1C4C98",
				    });				
		
		var htmlIMSteve = new sap.ui.core.HTML({
			content: "<a href=sip:sewand@te.com>Wand, Steven E</a>"
		});				
		
		var oLayout = new c.layout.MatrixLayout();
		oLayout.setLayoutFixed(false);
		oLayout.addRow(createLMatrixLayoutRowRow("Version", "1.0"));
		oLayout.addRow(createLMatrixLayoutRowRow("Owner", "Team MM"));
	//	oLayout.addRow(createLMatrixLayoutRowRow("Territory", "a Contact"));
		oLayout.addRow(createLMatrixLayoutRowRow("Prim. Contact", "Wand, Steven E")); 
		oTC1.addContent(oLayout);
		oTI.addHeaderContent(oTC1);
	
	
		var htmlIMConnie = new sap.ui.core.HTML({
			content: "<a href=sip:connie.volk@te.com>Volk, Connie</a>"
		});				
		var htmlIMRaj = new sap.ui.core.HTML({
			content: "<a href=sip:raj.sathanur@te.com>Sathanur, Raj</a>"
		});			
		var htmlIMBala = new sap.ui.core.HTML({
			content: "<a href=sip:balakrishnan.tharumar@te.com>Tharumar, Balakrishnan</a>"
		});				
		
		var htmlCallSteve = new sap.ui.core.HTML({
			content: "<a href=" + "tel:+17178103991" + ">+1-717-810-3991</a>"
				
		});			
		var htmlCallConnie = new sap.ui.core.HTML({
			content: "<a href=" + "tel:+17178102281" + ">+1-717-810-2281</a>"
		});				
		var htmlCallRaj = new sap.ui.core.HTML({
			content: "<a href=" + "tel:+17178102034" + ">+1-717-810-2034</a>"
		});			
		var htmlCallBala = new sap.ui.core.HTML({
			content: "<a href=" + "tel:+17179794946" + ">+1-717-979-4946</a>"
		});	
	
		var htmlEmailSteve = new sap.ui.core.HTML({
			content: "<a href=" + "mailto:sewand@te.com" + ">sewand@te.com</a>"
		});			
			
		
		var htmlEmailConnie = new sap.ui.core.HTML({
				content: "<a href=" + "mailto:Connie.Volk@te.com" + ">Connie.Volk@te.com</a>"
		});				
		var htmlEmailRaj = new sap.ui.core.HTML({
	        content: "<a href=" + "mailto:raj.sathanur@te.com" + ">raj.sathanur@te.com</a>"				
		});			
		var htmlEmailBala = new sap.ui.core.HTML({
			content: "<a href=" + "mailto:balakrishnan.tharumar@te.com" + ">balakrishnan.tharumar@te.com</a>"				
		});			
		
		var oVCard = new sap.suite.ui.commons.BusinessCard({
		    firstTitle:  new sap.ui.commons.Label(
		    		{
		    			//id:"vcard1-Steve-label",
		    			text:"Steve Wand",tooltip:"Steve Wand"}),
		    iconPath: "images/animatedSmiley.gif",
		    secondTitle: "Mgr ERP Systems",
		    imageTooltip:"Steve",
		    width: "300px"
		});

		var oContentCardSteve = new sap.ui.commons.layout.MatrixLayout({widths:["20px", "100px"]});

		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Center});
		//oCell.addContent(new sap.ui.commons.TextView({text:"Phone:"}));
		oCell.addContent(iconPhoneSteve);
		oContentCardSteve.createRow(oCell, htmlCallSteve );
				
		oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Center});
	//	oCell.addContent(new sap.ui.commons.TextView({text:"IM:"}));
		oCell.addContent(iconIMSteve);
		oContentCardSteve.createRow(oCell, htmlIMSteve);
		
		oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Center});
	//	oCell.addContent(new sap.ui.commons.TextView({text:"E-Mail:"}));
		oCell.addContent(iconEmailSteve);
		oContentCardSteve.createRow( oCell, htmlEmailSteve);		
				
		//oContentCard.createRow(new sap.ui.commons.TextView({text:"Address:"}), new sap.ui.commons.TextView({text:"Diermar-Hopp Allee 16"}));
		oVCard.setContent(oContentCardSteve);		
		oTC2.addContent(oVCard);
		oTI.addHeaderContent(oTC2);
		
		
		var oVCardConnie = new sap.suite.ui.commons.BusinessCard({
		    firstTitle:  new sap.ui.commons.Label({
		    	//id:"vcard1-Connie-label",
		    	text:"Connie Volk",tooltip:"Connie Volk"}),
		    iconPath: "images/Falls_Animated.gif",
		    secondTitle: "ERP Systems Analyst",
		    imageTooltip:"Connie",
		    width: "300px"
		});

		var oContentCardConnie = new sap.ui.commons.layout.MatrixLayout({widths:["20px", "100px"]});

		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Center});
		//oCell.addContent(new sap.ui.commons.TextView({text:"Phone:"}));
		oCell.addContent(iconPhoneConnie);
		oContentCardConnie.createRow(oCell, htmlCallConnie );
				
		oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Center});
		//oCell.addContent(new sap.ui.commons.TextView({text:"IM:"}));
		oCell.addContent(iconIMConnie);
		oContentCardConnie.createRow(oCell, htmlIMConnie);
		
		oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Center});
		//oCell.addContent(new sap.ui.commons.TextView({text:"E-Mail:"}));
		oCell.addContent(iconEmailConnie);
		oContentCardConnie.createRow(oCell, htmlEmailConnie);	
		
		oVCardConnie.setContent(oContentCardConnie);		

		oTC2.addContent(oVCardConnie);
		oTI.addHeaderContent(oTC2);		
			
		
		var oVCardRaj = new sap.suite.ui.commons.BusinessCard({
		    firstTitle:  new sap.ui.commons.Label({
		    	//id:"vcard1-Raj-label",
		    	text:"Raj Sathanur",tooltip:"Raj Sathanur"}),
		    iconPath: "images/animatedWorld.gif",
		    secondTitle: "ERP Systems Analyst",
		    imageTooltip:"Raj",
		    width: "300px"
		});

    	var oContentCardRaj = new sap.ui.commons.layout.MatrixLayout({widths:["20px", "100px"]});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Center});
		//oCell.addContent(new sap.ui.commons.TextView({text:"Phone:"}));
		oCell.addContent(iconPhoneRaj);
		oContentCardRaj.createRow(oCell, htmlCallRaj );
				
		oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Center});
		//oCell.addContent(new sap.ui.commons.TextView({text:"IM:"}));
		oCell.addContent(iconIMRaj);
		oContentCardRaj.createRow(oCell, htmlIMRaj);

		oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Center});
		//oCell.addContent(new sap.ui.commons.TextView({text:"E-Mail:"}));
		oCell.addContent(iconEmailRaj);
		oContentCardRaj.createRow(oCell, htmlEmailRaj);		
		
		
		oVCardRaj.setContent(oContentCardRaj);		
		oTC2.addContent(oVCardRaj);
		oTI.addHeaderContent(oTC2);		
		
		var oVCardBala = new sap.suite.ui.commons.BusinessCard({
		    firstTitle:  new sap.ui.commons.Label({
		    	//id:"vcard1-Bala-label",
		    	text:"Balakrishnan Tharumar",tooltip:"Balakrishnan Tharumar"}),
		    iconPath: "images/animatedBanana.gif",
		    secondTitle: "Senior Technical Consultant",
		    imageTooltip:"Bala",
		    width: "300px"
		});
		
		
		var oContentCardBala = new sap.ui.commons.layout.MatrixLayout({widths:["20px", "100px"]});
		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Center});
		//oCell.addContent(new sap.ui.commons.TextView({text:"Phone:"}));
		oCell.addContent(iconPhoneBala);
		oContentCardBala.createRow(oCell, htmlCallBala );
				
		oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Center});
		//oCell.addContent(new sap.ui.commons.TextView({text:"IM:"}));
		oCell.addContent(iconIMBala);
		oContentCardBala.createRow(oCell, htmlIMBala);
    	
		oCell = new sap.ui.commons.layout.MatrixLayoutCell({hAlign:sap.ui.commons.layout.HAlign.Center});
		//oCell.addContent(new sap.ui.commons.TextView({text:"E-Mail:"}));
		oCell.addContent(iconEmailBala);
		oContentCardBala.createRow(oCell, htmlEmailBala);	    	
    	
		oVCardBala.setContent(oContentCardBala);		
		oTC2.addContent(oVCardBala);
		oTI.addHeaderContent(oTC2);	
		
		oTI.attachActionSelected(function(oControlEvent) {
			var id = oControlEvent.getParameters().id;
			alert("Action \"" + id + "\" of Thing \""
					+ oControlEvent.getSource().getId() + "\" selected - oAction:" +  oControlEvent.getParameters().action );
		     if (id == "posts")
		     {
		    	 alert("Opeing Posts");
		    	 onFeedDisplay();
		    	 //oOverlayContainer.open();
		       }
			
		});
		oTI.attachFacetSelected(function(oControlEvent) {
			var id = oControlEvent.getParameters().id;
		//	var item1 = "__item1";
		//	alert("item1" +item1 +"id" +id);
			alert("Facet \"" + id + "\" of Thing \""
					+ oControlEvent.getSource().getId() + "\" selected");
			 
		     if (id == "__item2")
		     {
		    	 alert("Passed");
		    	 setContent();	
		       }else {
		    	   alert("Failed");
		    	   oTG1.removeContent();
		    	   oTG2.removeContent();
		       }
		});
	    oTI.attachClose(function(oControlEvent) { 
	    	var id = oControlEvent.getParameters().id;
	    	alert("Thing \""+ id+ "\"closed");
	    	oTI.destroy();
	    });
	    oTI.attachOpenNew(function(oControlEvent) {
			var id = oControlEvent.getParameters().id;
			alert("Thing \"" + id + "\"openNew triggered");
		});
	    oTI.attachOpen(function(oControlEvent) {
			var id = oControlEvent.getParameters().id;
			alert("Thing \"" + id + "\"open triggered");
		});
	  //  return oTI;
		//}
		
    //	oTI = createTI();
    	      
		
/*	    var oInspectButton = new c.Button({text:"open ThingInpector"});
	    oInspectButton.attachPress(function(oControlEvent) {
	    	oTI = createTI();
	    	oTI.open();
	   });*/
	 //   oTI.placeAt("target1");

	    function setContent() {
			var oTG1 = new sap.ui.ux3.ThingGroup({title:"Block1"}
			
			);
			var oTG2 = new sap.ui.ux3.ThingGroup({title:"Block2"});
			var oTG3 = new sap.ui.ux3.ThingGroup({title:"Block3"});
			var oTG4 = new sap.ui.ux3.ThingGroup({title:"Block4"});
			var oTG5 = new sap.ui.ux3.ThingGroup({title:"Block5"});
			oTI.addFacetContent(oTG1);
			oTI.addFacetContent(oTG2);
			oTI.addFacetContent(oTG3);
			oTI.addFacetContent(oTG4);
			oTI.addFacetContent(oTG5);
		}		
	 //   oTI.open();
	    
			    
	