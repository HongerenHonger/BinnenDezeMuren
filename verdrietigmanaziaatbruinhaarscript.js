import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://lroxhhrdyllvzuvcafee.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxyb3hoaHJkeWxsdnp1dmNhZmVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NzI4OTksImV4cCI6MjA2NDM0ODg5OX0.C9lcpYffFuxNm1OqEgHbMQHlhBDkt3oth9a25NCmfxw";

const supabase = createClient(supabaseUrl, supabaseKey);

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", async () => {
  const ervaringId32 = getQueryParam("id");
  const sectieA = document.getElementById("stapA");
  const sectieB = document.getElementById("stapB");

  if (!ervaringId32) {
    sectieA.style.display = "block";
    sectieB.style.display = "none";
    bindStapA();
  } else {
    sectieA.style.display = "none";
    sectieB.style.display = "block";
    await laadEnToonErvaringEnReacties(ervaringId32);
    bindStapB(ervaringId32);
  }
});

function bindStapA() {
  const plaatsenBtn = document.getElementById("plaatsenButton");
  plaatsenBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const emotie = document.getElementById("emotieinput32").value.trim();
    const ervaring = document.getElementById("ervaringinput32").value.trim();
    const htmlbestand = "verdrietigmanaziaatbruinhaar";

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

async function laadEnToonErvaringEnReacties(ervaringId32) {
  const { data: ervaringRecord, error: errorFetch } = await supabase
    .from("ervaringen")
    .select("emotie, ervaring, htmlbestand")
    .eq("id", ervaringId32)
    .single();

  if (errorFetch || !ervaringRecord) {
    console.error("Kon ervaring niet ophalen:", errorFetch);
    alert("Kan de ervaring niet laden. Probeer opnieuw.");
    return;
  }

  document.getElementById("toonEmotie32").textContent = ervaringRecord.emotie;
  document.getElementById("toonErvaring32").textContent = ervaringRecord.ervaring;

  const { data: reactiesData, error: errorReacties } = await supabase
    .from("reacties")
    .select("naam, reactie, created_at")
    .eq("ervaring_id", ervaringId32)
    .order("created_at", { ascending: true });

  if (errorReacties) {
    console.error("Fout bij ophalen reacties:", errorReacties);
    alert("Er is iets foutgegaan bij het laden van reacties.");
    return;
  }

  const lijstContainer = document.getElementById("reactieLijst32");
  lijstContainer.innerHTML = "";
  if (reactiesData && reactiesData.length > 0) {
    reactiesData.forEach((item) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("reactietekst32");

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

function bindStapB(ervaringId32) {
  const placeBtntwee = document.getElementById("plaatsentweeButton");
  placeBtntwee.addEventListener("click", async (evt) => {
    evt.preventDefault();

    const naam32 = document.getElementById("naaminput32").value.trim();
    const reactie32 = document.getElementById("reactieinput32").value.trim();

    if (!naam32) {
      alert("Vul een naam in!");
      return;
    }
    if (!reactie32) {
      alert("Vul een reactie in!");
      return;
    }

    const { data, error } = await supabase
      .from("reacties")
      .insert([
        {
          ervaring_id: ervaringId32,
          naam: naam32,
          reactie: reactie32,
        },
      ]);

    if (error) {
      console.error("Fout bij opslaan reactie:", error);
      alert("Fout bij opslaan reactie. Probeer opnieuw.");
      return;
    }

    const lijstContainer = document.getElementById("reactieLijst32");
    const wrapper = document.createElement("div");
    wrapper.classList.add("reactietekst32");

    const naamEl = document.createElement("h3");
    naamEl.textContent = naam32;
    const tekstEl = document.createElement("p");
    tekstEl.textContent = reactie32;

    wrapper.appendChild(naamEl);
    wrapper.appendChild(tekstEl);
    lijstContainer.appendChild(wrapper);

    document.getElementById("naaminput32").value = "";
    document.getElementById("reactieinput32").value = "";
  });
}

