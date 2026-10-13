(function () {
  "use strict";

  const menuEl = document.getElementById("menu");
  const chipsEl = document.getElementById("chips");
  const searchEl = document.getElementById("search");
  const clearEl = document.getElementById("clear-search");
  const noResultsEl = document.getElementById("no-results");
  const noResultsTermEl = document.getElementById("no-results-term");

  const naira = (n) => "₦" + n.toLocaleString("en-NG");

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function priceHtml(item) {
    return (
      '<span class="price">' +
      (item.from ? '<span class="price__from">from</span>' : "") +
      naira(item.price) +
      (item.unit ? '<span class="price__unit">/ ' + esc(item.unit) + "</span>" : "") +
      "</span>"
    );
  }

  /* ---------- Render menu ---------- */
  function render() {
    menuEl.innerHTML = window.MENU.map((section) => {
      const groups = section.groups
        .map(
          (g) =>
            '<div class="group">' +
            (g.name ? '<h3 class="group__title">' + esc(g.name) + "</h3>" : "") +
            '<ul class="items">' +
            g.items
              .map(
                (item) =>
                  '<li class="item" data-search="' + esc((item.name + " " + (g.name || "") + " " + section.title).toLowerCase()) + '">' +
                  '<span class="item__name">' + esc(item.name) + "</span>" +
                  '<span class="item__dots" aria-hidden="true"></span>' +
                  priceHtml(item) +
                  "</li>"
              )
              .join("") +
            "</ul></div>"
        )
        .join("");

      return (
        '<section class="section' + (section.featured ? " section--featured" : "") + '" id="' + section.id + '" aria-labelledby="' + section.id + '-title">' +
        '<header class="section__head">' +
        '<h2 class="section__title" id="' + section.id + '-title">' + esc(section.title) + "</h2>" +
        (section.subtitle ? '<p class="section__subtitle">' + esc(section.subtitle) + "</p>" : "") +
        "</header>" +
        groups +
        (section.callout
          ? '<p class="callout"><span class="callout__label">Add-on</span><span>' + esc(section.callout.text) + " <strong>" + naira(section.callout.price) + "</strong></span></p>"
          : "") +
        (section.note ? '<p class="note">' + esc(section.note) + "</p>" : "") +
        "</section>"
      );
    }).join("");

    chipsEl.innerHTML =
      window.MENU.map((s) => '<li><a class="chip" href="#' + s.id + '" data-target="' + s.id + '">' + esc(s.nav) + "</a></li>").join("") +
      '<li><a class="chip chip--book" href="#book" data-target="book">Book</a></li>';

    document.getElementById("policy-list").innerHTML = window.POLICY.map(
      (p) => "<div><dt>" + esc(p.title) + "</dt><dd>" + esc(p.text) + "</dd></div>"
    ).join("");

    document.getElementById("year").textContent = new Date().getFullYear();
  }

  /* ---------- Search ---------- */
  function filter(query) {
    const q = query.trim().toLowerCase();
    let total = 0;

    menuEl.querySelectorAll(".section").forEach((section) => {
      let sectionCount = 0;
      section.querySelectorAll(".group").forEach((group) => {
        let groupCount = 0;
        group.querySelectorAll(".item").forEach((item) => {
          const match = !q || item.dataset.search.includes(q);
          item.hidden = !match;
          if (match) groupCount++;
        });
        group.hidden = groupCount === 0;
        sectionCount += groupCount;
      });
      section.hidden = sectionCount === 0;
      section.classList.toggle("is-filtered", !!q);
      total += sectionCount;
    });

    document.body.classList.toggle("is-searching", !!q);
    clearEl.hidden = !q;
    noResultsEl.hidden = total > 0;
    noResultsTermEl.textContent = query.trim();
  }

  searchEl.addEventListener("input", () => filter(searchEl.value));
  clearEl.addEventListener("click", () => {
    searchEl.value = "";
    filter("");
    searchEl.focus();
  });

  /* ---------- Active chip while scrolling ---------- */
  function setActive(id) {
    chipsEl.querySelectorAll(".chip").forEach((chip) => {
      const on = chip.dataset.target === id;
      chip.classList.toggle("is-active", on);
      if (on) {
        chip.setAttribute("aria-current", "true");
        const box = chipsEl.getBoundingClientRect();
        const c = chip.getBoundingClientRect();
        if (c.left < box.left || c.right > box.right) {
          chipsEl.scrollTo({ left: chipsEl.scrollLeft + c.left - box.left - 16, behavior: "smooth" });
        }
      } else {
        chip.removeAttribute("aria-current");
      }
    });
  }

  function watchSections() {
    const targets = [...menuEl.querySelectorAll(".section"), document.getElementById("book"), document.getElementById("policy")];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id === "policy" ? "book" : e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    targets.forEach((t) => io.observe(t));
  }

  // Clear any search when jumping to a section so it is always visible
  chipsEl.addEventListener("click", (e) => {
    if (e.target.closest(".chip") && searchEl.value) {
      searchEl.value = "";
      filter("");
    }
  });

  render();
  watchSections();
})();
