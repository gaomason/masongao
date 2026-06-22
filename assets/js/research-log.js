const researchLogEntries = [
  {
    title: "Update #2",
    date: "2026-06-17",
    body: [
      "Currently traveling, so won't be doing much",
      "1. So I have a rough implementation of an adapted MCLU update with some new ideas incorporated. The only problem is that there are many ideas that I want to test to see if they impact efficiency, and they may all be corerelated to each other. Need to implement a lot more. And also compile a final test set (Which is also very annoying)",
      "2. Also showed that shortest-path problems with merge oracle can be solved in polynomial merges, given a specific merge oracle. Otherwise, showed it's not possible. Now moving on to Boolean Linear optimization, which is much more difficult. "
    ]
  },
  {
    title: "Summer Research Update",
    date: "2026-05-28",
    body: [
      "A brief update on what I'm working on this summer.",
      "1. Still working on improving QSopt_ex with different approaches to MCLU updates. I have some good ideas, but the devil is in the implementation.",
      "2. Working on a new problem that is quite interesting: for a wide body of optimization problems, if you are only able to merge potential solutions, can you still solve the problem in polynomially many merges?"
    ]
  }
];

function createResearchLogItem(entry) {
  const item = document.createElement("li");

  const title = document.createElement("h3");
  title.className = "post-title";
  title.textContent = entry.title;

  const meta = document.createElement("p");
  meta.className = "meta";
  meta.textContent = formatResearchLogDate(entry.date);

  item.append(title, meta);

  const paragraphs = Array.isArray(entry.body) ? entry.body : [entry.body];
  paragraphs
    .filter(Boolean)
    .forEach((paragraph) => {
      const bodyParagraph = document.createElement("p");
      bodyParagraph.textContent = paragraph;
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

function renderResearchLog(targetId, count = researchLogEntries.length) {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  const sortedEntries = [...researchLogEntries].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const entriesToRender = sortedEntries.slice(0, Math.max(0, count));
  if (entriesToRender.length === 0) {
    target.innerHTML = '<li class="no-data">No research entries yet.</li>';
    return;
  }

  entriesToRender.forEach((entry) => {
    target.appendChild(createResearchLogItem(entry));
  });
}
