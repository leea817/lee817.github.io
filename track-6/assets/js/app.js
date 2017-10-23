var cash = 24;

update_wallet();

$('.cash').html(cash)

$('.item').click(function() {
	var item   = $(this).data('item'),
		amount = $(this).data('amount');


	charge_card (amount, item);
});

//$('.item')
//	click();
//	function(){}
//	click (function(){});


function charge_card(amount,item) {
	if (cash >= amount) {
	// keep going
		cash = cash - amount;
		update_wallet();
		$('.closet-items').append(item+'<br />');
	} else {
		alert('Not enough money')
	}

}

function update_wallet(){
	$('.cash').html(cash);
}

