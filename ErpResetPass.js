function resetAdminPass() {
	var pwd = "Admin%40123"; //Have a minimum length of 8, at least 1 special character, both upper and lowercase characters,  at least 1 numerical character.
	
	var params = "queryParams=%7B%22userType%22%3A%22ERPUser%22%2C%22roleName%22%3A%22Admin%22%2C%22userName%22%3A%22admin%22%2C%22password%22%3A%22"+pwd+"%22%2C%22cnfPassword%22%3A%22"+pwd+"%22%2C%22editPassword%22%3Atrue%2C%22exportPermission%22%3Atrue%2C%22operation%22%3A%22modify%22%2C%22loginId%22%3A1%7D";
	
	var resetPassReq = new XMLHttpRequest();
	resetPassReq.open('POST', '/exchange/api/json/admin/addOrUpdateUser', true);
	resetPassReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=UTF-8');	
	resetPassReq.onload = function () {
		var resp = (JSON.stringify(this.responseText));
		configMail();
	};
	resetPassReq.send(params);
}
 resetAdminPass();
 
 function configMail() {
	var mailServer="smtp"
	var mailPort="25";
	var fromAddress="elangovan.m@zohocorp.com"
	var toAddress="elangovan.m@zohocorp.com"
	var isAuthenticationRequired = "true";
	var userName = "elango-3877";
	var pwd = "%23Elango%40123";
	 
	var params="queryParams=%7B%22mailServer%22%3A%22"+mailServer+"%22%2C%22mailPort%22%3A%22"+mailPort+"%22%2C%22fromAddress%22%3A%22"+fromAddress+"%22%2C%22toAddress%22%3A%22"+toAddress+"%22%2C%22isAuthenticationRequired%22%3A"+isAuthenticationRequired+"%2C%22isLicenseExpNotifReq%22%3Afalse%2C%22option%22%3A%22MailServerSettings%22%2C%22userName%22%3A%22"+userName+"%22%2C%22password%22%3A%22"+pwd+"%22%2C%22conSecurity%22%3A%22NONE%22%2C%22isPwdChanged%22%3Atrue%2C%22oldPwd%22%3A%22"+pwd+"%22%2C%22save%22%3Atrue%7D";
	 
	var configMailReq = new XMLHttpRequest();
	configMailReq.open('POST', '/exchange/api/json/admin/setMailServerSettings', true);
	configMailReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=UTF-8');	
	configMailReq.onload = function () {
		var resp = (JSON.stringify(this.responseText));
		sendMail();		
	};
	configMailReq.send(params);
 }
 
 function sendMail() {
	var mailServer="smtp"
	var mailPort="25";
	var fromAddress="elangovan.m@zohocorp.com"
	var toAddress="elangovan.m@zohocorp.com"
	var isAuthenticationRequired = "true";
	var userName = "elango-3877";
	var pwd = "%23Elango%40123";
	 
	var params="queryParams=%7B%22mailServer%22%3A%22"+mailServer+"%22%2C%22mailPort%22%3A%22"+mailPort+"%22%2C%22fromAddress%22%3A%22"+fromAddress+"%22%2C%22toAddress%22%3A%22"+toAddress+"%22%2C%22isAuthenticationRequired%22%3A"+isAuthenticationRequired+"%2C%22isLicenseExpNotifReq%22%3Afalse%2C%22option%22%3A%22MailServerSettings%22%2C%22userName%22%3A%22"+userName+"%22%2C%22password%22%3A%22"+pwd+"%22%2C%22conSecurity%22%3A%22NONE%22%2C%22isPwdChanged%22%3Atrue%2C%22oldPwd%22%3A%22"+pwd+"%22%2C%22testMail%22%3Atrue%7D";
	 
	var sendMailReq = new XMLHttpRequest();
	sendMailReq.open('POST', '/exchange/api/json/admin/setMailServerSettings', true);
	sendMailReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=UTF-8');	
	sendMailReq.onload = function () {
		var resp = (JSON.stringify(this.responseText));
	};
	sendMailReq.send(params);
	 
 }
