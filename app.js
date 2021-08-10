"use strict";

window.addEventListener("load", function () {
	document
		.querySelector('input[type="file"]')
		.addEventListener("change", function () {
			if (this.files && this.files[0]) {
				var img = document.querySelector("img");
				img.onload = () => {
					URL.revokeObjectURL(img.src); // no longer needed, free memory
				};

				img.src = URL.createObjectURL(this.files[0]); // set src to blob url
			}
		});
});

// Booking conform block
document.querySelector(".book-now").addEventListener("click", function () {
	const slNo = document.querySelector(".sl-no").value;
	const sName = document.querySelector(".name").value;
	const fName = document.querySelector(".f-name").value;
	const mName = document.querySelector(".m-name").value;
	const dob = document.querySelector(".dob").value;
	const vName = document.querySelector(".v-name").value;
	const poName = document.querySelector(".p-o").value;
	const thName = document.querySelector(".th-name").value;
	const disName = document.querySelector(".dis-name").value;
	const nid = document.querySelector(".nid").value;
	const roll = document.querySelector(".roll").value;
	const reg = document.querySelector(".reg").value;
	const mobile = document.querySelector(".mobile").value;
	const pMobile = document.querySelector(".p-mobile").value;
	const email = document.querySelector(".email").value;
	const admissionDate = document.querySelector(".issued-date").value;
	const course = document.querySelector(".course").value;
	const session = document.querySelector(".session").value;
    const adFee = document.querySelector(".ad-fee").value;

	if (adFee !=550) {
		document.querySelector(".warning").textContent =
			"⚠ Admission Fee must be Enter 550 tk 😣";
	} else {
		document.querySelector(".booking-form").style.display = "none";
		document.querySelector(".booking-details").style.display = "block";
		document.querySelector(".user-sl-no").textContent = slNo;
		document.querySelector(".user-name").textContent = sName;
		document.querySelector(".user-f-name").textContent = fName;
		document.querySelector(".user-m-name").textContent = mName;
		document.querySelector(".user-dob").textContent = dob;
		document.querySelector(".user-v-name").textContent = vName;
		document.querySelector(".user-p-o").textContent = poName;
		document.querySelector(".user-th-name").textContent = thName;
		document.querySelector(".user-dis-name").textContent = disName;
		document.querySelector(".user-nid").textContent = nid;
		document.querySelector(".user-roll").textContent = roll;
		document.querySelector(".user-reg").textContent = reg;
		document.querySelector(".user-mobile").textContent = mobile;
		document.querySelector(".user-p-mobile").textContent = pMobile;
		document.querySelector(".user-email").textContent = email;
		document.querySelector(".user-issued-date").textContent = admissionDate;
		document.querySelector(".user-course").textContent = course;
		document.querySelector(".user-session").textContent = session;
		document.querySelector(".user-ad-fee").textContent = adFee;
	}
});
