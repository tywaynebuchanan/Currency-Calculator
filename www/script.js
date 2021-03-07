const select = document.getElementById('select_one');
const select1 = document.getElementById('select_two');
const rateInput = document.getElementById('input_one');
const rateInput2 = document.getElementById('input_two');
const money = document.getElementById('money');

const calculate = (a, b) =>{
	let newRate = a * b
	money.innerHTML =  `${newRate}`;
	
}

const rates = () =>{
fetch('https://api.exchangeratesapi.io/latest?base=USD')
.then(response => response.json())
.then(json => {

	const max = 33;
	for(let i = 0; i < max; i++){
		let value = `${Object.values(json.rates)[i]}`;
		rateInput.value = value;
		const div = document.createElement('option')
		div.value = value;
		div.innerHTML = `${Object.keys(json.rates)[i]}`;	
		select.appendChild(div);

	}

	for(let i = 0; i < max; i++){
		let value = `${Object.values(json.rates)[i]}`;
		rateInput2.value = value;
		const div = document.createElement('option')
		div.value = value;
		div.innerHTML = `${Object.keys(json.rates)[i]}`;	
		select1.appendChild(div);

	}
	 
	select.addEventListener('change',()=>{
	let displayo = select.options[select.selectedIndex].value
		rateInput.value = displayo;
		calculate(rateInput.value,rateInput2.value);
			if(rateInput.value === rateInput2.value)money.innerHTML = 'Same Currency';
			else money.innerHTML = rateInput2.value * rateInput.value;
		
	})//End of function
	
	select1.addEventListener('change',()=>{
		let displayo = select.options[select.selectedIndex].value
		rateInput2.value = displayo;
		calculate(rateInput.value,rateInput2.value);
		if(rateInput.value === rateInput2.value)money.innerHTML = 'Same Currency';
			else money.innerHTML = rateInput2.value * rateInput.value;
		
	})//End of function

	// rateInput.addEventListener('keydown',()=>{
	// 	money.innerHTML = rateInput2.value * rateInput.value;
	// })

})

}



rates();




