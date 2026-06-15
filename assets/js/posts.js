const posts = [
  {
    title: "Taiwanese elders",
    date: "2026-06-15",	
    body: "For context, I've been on a cruise up the 长江to重庆. It's been nice, but also, wasn't expecting that the cruise is 95% the elderly, haha. They say old people are the easiest to talk to, well, I didn't really talk to many, just been chilling, but I have talked to this group of four from 台南 who are in my assigned dining group."
    +" At first, I saw I was put with the Taiwanese group and thought, \"Wow, almost like fate is laughing at me\". Lots of reminders: The linguistic quirks, 台语, etc."
    +"\n\nBut one of them started to strike up a conversation with me, and we've talked a little since. That is another thing I should be getting better at: making the first move. Although previously, I think I had valid reasons to just chill alone."
    +"\n\nYeah I mean, I just had my last dinner here, so I just asked them when they were leaving China, and then we ended up talking for half an hour about Taiwan, China, housing prices, TSMC, etc. Pleasant conversation."
    +" I think I've removed most of the thorns now. Conversation with strangers can be rewarding. I'll never see them again, don't even know their names, but I'll remember this conversation. Many people can leave a small mark when they pass your world." 
  },
  {
    title: "Unasked tasks for those in pain",
    date: "2026-06-14",
    body: "I want to become proactive. But not just proactive. I think I already am quite proactive. I want to be able to consistently identify and act on small things that may make me uncomfortable."
    +" Things like recognizing somebody is having a bad day, going through something, and instead of keeping my distance, asking them if they're OK. OK, perhaps that isn't the best approach for many people."
    + " But doing something kind for them, like getting them a coffee. It is only through my own internal struggle where I have realized the pain and hurt people may carry with them day to day. And how those small actions may impact them."
    + " I guess it's a double whammy of both identification and action. Many people hold it in very well. Not sure how to address this, but I may have to just do what I can."
    + " And then action, the fear of awkwardness, overstepping. That is esasier. Simply act. And also the question of who. Obviously my friends. But what about aquaintances? Strangers? Those I dislike? Perhaps, everybody deserves some grace when they are struggling.."
  },
  {
    title: "Control and Irritability",
    date: "2026-06-13",
    body: "I inherited my irritability from my father. When I got to college, I thought I could solve it by hiding it, but then realized that was causing other problems in my life. I then just showed it, but generally made sure my expression was reasonable and calm."
    + " Well, I think now, I've changed again. I feel like little by little, it is leaving me. The things that are far away from me, strangers cutting me in line, or loudness, or whatever. I thought about it, and realized: What am I going to do about it?"
    + " Well, it's obviously not worth it to try to change things like that. The only thing you can do is not let it affect yourself. And since I've come to that mentality, well, I genuinely have been unbothered. Tranquility. I feel much more at peace."
    + "\n\nIt's a more difficult journey with things closer to me. Things that I feel I can control. It really is a control thing for me: If I feel I can influence the outcome, or if it's something worth trying to change, I think I still care about it."
    + " But I think I'm on the path to tranquility, even with closer things. It seems I have learned, or am learning, that there are many things in life one cannot control. The only thing that is fully yours to control is your own response."
    + " Now I don't want to get too detached, indifferent. I hope to be able to care about things, but not let it affect me drastically. Live and move on."
  },
  {
    title: "Altruism",
    date: "2026-06-07",
    body: "Around two months ago, I started to donate to the homeless. I'm not sure why I wasn't before. It was a combination of inconvenience, fear of ill intent, bystanderism, and miserliness."
    + " Well, I thought about it a bit, and resolved all those reasons. Inconvenience: It doesn't really take that long. Ill intent: Probably not going to give cash, but I've been buying people meals/giving other essentials like socks."
    + " Bystanderism: I decided that to be an adult, meant to be someone who takes action. Miserliness: Well, I used to think that the 10 bucks I spent helping somebody was one less chipotle meal for myself. But, breaking it down by year instead, say if I donate once per week, around $10, then that amounts to ~$500 a year. That's not bad. A good price to pay for the soul."
    + " So, I've gone around a few times, asking dudes if they want anything from the grocery store, or chipotle, or whatever."
    + "\n\nHonestly, I still subscribe to the view that human behavior is inherently selfish, that I myself, am selfish. So, I'm not entirely sure where my motives lie. I think it's mostly so that I can feel better about myself, so that I may be somebody I would admire. The alutrism aspect is quite secondary to me. Perhaps with action will come true motive, but I don't think that is likely for me. I guess I'll find out."
  },
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
