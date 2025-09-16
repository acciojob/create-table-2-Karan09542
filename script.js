function createTable() {
    //Write your code here
	const rn = prompt("Input number of rows")
	const cn = prompt("Input number of columns")
	const table = document.getElementById("myTable");
	function createElement(tag,text){
		const ele = document.createElement(tag)
		if(text) {
			ele.innerHTML = text;
		}
		return ele;
	}
	
	for(let i = 0; i<rn; i++){
		const tr = createElement("tr")
		for(let j=0; j<cn; j++){
			if(i===0){
				const th = createElement("th", `Row-${i} Column-${j}`)
				tr.appendChild(th)
			} else {
				const td = createElement("td", `Row-${i} Column-${j}`)
				tr.appendChild(td)
			}
		}
		table.appendChild(tr)
	}
}
