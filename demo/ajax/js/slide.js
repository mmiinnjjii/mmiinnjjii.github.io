$(function() {
	$('.spring').each(function(i, e){
		let $uxPaging = $(e).find('.page');
		let $uxCur = $(e).find('.cur');
		let $uxTotal = $(e).find('.total');
		let $uxBtn = $(e).find('.btn');
		let $uxBtnNext = $(e).find('.next');
		let $uxBtnPrev = $(e).find('.prev');
		let $uxLst = $(e).find('.glist');
		let $uxLstItem = $(e).find('.glist figure');

		let uxcur = 0;
		let uxlen = 4;
		let uxpage = Math.ceil($uxLstItem.length / uxlen);
		$uxTotal.text(uxpage);

		uxSlice(uxcur);
		function uxSlice(uxcur){
			let uxidx = uxcur * uxlen;
			$uxCur.text(uxcur+1);
			$uxLstItem.hide().slice(uxidx, uxidx+uxlen).show();
		}
		$uxBtnNext.on('click', function(){
			uxcur ++;
			uxSlice(uxcur);
			if(uxcur >= uxpage){
				uxcur = 0;
				uxSlice(uxcur);
			}
			return false;
		});
		$uxBtnPrev.on('click', function(){
			uxcur --;
			uxSlice(uxcur);
			if(uxcur < 0){
				uxcur = uxpage-1;
				uxSlice(uxcur);
			}
			return false;
		});
	});
});
