import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";


const supabaseUrl = "https://lroxhhrdyllvzuvcafee.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxyb3hoaHJkeWxsdnp1dmNhZmVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NzI4OTksImV4cCI6MjA2NDM0ODg5OX0.C9lcpYffFuxNm1OqEgHbMQHlhBDkt3oth9a25NCmfxw";

const supabase = createClient(supabaseUrl, supabaseKey);


function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}


document.addEventListener("DOMContentLoaded", async () => {
  const ervaringId = getQueryParam("id");
  const sectieA = document.getElementById("stapA");
  const sectieB = document.getElementById("stapB");

  if (!ervaringId) {
 
    sectieA.style.display = "block";
    sectieB.style.display = "none";
    bindStapA();
  } else {
 
    sectieA.style.display = "none";
    sectieB.style.display = "block";
    await laadEnToonErvaringEnReacties(ervaringId);
    bindStapB(ervaringId);
  }
});


function bindStapA() {
  const plaatsenBtn = document.getElementById("plaatsenButton");
  plaatsenBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const emotie = document.getElementById("emotieinput").value.trim();
    const ervaring = document.getElementById("ervaringinput").value.trim();
    const htmlbestand = "blijmanaziaatbruinhaar";

    if (!emotie || !ervaring) {
      alert("Vul zowel emotie als ervaring in.");
      return;
    }

    // Show the emotietekst element
    const emotietekstEl = document.querySelector(".emotietekst");
    if (emotietekstEl) {
      emotietekstEl.style.display = "block";
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


async function laadEnToonErvaringEnReacties(ervaringId) {

  const { data: ervaringRecord, error: errorFetch } = await supabase
    .from("ervaringen")
    .select("emotie, ervaring, htmlbestand")  // Added htmlbestand here
    .eq("id", ervaringId)
    .single();

  if (errorFetch || !ervaringRecord) {
    console.error("Kon ervaring niet ophalen:", errorFetch);
    alert("Kan de ervaring niet laden. Probeer opnieuw.");
    return;
  }

  document.getElementById("toonEmotie").textContent = ervaringRecord.emotie;
  document.getElementById("toonErvaring").textContent = ervaringRecord.ervaring;

 
  const { data: reactiesData, error: errorReacties } = await supabase
    .from("reacties")
    .select("naam, reactie, created_at")
    .eq("ervaring_id", ervaringId)
    .order("created_at", { ascending: true });

  if (errorReacties) {
    console.error("Fout bij ophalen reacties:", errorReacties);
    alert("Er is iets foutgegaan bij het laden van reacties.");
    return;
  }


  const lijstContainer = document.getElementById("reactieLijst");
  lijstContainer.innerHTML = ""; 
  if (reactiesData && reactiesData.length > 0) {
    reactiesData.forEach((item) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("reactietekst");

      const naamEl = document.createElement("h3");
      naamEl.textContent = item.naam;

      const tekstEl = document.createElement("p");
      tekstEl.textContent = item.reactie;

      wrapper.appendChild(naamEl);
      wrapper.appendChild(tekstEl);
      lijstContainer.appendChild(wrapper);
    });
  } e
}


function bindStapB(ervaringId) {
  const placeBtn2 = document.getElementById("plaatsentweeButton");
  placeBtn2.addEventListener("click", async (evt) => {
    evt.preventDefault();

    const naam = document.getElementById("naaminput").value.trim();
    const reactie = document.getElementById("reactieinput").value.trim();

    if (!naam) {
      alert("Vul een naam in!");
      return;
    }
    if (!reactie) {
      alert("Vul een reactie in!");
      return;
    }

    const { data, error } = await supabase
      .from("reacties")
      .insert([
        {
          ervaring_id: ervaringId,
          naam: naam,
          reactie: reactie,
        },
      ]);

    if (error) {
      console.error("Fout bij opslaan reactie:", error);
      alert("Fout bij opslaan reactie. Probeer opnieuw.");
      return;
    }

    const lijstContainer = document.getElementById("reactieLijst");
    const wrapper = document.createElement("div");
    wrapper.classList.add("reactietekst");

    const naamEl = document.createElement("h3");
    naamEl.textContent = naam;
    const tekstEl = document.createElement("p");
    tekstEl.textContent = reactie;

    wrapper.appendChild(naamEl);
    wrapper.appendChild(tekstEl);
    lijstContainer.appendChild(wrapper);

    document.getElementById("naaminput").value = "";
    document.getElementById("reactieinput").value = "";
  });
}
