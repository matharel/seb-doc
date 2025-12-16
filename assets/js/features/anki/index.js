document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("[data-anki-feature]");
  if (!root) return;

  // Guard: ensure libraries exist
  if (
    typeof initSqlJs === "undefined" ||
    typeof Model === "undefined" ||
    typeof Deck === "undefined" ||
    typeof Package === "undefined"
  ) return;

  const button = root.querySelector("#anki-button");
  if (!button) return;

  let SQL;
  initSqlJs().then(sql => {
    SQL = sql;
  });

  button.addEventListener("click", async (e) => {
    const originalText = e.target.innerText;
    e.target.innerText = "Generating deck";
    e.target.disabled = true;

    const m = new Model({
      name: "Basic",
      id: "1542906796044",
      flds: [{ name: "Front" }, { name: "Back" }],
      req: [[0, "all", [0]]],
      tmpls: [{
        name: "Card 1",
        qfmt: "{{Front}}",
        afmt: "{{FrontSide}}\n\n<hr id=answer>\n\n{{Back}}",
      }]
    });

    const d = new Deck(1733843662437, "ankihugo");
    const p = new Package();

    for (const domcard of root.getElementsByClassName("anki")) {
      const card = domcard.cloneNode(true);
      const info = card.dataset.info.split(" ");
      let id = null;
      const tags = e.target.dataset.info.split(" ");

      for (const tag of info) {
        if (tag.startsWith("id=")) id = tag;
        else tags.push(tag);
      }

      // Get audio
      for (const audio of card.querySelectorAll("audio")) {
        const src = audio.querySelector("source")?.src;
        if (!src) continue;

        const basename = src.split("/").pop();
        audio.outerHTML = `[sound:${basename}]`;

        const blob = await fetch(src).then(res => res.ok ? res.blob() : null);
        p.addMedia(blob, basename);
      }

      d.addNote(m.note([
        card.querySelector(".question")?.innerHTML || "",
        card.querySelector(".answer")?.innerHTML || ""
      ], tags, id));
    }

    p.addDeck(d);
    p.writeToFile("ankihugo.apkg");

    e.target.innerText = originalText;
    e.target.disabled = false;
  });
});

