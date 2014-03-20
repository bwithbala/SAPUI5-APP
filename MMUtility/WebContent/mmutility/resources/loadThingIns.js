/*    var oNavBarData = [{
        key : "overview",
        text : "Overview"
    }, {
        key : "contacts",
        text : "Contacts Lorem Ipsum Dolores",
        quantity: 25543
    }, {
        key : "items",
        text : "Items",
        quantity: 3,
        tooltip: "Custom tooltip for Items"
    }, {
        key : "related_documents",
        text : "Related Documents",
        quantity: 0
    }, {
        key : "addresses",
        text : "Addresses",
        quantity: 0
    }, {
        key : "activities",
        text : "Activities",
        quantity: 0
    }, {
        key : "Leads",
        text : "Leads",
        quantity: 0
    }, {
        key : "bank_details",
        text : "Bank Details",
        quantity: 0
    }, {
        key : "analytics",
        text : "Analytics",
        quantity: 0
    }];

    var oNavBarItemTemplate = new sap.suite.ui.commons.CountingNavigationItem({
        key: "{key}",
        text: "{text}",
        quantity: "{quantity}",
        tooltip: "{tooltip}"
    });

*//*****************************************************************************************************************//*
    var oMenuData = [{
        text: "Open www.sap.com",
        href: "http://www.sap.com"
    }, {
        text: "Create dummy Thing Viewer",
   //     href: "javascript: oThingCollection.addNextContent(createDummyThingViewer()).shiftNext();"
    }, {
        text: "3rd Transaction Takimata Nonumy Duo Elitr",
        href: "#"
    }, {
        text: "4th Transaction Sanctus Invidunt Nonumy",
        href: "#"
    }, {
        text: "5th Transaction Labore Magna Accusam At",
        href: "#"
    }, {
        text: "6th Transaction Vero Conseteur Duo Justo",
        href: "#"
    }, {
        text: "7th Transaction Nagsy Nonumy Duo Elitr",
        href: "#"
    }, {
        text: "8th Transaction Sanctus Invidunt Nagsy",
        href: "#"
    }, {
        text: "9th Transaction Labore Magna Nagsy",
        href: "#"
    }, {
        text: "10th Transaction Vero Conseteur Nagsy",
        href: "#"
    }];

    var oMenuTemplate = new sap.ui.commons.Link({
        text : "{text}",
        href : "{href}",
        press : function() {
            console.log("Action item selected.");
        }
    });

*//*****************************************************************************************************************//*
    var oHeaderData = [{
        title : "General Information",
        content : [{
            label : "Delivery Status",
            text : "Ordered"
        }, {
            label : "Invoice Status",
            text : "Partially Invoiced"
        }, {
            label : "Total Value",
            text : "91.680,00 USD"
        }, {
            label : "Sales",
            text : "Global Sales"
        }, {
            label : "Organization",
            text : "Consumer Industries"
        }, {
            label : "Lorem",
            text : "Ipsum"
        }, {
            label : "Dolor",
            text : "Sit Amet"
        }, {
            label : "Tempor",
            text : "Labore"
        }]
    }, {
        title : "Sub-Header",
        content : [{
            label : "Customer",
            text : "Bortelli Corp"
        }, {
            label : "Recipient",
            text : "John Bradford"
        }, {
            label : "Ordered On",
            text : "Nov. 11, 2012"
        }, {
            label : "Last Changed On",
            text : "Jan. 1, 2013"
        }, {
            label : "Created By",
            text : "Steven Tyler"
        }, {
            label : "Lorem",
            text : "Ipsum"
        }, {
            label : "Nonumy",
            text : "Takimata"
        }, {
            label : "Justo",
            text : "Duo Elitr"
        }, {
            label : "Labore",
            text : "Sanctus"
        }]
    }, {
        title : "Lorem Ipsum",
        content : [{
            label : "Lorem",
            text : "Rebum"
        }, {
            label : "Ipsum",
            text : "Tempor"
        }, {
            label : "At Vero",
            text : "Invidunt"
        }, {
            label : "Voluptua",
            text : "Nonumy"
        }]
    }];

    var oHeaderTemplate = new sap.ui.ux3.ThingGroup({
        title : "{title}",
        content : new sap.ui.commons.layout.MatrixLayout({
            rows : {
                path : "content",
                template : new sap.ui.commons.layout.MatrixLayoutRow({
                    cells : [
                        new sap.ui.commons.layout.MatrixLayoutCell({
                            hAlign : sap.ui.commons.layout.HAlign.End,
                            vAlign : sap.ui.commons.layout.VAlign.Top,
                            content : new sap.ui.commons.Label({
                                text : {
                                    path : "label",
                                    formatter : function(fValue) {
                                        return fValue + ":"
                                    }
                                }
                            })
                        }),
                        new sap.ui.commons.layout.MatrixLayoutCell({
                            hAlign : sap.ui.commons.layout.HAlign.Begin,
                            vAlign : sap.ui.commons.layout.VAlign.Top,
                            content : new sap.ui.commons.TextView({
                                text : "{text}"
                            })
                        })
                    ]
                })
            }
        })
    });

*//*****************************************************************************************************************//*
    var oTvData = {
        showHeader: true,
        sidebarWidth: "260px",
        type: "Sales Order",
        title: "440000126411117000112345004318",
        subtitle: "Sales Title Nestle Lorem Ipsum Dolor Sit Amet",
        icon: "images/gen_bo_img.png",
        logo : "images/img_key_company.png",
        facets: oNavBarData,
        menuContent: oMenuData,
        headerContent: oHeaderData
    };

    var index = 1;

    function setContent() {
        var oFacetContent = new sap.ui.ux3.ThingGroup({
            title: "Facet Title " + (index++),
            colspan: true
        });
        oThingViewer.addFacetContent(oFacetContent);
    }

    var oTvModel = new sap.ui.model.json.JSONModel();
    oTvModel.setData(oTvData);

    var tvIndex = 0;

    function createDummyThingViewer() {
        tvIndex++;
        return new sap.suite.ui.commons.ThreePanelThingViewer({
            showHeader: true,
            type: "type " + tvIndex,
            title: "title " + tvIndex,
            subtitle: "subtitle " + tvIndex
        });
    }

    var oThingViewer = new sap.suite.ui.commons.ThreePanelThingViewer({
        id: "thingViewer",
        showHeader: "{/showHeader}",
        sidebarWidth: "{/sidebarWidth}",
        type: "{/type}",
        title: "{/title}",
        subtitle: "{/subtitle}",
        icon: "{/icon}",
        logo : "{/logo}",
     //  width : "1024px",
     //   height : "724px" ,       
        facets: {
            path : "/facets",
            template : oNavBarItemTemplate
        },
        menuContent: {
            path : "/menuContent",
            template : oMenuTemplate
        },
        headerContent : {
            path : "/headerContent",
            template : oHeaderTemplate
        },
        facetSelected : function(oEvent) {
            var sFacetKey = oEvent.getParameters().key;
            this.setShowHeader("overview" == sFacetKey);
            setContent();
        }
    });

    oThingViewer.setModel(oTvModel);

    var oThingCollection = new sap.suite.ui.commons.ThingCollection({
        id : "thingCollection",
      width : "1024px",
    height : "724px"
    });

    oThingViewer.selectDefaultFacet();

    oThingCollection.addContent(oThingViewer);
 //   oThingCollection.addContent(createDummyThingViewer());
    
  */  

		function handleDeleted(oEvent){
			alert("Chunk "+ oEvent.oSource.getId() + " deleted");
		}

		function handleSenderClicked(oEvent){
			alert("Chunk "+ oEvent.oSource.getId() + ": click on sender");
		}

		function handleReferenceClicked(oEvent){
			alert("Reference "+ oEvent.getParameter('text') + " clicked");
		}

		function handleCommentAdded(oEvent){
			var oComment = oEvent.getParameter('comment');
			alert("Comment --"+ oComment.getText() + "-- added");
			oComment.attachDeleted(handleDeleted);
			oComment.attachSenderClicked(handleSenderClicked);
			oComment.attachReferenceClicked(handleReferenceClicked);
		}

		function handleChunkAdded(oEvent){
			var oChunk = oEvent.getParameter('chunk');
			alert("Chunk --"+ oChunk.getText() + "-- added");
			oChunk.attachDeleted(handleDeleted);
			oChunk.attachSenderClicked(handleSenderClicked);
			oChunk.attachReferenceClicked(handleReferenceClicked);
		}

		function handleFilterChange(oEvent){
			alert("Filter changed: "+ oEvent.getParameter('newValue'));
		}

		function handleSearch(oEvent){
			alert("Search triggered: "+ oEvent.getParameter('query'));
		}

		function handleToolsItemSelected(oEvent){
			alert("Tools item "+ oEvent.getParameter('itemId') + ' selected!');
		}

		function handleToggleLive(oEvent){
			alert("Live : "+ oEvent.getParameter('live'));
		}

/*		sap.ui.localResources("mmutility");
		jQuery.sap.require("mmutility.resources.util.connectivity");

		sap.ui.getCore().getModel(oModel);
		//var globalModel = oModel;
		
		
		//var oData = globalModel.getProperty("/ZmmUtilityPostSet");  
		sap.ui.getCore().setModel(oModel);*/
	//	alert("oModel" +oModel);
		
		//oFeed.bindElement("/ZmmUtilityPostSet");
	//	oFeed.bindProperty("chunks", "name");
		
		
		var oChunkTemplate = sap.ui.ux3.FeedChunk({
			sender: "{UNAME}",
		      text : "{MESSAGE}",
		      timestamp: "{POSTED_ON}"
		});
	//	alert("Chunk Template:" +oChunkTemplate);
	//	oChunk.bindElement("/ZmmUtilityPostSet");
		/*oChunk[ { sender: "{UNAME}",
			      text : "{MESSAGE}",
			      timestamp: "{POSTED_ON}"
		        }
		      ];*/
		
		  

	//	var uname = globalModel.getData().ZmmUtilityPostSet(APPL='ALL',FEEDKEY='ALLGTE11322220140204151250').UNAME;
		//alert("Username:" +uname);
		
		var oFeed = new sap.ui.ux3.Feed("Feed1",{
			feederThumbnailSrc: 'images/IMG_0756.JPG',
			feederSender: 'Bala',
/*			filterItems: [ new sap.ui.core.ListItem('FilterItem1',{
											key: 'item1',
											text: 'Filter1'
											}),
										 new sap.ui.core.ListItem('FilterItem2',{
											key: 'item2',
											text: 'Filter2'
											})],
			filterChange: handleFilterChange,*/
			//search: handleSearch,
			//chunkAdded: handleChunkAdded,
		//	toggleLive: handleToggleLive,
	/*		toolsMenuItems: [ new sap.ui.commons.MenuItem('MenuItem1',{
													text: 'Item1'
												}),
												new sap.ui.commons.MenuItem('MenuItem2',{
													text: 'Item2'
												})],
			toolsItemSelected: handleToolsItemSelected,		*/										
			chunks: [ 
			          //{
				//path: "/ZmmUtilityPostSet",
			        //   template: oChunkTemplate}  
					
//oChunkTemplate,
			         
			         /* new sap.ui.ux3.FeedChunk("Chunk1", {
							//		thumbnailSrc: "images/feeder/m_01.png",
					  			//sender: "Donald Duck",
					  			sender: globalModel.getData().ZmmUtilityPostSet(APPL='ALL',FEEDKEY='ALLGTE11322220140204151250').UNAME,    
					  			
				            //     sender: "{/ZmmUtilityPostSet/UNAME}",
				          //       text: "{/ZmmUtilityPostSet/MESSAGE}",    
					  			//text: "Hello world!!!\nLine1\nLine2\nLine4\nLine5", 
									//timestamp: "today",
					  			//   timestamp: globalModel.getData().ZmmUtilityPostSet(APPL='ALL',FEEDKEY='ALLGTE11322220140204151250').POSTED_ON,
						//		 timestamp:"{/ZmmUtilityPostSet/POSTED_ON}",	
				                 flagged: true,
									favorite: true,
									shared: true,
									deleted: handleDeleted,
									senderClicked: handleSenderClicked,
									referenceClicked: handleReferenceClicked,
									commentAdded: handleCommentAdded}),
								new sap.ui.ux3.FeedChunk("Chunk2", {
									//thumbnailSrc: "images/feeder/male.jpg",
					  			sender: "James Bond", 
			    				text: "The world is not enough...", 
									timestamp: "yesterday",
									flagged: false,
									favorite: true,
									shared: false,
									deletionAllowed: true,
									deleted: handleDeleted,
									senderClicked: handleSenderClicked,
									referenceClicked: handleReferenceClicked,
									commentAdded: handleCommentAdded,
									comments: [ new sap.ui.ux3.FeedChunk("commentChunk1", {
										 						sender: "Gaius Julius Caesar", 
									    					text: "Veni, vidi, vici", 
									    					timestamp: "long ago", 
									    					deleted: handleDeleted,
																senderClicked: handleSenderClicked,
																referenceClicked: handleReferenceClicked,
																commentAdded: handleCommentAdded})
									           ]
									})
			         */
			         
			         ]
			});
		
/*		oFeed.setModel(oModel);
		oFeed.bindChunks("/ZmmUtilityPostSet", oChunkTemplate);*/
		


var oContactsData = [{
    title : "Contacts",
    colspan : true,
    type : 2,
    content : [{
        name : "Jag, Mick",
        phone : "+1 (692) 742-2633"
    }, {
        name : "Bradford, John",
        phone : "+1 (635) 457-2875"
    }, {
        name : "Stiff, Clark",
        phone : "+1 (703) 515-8363"
    }]
}];

var oItemsData = [{
    title : "Items",
    colspan : true,
    type : 1,
    content : [{
        number : 1,
        unit : "20 ea",
        name : "LED & Smd BA9S",
        price : "$ 19.95"
    }, {
        number : 2,
        unit : "35 ea",
        name : "LED & Smd Tfl Canbus",
        price : "$ 29.91"
    }, {
        number : 3,
        unit : "40 ea",
        name : "LED Angel Eyes",
        price : "$ 21.90"
    }]
}];

var oRelDocsData = [{
    title : "Related Documents",
    colspan : true
}];

//var oOverviewData = oContactsData.concat(oItemsData, oRelDocsData);
//var oOverviewData = oContactsData.concat(oNewsFeedData);

var oOverviewData;

var oFacetContentTemplate = new sap.ui.ux3.ThingGroup({
    title : "{title}",
    colspan : "{colspan}",
    content : new sap.ui.commons.RowRepeater({
        rows :  {
            path : "content",
            factory : function(sId, oContext) {
                var iNumber = oContext.getProperty("number");

                if (iNumber) {
                    return new sap.ui.commons.layout.MatrixLayout({
                        rows : new sap.ui.commons.layout.MatrixLayoutRow({
                            cells : [
                                new sap.ui.commons.layout.MatrixLayoutCell({
                                    content : new sap.ui.commons.Label({ text : "{number}" })
                                }),
                                new sap.ui.commons.layout.MatrixLayoutCell({
                                    content : new sap.ui.commons.Label({ text : "{unit}" })
                                }),
                                new sap.ui.commons.layout.MatrixLayoutCell({
                                    content : new sap.ui.commons.Label({ text : "{name}" })
                                }),
                                new sap.ui.commons.layout.MatrixLayoutCell({
                                    content : new sap.ui.commons.Label({ text : "{price}" })
                                })
                            ]
                        })
                    });
                } else {
                    return new sap.ui.commons.layout.MatrixLayout({
                        rows : [
                            new sap.ui.commons.layout.MatrixLayoutRow({
                                cells : new sap.ui.commons.layout.MatrixLayoutCell({
                                    content : new sap.ui.commons.Label({ text : "{name}" })
                                })
                            }),
                            new sap.ui.commons.layout.MatrixLayoutRow({
                                cells : new sap.ui.commons.layout.MatrixLayoutCell({
                                    content : new sap.ui.commons.Label({ text : "{phone}" })
                                })
                            })
                        ]
                    });
                }
            }
        }
    })
});

/***********************************************************************************************/
var oData = {
    type : "MM Team",
    title : "Material Master - Utility",
    subtitle : "Select for More Details",
    icon : "images/qgn_menu_browser.svg",
    showHeader : false,
    logo : "images/TE_Logo.jpg",
    sidebarWidth : "226px",
    facets : [{
        key : "overview",
        text : "Overview"
    }, 
    
    {
        key : "contacts",
        text : "Contacts",
        quantity: 3
    }, {
        key : "items",
        text : "Items",
        quantity: 3
    }, {
        key : "related_documents",
        text : "Related Documents",
        quantity: 0
    }, {
        key : "addresses",
        text : "Addresses",
        quantity: 0
    }, {
        key : "activities",
        text : "Activities",
        quantity: 0
    }, {
        key : "Leads",
        text : "Leads",
        quantity: 0
    }, {
        key : "bank_details",
        text : "Bank Details",
        quantity: 0
    }, {
        key : "analytics",
        text : "Analytics",
        quantity: 0
    }],
    headerContent : 
    	
    	[{
        title : "General Information",
        content : [{
            label : "Delivery Status",
            text : "Ordered"
        }, {
            label : "Invoice Status",
            text : "Partially Invoiced"
        }, {
            label : "Total Value",
            text : "91.680,00 USD"
        }, {
            label : "Sales",
            text : "Global Sales"
        }, {
            label : "Organization",
            text : "Consumer Industries"
        }, {
            label : "Lorem",
            text : "Ipsum"
        }, {
            label : "Dolor",
            text : "Sit Amet"
        }, {
            label : "Tempor",
            text : "Labore"
        }]
    }, {
        title : "Sub-Header",
        content : [{
            label : "Customer",
            text : "Bortelli Corp"
        }, {
            label : "Recipient",
            text : "John Bradford"
        }, {
            label : "Ordered On",
            text : "Nov. 11, 2012"
        }, {
            label : "Last Changed On",
            text : "Jan. 1, 2013"
        }, {
            label : "Created By",
            text : "Steven Tyler"
        }, {
            label : "Lorem",
            text : "Ipsum"
        }, {
            label : "Nonumy",
            text : "Takimata"
        }, {
            label : "Justo",
            text : "Duo Elitr"
        }, {
            label : "Labore",
            text : "Sanctus"
        }]
    }, /*{
        title : "Lorem Ipsum",
        content : [{
            label : "Lorem",
            text : "Rebum"
        }, {
            label : "Ipsum",
            text : "Tempor"
        }, {
            label : "At Vero",
            text : "Invidunt"
        }, {
            label : "Voluptua",
            text : "Nonumy"
        }]
    }*/],
    
    facetContent : oOverviewData
};

var oModel = new sap.ui.model.json.JSONModel();
oModel.setData(oData);

var oFacetTemplate = new sap.suite.ui.commons.CountingNavigationItem({
    key : "{key}",
    text : "{text}",
    quantity: "{quantity}"
});

var oHeaderContentTemplate = new sap.ui.ux3.ThingGroup({
    title : "{title}",
    content : new sap.ui.commons.layout.MatrixLayout({
        rows : {
            path : "content",
            template : new sap.ui.commons.layout.MatrixLayoutRow({
                cells : [
                    new sap.ui.commons.layout.MatrixLayoutCell({
                        hAlign : sap.ui.commons.layout.HAlign.End,
                        vAlign : sap.ui.commons.layout.VAlign.Top,
                        content : new sap.ui.commons.Label({
                            text : {
                                path : "label",
                                formatter : function(fValue) {
                                    return fValue + ":"
                                }
                            }
                        })
                    }),
                    new sap.ui.commons.layout.MatrixLayoutCell({
                        hAlign : sap.ui.commons.layout.HAlign.Begin,
                        vAlign : sap.ui.commons.layout.VAlign.Top,
                        content : new sap.ui.commons.TextView({
                            text : "{text}"
                        })
                    })
                ]
            })
        }
    })
});

function setContent(sKey) {
    switch (sKey) {
        case "overview":
            oData.facetContent = oOverviewData;
            break;
        case "contacts":
            oData.facetContent = oContactsData;
            break;
        case "items":
            oData.facetContent = oItemsData;
            break;
        case "related_documents":
            oData.facetContent = oRelDocsData;
            break;
        default:
            oData.facetContent = {};
    }
    oThingViewer.getModel().updateBindings();
}

var oThingViewer = new sap.suite.ui.commons.ThreePanelThingViewer({
    id : "thingTest",
    title : "{/title}",
    titleLink : "{/titleLink}",
    subtitle : "{/subtitle}",
    type : "{/type}",
  //  icon : "{/icon}",
    showHeader : "{/showHeader}",
    logo : "{/logo}",
    description : "{/description}",
    sidebarWidth : "{/sidebarWidth}",
    width : "1024px",
    height : "720px" ,   
    
    facets : {
        path : "/facets",
        template : oFacetTemplate
    },
    headerContent : {
        path : "/headerContent",
        template : oHeaderContentTemplate
    },
    facetContent : {
        path : "/facetContent",
        template : oFacetContentTemplate
    },
    menuContent : [
        new sap.ui.commons.Link({text: "1st Transaction Lorem Ipsum Dolor Sit Amet Lorem Ipsum", href: "http://www.sap.com"}),
        new sap.ui.commons.Link({text: "2nd Transaction Dolor Sit Amet Tempor", href: "http://www.sap.com"}),
/*        new sap.ui.commons.Link({text: "3rd Transaction Takimata Nonumy Duo Elitr", href: "#"}),
        new sap.ui.commons.Link({text: "4th Transaction Sanctus Invidunt Nonumy", href: "#"}),
        new sap.ui.commons.Link({text: "5th Transaction Labore Magna Accusam At", href: "#"}),
        new sap.ui.commons.Link({text: "6th Transaction Vero Conseteur Duo Justo", href: "#"}),
        new sap.ui.commons.Link({text: "7th Transaction Nagsy Nonumy Duo Elitr", href: "#"}),
        new sap.ui.commons.Link({text: "8th Transaction Sanctus Invidunt Nagsy", href: "#"}),
        new sap.ui.commons.Link({text: "9th Transaction Labore Magna Nagsy", href: "#"}),
        new sap.ui.commons.Link({text: "10th Transaction Vero Conseteur Nagsy", href: "#"})*/
    ],

    facetSelected : function(oEvent) {
        var sFacetKey = oEvent.getParameters().key;
        setContent(sFacetKey);
        this.setShowHeader("overview" == sFacetKey);
    }
});

oThingViewer.setModel(oModel);


oThingViewer.setSelectedFacet(oThingViewer.getFacets()[0]);

//create a Vertical Splitter
var oSplitVHome = new sap.ui.commons.Splitter("SplitVHome"); 
oSplitVHome.setSplitterOrientation(sap.ui.commons.Orientation.vertical);
oSplitVHome.setSplitterPosition("30%");
oSplitVHome.setMinSizeFirstPane("40%");
oSplitVHome.setMinSizeSecondPane("30%");
oSplitVHome.setWidth("100%");
oSplitVHome.setHeight("600px");

//adding Labels to both panes

oSplitVHome.addFirstPaneContent(oThingViewer);	
oSplitVHome.addSecondPaneContent(oFeed);		


function handler(oEvent) {
	//alert("Event '"+oEvent.getId()+"' triggered");
	
/*					sap.ui
	.getCore()
	.byId(
			"PI_Browser")
	.close();		*/					
}

var oOverlayContainer = new sap.ui.ux3.OverlayContainer({
    width : "100%",
    height : "100%" ,   	
	
});
oOverlayContainer.addContent(oFeed);	
oOverlayContainer.addStyleClass("overlay"); 
oOverlayContainer.attachClose(handler);
oOverlayContainer.attachOpen(handler);
oOverlayContainer.attachOpenNew(handler);			
    
    
    
    
