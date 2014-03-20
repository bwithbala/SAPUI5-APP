sap.ui
		.jsview(
				"mmutility.landingView",
				{

					/**
					 * Specifies the Controller belonging to this View. In the
					 * case that it is not implemented, or that "null" is
					 * returned, this View does not have a Controller.
					 * 
					 * @memberOf mmutility.landingView
					 */
					getControllerName : function() {
						return "mmutility.landingView";
					},

					/**
					 * Is initially called once after the Controller has been
					 * instantiated. It is the place where the UI is
					 * constructed. Since the Controller is given to this
					 * method, its event handlers can be attached right away.
					 * 
					 * @memberOf mmutility.landingView
					 */
					createContent : function(oController) {
						
				//		alert("Calling On First Load");
						
						sap.ui.localResources("mmutility");
						jQuery.sap.require("mmutility.resources.loadThingIns");		
						jQuery.sap.require("mmutility.resources.loadCollections");
						jQuery.sap.require("mmutility.resources.lyncFunctions");
						jQuery.sap.require("mmutility.resources.loadTrainingContent");
					//	jQuery.sap.require("mmutility.resources.loadQuickHelpContents");
						
						
						oController.onFirstLoad();	
					//	alert("thing Insp" +othin)
				
						var sHtmlText = 'Aliquam erat volutpat. Vivamus vitae felis nec lacus ultricies dapibus condimentum quis felis.';
						sHtmlText += '<span class="sapUiFTVBold">Donec sit</span> amet <em>justo sem</em>, eget laoreet velit.<br>';
						sHtmlText += 'Some link goes here: <embed data-index=\"0\"><br>';
						sHtmlText += '<ul><li>vehicula vitae eleifend luctus, ultrices quis metus.</li><li>Vestibulum tristique nulla pellentesque</li>';
						sHtmlText += '<li>tellus posuere ac imperdiet nulla viverra.</li><li>Aenean eu dolor lacus.</li></ul>';

						var oLink = new sap.ui.commons.Link(
								"l1",
								{
									text : "Click me",
									href : "http://www.sap.com",
									title : "SAP Homepage",
									target : "_blank"
								});

						var oFTV1 = new sap.ui.commons.FormattedTextView(
								"otv1");
						// set the text with placeholders inside
						oFTV1.setHtmlText(sHtmlText);
						// add the desired control to the
						// FormattedTextView
						oFTV1.addControl(oLink);
						// attach it to an element in the page
						// oFTV1.placeAt("sample1");

					//	oShell.setContent(oFTV1);					
						
						
						var oThemeListBox = new sap.ui.commons.ListBox("lbTheme", {items : [
new sap.ui.core.ListItem("idGold", {text:"Gold Reflection", additionalText:"Gold Reflection Theme"}),
new sap.ui.core.ListItem("idBlueCrystal", {text:"Blue Crystal", additionalText:"SAP Blue Crystal Theme"}),
new sap.ui.core.ListItem("idPlatinum", {text:"Platinum", additionalText:"SAP Platinum Theme"}),
new sap.ui.core.ListItem("idHcb", {text:"High Contrast Black", additionalText:"High Contrast Black Theme"}),
new sap.ui.core.ListItem("idMobile", {text:"Mobile Theme", additionalText:"Mobile Theme"}),
]
});						
			
						function messageSelected(oEvent){
							var oMessage = oEvent.getParameter("message");
							var oNotifier = oEvent.getParameter("notifier");
							
							oNotifier.removeMessage(oMessage);
							oMessage.destroy();
						}						
						
					//	var img_url;
						
						

						var oShell = new sap.ui.ux3.Shell(
								"myShell",
								{
								//	appTitle : "TE Connectivity - Material Maintenance - One-Stop Utility",
								//	appIcon : "images/TE_Logo.jpg",
								//	appIconTooltip : "TE Connectivity",
									//headerType: sap.ui.ux3.ShellHeaderType.BrandOnly ,
									showLogoutButton : true,
									showSearchTool : false,
									showInspectorTool : true,
									showFeederTool : true,
									showTools:true,
									fullHeightContent: true,
									allowOverlayHeaderAccess: true,
									

									worksetItems : [

											new sap.ui.ux3.NavigationItem(
													"WI_home",
													{
														key : "wi_home",
														text : "Application Overview"
													}),

											new sap.ui.ux3.NavigationItem(
													"WI_defaults", {
														key : "wi_defaults",
														text : "Defaults",
															subItems : [
																		new sap.ui.ux3.NavigationItem(
																				"WI_DEF_ECA",
																				{
																					key : "wi_def_eca",
																					text : "Engg. Change Administrator Function Groups",
																					width: "20em",
																				}),
																		new sap.ui.ux3.NavigationItem(
																				"WI_DEF_VIEW",
																				{
																					key : "wi_def_view",
																					text : "Update Engg. Change Admin Functions View",
																					width: "20em",
																				}), 
																		new sap.ui.ux3.NavigationItem(
																				"WI_DEF_FIELDS",
																				{
																					key : "wi_def_fields",
																					text : "Update Fields"
																				}), 
																		
																		new sap.ui.ux3.NavigationItem(
																				"WI_DEF_DEF",
																				{
																					key : "wi_def_def",
																					text : "Update Defaults for Part Extension"
																				}), 																				
																			]				
																			
																														
													}),

											new sap.ui.ux3.NavigationItem(
													"WI_EXT",
													{
														key : "wi_ext",
														text : "Extension",
														subItems : [
																new sap.ui.ux3.NavigationItem(
																		"WI_EXT_SINGLE",
																		{
																			key : "wi_ext_single",
																			text : "Single Material"
																		}),
																new sap.ui.ux3.NavigationItem(
																		"WI_EXT_MULTI",
																		{
																			key : "wi_ext_multi",
																			text : "Multiple Material"
																		}), ]
													}),

											new sap.ui.ux3.NavigationItem(
													"WI_COPY",
													{
														key : "wi_copy",
														text : "Copy",

														subItems : [
																new sap.ui.ux3.NavigationItem(
																		"WI_COPY_SINGLE",
																		{
																			key : "wi_copy_single",
																			text : "Single Material"
																		}),
																new sap.ui.ux3.NavigationItem(
																		"WI_COPY_MULTI",
																		{
																			key : "wi_copy_multi",
																			text : "Multiple Material"
																		}), ]
													}),

											new sap.ui.ux3.NavigationItem(
													"WI_CHANGE",
													{
														key : "wi_change",
														text : "Change",

														subItems : [
																new sap.ui.ux3.NavigationItem(
																		"WI_CHANGE_SINGLE",
																		{
																			key : "wi_change_single",
																			text : "Single Material"
																		}),
																new sap.ui.ux3.NavigationItem(
																		"WI_CHANGE_MULTI",
																		{
																			key : "wi_change_multi",
																			text : "Multiple Material"
																		}), ]
													}),

											new sap.ui.ux3.NavigationItem(
													"WI_REPORTS", {
														key : "wi_reports",
														text : "Reports"
													}),

											new sap.ui.ux3.NavigationItem(
													"WI_SC", {
														key : "wi_supplychain",
														text : "Supply Chain"
													}),

											new sap.ui.ux3.NavigationItem(
													"WI_BOMEXT", {
														key : "wi_bomext",
														text : "BOM Extension"
													}),

											new sap.ui.ux3.NavigationItem(
													"WI_COSTING", {
														key : "wi_costing",
														text : "Costing"
													}),

									],

									// Panel Bar - Right Side Items
									paneBarItems : [
											new sap.ui.core.Item("PI_Date", {
												key : "pi_date",
												text : "Date"
											}),
											new sap.ui.core.Item("PI_Browser",
													{
														key : "pi_browser",
														text : "System Info"
													}), 
											new sap.ui.core.Item("PI_Lync",
													{
														key : "pi_lync",
														text : "Lync Me"
													})											
											
											],

									content : oTI,
									
									notificationBar: new sap.ui.ux3.NotificationBar({
										messageNotifier: new sap.ui.ux3.Notifier({
											title : "Messages"
										}).attachMessageSelected(messageSelected)
									}),									

									toolPopups : [ 
									              
									/*	            new sap.ui.commons.Button(
															"openFeed1",
															{
																text : "NewsFeeds",
																press : function(
																		oEvent) {
																	oController.onFeedDisplay(oEvent);
															    	sap.ui.getCore().byId("Feed").close();
																//	oOverlayContainer.open();
																	
																	sap.ui
																	.getCore()
																	.byId(
																			"openFeed1")
																	.close();																			
																}
															})	,		*/								              
							               
									               new sap.ui.ux3.ToolPopup(
															"Theme",
															{
																title : "Theme",
																tooltip : "Choose",
																icon : "images/Tools.png",
																iconHover : "images/Tools.png",
																autoClose: true,
																width: "20em",
																content : [ 
                                                                        new sap.ui.commons.DropdownBox("ddbTheme",
		                                                                {tooltip:"Select Theme", displaySecondaryValues:true, 
                                                                         "association:listBox" : oThemeListBox, value:" ", width:"20em"}),
																      ],
																      
															}),									              
									              
							               new sap.ui.ux3.ToolPopup(
											"Feed",
											{
												title : "News Feeds",
												tooltip : "Posts",
												icon : "images/chat-support.png",
												iconHover : "images/chat-support.png",
												//icon: "sap-icon://feed",
												autoClose: true,
											/*	press: function() {
													oOverlayContainer.open();
													oController.onFeedDisplay(oEvent);
											    	sap.ui.getCore().byId("Feed").close();
												},*/
												content : [ 
												     /*       new sap.ui.commons.TextView(
														{
															text : "Choose Feed options"
														}) */
												      ],
												buttons : [ 
												            new sap.ui.commons.Button(
																	"openFeed",
																	{
																		text : "NewsFeeds",
																		press : function(
																				oEvent) {
																			oController.onFeedDisplay(oEvent);
																	    	sap.ui.getCore().byId("Feed").close();
																		//	oOverlayContainer.open();
																			
																			sap.ui
																			.getCore()
																			.byId(
																					"openFeed")
																			.close();																			
																		}
																	})	,											           
												            
								/*				         new sap.ui.commons.Button(
														"cancelContactButton",
														{
															text : "Close News Feed",
															press : function(
																	oEvent) {
																
																oOverlayContainer.close();
																sap.ui
																		.getCore()
																		.byId(
																				"openFeed")
																		.close();
																sap.ui
																.getCore()
																.byId(
																		"Feed")
																.close();																
															}
														})*/
														
												]
											}),
											

											
											
									
									],

									headerItems : [
											new sap.ui.commons.TextView({
												text : "User Name",
												icon: "sap-icon://person-placeholder",
												tooltip : "U.Name"
											}),

											   new sap.ui.commons.Button("btnQuickHelp",
														{
															text : "Quick Help ",
															tooltip : "Quick Help",
															icon: "sap-icon://education",
															press : function(oEvent) {
																oOCQuickHelp.open();

															}
														}),															
												
										   new sap.ui.commons.Button("btnTrain",
															{
																text : "How To Videos",
																tooltip : "How To Videos",
																icon: "sap-icon://video",
																press : function(oEvent) {
																	oOCTraining.open();

																}
															}),		
															
															new sap.ui.commons.Button(
																	{
																		text : "Personalize",
																		tooltip : "Personalize",
																		icon: "sap-icon://action-settings",
																		press : function(oEvent) {
																			alert("Here could open an personalize dialog");
																		}
																	}),															
															
											new sap.ui.commons.MenuButton(
													{
														text : "Help",
														tooltip : "Help Menu",
														icon: "sap-icon://sys-help",
														menu : new sap.ui.commons.Menu(
																"menu1",
																{
																	items : [
																			new sap.ui.commons.MenuItem(
																					"menuitem1",
																					{
																						text : "Help"
																					}),
																			new sap.ui.commons.MenuItem(
																					"menuitem2",
																					{
																						text : "Report Incident"
																					}),
																			new sap.ui.commons.MenuItem(
																					"menuitem3",
																					{
																						text : "About"
																					}) ]
																})
													}) ],

									worksetItemSelected : function(oEvent) {
										var sId = oEvent.getParameter("id");
										var oShell = oEvent.oSource;
										
										oShell.removeAllContent();
														

										switch (sId) {

										case "WI_home":
											oController.onHome(oShell);
											break;

										case "WI_defaults":
											oController.onDefaults(oShell);											
											break;
											
										case "WI_DEF_VIEW":
											oController.onDefView(oShell);											
											break;

										case "WI_DEF_ECA":
											oController.onDefaults(oShell);											
											break;		
											
										case "WI_DEF_FIELDS":
											oController.onDefFields(oShell);											
											break;											

										case "WI_EXT":
											
											oController.onExt(oShell);
											break;
										case "WI_EXT_SINGLE":
											
											oController.onExtSingle(oShell);
											break;
										case "WI_EXT_MULTI":
											
											oController.onExtMulti(oShell);
											break;

										case "WI_COPY":
											
											oController.onCopy(oShell);
											break;
										case "WI_COPY_SINGLE":
											
											oController.onCopySingle(oShell);
											break;
										case "WI_COPY_MULTI":
											
											oController.onCopyMulti(oShell);
											break;

										case "WI_CHANGE":
											
											oController.onChange(oShell);
											break;
										case "WI_CHANGE_SINGLE":
											
											oController.onChangeSingle(oShell);
											break;
										case "WI_CHANGE_MULTI":
											oController.onChangeMulti(oShell);
											break;

										case "WI_REPORTS":
											oController.onReports(oShell);
											break;

										case "WI_SC":
											oController.onSc(oShell);
											break;

										case "WI_BOMEXT":
											oController.onBomext(oShell);
											break;

										case "WI_COSTING":
											oController.oncosting(oShell);
											break;

										default:
											break;
										}
									},
									
							//		selectedWorksetItem : 'WI_Home',

									paneBarItemSelected : function(oEvent) {
										var sKey = oEvent.getParameter("key");
										var oShell = oEvent.oSource;
										switch (sKey) {
										case "pi_date":
											var oDate = new Date();
											oShell
													.setPaneContent(
															new sap.ui.commons.TextView(
																	{
																		text : oDate
																				.toLocaleString()
																	}), true);
											break;
											
										case "pi_lync":
											oShell
													.setPaneContent( oVideoPanel
															
															);
											

											break;											
										case "pi_browser":
											oShell.setPaneContent( oLayoutBrowser );
											break;
										default:
											break;
										}
									},

									logout : function() {
										openConfirm();
										
										function openConfirm() {
											// open a simple confirm box
											sap.ui.commons.MessageBox.confirm("Are you sure want to Log off?", fnCallbackConfirm, "Logout from Application ");
										}
										function fnCallbackConfirm(bResult) {

											if((bResult) == true ) {
											
													if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1){  
													       window.open('', '_self', ''); //bug fix (Chrome)  
													       window.close();  
													}else{  
													       // To close a window not opened with JavaScript you will have to change the Firefox options...  
													       // go to "about:config" and set the value of "dom.allow_scripts_to_close_windows" to true...  
													       window.close();  
													}  																
													
											}
										}

										// to call the above function, we create a simple button
										//new sap.ui.commons.Button({text:"Show Confirm!", press : openConfirm}).placeAt("sample2"); 										
										
										
										//alert("Logout Button has been clicked.\nThe application can now do whatever is required.");
									//	oshell.destroy();
							
										
									/*	window.open('', '_self', ''); //bug fix (Chrome)  
										window.close();  */
										
									},
									search : function(oEvent) {
										alert("Search triggered: "
												+ oEvent.getParameter("text"));
									},
									feedSubmit :function(oEvent) {
										oController.onFeedSubmit(oEvent);
									},
										 
								/*		
										alert("Feed entry submitted: "
												+ oEvent.getParameter("text"));
									},*/
									paneClosed : function(oEvent) {
										/*alert("Pane has been closed: "
												+ oEvent.getParameter("id"));*/
									}
								})

						.placeAt("content");

					},

				});




function showPosition(position)
{
var latlon=position.coords.latitude+","+position.coords.longitude;

var  img_url="http://maps.googleapis.com/maps/api/staticmap?center="
+latlon+"&zoom=14&size=300x200&sensor=false";
// document.getElementById("mapholder").innerHTML="<img src='"+img_url+"'>";
//alert("Image URL inside Show Position:" +img_url);
var vUserLocImage = sap.ui.getCore().byId("imgUserLoc");	
vUserLocImage.setSrc(img_url);
vUserLocImage.setAlt("My Location");
//return vUserLocImage;

}

function showError(error)
{
/*switch(error.code) 
  {
 case error.PERMISSION_DENIED:
    //x.innerHTML="User denied the request for Geolocation."
    alert("User denied the request for Geolocation.");	  
    break;
  case error.POSITION_UNAVAILABLE:
  //  x.innerHTML="Location information is unavailable."
  	alert("Location information is unavailable.");
    break;
  case error.TIMEOUT:
    //x.innerHTML="The request to get user location timed out."
  	  alert("The request to get user location timed out.");  
    break;
  case error.UNKNOWN_ERROR:
    //x.innerHTML="An unknown error occurred."
  	  alert("An unknown error occurred.");  
    break;
  }*/
}