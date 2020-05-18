jQuery(document).ready(function($) {
	var nv1 = $('.nv1').toArray();
	var nv2 =$('.nv2').toArray();
	var nv3 = $('.nv3').toArray();
	var a =$('.a').toArray();
	var b =$('.b').toArray();
	var c =$('.c').toArray();
	var d = $('.thue').toArray();
	$('.tienthuong').click(function(){
		var max1 = nv1[0].value;
		for(var i = 0;i<nv1.length;i++){
			if(nv1[i].value>max1){
				max1=nv1[i].value;
				$('.thuong1').css('color','blue');
			}
		}
		$('.thuong1').val(max1);
		var max2 = nv2[0].value;
		for(var i = 0;i<nv2.length;i++){
			if(nv2[i].value>max2){
				max2=nv2[i].value;
				$('.thuong2').css('color','blue');
			}
		}
		$('.thuong2').val(max2);
		var max3 = nv3[0].value;
		for(var i = 0;i<nv3.length;i++){
			if(nv3[i].value>max3){
				max3=nv3[i].value;
				$('.thuong3').css('color','blue');
			}
		}
		$('.thuong3').val(max3);
		$('#thuong').css('color', 'blue');
		$('#notethuong').text('Tiền thưởng tháng cao nhất');
		for(var i = 0 ;i<a.length;i++){
			if(a[i].value>-1){
				a[i].value='';
				b[i].value='';
				c[i].value='';
			}
		}
	})
	$('.ketqua').click(function(){
		var sum1=0;
		var sum2=0;
		var sum3=0;
		$('.a').css('color','red');
		$('.a1').css('color','red');
		for(var i = 0;i<nv1.length;i++){
			var tt = nv1[i].value||0;
			var ttt = Number(tt);
			sum1+=ttt;
		}
		for(var i = 0;i<nv2.length;i++){
			var b = nv2[i].value||0;
			var bb = Number(b);
			sum2+=bb;
		}
		for(var i = 0;i<nv3.length;i++){
			var c = nv3[i].value||0;
			var cc = Number(c);
			sum3+=cc;
		}
		$('.luongnv1').val(sum1);
		$('.luongnv2').val(sum2);
		$('.luongnv3').val(sum3);
		$('#loiluong').text('Lương dưới 1000 k tính thuế');
	})
	$('.luong').click(function(){
	
	$('.tong').css('color','green');
	$('.c').css('color','green');
	$('.tiencongty').css('color','green');
	var loi = document.getElementsByClassName('loithue');
		var sum =0;
		for(var i=0;i<b.length;i++){
			var tien = a[i].value||0;
			var thue =b[i].value||0;
			if (tien>1000) {
				var luong = Number(tien)-Number(tien)*Number(thue)/100;
			}
			else{
				var luong = Number(tien);
				b[i].disable = true;
			}
			c[i].value = luong;
			sum +=luong;
		}
		$('.tiencongty').val(sum);
		$('#loithue').text('Thuế mặc định là 0%');
		

	})
});
