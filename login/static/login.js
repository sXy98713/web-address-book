function check() {
	var username = document.getElementById("username");
	var pass = document.getElementById("password");
	if (username.value == "") {
		alert("请输入用户名");
		return false;
	}
	else if (pass.value == "") {
		alert("请输入密码");
		return false;
	} else if (!isRegisterUserName(username.value)){//如不符要求
		alert("用户名不合法!");
		return false;
	} else if (isPasswd(pass.value)){
		alert("密码不合法！");
		return false;
	}
}
function isRegisterUserName(s) {1
	var patrn = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
	if (!patrn.exec(s)) {
		return false;
	}
	return true;
}
function isPasswd(s) {
	var patrn = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
	if (!patrn.exec(s)) return false
	return true
}   
