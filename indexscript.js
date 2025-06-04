document.addEventListener("DOMContentLoaded", () => {

  const urlParams = new URLSearchParams(window.location.search);
  const ervaringHtml = urlParams.get("htmlbestand");
  const ervaringId = urlParams.get("id");
  console.log("Ervaring ID:", ervaringId);

  console.log("Ervaring HTML Bestand:", ervaringHtml);

  const arrayDiv = document.querySelector(".array");

  if (ervaringHtml == "blijmanaziaatbruinhaar") {
  
    const a = document.createElement("a");
    a.href = `blijmanaziaatbruinhaar.html?id=${ervaringId}`;
  
    a.classList.add("ervaring-link");

  
    const img = document.createElement("img");
    img.src = "Images/blijmanaziaatbruinhaar.png";
    img.alt = "blijmanaziaatbruinhaar";
    img.classList.add("ervaring-img");

    a.appendChild(img);
    arrayDiv.appendChild(a);


    let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
    opgeslagenHtml += a.outerHTML;
    localStorage.setItem("arrayHtml", opgeslagenHtml);


    history.replaceState(null, "", "index.html");
  }


  if (ervaringHtml == "blijmanblankbruinhaar") {
  
    const a = document.createElement("a");
    a.href = `blijmanblankbruinhaar.html?id=${ervaringId}`;
  
    a.classList.add("ervaring-link");

  
    const img = document.createElement("img");
    img.src = "Images/blijmanblankbruinhaar.png";
    img.alt = "blijmanblankbruinhaar";
    img.classList.add("ervaring-img");

    a.appendChild(img);
    arrayDiv.appendChild(a);


    let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
    opgeslagenHtml += a.outerHTML;
    localStorage.setItem("arrayHtml", opgeslagenHtml);


    history.replaceState(null, "", "index.html");
  }


if (ervaringHtml == "blijmanblankkaal") {
  
    const a = document.createElement("a");
    a.href = `blijmanblankkaal.html?id=${ervaringId}`;
  
    a.classList.add("ervaring-link");

  
    const img = document.createElement("img");
    img.src = "Images/blijmanblankkaal.png";
    img.alt = "blijmanblankkaal";
    img.classList.add("ervaring-img");

    a.appendChild(img);
    arrayDiv.appendChild(a);


    let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
    opgeslagenHtml += a.outerHTML;
    localStorage.setItem("arrayHtml", opgeslagenHtml);


    history.replaceState(null, "", "index.html");
  }

if (ervaringHtml == "blijmanzwartbruinhaar") {
  
    const a = document.createElement("a");
    a.href = `blijmanzwartbruinhaar.html?id=${ervaringId}`;
  
    a.classList.add("ervaring-link");

  
    const img = document.createElement("img");
    img.src = "Images/blijmanzwartbruinhaar.png";
    img.alt = "blijmanzwartbruinhaar";
    img.classList.add("ervaring-img");

    a.appendChild(img);
    arrayDiv.appendChild(a);


    let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
    opgeslagenHtml += a.outerHTML;
    localStorage.setItem("arrayHtml", opgeslagenHtml);


    history.replaceState(null, "", "index.html");
  }

    if (ervaringHtml == "blijvrouwaziaatbruinhaar") {
  
    const a = document.createElement("a");
    a.href = `blijvrouwaziaatbruinhaar.html?id=${ervaringId}`;
  
    a.classList.add("ervaring-link");

  
    const img = document.createElement("img");
    img.src = "Images/blijvrouwaziaatbruinhaar.png";
    img.alt = "blijvrouwaziaatbruinhaar";
    img.classList.add("ervaring-img");

    a.appendChild(img);
    arrayDiv.appendChild(a);


    let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
    opgeslagenHtml += a.outerHTML;
    localStorage.setItem("arrayHtml", opgeslagenHtml);


    history.replaceState(null, "", "index.html");
  }


  if (ervaringHtml == "blijvrouwblankbruinhaar") {
  
    const a = document.createElement("a");
    a.href = `blijvrouwblankbruinhaar.html?id=${ervaringId}`;
  
    a.classList.add("ervaring-link");

  
    const img = document.createElement("img");
    img.src = "Images/blijvrouwblankbruinhaar.png";
    img.alt = "blijvrouwblankbruinhaar";
    img.classList.add("ervaring-img");

    a.appendChild(img);
    arrayDiv.appendChild(a);


    let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
    opgeslagenHtml += a.outerHTML;
    localStorage.setItem("arrayHtml", opgeslagenHtml);


    history.replaceState(null, "", "index.html");
  }


if (ervaringHtml == "blijvrouwblankblondhaar") {
  
    const a = document.createElement("a");
    a.href = `blijvrouwblankblondhaar.html?id=${ervaringId}`;
  
    a.classList.add("ervaring-link");

  
    const img = document.createElement("img");
    img.src = "Images/blijvrouwblankblondhaar.png";
    img.alt = "blijvrouwblankblondhaar";
    img.classList.add("ervaring-img");

    a.appendChild(img);
    arrayDiv.appendChild(a);


    let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
    opgeslagenHtml += a.outerHTML;
    localStorage.setItem("arrayHtml", opgeslagenHtml);


    history.replaceState(null, "", "index.html");
  }

if (ervaringHtml == "blijvrouwzwartbruinhaar") {
  
    const a = document.createElement("a");
    a.href = `blijvrouwzwartbruinhaar.html?id=${ervaringId}`;
  
    a.classList.add("ervaring-link");

  
    const img = document.createElement("img");
    img.src = "Images/blijvrouwzwartbruinhaar.png";
    img.alt = "blijvrouwzwartbruinhaar";
    img.classList.add("ervaring-img");

    a.appendChild(img);
    arrayDiv.appendChild(a);


    let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
    opgeslagenHtml += a.outerHTML;
    localStorage.setItem("arrayHtml", opgeslagenHtml);


    history.replaceState(null, "", "index.html");
  }

if (ervaringHtml == "verdrietigmanaziaatbruinhaar") {
  const a = document.createElement("a");
  a.href = `verdrietigmanaziaatbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/verdrietigmanaziaatbruinhaar.png";
  img.alt = "verdrietigmanaziaatbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "verdrietigmanblankbruinhaar") {
  const a = document.createElement("a");
  a.href = `verdrietigmanblankbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/verdrietigmanblankbruinhaar.png";
  img.alt = "verdrietigmanblankbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "verdrietigmanblankkaal") {
  const a = document.createElement("a");
  a.href = `verdrietigmanblankkaal.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/verdrietigmanblankkaal.png";
  img.alt = "verdrietigmanblankkaal";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "verdrietigmanzwartbruinhaar") {
  const a = document.createElement("a");
  a.href = `verdrietigmanzwartbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/verdrietigmanzwartbruinhaar.png";
  img.alt = "verdrietigmanzwartbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "verdrietigvrouwaziaatbruinhaar") {
  const a = document.createElement("a");
  a.href = `verdrietigvrouwaziaatbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/verdrietigvrouwaziaatbruinhaar.png";
  img.alt = "verdrietigvrouwaziaatbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "verdrietigvrouwblankblondhaar") {
  const a = document.createElement("a");
  a.href = `verdrietigvrouwblankblondhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/verdrietigvrouwblankblondhaar.png";
  img.alt = "verdrietigvrouwblankblondhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "verdrietigvrouwblankbruinhaar") {
  const a = document.createElement("a");
  a.href = `verdrietigvrouwblankbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/verdrietigvrouwblankbruinhaar.png";
  img.alt = "verdrietigvrouwblankbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "verdrietigvrouwzwartbruinhaar") {
  const a = document.createElement("a");
  a.href = `verdrietigvrouwzwartbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/verdrietigvrouwzwartbruinhaar.png";
  img.alt = "verdrietigvrouwzwartbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "boosmanaziaatbruinhaar") {
  const a = document.createElement("a");
  a.href = `boosmanaziaatbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/boosmanaziaatbruinhaar.png";
  img.alt = "boosmanaziaatbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "boosmanblankbruinhaar") {
  const a = document.createElement("a");
  a.href = `boosmanblankbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/boosmanblankbruinhaar.png";
  img.alt = "boosmanblankbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "boosmanblankkaal") {
  const a = document.createElement("a");
  a.href = `boosmanblankkaal.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/boosmanblankkaal.png";
  img.alt = "boosmanblankkaal";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "boosmanzwartbruinhaar") {
  const a = document.createElement("a");
  a.href = `boosmanzwartbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/boosmanzwartbruinhaar.png";
  img.alt = "boosmanzwartbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "boosvrouwaziaatbruinhaar") {
  const a = document.createElement("a");
  a.href = `boosvrouwaziaatbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/boosvrouwaziaatbruinhaar.png";
  img.alt = "boosvrouwaziaatbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "boosvrouwblankblondhaar") {
  const a = document.createElement("a");
  a.href = `boosvrouwblankblondhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/boosvrouwblankblondhaar.png";
  img.alt = "boosvrouwblankblondhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "boosvrouwblankbruinhaar") {
  const a = document.createElement("a");
  a.href = `boosvrouwblankbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/boosvrouwblankbruinhaar.png";
  img.alt = "boosvrouwblankbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "boosvrouwzwartbruinhaar") {
  const a = document.createElement("a");
  a.href = `boosvrouwzwartbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/boosvrouwzwartbruinhaar.png";
  img.alt = "boosvrouwzwartbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "schaammanaziaatbruinhaar") {
  const a = document.createElement("a");
  a.href = `schaammanaziaatbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/schaammanaziaatbruinhaar.png";
  img.alt = "schaammanaziaatbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "schaammanblankbruinhaar") {
  const a = document.createElement("a");
  a.href = `schaammanblankbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/schaammanblankbruinhaar.png";
  img.alt = "schaammanblankbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "schaammanblankkaal") {
  const a = document.createElement("a");
  a.href = `schaammanblankkaal.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/schaammanblankkaal.png";
  img.alt = "schaammanblankkaal";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "schaammanzwartbruinhaar") {
  const a = document.createElement("a");
  a.href = `schaammanzwartbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/schaammanzwartbruinhaar.png";
  img.alt = "schaammanzwartbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "schaamvrouwaziaatbruinhaar") {
  const a = document.createElement("a");
  a.href = `schaamvrouwaziaatbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/schaamvrouwaziaatbruinhaar.png";
  img.alt = "schaamvrouwaziaatbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "schaamvrouwblankblondhaar") {
  const a = document.createElement("a");
  a.href = `schaamvrouwblankblondhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/schaamvrouwblankblondhaar.png";
  img.alt = "schaamvrouwblankblondhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "schaamvrouwblankbruinhaar") {
  const a = document.createElement("a");
  a.href = `schaamvrouwblankbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/schaamvrouwblankbruinhaar.png";
  img.alt = "schaamvrouwblankbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "schaamvrouwzwartbruinhaar") {
  const a = document.createElement("a");
  a.href = `schaamvrouwzwartbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/schaamvrouwzwartbruinhaar.png";
  img.alt = "schaamvrouwzwartbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "stressmanaziaatbruinhaar") {
  const a = document.createElement("a");
  a.href = `stressmanaziaatbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/stressmanaziaatbruinhaar.png";
  img.alt = "stressmanaziaatbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "stressmanblankbruinhaar") {
  const a = document.createElement("a");
  a.href = `stressmanblankbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/stressmanblankbruinhaar.png";
  img.alt = "stressmanblankbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "stressmanblankkaal") {
  const a = document.createElement("a");
  a.href = `stressmanblankkaal.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/stressmanblankkaal.png";
  img.alt = "stressmanblankkaal";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "stressmanzwartbruinhaar") {
  const a = document.createElement("a");
  a.href = `stressmanzwartbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/stressmanzwartbruinhaar.png";
  img.alt = "stressmanzwartbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "stressvrouwaziaatbruinhaar") {
  const a = document.createElement("a");
  a.href = `stressvrouwaziaatbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/stressvrouwaziaatbruinhaar.png";
  img.alt = "stressvrouwaziaatbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "stressvrouwblankblondhaar") {
  const a = document.createElement("a");
  a.href = `stressvrouwblankblondhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/stressvrouwblankblondhaar.png";
  img.alt = "stressvrouwblankblondhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "stressvrouwblankbruinhaar") {
  const a = document.createElement("a");
  a.href = `stressvrouwblankbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/stressvrouwblankbruinhaar.png";
  img.alt = "stressvrouwblankbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

if (ervaringHtml == "stressvrouwzwartbruinhaar") {
  const a = document.createElement("a");
  a.href = `stressvrouwzwartbruinhaar.html?id=${ervaringId}`;
  a.classList.add("ervaring-link");

  const img = document.createElement("img");
  img.src = "Images/stressvrouwzwartbruinhaar.png";
  img.alt = "stressvrouwzwartbruinhaar";
  img.classList.add("ervaring-img");

  a.appendChild(img);
  arrayDiv.appendChild(a);

  let opgeslagenHtml = localStorage.getItem("arrayHtml") || "";
  opgeslagenHtml += a.outerHTML;
  localStorage.setItem("arrayHtml", opgeslagenHtml);

  history.replaceState(null, "", "index.html");
}

 
  const vorigOpslag = localStorage.getItem("arrayHtml");
  if (vorigOpslag) {
 
    arrayDiv.innerHTML = vorigOpslag;
  }
});