document.querySelectorAll('[data-bs-toggle="collapse"]').forEach((btn) => {
  const target = document.querySelector(btn.dataset.bsTarget);
  target.addEventListener("show.bs.collapse", () =>
    btn.setAttribute("aria-expanded", "true"),
  );
  target.addEventListener("hide.bs.collapse", () =>
    btn.setAttribute("aria-expanded", "false"),
  );
});

document.querySelectorAll("a.nav-row").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelectorAll(".nav-row")
      .forEach((r) => r.classList.remove("is-current"));
    this.classList.add("is-current");
  });
});
