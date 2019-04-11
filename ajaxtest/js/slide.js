$(function(){
	$('.spring').each(function(i, e){
		var $mjCur = $(e).find('.cur');
		var $mjTot = $(e).find('.total');
		var $mjBtnNext = $(e).find('.next');
		var $mjBtnPrev = $(e).find('.prev');
		var $mjLst = $(e).find('.glist');
		var $mjLstItem = $(e).find('.glist figure');

		var mjcur = 0;
		var mjlen = 4;
		var mjpage = Math.ceil($mjLstItem.length / mjlen);
		$mjTot.text(mjpage);

		mjSlice(mjcur);
		function mjSlice(mjcur){
			var mjidx = mjcur * mjlen;
			$mjCur.text(mjcur+1);
			$mjLstItem.hide().slice(mjidx, mjidx+mjlen).show();
		}

		$mjBtnNext.on('click', function(){
			mjcur ++;
			mjSlice(mjcur);
			if(mjcur >= mjpage){
				mjcur = 0;
				mjSlice(mjcur);
			}
			return false;
		});

		$mjBtnPrev.on('click', function(){
			mjcur --;
			mjSlice(mjcur);
			if(mjcur < 0){
				mjcur = mjpage-1;
				mjSlice(mjcur);
			}
			return false;
		});
	});
});