console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('themedot')


for (var i=0;i< themeDots.length ; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme_style').href = 'default.css'
	}

	if(mode == 'skyblue'){
		document.getElementById('theme_style').href = 'sky_blue.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme_style').href = 'blue.css'
	}

	if(mode == 'voilet'){
		document.getElementById('theme_style').href = 'voilet.css'
	}

	localStorage.setItem('theme', mode)
}
