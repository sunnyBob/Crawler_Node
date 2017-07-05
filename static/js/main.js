$("input[name=crawler]").click(function() {
	var pageNum = $("input[name=page]").val()
	$.ajax({
		url: "http://127.0.0.1:3000/videos",
		type: "GET",
		dataType: "json",
		data: {
			pageNum: pageNum
		},
		success: function(data) {
			$("#video").html(Mustache.render($("#temp").html(), data.videos))
		},
		error: function(err) {
			console.log(err)
		}
	})
})
