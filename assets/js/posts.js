const posts = [
  {
    title: "Research note placeholder",
    date: "2026-05-20",
    body: "Replace this with a short thought or observation."
  },
  {
    title: "What I am learning this week",
    date: "2026-05-16",
    body: "Add a reflection on ideas, papers, or experiments."
  },
  {
    title: "A useful question for today",
    date: "2026-05-11",
    body: "Write a question that is guiding your current thinking."
  },
  {
    title: "Interesting conversation recap",
    date: "2026-05-07",
    body: "Capture one key takeaway from a recent discussion."
  },
  {
    title: "Small win",
    date: "2026-05-03",
    body: "Document one small achievement or useful insight."
  },
  {
    title: "Reference note",
    date: "2026-04-28",
    body: "Store a reference or quote that you want to revisit."
  }
];

function createPostItem(post) {
  const item = document.createElement("li");

  const title = document.createElement("h3");
  title.className = "post-title";
  title.textContent = post.title;

  const meta = document.createElement("p");
  meta.className = "meta";
  meta.textContent = formatDate(post.date);

  const body = document.createElement("p");
  body.textContent = post.body;

  item.append(title, meta, body);
  return item;
}

function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function renderRecentPosts(targetId, count) {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  const recentPosts = posts.slice(0, count);
  if (recentPosts.length === 0) {
    target.innerHTML = '<li class="no-data">No posts yet.</li>';
    return;
  }

  recentPosts.forEach((post) => {
    target.appendChild(createPostItem(post));
  });
}

function renderAllPosts(targetId) {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  if (posts.length === 0) {
    target.innerHTML = '<li class="no-data">No posts yet.</li>';
    return;
  }

  posts.forEach((post) => {
    target.appendChild(createPostItem(post));
  });
}
