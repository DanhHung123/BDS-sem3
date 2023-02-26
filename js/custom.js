const passLogin = document.querySelector("#pass-login");
const passLoginRe = document.querySelector("#pass-login-2");
const erroPass = document.querySelector("#error-noti");
const submitLog = document.querySelector(".form-login-submit button");

if (passLogin && passLoginRe) {
	passLoginRe.addEventListener("blur", function () {
		if (passLogin.value !== passLoginRe.value) {
			submitLog.classList.add("disabled");
			erroPass.classList.add("active");
		} else {
			submitLog.classList.remove("disabled");
			erroPass.classList.remove("active");
		}
	});
}
