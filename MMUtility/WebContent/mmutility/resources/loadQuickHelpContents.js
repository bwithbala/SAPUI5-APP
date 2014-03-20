var oOCQuickHelp = new sap.ui.ux3.OverlayContainer({
    width : "1024px",
    height : "720px" ,   	
    openButtonVisible:false,
});

oOverlayContainer.addStyleClass("oOCQuickHelpStyle"); 
 
// Create Images
		var imgDesert = new sap.m.Image("desert", {
			src: "images/QHelp1.png",
			alt: "Majestic Desert",
			densityAware: false,
			decorative: false
		});
		
		var imgElephant = new sap.m.Image("elephant", {
			src: "images/animatedBanana.gif",
			alt: "Mighty Elephant",
			densityAware: false,
			decorative: false,
		    width : "1024px",
		    height : "720px" , 			
		});
		
		var imgFishImg = new sap.m.Image("fish", {
			src: "images/animatedSmiley.gif",
			alt: "Lively Fish",
			densityAware: false,
			decorative: false
		});
		
		
		var imgForest =  new sap.m.Image("forest", {
			src: "images/animatedWorld.gif",
			alt: "Forest in Fall",
			densityAware: false,
			decorative: false
		});
		
		
		
		var imgHuntingLeopard = new sap.m.Image("huntingLeopard", {
			src: "images/Falls_Animated.gif",
			alt: "Hunting Leopard, Full Speed",
			densityAware: false,
			decorative: false
		});
		
		var imgPrairie = new sap.m.Image("prairie", {
			src: "images/Chat.png",
			alt: "Prairie in Dawn",
			densityAware: false,
			decorative: false
		});
		
		var imgWaterfall = new sap.m.Image("waterfall", {
			src: "images/Gear.png",
			alt: "Waterfall in the Jungle",
			densityAware: false,
			decorative: false
		});
		
		//Please uncomment any of the following lines to test the corresponding
		//carousel attribute
		var carousel = new sap.m.Carousel("myCarousel", {
			pageIndicatorPlacement: sap.m.PlacementType.Top,
			//pageIndicatorPlacement: sap.m.PlacementType.Bottom,
			//activePage: imgElephant,
		    width : "1024px",
		    height : "720px" , 
			showPageIndicator: true,
			loop: true,
			pages: [imgDesert, imgElephant, imgFishImg, imgPrairie, imgForest, imgWaterfall]
		});
		
		//Listen to 'pageChanged' events
		carousel.attachPageChanged(function(oControlEvent) {
			jQuery.sap.log.info("sap.m.Carousel: page changed: old: " + oControlEvent.getParameters().oldActivePageId );
			jQuery.sap.log.info("                              new: " + oControlEvent.getParameters().newActivePageId );
			
		});		
		
		oOCQuickHelp.addContent(carousel);	
		
		oOCQuickHelp.attachClose(handleOCQuickHelpClose);
		oOCQuickHelp.attachOpen(handleOCQuickHelpOpen);
		oOCQuickHelp.attachOpenNew(handleOCQuickHelpOpenNew);	



		function handleOCQuickHelpClose(oEvent) {
			//alert("close Triggered");
		}

		function handleOCQuickHelpOpen(oEvent) {
			
		}


		function handleOCQuickHelpOpenNew(oEvent) {
			
		}		