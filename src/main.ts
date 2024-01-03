import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  const btnCalendar: HTMLInputElement | null =
    document.querySelector("#btn-calendar");
  const btnEmail: HTMLElement | null = document.querySelector("#btn-email");

  if (btnCalendar && btnEmail) {

    btnCalendar.addEventListener("click", () => {
      window?.electronAPI.handleChangeProtonApp("calendar");
      console.log("hello from btnCalendar");
    });

    btnEmail.addEventListener("click", () => {
      window?.electronAPI.handleChangeProtonApp("email");
      console.log("hello from btnEmail");
    });
  }
});
