//@ts-check
import {verifyEmail} from "./utility/verifyEmail.js";

document.addEventListener("DOMContentLoaded", () => {
    const botonMail = /** @type {HTMLButtonElement | null} */(document.getElementById("submit_email"));
    /** @type {HTMLInputElement | null} */
    const inputMail = document.querySelector("input[type='email']");
    const modalSuccess = /** @type {HTMLDivElement | null} */(document.getElementById("modal_mail_registrado"));

    if (botonMail && inputMail && modalSuccess)
    botonMail.addEventListener("click", () => {
        if (inputMail.value === "") {
            alert("No has escrito ningún correo en el campo.");

        } else {
            if (verifyEmail(inputMail.value)) {
                botonMail.disabled = true;
                botonMail.style.pointerEvents = "none";
                botonMail.innerText = "Registrado!";
                botonMail.style.color = "#2f2f2f";
                botonMail.style.backgroundColor = "#4d4d4d";
                botonMail.style.boxShadow = "#3b3b3b 0 3px 3px 3px";
                botonMail.style.border = "2px solid gray";
                inputMail.value = "";

                modalSuccess.classList.toggle("show");
                setTimeout(() => {
                    modalSuccess.classList.toggle("show");
                }, 3000);

            } else {
                alert("El texto ingresado no es un correo válido.");
            }
        }
    });
});