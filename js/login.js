var login = {
	loginform: "",
	user: "",
	pass: "",
	loginWindow: "",
	content: "",

	init() { 
		this.loginform = document.querySelector('#loginform')
		this.loginWindow = document.querySelector('.login__window')
		this.content = document.querySelector('.secured__content')
		this.registerListeners()
		this.updateView()
	},

	updateView() { 
		if (sessionStorage.getItem('ab__login')) {
			this.loginform.style.display = "none"
			this.content.classList.remove('hidden')
		} else { 
			this.loginform.style.display = ""			
			this.content.classList.add('hidden')
		}
	},
	registerListeners() { 
		this.loginform.addEventListener('submit', function (e) { 
			e.preventDefault()
			login.user = login.loginform.user.value
			login.pass = login.loginform.pass.value
			console.log(login.pass, login.user);
			login.submitLogin(login.user, login.pass)
			login.updateView()
		})
	},
	submitLogin(user, pass) {
		if (user === 'thoms' && pass === "}Q@u57;J[0") {
			return sessionStorage.setItem('ab__login', true)
		} 
		return sessionStorage.setItem('ab__login', false)
	},

}
window.addEventListener('DOMContentLoaded', function () { 
	login.init()
	
	
})

