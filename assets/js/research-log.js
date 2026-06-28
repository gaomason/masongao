const RESEARCH_LOG_DATA_URL = "/assets/data/research-log.json";

let researchLogPromise;

function loadResearchLogEntries() {
  if (!researchLogPromise) {
    researchLogPromise = fetch(RESEARCH_LOG_DATA_URL).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load research log (${response.status})`);
      }

      return response.json();
    });
  }

  return researchLogPromise;
}

function createResearchLogItem(entry) {
  const item = document.createElement("li");

  const title = document.createElement("h3");
  title.className = "post-title";
  title.textContent = entry.title;

  const meta = document.createElement("p");
  meta.className = "meta";
  meta.textContent = formatResearchLogDate(entry.date);

  item.append(title, meta);

  entry.body.split(/\n\n+/).filter(Boolean).forEach((paragraph) => {
    const bodyParagraph = document.createElement("p");
    bodyParagraph.textContent = paragraph.trim();
    item.appendChild(bodyParagraph);
  });

  return item;
}

function formatResearchLogDate(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

async function renderResearchLog(targetId, count) {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  const researchLogEntries = await loadResearchLogEntries();
  const sortedEntries = [...researchLogEntries].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const entriesToRender = sortedEntries.slice(0, Math.max(0, count ?? sortedEntries.length));

  if (entriesToRender.length === 0) {
    target.innerHTML = '<li class="no-data">No research entries yet.</li>';
    return;
  }

  entriesToRender.forEach((entry) => {
    target.appendChild(createResearchLogItem(entry));
  });
}
