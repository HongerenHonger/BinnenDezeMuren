import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://lroxhhrdyllvzuvcafee.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxyb3hoaHJkeWxsdnp1dmNhZmVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NzI4OTksImV4cCI6MjA2NDM0ODg5OX0.C9lcpYffFuxNm1OqEgHbMQHlhBDkt3oth9a25NCmfxw";

const supabase = createClient(supabaseUrl, supabaseKey);

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", async () => {
  const ervaringId35 = getQueryParam("id");
  const sectieA = document.getElementById("stapA");
  const sectieB = document.getElementById("stapB");

  if (!ervaringId35) {
    sectieA.style.display = "block";
    sectieB.style.display = "none";
    bindStapA();
  } else {
    sectieA.style.display = "none";
    sectieB.style.display = "block";
    await laadEnToonErvaringEnReacties(ervaringId35);
    bindStapB(ervaringId35);
  }
});

function bindStapA() {
  const plaatsenBtn = document.getElementById("plaatsenButton");
  plaatsenBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const emotie = document.getElementById("emotieinput35").value.trim();
    const ervaring = document.getElementById("ervaringinput35").value.trim();
    const htmlbestand = "verdrietigmanzwartbruinhaar";

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

async function laadEnToonErvaringEnReacties(ervaringId35) {
  const { data: ervaringRecord, error: errorFetch } = await supabase
    .from("ervaringen")
    .select("emotie, ervaring, htmlbestand")
    .eq("id", ervaringId35)
    .single();

  if (errorFetch || !ervaringRecord) {
    console.error("Kon ervaring niet ophalen:", errorFetch);
    alert("Kan de ervaring niet laden. Probeer opnieuw.");
    return;
  }

  document.getElementById("toonEmotie35").textContent = ervaringRecord.emotie;
  document.getElementById("toonErvaring35").textContent = ervaringRecord.ervaring;

  const { data: reactiesData, error: errorReacties } = await supabase
    .from("reacties")
    .select("naam, reactie, created_at")
    .eq("ervaring_id", ervaringId35)
    .order("created_at", { ascending: true });

  if (errorReacties) {
    console.error("Fout bij ophalen reacties:", errorReacties);
    alert("Er is iets foutgegaan bij het laden van reacties.");
    return;
  }

  const lijstContainer = document.getElementById("reactieLijst35");
  lijstContainer.innerHTML = "";
  if (reactiesData && reactiesData.length > 0) {
    reactiesData.forEach((item) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("reactietekst35");

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

function bindStapB(ervaringId35) {
  const placeBtntwee = document.getElementById("plaatsentweeButton");
  placeBtntwee.addEventListener("click", async (evt) => {
    evt.preventDefault();

    const naam35 = document.getElementById("naaminput35").value.trim();
    const reactie35 = document.getElementById("reactieinput35").value.trim();

    if (!naam35) {
      alert("Vul een naam in!");
      return;
    }
    if (!reactie35) {
      alert("Vul een reactie in!");
      return;
    }

    const { data, error } = await supabase
      .from("reacties")
      .insert([
        {
          ervaring_id: ervaringId35,
          naam: naam35,
          reactie: reactie35,
        },
      ]);

    if (error) {
      console.error("Fout bij opslaan reactie:", error);
      alert("Fout bij opslaan reactie. Probeer opnieuw.");
      return;
    }

    const lijstContainer = document.getElementById("reactieLijst35");
    const wrapper = document.createElement("div");
    wrapper.classList.add("reactietekst35");

    const naamEl = document.createElement("h3");
    naamEl.textContent = naam35;
    const tekstEl = document.createElement("p");
    tekstEl.textContent = reactie35;

    wrapper.appendChild(naamEl);
    wrapper.appendChild(tekstEl);
    lijstContainer.appendChild(wrapper);

    document.getElementById("naaminput35").value = "";
    document.getElementById("reactieinput35").value = "";
  });
}

