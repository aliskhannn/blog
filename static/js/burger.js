document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger-menu");
  const panel = burger.querySelector(".burger__panel");
  const closeBtn = burger.querySelector(".burger__close");

  // Закрытие по кнопке
  closeBtn.addEventListener("click", () => {
    burger.removeAttribute("open");
  });

  // Закрытие по клику вне панели
  document.addEventListener("click", (e) => {
    if (!burger.contains(e.target) && burger.hasAttribute("open")) {
      burger.removeAttribute("open");
    }
  });

  // Опционально: закрыть меню при клике на ссылку
  burger.querySelectorAll(".burger__link").forEach(link => {
    link.addEventListener("click", () => {
      burger.removeAttribute("open");
    });
  });
});