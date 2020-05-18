jQuery(document).ready(function($) {
		$('#ketqua').click(function() {
			var a1 = $('#t1').val();
			var a = parseInt(a1)||0;
			var b1 = parseInt($('#t2').val())||0;
			var c1 = parseInt($('#t3').val())||0;
			var lai = parseInt($('#laixuat').val())||0;
			var sum = a+b1+c1;
			var tong = sum -lai*(sum/100);
			$('#tong').val(tong);
			var d=document.getElementById('laixuat');
			
		});

	});