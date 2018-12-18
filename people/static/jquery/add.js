	var index = parent.layer.getFrameIndex(window.name);
	$.fn.validate = function (tips) {

		if ($(this).val() == "" || $.trim($(this).val()).length == 0) {
			parent.layer.msg('请输入' + tips);
			throw SyntaxError();
		}
	}
function add() {
		$("#name").validate("姓名");
		if (!isChinaName($("#name").val())) {
			parent.layer.msg('姓名格式不合法');
			throw SyntaxError();
		}
		$("#number_phone").validate("电话");
		if (!isPhoneNo($("#number_phone").val())){
			parent.layer.msg('电话格式不合法');
			throw SyntaxError();
		}
		$("#email").validate("邮箱");
		if (!isEmail($("#email").val())) {
			parent.layer.msg('邮箱格式不合法');
			throw SyntaxError();
		}
		$("#address").validate("地址");
		if (!isaddress($("#address").val())) {
			parent.layer.msg('地址格式不合法');
			throw SyntaxError();
		}
		$("#QQ").validate("QQ");
		if(!isQQ($("#QQ").val())){
			parent.layer.msg('QQ格式不合法');
			throw SyntaxError();
		}
		isQQ($("QQ").val());
		$("#school").validate("学校");
		if (!isschool($("#school").val())) {
			parent.layer.msg('学校格式不合法');
			throw SyntaxError();
		}
		$.ajax({
			url:'add',
			type:'POST',
			data:{
				'name':$("#name").val(),
				'phone':$("#number_phone").val(),
				'email':$("#email").val(),
				'address':$("#address").val(),
				'QQ':$("#QQ").val(),
				'school':$("#school").val()
			},
			dataType:'json',
			success:function(data){
				alert(data["result"]),
				window.parent.location.reload(),
				parent.layer.close(index);
			}
		});
}
	$(document).on('click', '#cancel_btn', function () {
		parent.layer.close(index);
	});
function isChinaName(name) {//验证姓名
	var pattern = /^[\u4E00-\u9FA5]{1,15}$/;
	return pattern.test(name);
}
function isschool(name) {//学校
	var pattern = /^[\u4E00-\u9FA5]{4,20}$/;
	return pattern.test(name);
}
function isaddress(address) {//验证地址
	var pattern = /^[\u4E00-\u9FA5]{2,30}$/;
	return pattern.test(address);
}
// 验证手机号
function isPhoneNo(phone) {
	var pattern = /^1[34578]\d{9}$/;
	return pattern.test(phone);
}
function isEmail(str) {//验证邮箱
	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	return reg.test(str);
} 
function isQQ(str) {
	//验证QQ
	var reg = /^[1-9][0-9]{4,9}$/gim;
	return reg.test(str);
}
