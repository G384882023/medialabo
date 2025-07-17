//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

function show(){

	let oldAddr = document.querySelector('p#campus-address');
	if (oldAddr) {
		oldAddr.remove();
	}
	let oldList = document.querySelector('ul#gakka-list');
	if (oldList) {
		oldList.remove();
	}
	//h2の下に「八王子市館町」と、直接ではなくcampasオブジェクトから取得する
	let l = document.querySelector('h2#addr');
	let p = document.createElement('p');
	p.textContent = campus.address;
	p.id = "campus-address";
	l.insertAdjacentElement('afterend', p);

	let ul = document.createElement('ul');
	ul.id = "gakka-list";
	for (let g of gakka){
		let li = document.createElement('li');
		li.textContent = g.name;
		ul.insertAdjacentElement('beforeend', li);
	}
	let h2dept = document.querySelector('h2#dept');
	h2dept.insertAdjacentElement('afterend', ul);
}
let b = document.querySelector('button#show');
b.addEventListener('click', show);