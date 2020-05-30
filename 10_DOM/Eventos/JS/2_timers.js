const header = document.querySelector('h1');
const stop = document.querySelector('#stop');
const start = document.querySelector('#start');

const interval = function () {
	return setInterval(()=> {
		console.log('Set interval ejecutado');
		if (header.style.fontSize == "50px") {
			header.style.fontSize = "20px";
		} else {
			header.style.fontSize = "50px";
		}
	}, 1000);
}

// time = interval();

stop.addEventListener(('click'), ()=> {
	console.log('Stop!!!');
	clearInterval(time);
});

start.addEventListener(('click'), ()=> {
	console.log('Start!!!');
	time = interval();
});