import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://lroxhhrdyllvzuvcafee.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxyb3hoaHJkeWxsdnp1dmNhZmVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NzI4OTksImV4cCI6MjA2NDM0ODg5OX0.C9lcpYffFuxNm1OqEgHbMQHlhBDkt3oth9a25NCmfxw";

const supabase = createClient(supabaseUrl, supabaseKey);

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", async () => {
  const ervaringId8 = getQueryParam("id");
  const sectieA = document.getElementById("stapA");
  const sectieB = document.getElementById("stapB");

  if (!ervaringId8) {
    sectieA.style.display = "block";
    sectieB.style.display = "none";
    bindStapA();
  } else {
    sectieA.style.display = "none";
    sectieB.style.display = "block";
    await laadEnToonErvaringEnReacties(ervaringId8);
    bindStapB(ervaringId8);
  }
});

function bindStapA() {
  const plaatsenBtn = document.getElementById("plaatsenButton");
  plaatsenBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const emotie = document.getElementById("emotieinput8").value.trim();
    const ervaring = document.getElementById("ervaringinput8").value.trim();
    const htmlbestand = "boosmanaziaatbruinhaar";

    if (!emotie) {
      alert("Vul een emotie in!");
      return;
    }
    if (!ervaring) {
      alert("Vul een ervaring in!");
      return;
    }

    const { data, error } = await supabase
      .from("ervaringen")
      .insert([{ emotie: emotie, ervaring: ervaring, htmlbestand: htmlbestand }])
      .select("id, htmlbestand")
      .single();

    if (error) {
      console.error("Fout bij opslaan ervaring:", error);
      alert("Er is iets foutgegaan bij opslaan. Probeer opnieuw.");
      return;
    }

    window.location.href = `index.html?id=${data.id}&htmlbestand=${data.htmlbestand}`;
  });
}

async function laadEnToonErvaringEnReacties(ervaringId8) {
  const { data: ervaringRecord, error: errorFetch } = await supabase
    .from("ervaringen")
    .select("emotie, ervaring, htmlbestand")
    .eq("id", ervaringId8)
    .single();

  if (errorFetch || !ervaringRecord) {
    console.error("Kon ervaring niet ophalen:", errorFetch);
    alert("Kan de ervaring niet laden. Probeer opnieuw.");
    return;
  }

  document.getElementById("toonEmotie8").textContent = ervaringRecord.emotie;
  document.getElementById("toonErvaring8").textContent = ervaringRecord.ervaring;

  const { data: reactiesData, error: errorReacties } = await supabase
    .from("reacties")
    .select("naam, reactie, created_at")
    .eq("ervaring_id", ervaringId8)
    .order("created_at", { ascending: true });

  if (errorReacties) {
    console.error("Fout bij ophalen reacties:", errorReacties);
    alert("Er is iets foutgegaan bij het laden van reacties.");
    return;
  }

  const lijstContainer = document.getElementById("reactieLijst8");
  lijstContainer.innerHTML = "";
  if (reactiesData && reactiesData.length > 0) {
    reactiesData.forEach((item) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("reactietekst8");

      const naamEl = document.createElement("h3");
      naamEl.textContent = item.naam;

      const tekstEl = document.createElement("p");
      tekstEl.textContent = item.reactie;

      wrapper.appendChild(naamEl);
      wrapper.appendChild(tekstEl);
      lijstContainer.appendChild(wrapper);
    });
  }
}

function bindStapB(ervaringId8) {
  const placeBtntwee = document.getElementById("plaatsentweeButton");
  placeBtntwee.addEventListener("click", async (evt) => {
    evt.preventDefault();

    const naam8 = document.getElementById("naaminput8").value.trim();
    const reactie8 = document.getElementById("reactieinput8").value.trim();

    if (!naam8) {
      alert("Vul een naam in!");
      return;
    }
    if (!reactie8) {
      alert("Vul een reactie in!");
      return;
    }

    const { data, error } = await supabase
      .from("reacties")
      .insert([
        {
          ervaring_id: ervaringId8,
          naam: naam8,
          reactie: reactie8,
        },
      ]);

    if (error) {
      console.error("Fout bij opslaan reactie:", error);
      alert("Fout bij opslaan reactie. Probeer opnieuw.");
      return;
    }

    const lijstContainer = document.getElementById("reactieLijst8");
    const wrapper = document.createElement("div");
    wrapper.classList.add("reactietekst8");

    const naamEl = document.createElement("h3");
    naamEl.textContent = naam8;
    const tekstEl = document.createElement("p");
    tekstEl.textContent = reactie8;

    wrapper.appendChild(naamEl);
    wrapper.appendChild(tekstEl);
    lijstContainer.appendChild(wrapper);

    document.getElementById("naaminput8").value = "";
    document.getElementById("reactieinput8").value = "";
  });
}
