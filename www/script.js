var rates = [1,1.408403,1.329501,0.880807,0.755043,78.50285,]; // to store exchange rate

var USDUSD = rates[0];
var USDJMD = rates[1];
var USDGDP = rates[2];
var USDCDN = rates[3];
var USDYEN= rates[4];
var USDCY= rates[5];


function ChangeCurrency2() {
	var curr = document.getElementById("select_one").value;
	if (curr == 'USD'){
		document.getElementById('input_one').value = rates[0];
	}
	if (curr == 'JMD'){
		document.getElementById('input_one').value = rates[1];
	}
	if (curr == 'GDP'){
		document.getElementById('input_one').value = rates[2];
	}
	if (curr == 'CDN'){
		document.getElementById('input_one').value = rates[3];
	}
	if (curr == 'YEN'){
		document.getElementById('input_one').value = rates[4];
	}
	if (curr == 'CY'){
		document.getElementById('input_one').value = rates[5];
	}

}

function Swap(){

	var select_one = document.getElementById("select_one");
	var select_two = document.getElementById("select_two");
	var tmp = document.getElementById("select_one").value;

	select_one.value = select_two.value;
	select_two.value = tmp;


	var input_one = document.getElementById("input_one");
	var input_two = document.getElementById("input_two");
	var temp = document.getElementById("input_one").value;

	input_one.value = input_two.value;
	input_two.value = temp;
	

}



function ChangeCurrency(){

	var TotalOne = document.getElementById("input_one").value;
	var currency = document.getElementById("select_one").value;
	var currency_2 = document.getElementById("select_two").value;
	var Rate = 0; 
	var Total = 0;

	var curr = document.getElementById("select_two").value;
	if (curr == 'USD'){
		document.getElementById('input_two').value = rates[0];
	}
	if (curr == 'JMD'){
		document.getElementById('input_two').value = rates[1];
	}
	if (curr == 'GDP'){
		document.getElementById('input_two').value = rates[2];
	}
	if (curr == 'CDN'){
		document.getElementById('input_two').value = rates[3];
	}
	if (curr == 'YEN'){
		document.getElementById('input_two').value = rates[4];
	}
	if (curr == 'CY'){
		document.getElementById('input_two').value = rates[5];
	}


	


if (currency == currency_2 ){
	Total = TotalOne * USDUSD;
} else if (currency == 'USD' && currency_2 == 'JMD'){
	Total = TotalOne * USDJMD;
} else if (currency == 'USD' && currency_2 == 'YEN'){
	Total = TotalOne * USDYEN;
} else if (currency == 'USD' && currency_2 == 'GDP'){
	Total = TotalOne * USDGDP;
} else if (currency == 'USD' && currency_2 == 'CDN'){
	Total = TotalOne * USDCDN;
}else if (currency == 'USD' && currency_2 == 'CY'){
	Total = TotalOne * USDCY;
}

	document.getElementById("input_two").value = Total;
	document.getElementById("label1").innerHTML = TotalOne + " " + currency + " = " + Total.toFixed(2) + currency_2;

}


