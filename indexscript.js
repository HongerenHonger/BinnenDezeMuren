import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";


const supabaseUrl = "https://lroxhhrdyllvzuvcafee.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxyb3hoaHJkeWxsdnp1dmNhZmVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NzI4OTksImV4cCI6MjA2NDM0ODg5OX0.C9lcpYffFuxNm1OqEgHbMQHlhBDkt3oth9a25NCmfxw";

const supabase = createClient(supabaseUrl, supabaseKey);



document.addEventListener("DOMContentLoaded", async () => {

  const urlParams = new URLSearchParams(window.location.search);
  const ervaringHtml = urlParams.get("htmlbestand");
  const ervaringId = urlParams.get("id");
  console.log("Ervaring ID:", ervaringId);

  console.log("Ervaring HTML Bestand:", ervaringHtml);

  const arrayDiv = document.querySelector(".array");

  const { data: ervaringRecord, error: errorFetch } = await supabase
    .from("ervaringen")
    .select("id, emotie, ervaring, htmlbestand")  // Added htmlbestand here
 
  if (errorFetch || !ervaringRecord) {
    console.error("Kon ervaring niet ophalen:", errorFetch);
    alert("Kan de ervaring niet laden. Probeer opnieuw.");
    return;
  }

  const vorigOpslag = ervaringRecord.arrayList;
  if (vorigOpslag) {
 
    arrayDiv.innerHTML = vorigOpslag;
  }

  for (const ervaring of ervaringRecord) {
    if( !ervaring.htmlbestand ) continue;
    const a = document.createElement("a");
    a.href = `${ervaring.htmlbestand}.html?id=${ervaring.id}`;
    a.classList.add("ervaring-link");

    const img = document.createElement("img");
    img.src = `Images/${ervaring.htmlbestand}.png`;
    img.alt = ervaring.emotie;
    img.classList.add("ervaring-img");

    a.appendChild(img);
    arrayDiv.appendChild(a);

    let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
    opgeslagenHtml += a.outerHTML;
    localStorage.setItem("arrayHtml", opgeslagenHtml);
  }
});