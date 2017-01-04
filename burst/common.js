function rnd(n,m){
	return parseInt(Math.random()*(m-n)+n);
}

function rndSign(){
	return Math.random() > 0.5 ? 1 : -1;
}

function d2a(d){
	return d/180*Math.PI;
}