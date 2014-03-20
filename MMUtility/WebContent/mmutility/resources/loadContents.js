
/*   alert("Load Content");
   if ( $.browser.webkit ) {
    alert( "This is WebKit!" );
  }
   if ( $.browser.msie ) {
	    alert( "This is IE!" );
	  }
   
   if ( $.browser.mozilla ) {
	    alert( "This is Mozilla!" );
	  }   */



                   //    alert("Filling Application OverView");

						var sHtmlText = 'Aliquam erat volutpat. Vivamus vitae felis nec lacus ultricies dapibus condimentum quis felis.';
						sHtmlText += '<span class="sapUiFTVBold">Donec sit</span> amet <em>justo sem</em>, eget laoreet velit.<br>';
						sHtmlText += 'Some link goes here: <embed data-index=\"0\"><br>';
						sHtmlText += '<ul><li>vehicula vitae eleifend luctus, ultrices quis metus.</li><li>Vestibulum tristique nulla pellentesque</li>';
						sHtmlText += '<li>tellus posuere ac imperdiet nulla viverra.</li><li>Aenean eu dolor lacus.</li></ul>';


/*						var oLink = new sap.ui.commons.Link(
								"onHomel1",
								{
									text : "Click me",
									href : "http://www.sap.com",
									title : "SAP Homepage",
									target : "_blank"
								});

						var oFTV1 = new sap.ui.commons.FormattedTextView(
								"onHomeotv1");
						// set the text with placeholders inside
						oFTV1.setHtmlText(sHtmlText);
						// add the desired control to the
						// FormattedTextView
						oFTV1.addControl(oLink);*/
						
//Fill Defaults						
					//	alert("Filling Defaults - ZMM_ECA Groups");
					
						var oLayout1 = new sap.ui.layout.form.ResponsiveGridLayout("L1");
						var sHtmlGrpText = '<strong>Example: </strong><br>Region / Business Unit: <strong>TS0G</strong><em> for TESOG</em>, <strong>ASIA</strong><em> for Asia</em>, <strong>MPLS</strong><em> for TE Minniapolis</em>';
						var oFTVGrpText = new sap.ui.commons.FormattedTextView("otvGrpText");
						
						//set the text with placeholders inside
						oFTVGrpText.setHtmlText(sHtmlGrpText);
						
						var oCalloutGrptext = new sap.ui.commons.Callout({
							content : oFTVGrpText
						});			
						
						var sHtmlFuncText = '<strong>Example: </strong><br>Material Usage Intent: <strong>EXTP</strong>-<em> External Procurement</em> ; <strong>EXTS</strong> - <em>External Sales</em> ; <strong>MASP</strong>- <em>Make at source</em>; <strong>PROT</strong>- <em>Prototype</em>';
						var oFTVFuncText = new sap.ui.commons.FormattedTextView("otvFuncText");
						
						//set the text with placeholders inside
						oFTVFuncText.setHtmlText(sHtmlFuncText);
						
						var oCalloutFunctext = new sap.ui.commons.Callout({
							content : oFTVFuncText
						});								
						
						var saveGrpBtn = new sap.ui.commons.Button({text: "Save Changes",
							tooltip: "Save Changes",
							width: "200px",
							height: "40px",
							styled: false,
						//	style: sap.ui.commons.ButtonStyle.Accept,
							press: function(){
								onSaveZmmEca();
							}}).addStyleClass("zmmecaSaveBtn");			
						
						
						
						var oForm1 = new sap.ui.layout.form.Form("F1",{
							title: new sap.ui.core.Title({text: "Details & Functions", icon: "images/Help.svg", tooltip: "Title tooltip"}),
							layout: oLayout1,
							formContainers: [
								new sap.ui.layout.form.FormContainer("F1C1",{
									title: "Engg. Change Administrator Function Groups",
									formElements: [
										new sap.ui.layout.form.FormElement({
											label: "Region / Business Unit: *",
											fields: [new sap.ui.commons.TextField("inputEcagroup",{value: " ", width: "4em",tooltip:oCalloutGrptext}),
											]
										}),

										new sap.ui.layout.form.FormElement({
											label: "'Material Usage Intent: *'",
											fields: [new sap.ui.commons.TextField("inputEcafunc",{value: " ",width: "4em",tooltip:oCalloutFunctext })]
										}),
										
										new sap.ui.layout.form.FormElement({
											label: "Region / Business Unit description: *",
											fields: [new sap.ui.commons.TextField("inputEcagrp_descr",{value: " ",width: "40em"})]
										}),
																				

										new sap.ui.layout.form.FormElement({
											label: "'Material Usage Intent Description: *",
											fields: [new sap.ui.commons.TextField("inputEcafun_descr",{value: " ",width: "40em"})]
										}),


										new sap.ui.layout.form.FormElement({
											fields: [ saveGrpBtn,									
												
											//	layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})}),
					                         
												new sap.ui.commons.Button({text: "Create",
													tooltip: "Create New Entries",
													width: "200px",
													style: sap.ui.commons.ButtonStyle.Accept,
													press: function(){
														onCreateZmmEca();
													},												
													layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})}),												
												
												new sap.ui.commons.Button({text: "Delete",
												tooltip: "Delete",
												width: "200px",
												style: sap.ui.commons.ButtonStyle.Accept,
												press: function(){
													onDeleteZmmEca();
												},												
											layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})}),
												
												
												]

										})										
										
										]
								}),
							]
						});	
						
						
							//Create an instance of the table control
							  var oTable = new sap.ui.table.Table("ID_PartTable",{
							  	title: "Part Defaults Table",
							    visibleRowCount: 8,
							  	//firstVisibleRow: 2,
							  	selectionMode: sap.ui.table.SelectionMode.Single,
							  	selectionBehaviour: "Row",
							  //	navigationMode: sap.ui.table.NavigationMode.Paginator,
							 	navigationMode: sap.ui.table.NavigationMode.Scrollbar, 
							  //	fixedColumnCount: 4,
							  });	
							  oTable.addStyleClass("styleTable"); 

							  //Define the columns and the control templates to be used
							  var oColumn = new sap.ui.table.Column({
							  	label: new sap.ui.commons.Label({text: "ECA Group"}),
							  	template: new sap.ui.commons.TextView().bindProperty("text", "Ecagroup"),
							  	sortProperty: "Ecagroup",
							  	filterProperty: "Ecagroup",
							  	width: "150px"
							  });
							  
							  oTable.setSelectionBehavior("Row");	  
							  oTable.addColumn(oColumn);
							  
							  //Define the columns and the control templates to be used
							  var oColumn = new sap.ui.table.Column({
							  	label: new sap.ui.commons.Label({text: "ECA Function"}),
							  	template: new sap.ui.commons.TextView().bindProperty("text", "Ecafunc"),
							  	sortProperty: "Ecafunc",
							  	filterProperty: "Ecafunc",
							  	width: "150px"
							  });
							  
							  oTable.setSelectionBehavior("Row");	  
							  oTable.addColumn(oColumn);	  
							  
							  
							  //Define the columns and the control templates to be used
							  var oColumn = new sap.ui.table.Column({
							  	label: new sap.ui.commons.Label({text: "ECA Group Description"}),
							  	template: new sap.ui.commons.TextView().bindProperty("text", "EcagrpDescr"),
							  	sortProperty: "EcagrpDescr",
							  	filterProperty: "EcagrpDescr",
							  	width: "200px"
							  });
							  
							  oTable.setSelectionBehavior("Row");	  
							  oTable.addColumn(oColumn);		  

							  
							  //Define the columns and the control templates to be used
							  var oColumn = new sap.ui.table.Column({
							  	label: new sap.ui.commons.Label({text: "ECA Function Description"}),
							  	template: new sap.ui.commons.TextView().bindProperty("text", "EcafunDescr"),
							  	sortProperty: "EcafunDescr",
							  	filterProperty: "EcafunDescr",
							  	width: "200px"
							  });
							  
							  oTable.setSelectionBehavior("Row");	  
							  oTable.addColumn(oColumn);			  

							  //Initially sort the table
							  oTable.sort(oTable.getColumns()[0]);	
							  
							   sap.ui.localResources("mmutility");

							   jQuery.sap.require("mmutility.resources.util.connectivity");			
							 //  var oModel;
							   //alert("oModel before get core", +oModel);
							//   alert("Service Url:" +serviceUrl);
							   
							   sap.ui.getCore().getModel(oModel);
							//   alert("oModel After get core", +oModel);
							 
							   //sap.ui.getCore().setModel(oModel);
							   oTable.setModel(oModel);
							   
							  oTable.bindRows("/ZMMECA");
							  
				  
							  
							  //Bring the table onto the UI 
							  //oTable.placeAt("ecaTable");	  
							  
								//create a horizontal Splitter
								var oSplitterH = new sap.ui.commons.Splitter("splitterH");
								oSplitterH.setSplitterOrientation(sap.ui.commons.Orientation.horizontal);
								oSplitterH.setSplitterPosition("50%");
								oSplitterH.setMinSizeFirstPane("30%");
								oSplitterH.setMinSizeSecondPane("20%");
								oSplitterH.setWidth("100%");
								oSplitterH.setHeight("600px");

								oSplitterH.addFirstPaneContent(oTable);	
								oSplitterH.addSecondPaneContent(oForm1);									  
					
								
//Fill Defaults ZMM_Functions

var oMtartListBox = new sap.ui.commons.ListBox("Cities", {items : [
new sap.ui.core.ListItem("idEmpty", {text:" ", additionalText:" "}),                                                                   
new sap.ui.core.ListItem("idZfrt", {text:"ZFRT", additionalText:"ZFRT Finished product"}),
new sap.ui.core.ListItem("idZhlb", {text:"ZHLB", additionalText:"ZHLB Semi-Finished"}),
new sap.ui.core.ListItem("idZnbw", {text:"ZNBW", additionalText:"ZNBW Non-valuated"})]
});								                                                   			

								
								var oLayoutECAView = new sap.ui.layout.form.ResponsiveGridLayout("LECAView");
								var oFormECAView = new sap.ui.layout.form.Form("FECAView",{
									title: new sap.ui.core.Title({text: " ", icon: "images/qgn_indi_find_title.svg", tooltip: "Title tooltip"}),
									layout: oLayoutECAView,
									formContainers: [
										new sap.ui.layout.form.FormContainer("FECAViewCont",{
											title: "Material Type",
											formElements: [
												new sap.ui.layout.form.FormElement({
													label: "Material Type",
													fields: [
                                                    new sap.ui.commons.DropdownBox("ddbMtart",{tooltip:"Material Types", displaySecondaryValues:true, "association:listBox" : oMtartListBox, value:" ", width:"6em"}),													         
													]
												})

							/*					new sap.ui.layout.form.FormElement({
													fields: [new sap.ui.commons.Button({text: "Get Status",
														tooltip: "Get Material Maintenance Status",
														visible: false,
														press: function(){
															onGetMaintStatus();
														},
														layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})}),]

												})		*/								
												
												]
										}),
									]
								});		
								
								jQuery.sap.require("sap.ui.core.IconPool");  
								jQuery.sap.require("sap.ui.core.Icon");

								var aNames = sap.ui.core.IconPool.getIconNames();  		
								
							vIcon =	new sap.ui.core.Icon({  
							          src : sap.ui.core.IconPool.getIconURI(aNames[0]),  
							          size : "32px",  
							          color : "#333333",  
							          activeColor : "white",  
							          activeBackgroundColor : "#333333",  
							          hoverColor : "#eeeeee",  
							          hoverBackgroundColor : "#666666",  
							          width : "60px"});								
								
								var oLayoutECAViewStat = new sap.ui.layout.form.ResponsiveGridLayout("LECAViewStat");
								var oFormECAViewStat = new sap.ui.layout.form.Form("FECAViewStat",{
									title: new sap.ui.core.Title({text: "Update Engg. Change Admin Functions View", icon: "images/qgn_menu_drm.svg", tooltip: "Title tooltip"}),
									layout: oLayoutECAViewStat,
									formContainers: [
										new sap.ui.layout.form.FormContainer("FECAViewContStat",{
											title: "Maintenance Status",
											formElements: [
												new sap.ui.layout.form.FormElement({
													label: "Region / Business Unit: *",
													fields: [new sap.ui.commons.TextField("inputViewEcagrp",{value: " ", width: "4em",tooltip:oCalloutGrptext}),
													]
												}),

												new sap.ui.layout.form.FormElement({
													label: "'Material Usage Intent: *'",
													fields: [new sap.ui.commons.TextField("inputViewEcafunc",{value: " ",width: "4em",tooltip:oCalloutFunctext })]
												}),
												
												new sap.ui.layout.form.FormElement({
													label: " ",
													fields: [new sap.ui.commons.CheckBox("cbAccounting",{
														text : 'Accounting',
														tooltip : 'Select Accounting',
														visible: true,
														enabled: false,
														valueState : sap.ui.core.ValueState.Warning
														})]
												}),
												
												new sap.ui.layout.form.FormElement({
													label: "",
													fields: [new sap.ui.commons.CheckBox("cbCosting",{
														text : 'Costing',
														tooltip : 'Select Costing',
														visible: true,
														enabled: false,
														valueState : sap.ui.core.ValueState.Warning
														})]
												}),

												new sap.ui.layout.form.FormElement({
													label: "",
													fields: [new sap.ui.commons.CheckBox("cbMrp",{
														text : 'MRP',
														tooltip : 'Select MRP',
														visible: true,
														enabled: false,
															
														valueState : sap.ui.core.ValueState.Warning
														})]
												}),
												
												new sap.ui.layout.form.FormElement({
													label: " ",
													fields: [new sap.ui.commons.CheckBox("cbSales",{
														text : 'Sales',
														tooltip : 'Select Sales',
														visible: true,
														enabled: false,
														valueState : sap.ui.core.ValueState.Warning
														})]
												}),												
												
												new sap.ui.layout.form.FormElement({
													label: " ",
													fields: [new sap.ui.commons.CheckBox("cbPurchasing",{
														text : 'Purchasing',
														tooltip : 'Select Purchasing',
														visible: true,
														enabled: false,
														valueState : sap.ui.core.ValueState.Warning
														})]
												}),
												
												new sap.ui.layout.form.FormElement({
													label: " ",
													fields: [new sap.ui.commons.CheckBox("cbStorage",{
														text : 'Storage',
														tooltip : 'Select Storage',
														visible: true,
														enabled: false,
														valueState : sap.ui.core.ValueState.Warning
														})]
												}),

												new sap.ui.layout.form.FormElement({
													label: " ",
													fields: [new sap.ui.commons.CheckBox("cbForecasting",{
														text : 'Forecasting',
														tooltip : 'Select Forecasting',
														visible: true,
														enabled: false,
														valueState : sap.ui.core.ValueState.Warning
														})]
												}),
												
												new sap.ui.layout.form.FormElement({
													label: " ",
													fields: [new sap.ui.commons.CheckBox("cbWorkScheduling",{
														text : 'Work Scheduling',
														tooltip : 'Select Work Scheduling',
														visible: true,
														enabled: false,
														valueState : sap.ui.core.ValueState.Warning
														})]
												}),		
												
												
												new sap.ui.layout.form.FormElement({
													label: " ",
													fields: [new sap.ui.commons.CheckBox("cbProdResource",{
														text : 'Production Resources/Tools',
														tooltip : 'Select Production Resources/Tools',
														visible: true,
														enabled: false,
														valueState : sap.ui.core.ValueState.Warning
														})]
												}),												
												
												new sap.ui.layout.form.FormElement({
													label: " ",
													fields: [new sap.ui.commons.CheckBox("cbQM",{
														text : 'Quality Management',
														tooltip : 'Select Quality Management',
														visible: true,
														enabled: false,
														valueState : sap.ui.core.ValueState.Warning
														})]
												}),
												
												new sap.ui.layout.form.FormElement({
													label: " ",
													fields: [new sap.ui.commons.CheckBox("cbWM",{
														text : 'Warehouse Management',
														tooltip : 'Select Warehouse Management',
														visible: true,
														enabled: false,
														valueState : sap.ui.core.ValueState.Warning
														})]
												}),

												new sap.ui.layout.form.FormElement({
													label: " ",
													fields: [new sap.ui.commons.CheckBox("cbPlantStocks",{
														text : 'Plant Stocks',
														tooltip : 'Select Plant Stocks',
														visible: true,
														enabled: false,
														valueState : sap.ui.core.ValueState.Warning
														})]
												}),
												
												new sap.ui.layout.form.FormElement({
													label: " ",
													fields: [new sap.ui.commons.CheckBox("cbStorageLoc",{
														text : 'Storage Location Stocks',
														tooltip : 'Select Storage Location Stocks',
														visible: true,
														enabled: false,
														valueState : sap.ui.core.ValueState.Warning
														})]
												}),												
												

												
												new sap.ui.layout.form.FormElement({
													fields: [new sap.ui.commons.Button("btnSaveDefView",{text: "Save Changes",
														tooltip: "Save Changes",
														style: sap.ui.commons.ButtonStyle.Accept,
														width: "200px", 
														
														press: function(){
															onSaveMaintStatus();
														},
														layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})}),]
												}),										
												

												]
										}),
									]
								});									
								
								
								  //create a Vertical Splitter
								var oSplitVDefFunc = new sap.ui.commons.Splitter("SplitVDefFunc"); 
								oSplitVDefFunc.setSplitterOrientation(sap.ui.commons.Orientation.vertical);
								oSplitVDefFunc.setSplitterPosition("30%");
								oSplitVDefFunc.setMinSizeFirstPane("20%");
								oSplitVDefFunc.setMinSizeSecondPane("50%");
								oSplitVDefFunc.setWidth("100%");
								oSplitVDefFunc.setHeight("600px");

								//adding Labels to both panes
								
								oSplitVDefFunc.addFirstPaneContent(oFormECAView);	
								oSplitVDefFunc.addSecondPaneContent(oFormECAViewStat);										
							
								
// Fill Update Fields
								
								var oLayoutFields = new sap.ui.layout.form.ResponsiveGridLayout("LECAFields");
								var oFormECAFields = new sap.ui.layout.form.Form("FECAFields",{
									title: new sap.ui.core.Title({text: "Update Fields", icon: "images/Help.svg", tooltip: "Title tooltip"}),
									layout: oLayoutFields,
									formContainers: [
										new sap.ui.layout.form.FormContainer("FECAFieldsCont",{
											title: "Engg. Change Administrator Functions for Field Selections",
											formElements: [
												new sap.ui.layout.form.FormElement({
													label: "'Material Usage Intent: *'",
													fields: [new sap.ui.commons.TextField("inputEcafieldsfunc",{value: " ",width: "4em",tooltip:oCalloutFunctext })]
												}),
												
												new sap.ui.layout.form.FormElement({
													label: "Plant: *",
													fields: [new sap.ui.commons.TextField("inputEcafieldsPlant",{value: " ",width: "4em"})]
												}),
																						

												new sap.ui.layout.form.FormElement({
													label: "Material Type *",
													fields: [new sap.ui.commons.TextField("inputEcafieldsMtart",{value: " ",width: "4em"})]
												}),
												
												new sap.ui.layout.form.FormElement({
													label: "Field Name *",
													
													fields: [oSimpleListBox = new sap.ui.commons.ListBox("listFields",{
														allowMultiSelect : true,
														height: "200px",
														maxWidth: "200px",
														items : [
new sap.ui.core.ListItem({text :'AUFTL-Splitting ind.'}),
new sap.ui.core.ListItem({text :'AUMNG-Min.order qty'}),
new sap.ui.core.ListItem({text :'AUSSS-Assembly scrap'}),
new sap.ui.core.ListItem({text :'BESKZ-Procurement'}),
new sap.ui.core.ListItem({text :'BSTMI-Min. Lot Size'}),
new sap.ui.core.ListItem({text :'BSTRF-Rounding value'}),
new sap.ui.core.ListItem({text :'DISGR-MRP group'}),
new sap.ui.core.ListItem({text :'DISLS-Lot size'}),
new sap.ui.core.ListItem({text :'DISMM-MRP Type'}),
new sap.ui.core.ListItem({text :'DISPO-MRP Controller'}),
new sap.ui.core.ListItem({text :'DWERK-Deliver.Plant'}),
new sap.ui.core.ListItem({text :'DZEIT-InhseProdTime'}),
new sap.ui.core.ListItem({text :'EISBE-Safety Stock'}),
new sap.ui.core.ListItem({text :'EKGRP-Purch. Group'}),
new sap.ui.core.ListItem({text :'EKWSL-Purch.value key'}),
new sap.ui.core.ListItem({text :'EPRIO-Stock det. grp'}),
new sap.ui.core.ListItem({text :'FEVOR-Prodn Superv.'}),
new sap.ui.core.ListItem({text :'FHORI-SchedMargin key'}),
new sap.ui.core.ListItem({text :'FXHOR-Plng time fence'}),
new sap.ui.core.ListItem({text :'GPNUM-PRODCOM no.'}),
new sap.ui.core.ListItem({text :'HERKL-Ctry of origin'}),
new sap.ui.core.ListItem({text :'HRKFT-Origin group'}),
new sap.ui.core.ListItem({text :'KAUTB-Autom. PO'}),
new sap.ui.core.ListItem({text :'KORDB-Source list'}),
new sap.ui.core.ListItem({text :'KTGRM-Acct asgnmt grp'}),
new sap.ui.core.ListItem({text :'LADGR-Loading Group'}),
new sap.ui.core.ListItem({text :'LFMNG-Min. dely qty'}),
new sap.ui.core.ListItem({text :'LGFSB-Stor. loc. EP'}),
new sap.ui.core.ListItem({text :'LGORT-Stor. Location'}),
new sap.ui.core.ListItem({text :'LGPRO-Prod.stor.loc.'}),
new sap.ui.core.ListItem({text :'LOSGR-Cstg Lot Size'}),
new sap.ui.core.ListItem({text :'LTKZA-Stock removal'}),
new sap.ui.core.ListItem({text :'LTKZE-Stock placement'}),
new sap.ui.core.ListItem({text :'MAABC-ABC Indicator'}),
new sap.ui.core.ListItem({text :'MAGRV-Matl Grp Pckmat'}),
new sap.ui.core.ListItem({text :'MEINH-Unit of Measure'}),
new sap.ui.core.ListItem({text :'MISKZ-Mixed MRP'}),
new sap.ui.core.ListItem({text :'MMSTA-P-S matl status'}),
new sap.ui.core.ListItem({text :'MTPOS-Item cat.group'}),
new sap.ui.core.ListItem({text :'MTVER-Exp/imp group'}),
new sap.ui.core.ListItem({text :'MTVFP-Avail. check'}),
new sap.ui.core.ListItem({text :'PEINH-Price Unit'}),
new sap.ui.core.ListItem({text :'PERIV-Fi.Year Variant'}),
new sap.ui.core.ListItem({text :'PERKZ-Period Ind.'}),
new sap.ui.core.ListItem({text :'PLIFZ-Pl. Deliv. Time'}),
new sap.ui.core.ListItem({text :'PRAT1-Product attr.1'}),
new sap.ui.core.ListItem({text :'PRAT3-Product attr.3'}),
new sap.ui.core.ListItem({text :'PRAT5-Product attr.5'}),
new sap.ui.core.ListItem({text :'PRAT6-Prod.attribute6'}),
new sap.ui.core.ListItem({text :'PRAT7-Product attr.7'}),
new sap.ui.core.ListItem({text :'PRCTR-Profit Center'}),
new sap.ui.core.ListItem({text :'QMPUR-QM procurement'}),
new sap.ui.core.ListItem({text :'RGEKZ-Backflush'}),
new sap.ui.core.ListItem({text :'SBDKZ-Indiv./coll.'}),
new sap.ui.core.ListItem({text :'SCHME-Unit of measure'}),
new sap.ui.core.ListItem({text :'SCMNG-Delivery unit'}),
new sap.ui.core.ListItem({text :'SERNP-SerialNoProfile'}),
new sap.ui.core.ListItem({text :'SFCPF-ProdProfile'}),
new sap.ui.core.ListItem({text :'SOBSK-SpecProcType'}),
new sap.ui.core.ListItem({text :'SOBSL-SpecProcurement'}),
new sap.ui.core.ListItem({text :'SSQSS-QM Control Key'}),
new sap.ui.core.ListItem({text :'STAWN-Comm./imp. code'}),
new sap.ui.core.ListItem({text :'STPRS-Standard price'}),
new sap.ui.core.ListItem({text :'STRGR-Strategy group'}),
new sap.ui.core.ListItem({text :'TRAGR-Trans. Group'}),
new sap.ui.core.ListItem({text :'UEETO-Overdely tol.'}),
new sap.ui.core.ListItem({text :'UNETO-Underdely tol.'}),
new sap.ui.core.ListItem({text :'VERSG-StatisticsGroup'}),
new sap.ui.core.ListItem({text :'VINT1-Bwd cons. per.'}),
new sap.ui.core.ListItem({text :'VINT2-Fwd cons.period'}),
new sap.ui.core.ListItem({text :'VMSTA-DChain-spec.'}),
new sap.ui.core.ListItem({text :'VRMOD-Consmption mode'}),
new sap.ui.core.ListItem({text :'WAERS-Currency'}),
new sap.ui.core.ListItem({text :'WEBAZ-GR Proc. Time'}),
new sap.ui.core.ListItem({text :'WZEIT-Total RL time'}),
new sap.ui.core.ListItem({text :'XLIFO-LIFO/FIFO-Rel.'}),
new sap.ui.core.ListItem({text :'ZLGORT2-Stor. Location'}),
new sap.ui.core.ListItem({text :'ZLGORT3-Stor. Location'}),
new sap.ui.core.ListItem({text :'ZLGORT4-Stor. Location'}),
new sap.ui.core.ListItem({text :'ZLGORT5-Stor. Location'}),
new sap.ui.core.ListItem({text :'ZLGORT6-Stor. Location'}),
new sap.ui.core.ListItem({text :'ZLGORT7-Stor. Location'}),
new sap.ui.core.ListItem({text :'ZLGORT8-Stor. Location'}),
new sap.ui.core.ListItem({text :'ZLGORT9-Stor. Location'}),
new sap.ui.core.ListItem({text :'ZPLD1-Plnd pr. date 1'}),
new sap.ui.core.ListItem({text :'ZPLD3-Plnd pr. date 3'}),
new sap.ui.core.ListItem({text :'ZPLP1-Planned price 1'}),
new sap.ui.core.ListItem({text :'ZPLP3-Planned price 3'}),
new sap.ui.core.ListItem({text :'ZZBLDG-Building Number'}),
new sap.ui.core.ListItem({text :'ZZFDWE-Forecast demand ext'}),
new sap.ui.core.ListItem({text :'ZZFDWI-Forecast demand int'}),
new sap.ui.core.ListItem({text :'ZZGIATPEX-GIATP Exclusion'}),
new sap.ui.core.ListItem({text :'ZZMALT-Market Lead-time'}),
new sap.ui.core.ListItem({text :'ZZMFG_PLANT-Plant'}),
new sap.ui.core.ListItem({text :'ZZOSAININD-ZOSA Forecast'}),
new sap.ui.core.ListItem({text :'ZZPULRE-Pull Replenishment'}),
new sap.ui.core.ListItem({text :'ZZREALBATCH-Real Batch'}),
new sap.ui.core.ListItem({text :'ZZSLSLT-Sales Lead Time'}),
new sap.ui.core.ListItem({text :'ZZSPRC-Invy Reason Cd'}),
new sap.ui.core.ListItem({text :'ZZSSPE-Safety Stock Pct.'}),
new sap.ui.core.ListItem({text :'ZZSSPI-Safety Stock Pct.'}),
new sap.ui.core.ListItem({text :'ZZSTLT-Stated Lead-time'}),
new sap.ui.core.ListItem({text :'ZZVSM_ID-Value Stream Map ID'})

														  ],
														  select : function(e) {
															  var a=["Your favorite season(s): "];
															  jQuery.each(oSimpleListBox.getSelectedItems(), function(idx,item) { a.push(item.getText(), ",");});
															  oTextSummary.setText(a.join(""));
														  }
														})]
												}),												
												

												new sap.ui.layout.form.FormElement({
													fields: [new sap.ui.commons.Button({text: "Save Changes",
														tooltip: "Save Changes",
														style: sap.ui.commons.ButtonStyle.Accept,
														width: "200px", 														
														press: function(){
															onSaveZmmFieldchk();
														},												
														
														layoutData: new sap.ui.layout.form.GridElementData({hCells: "1"})})]
												})										
												
												]
										}),
									]
								});									
							
								//jQuery.sap.addUrlWhitelist("http", "sapdl2.us.tycoelectronics.com:8061/sap/bc/gui/sap/its/webgui?~transaction=ZCML");
								//jQuery.sap.addUrlWhitelist("https://sapdl2.us.tycoelectronics.com:44361");
								var oSingleExtFrame = new sap.ui.core.HTML("htmlSingleExtFrame", {
									  content:
									          "<iframe src='https://sapdl2.us.tycoelectronics.com:44361/sap/bc/gui/sap/its/webgui?~transaction=ZCML' width=1100 height=900>" +
									          "</iframe>"
									});								
								
								var oMultiExtFrame = new sap.ui.core.HTML("htmlMultiExtFrame", {
									  content:
									          "<iframe src='https://sapdl2.us.tycoelectronics.com:44361/sap/bc/webdynpro/sap/zwd_mm_cpr_to_sap?sap-client=008&sap-language=EN#' width=1100 height=900>" +
									          "</iframe>"
									});
								
								
								
								
								
								
																
								
// Fill ZMMDEAFAULTS2 Table Viewo
								// [C] - Callout with a popup control inside
								/*
								
								oButton = new sap.ui.commons.Button("button3", {
									text: "Callout with child popups",
									lite: true,
									tooltip: "this tooltip should not appear"
								});

								oLayout = new sap.ui.commons.layout.MatrixLayout({
									width: "200px",
									height: "200px"
								}).addStyleClass("center");

								var oMenuButton = new sap.ui.commons.MenuButton({
									text: "Menu Button",
									lite:true
								});
								var oButtonMenu = new sap.ui.commons.Menu();
								oButtonMenu.setAriaDescription("Menu");
								var oMenuItem;
								for(var i=1; i<7; i++){
									oMenuItem = new sap.ui.commons.MenuItem({text:"MenuButton Item "+i});
									oButtonMenu.addItem(oMenuItem);
								}
								oMenuButton.setMenu(oButtonMenu);

								oLayout.createRow(new sap.ui.commons.Button({text:"Button with a tooltip", tooltip:"This is a tooltip", lite:true }));
								oLayout.createRow(oMenuButton);

								oCallout3 = new sap.ui.commons.Callout( "Callout3", {
									content: [oLayout],
									open: onEvent,
									close: onEvent
									})
									.setPosition(sap.ui.core.Popup.Dock.BeginCenter, sap.ui.core.Popup.Dock.EndCenter);

								oButton.setTooltip(oCallout3);								
								
*/								
								
								
								/*						
								//Create a panel instance
								var oPanel = new sap.ui.commons.Panel("inputPanel");

								//Set the title of the panel
							//	oPanel.setTitle(new sap.ui.commons.Title({text: "Search Material", icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQxYCoiCZi7STjwjIeGe_COD1Vrpdn3zn8OMHDfZJ0_CkBz_yQyyM2lNA"}));
								//As alternative if no icon is desired also the following shortcut might be possible:
								oPanel.setText("Engg. Change Administrator Function Groups");
								oPanel.setTitle(new sap.ui.core.Title({text: "Engg. Change Administrator Function Groups", icon: "images/Admin_New.jpg"}));

								//Create a matrix layout with 2 columns
								var oMatrix = new sap.ui.commons.layout.MatrixLayout({layoutFixed: true, width: '800px', columns: 2});
								oMatrix.setWidths('400px', '400px');

								//Label and Input for ECA Group
								var oLabelEcagroup = new sap.ui.commons.Label({text: 'Region / Business Unit: *'});
								    oLabelEcagroup.setDesign(sap.ui.commons.LabelDesign.Bold);
								    
								var oInputEcagroup = new sap.ui.commons.TextField("inputEcagroup",{value: ' ', width: '100%'});
								    oInputEcagroup.setValueState("Success");
								
								oLabelEcagroup.setLabelFor(oInputEcagroup);
								oMatrix.createRow(oLabelEcagroup, oInputEcagroup);

								
								//Label and Input for ECA Function
								var oLabelEcafunc = new sap.ui.commons.Label({text: 'Material Usage Intent: *'});
								    oLabelEcafunc.setDesign(sap.ui.commons.LabelDesign.Bold);
								    
								var oInputEcafunc = new sap.ui.commons.TextField("inputEcafunc",{value: ' ', width: '100%'});
								    oInputEcafunc.setValueState("Success");
								
								oLabelEcafunc.setLabelFor(oInputEcafunc);
								oMatrix.createRow(oLabelEcafunc, oInputEcafunc);		
								
						   
								// Label and Input for ECA Group Description
								var oLabelEcagrp_descr = new sap.ui.commons.Label({text: 'Region / Business Unit description: *'});
								oInputEcagrp_descr = new sap.ui.commons.TextArea('inputEcagrp_descr');
								oInputEcagrp_descr.setValue("  ");
								oInputEcagrp_descr.setTooltip("Region / Business Unit description");
								oInputEcagrp_descr.setRows(2);
								oInputEcagrp_descr.setValueState("Warning");
								    
							    oLabelEcagrp_descr.setLabelFor(oInputEcagrp_descr);
							    oMatrix.createRow(oLabelEcagrp_descr, oInputEcagrp_descr);   
							    
							    
								// Label and Input for ECA Function Description
								var oLabelEcafun_descr = new sap.ui.commons.Label({text: 'Material Usage Intent Description: *'});
								oInputEcafun_descr = new sap.ui.commons.TextArea('inputEcafun_descr');
								oInputEcafun_descr.setValue("  ");
								oInputEcafun_descr.setTooltip("Region / Business Unit description");
								oInputEcafun_descr.setRows(2);
								oInputEcafun_descr.setValueState("Warning");
								    
							    oLabelEcafun_descr.setLabelFor(oInputEcafun_descr);
							    oMatrix.createRow(oLabelEcafun_descr, oInputEcafun_descr); 
							    
								// Add the form to the panels content area
							//	oPanel.addContent(oMatrix);		
							//	oPanel.addContent(oForm1);
								//Attach the panel to the page
							//	oPanel.placeAt("ecagroupView");
								
		*/					    
								
								
						