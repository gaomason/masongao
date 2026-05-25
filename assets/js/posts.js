const posts = [
  {
    title: "Hello World",
    date: "2026-04-20",
    body: "My website is now live!"
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
