var url = "http://soapgateway.an.ad.anplc.co.uk:10002/webservices/BankDetails/BankDetails.asmx";
var soapRequest  ='<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" '
soapRequest = soapRequest + 'xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\"><soap:Body>'
soapRequest = soapRequest + '<BankDetails xmlns=\"http://CoreServices.SOAPGateway.abbey.com/BankDetails/Request\"><BankDetailsRequest>'
soapRequest = soapRequest + '<sortCode>'+ sortcode +'</sortCode><accountNo>'+ accountNumber +'</accountNo></BankDetailsRequest></BankDetails>'
soapRequest = soapRequest + '</soap:Body></soap:Envelope>'
  
xmlHttp.open("POST", url, false);   
xmlHttp.setRequestHeader("Content-type", "text/xml");
xmlHttp.setRequestHeader("SOAPAction", "http://CoreServices.SOAPGateway.abbey.com/BankDetails/Service");
xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState!=4) return;
			if(xmlHttp.status!=200)				
				{  alert(xmlHttp.status);
					alert("Problem accessing the data");
				    return;		
				}
		   if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {			   
				if (window.ActiveXObject !== undefined)
					{ xmlDoc = new ActiveXObject("Msxml2.DOMDocument"); }
				else if (document.implementation.createDocument) {
					xmlDoc = document.implementation.createDocument("", "", null);
					}	
				else { alert('Your browser cannot handle the script'); return}                    
				xmlDoc.loadXML(xmlHttp.responseText);
				if((xmlDoc.getElementsByTagName("exception").length==0)	&&(xmlDoc.getElementsByTagName("bankName").length >0))
					{	calculateIBAN();
						return;
					}
				else
                   {
						alert(thisAc + " is not a valid account number for the sortcode " +thisSC );
						document.formI.ac.select(); 
						return
					}
				}
			else
			{
 				alert("there has been a problem validating the account details")
				return false;
			}}	
xmlHttp.send(soapRequest);