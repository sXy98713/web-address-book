function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // 这些HTTP方法不要求CSRF包含
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});
function addInfo(){
		layer.open({
			type: 2,
			title: '添加联系人',
			shadeClose: true,
			area: ['650px', '500px'],
			content:['/add_info'],
		});
	
}
function changeInfo(info)
{
		var index=layer.open({
			type:1,
			skin:'layui-layer-hui',
			area:['500px','400px'],
			content:'<div class="edit",style="margin-top:20px"><p>请输入新的联系人信息</p>'+
					'<p><label class="label_input">姓名: </label>'+
					'<input type="text" id="new_name" value="'+info.name+'"</p>'+
					'<p><label class="label_input">电话: </label>'+
					'<input type="text" id="new_phone" value="'+info.phone+'"</p>'+
					'<p><label class="label_input">邮箱: </label>'+
					'<input type="text" id="new_email" value="'+info.email+'"</p>'+
					'<p><label class="label_input">地址: </label>'+
					'<input type="text" id="new_address" value="'+info.address+'"</p>'+
					'<p><label class="label_input">QQ:  </label>'+
					'<input type="text" id="new_qq" value="'+info.qq+'"</p>'+
					'<p><label class="label_input">学校: </label>'+
					'<input type="text" id="new_school" value="'+info.school+'"</p></div>',
			btn:['提交','取消'],
			yes:function(index){
				var post_data={
					'old':info.name,
					'name':$('#new_name').val(),
					'phone':$('#new_phone').val(),
					'email':$('#new_email').val(),
					'address':$('#new_address').val(),
					'qq':$('#new_qq').val(),
					'school':$('#new_school').val(),
				}
				$.ajax({
					url:'editinfo',
					type:'POST',
					data:post_data,
					success:function(e){
						if(e=="1"){
							parent.location.reload();
							layer.msg("修改成功");
						}
						else{
							layer.msg("修改失败");
						}
					}
				});
			},
			btn2: function(index){
				layer.close(index);
			}
		});	
}	
function deleteInfo(name){
		if (window.confirm("您确认删除该条记录吗？")) {
        var post_data = {
			"username":name
		};
		$.ajax({
			url:'delete_info',
			type:'POST',
			data:post_data,
			dataType:'json',
			success:function(data){
				alert(data["status"]),
				window.location.reload(true);
			}
		});
	}
	else{
		alert("删除失败");
	}
}