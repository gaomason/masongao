const posts = [
  {
    title: "My white hairs",
    date: "2026-06-05",
    body: "I just got a haircut, been overdue, last time I got it cut was the last week of march. The haircut was fine." 
    + " I was just looking at myself in the mirror - I have a lot of new white hairs. Like at least 20. That's really funny.."
    + " I always get white hairs after a stressful period, a stressful semester. But never this many, usually 5-10."
    + " I guess that's just how it's been. Eye bags, eye lines, also more noticable, though I've been sleeping well. Just getting older. Living."
  },
  {
    title: "Slowing down",
    date: "2026-06-01",
    body: "Been a busy few days, I have been showing a friend around Shanghai, going to all the tourist spots." 
    + " I'm quite tired, it's been day to night just walking around. It's fun, but I am really looking forward to having a day off."
    + " I'm realizing that I prefer to just chill and slow down, especially when traveling. I think that is the goal for my trips this summer."
    + " I don't need to see everything, I just want to have a good time. I think I have changed."
  },
  {
    title: "Hello World",
    date: "2026-04-20",
    body: "My website is now live!"
  }
];

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

  const body = document.createElement("p");
  body.className = "post-excerpt";
  body.textContent = post.body;

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

function renderRecentPosts(targetId, count) {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }
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
