														var oTVBrowserUsed =	new sap.ui.commons.TextView(
													{
														text : "Browser Used: \n"
																+ navigator.appCodeName,
													});
											
											
										var oTVBrowserAgent =	new sap.ui.commons.TextView(
													{
														text : "You browser provides the following information:\n"
																+ navigator.userAgent,
													});		
										
										var oTVBrowserLoc =	new sap.ui.commons.TextView(
												{
													text : "My Location:\n"

												});		
										
										var oUserLocImage = new sap.ui.commons.Image("imgUserLoc");
										

										if (navigator.geolocation)
										{
											//alert("inside Navigator Function");
										   navigator.geolocation.getCurrentPosition(showPosition,showError);
										}
										else{
											alert("Geolocation is not supported by this browser.");
											}
										
										var oDivider = new sap.ui.commons.HorizontalDivider("divider", {width: "70%", type: "Area", height: "Small"});
									//	alert("Image URL:" +img_url);

										
											var oLayoutBrowser = new sap.ui.layout.VerticalLayout("BrowserLayout", {
												content: [oTVBrowserUsed,oDivider, oTVBrowserAgent, oDivider, oTVBrowserLoc,oDivider, oUserLocImage],
											});		



// create a simple Input field
					var oLyncContactInp = new sap.ui.commons.TextField('LyncContactInp');
				//	var oLyncContactInp = new sap.ui.commons.TextField();
					oLyncContactInp.setValue("balakrishnan.tharumar@te.com");
			
					oLyncContactInp.setTooltip("Lync Me");
					oLyncContactInp.attachChange(function(){alert('Lync User Name :'+ oInput1.getValue());});											
					
					var oLyncSubmit = new sap.ui.commons.Button("lyncSubmit",{
						text : "Lync Me",
					//	icon : "sap-icon://settings",
						style: sap.ui.commons.ButtonStyle.Accept,
						press : this.onLyncStart,
					});		
					// var userName  = sap.ui.getCore().byId('LyncContactInp').getValue(); 
					 var userName = oLyncContactInp.getValue();
						var html1 = new sap.ui.core.HTML({
						content: "<div"  +
						"<input id='userName'; type='text'style='position:relative;width:64px;height:64px'" +
						"<p><h1>Added Contact List</p>" +
						"<div id='users';style='position:relative;width:64px;height:64px'>" +
						"</div>",
						
					});											
					
	/*					var videoHtml = new sap.ui.core.HTML("videoHtml", {
			                content:
			                        "<video width='50%' height='50%' autoplay>" +
			                        "<source src='http://www.w3schools.com/html/movie.mp4' type='video/mp4'>" +
			                        "Your browser does not support the video tag." +
			                        "</video>"
			        });*/
			
						
					var oLayoutLync = new sap.ui.layout.VerticalLayout("LyncLayout", {
						content: [ oLyncContactInp, oLyncSubmit, html1],
					});		
		
				    //Create a panel instance
					var oVideoPanel = new sap.ui.commons.Panel();
					oVideoPanel.setTitle(new sap.ui.commons.Title({text: "Lync", icon: "images/lyncIcon.png"}));
					//Add something to the panel's content area
					oVideoPanel.addContent(oLayoutLync);								
					
					function onLyncStart()  {
						
						sap.ui.localResources("mmutility");
						jQuery.sap.require("mmutility.resources.lyncFunctions");					    
			//			jQuery.sap.require("mmutility.resources.loadCollections");	
						var userName  = sap.ui.getCore().byId('LyncContactInp').getValue(); 
					    var userElementId = getId(userName);
					    $('<div/>', {
					        text: userName,
					        id: userElementId,
					        class: 'user',
	    			        onmouseover: "showLyncPresencePopup('" + userName + "', this)",
					        onmouseout: "hideLyncPresencePopup()",
					    }).appendTo('#users');

					    if (nameCtrl) {
					        nameCtrl.GetStatus(userName, 'users');
					    }
					    $('#userName').val('');
	
	       }					
					
					
                    var nameCtrl = null;
                    
	/*				if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1){  

					}else{  
					       // To close a window not opened with JavaScript you will have to change the Firefox options...  
					       // go to "about:config" and set the value of "dom.allow_scripts_to_close_windows" to true...  
						nameCtrl = new ActiveXObject("Name.NameCtrl");
					}       */            
                     
				    try {
				        if (window.ActiveXObject) {
				            nameCtrl = new ActiveXObject("Name.NameCtrl");
				        } else {
				        	
				    //    	alert("inside if");

				        	
							if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1){  
								nameCtrl = CreateNPApiOnWindowsPlugin("application/x-sharepoint-uc");
								//alert("Chrome");
							}
							else if(navigator.userAgent.toLowerCase().indexOf('mozilla') > -1){  
								//nameCtrl = CreateNPApiOnWindowsPlugin("application/x-sharepoint-uc");
								nameCtrl = new ActiveXObject("Name.NameCtrl");
							//	alert("Mozilla");
							}	
							else{  

								nameCtrl = new ActiveXObject("Name.NameCtrl");
								
							}      				        	

				        }
				        attachLyncPresenceChangeEvent();
				    }
				    catch (ex) { }			


                   function IsSupportedNPApiBrowserOnWin() {
				        return true; // SharePoint does this: IsSupportedChromeOnWin() || IsSupportedFirefoxOnWin()
				    }

				    function IsNPAPIOnWinPluginInstalled(a) {
				        return Boolean(navigator.mimeTypes) && navigator.mimeTypes[a] && navigator.mimeTypes[a].enabledPlugin;
				    }

				    function CreateNPApiOnWindowsPlugin(b) {
				        var c = null;
				        if (IsSupportedNPApiBrowserOnWin())
				            try {
				                c = document.getElementById(b);
				                if (!Boolean(c) && IsNPAPIOnWinPluginInstalled(b)) {
				                    var a = document.createElement("object");
				                    a.id = b;
				                    a.type = b;
				                    a.width = "0";
				                    a.height = "0";
				                    a.style.setProperty("visibility", "hidden", "");
				                    document.body.appendChild(a);
				                    c = document.getElementById(b);
				                }
				            } catch (d) {
				                c = null;
				            }
				        return c;
				    }

				    
				    function showLyncPresencePopup(userName, target) {
				    	
				        if (!nameCtrl) {
				            return;
				        }

				        
				 /*       var status=null;
				        nameCtrl.GetStatus(userName, status);
				        
				        alert("Status" +status);*/
				        
				        var eLeft = $(target).offset().left;
				        var x = eLeft - $(window).scrollLeft();

				        var eTop = $(target).offset().top;
				        var y = eTop - $(window).scrollTop();
				        nameCtrl.ShowOOUI(userName, 0, x, y);
				    }

				    function hideLyncPresencePopup() {
				        if (!nameCtrl) {
				            return;
				        }
				        nameCtrl.HideOOUI();
				    }				    

				    function getLyncPresenceString(status) {
				    	//alert("Status" +status);
				        switch (status) {
				            case 0:
				                return 'available';
				                break;
				            case 1:
				                return 'offline';
				                break;
				            case 2:
				            case 4:
				            case 16:
				                return 'away';
				                break;
				            case 3:
				            case 5:
				                return 'inacall';
				                break;
				            case 6:
				            case 7:
				            case 8:
				            case 10:
				                return 'busy';
				                break;
				            case 9:
				            case 15:
				                return 'donotdisturb';
				                break;
				            default:
				                return '';
				        }
				    }

				    function attachLyncPresenceChangeEvent() {
				        if (!nameCtrl) {
				            return;
				        }
				        nameCtrl.OnStatusChange = onLyncPresenceStatusChange;
				    }

				    function onLyncPresenceStatusChange(userName, status, id) {
				        var presenceClass = getLyncPresenceString(status);

				        var userElementId = getId(userName);
				        var userElement = $('#' + userElementId);
				        removePresenceClasses(userElement);
				        userElement.addClass(presenceClass);

				    }

				    function removePresenceClasses(jqueryObj) {
				        jqueryObj.removeClass('available');
				        jqueryObj.removeClass('offline');
				        jqueryObj.removeClass('away');
				        jqueryObj.removeClass('busy');
				        jqueryObj.removeClass('donotdisturb');
				        jqueryObj.removeClass('inacall');
				    }

				    function getId(userName) {
				        return userName.replace('@', '_').replace('.', '_');
				    }
				    
				    
			    
