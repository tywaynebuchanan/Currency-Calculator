const select = document.getElementById('select_one');
const select1 = document.getElementById('select_two');
const rateInput = document.getElementById('input_one');
const rateInput2 = document.getElementById('input_two');


const rates = (option,input) =>{
fetch('https://api.exchangeratesapi.io/latest?base=USD')
.then(response => response.json())
.then(json => {

	const max = 33;
	for(let i = 0; i < max; i++){
	 const div = document.createElement('option');
	div.innerHTML = `${Object.keys(json.rates)[i]}`;
	option.appendChild(div);
	// const val = `${Object.values(json.rates)[i]}`;

	select.addEventListener('change',()=>{
		// let displayo = 
		// input.value = displayo;
	})
	}
	 

	
})

	

}

rates(select,rateInput);


