const POSTS_DATA_URL = "/assets/data/posts.json";

let postsPromise;

function loadPosts() {
  if (!postsPromise) {
    postsPromise = fetch(POSTS_DATA_URL).then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load posts (${response.status})`);
      }

      return response.json();
    });
  }

  return postsPromise;
}

function createPostItem(post, options = {}) {
  const { cardView = false } = options;
  const item = document.createElement("li");
  if (cardView) {
    item.classList.add("post-card");
  }

  const title = document.createElement("h3");
  title.className = "post-title";
  title.textContent = post.title;

  const meta = document.createElement("p");
  meta.className = "meta";
  meta.textContent = formatDate(post.date);

  const body = document.createElement("div");
  body.className = "post-excerpt";
  post.body.split(/\n\n+/).filter(Boolean).forEach((paragraph) => {
    const paragraphEl = document.createElement("p");
    paragraphEl.textContent = paragraph.trim();
    body.appendChild(paragraphEl);
  });

  item.append(title, meta, body);

  if (cardView) {
    body.classList.add("is-clamped");
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "post-expand-toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "More";
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      body.classList.toggle("is-clamped", expanded);
      toggle.textContent = expanded ? "More" : "Less";
    });
    item.appendChild(toggle);
  }

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

async function renderRecentPosts(targetId, count) {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  const posts = await loadPosts();
  const cardView = target.classList.contains("post-list-cards");
  const recentPosts = posts.slice(0, count);

  if (recentPosts.length === 0) {
    target.innerHTML = '<li class="no-data">No posts yet.</li>';
    return;
  }

  recentPosts.forEach((post) => {
    target.appendChild(createPostItem(post, { cardView }));
  });
}

async function renderAllPosts(targetId) {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  const posts = await loadPosts();

  if (posts.length === 0) {
    target.innerHTML = '<li class="no-data">No posts yet.</li>';
    return;
  }

  posts.forEach((post) => {
    target.appendChild(createPostItem(post));
  });
}
