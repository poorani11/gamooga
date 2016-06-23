
$(document).ready(function(){
	$("#btnAdd").click(function () {
      $('#form').clone().insertAfter("#form");
    });
});