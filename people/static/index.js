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
		return false;
	}
}