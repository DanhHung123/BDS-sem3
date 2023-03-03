// Logined
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

// Deatail

const imgItem = document.querySelectorAll(".img-detail-item");
const siderImgMain = document.querySelector(".detail-img > img");

if (imgItem && siderImgMain) {
	imgItem.forEach((item) => {
		item.addEventListener("click", (e) => {
			imgItem.forEach((itm) => {
				itm.classList.remove("active");
			});
			e.target.classList.add("active");
			siderImgMain.src = e.target.src;
		});
	});
}
