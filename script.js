/* EVENT SETTINGS
   Edit the values below to customize your event.
   Date format: YYYY-MM-DDTHH:MM:SS+07:00 (Cambodia time uses +07:00).
   Keep no more than five gallery images in the HTML.
*/
const EVENT_CONFIG = {
  brand: "YOUTH AND BUSINESS IMMERSION 2026",
  kicker: "YOUR SIEM REAP JOURNEY BEGINS",
  title: "YOUTH AND BUSINESS IMMERSION",
  description: "Four days of learning, local experiences, business innovation, and new connections in Siem Reap.",
  date: "2026-10-29T05:30:00+07:00",
  dateLabel: "OCTOBER 29 – NOVEMBER 1, 2026",
  location: "SIEM REAP, CAMBODIA",
  agendaSubtitle: "Four days of learning, immersion, and shared experiences in Siem Reap.",
  agenda: [
    {
      label: "DAY 01",
      title: "Travel to Siem Reap",
      date: "THURSDAY, OCTOBER 29, 2026",
      sessions: [
        { time: "05:00 AM – 05:30 AM", title: "Participants Arrival", description: "Gather and prepare for departure.", tag: "ARRIVAL" },
        { time: "05:30 AM – 11:30 AM", title: "Depart to Siem Reap", description: "Bus departure from Phnom Penh to Siem Reap. The countdown ends at this departure time.", tag: "BUS DEPARTURE" },
        { time: "12:00 PM – 01:30 PM", title: "Lunch at Bakong My Village", description: "Lunch stop at Bakong My Village.", tag: "LUNCH" },
        { time: "01:30 PM – 02:00 PM", title: "Travel to Venue", description: "Continue to the accommodation venue.", tag: "TRAVEL" },
        { time: "02:00 PM – 03:00 PM", title: "Hotel Check-in and Rest", description: "Check in and take time to rest.", tag: "HOTEL" },
        { time: "03:30 PM – 06:00 PM", title: "Sunset and Explore the Temple", description: "Explore the temple area and enjoy the sunset.", tag: "EXPLORATION" },
        { time: "06:30 PM – 08:00 PM", title: "Welcome Dinner at Amazon Angkor", description: "Welcome dinner for all participants.", tag: "DINNER" }
      ]
    },
    {
      label: "DAY 02",
      title: "Youth and Business Immersion",
      date: "FRIDAY, OCTOBER 30, 2026",
      sessions: [
        { time: "06:00 AM – 06:30 AM", title: "Get Ready", description: "Prepare for the morning programme.", tag: "MORNING" },
        { time: "06:30 AM – 06:45 AM", title: "Depart for Activity", description: "Travel to the first activity.", tag: "TRAVEL" },
        { time: "06:45 AM – 07:45 AM", title: "Mission: Support Local Hero", description: "Take part in the local community mission.", tag: "COMMUNITY" },
        { time: "08:00 AM – 09:30 AM", title: "Breakfast and Shower", description: "Breakfast and time to get ready.", tag: "BREAKFAST" },
        { time: "09:30 AM – 11:30 AM", title: "Welcome Speech and Programme Sessions", description: "Welcome speech by Mr. Panhavuth Ly, programme overview and expectations, sharing session with Mr. Lyteng Heng on “From University to Workplace: What to Expect & Skills That Matter”, icebreaking activities, business innovation challenges, and reflection.", tag: "MAIN PROGRAMME" },
        { time: "11:30 AM – 01:00 PM", title: "Lunch at Melea Wat Bo", description: "Lunch at Melea Wat Bo.", tag: "LUNCH" },
        { time: "01:00 PM – 01:30 PM", title: "Travel to Immersion", description: "Travel to the afternoon immersion venue.", tag: "TRAVEL" },
        { time: "01:30 PM – 05:00 PM", title: "Immersion 1: Khmer Ceramics & Fine Arts Centre", description: "Experience Khmer ceramics and fine arts.", tag: "IMMERSION" },
        { time: "05:00 PM – 05:30 PM", title: "Travel Back to Hotel", description: "Return to the hotel.", tag: "TRAVEL" }
      ]
    },
    {
      label: "DAY 03",
      title: "Satcha Handicraft Immersion",
      date: "SATURDAY, OCTOBER 31, 2026",
      sessions: [
        { time: "08:00 AM – 09:00 AM", title: "Breakfast", description: "Breakfast at the hotel.", tag: "BREAKFAST" },
        { time: "09:00 AM – 09:30 AM", title: "Depart for Immersion", description: "Travel to the immersion venue.", tag: "TRAVEL" },
        { time: "09:30 AM – 12:30 PM", title: "Immersion 2: Satcha Handicraft", description: "Explore local handicrafts and creative work.", tag: "IMMERSION" },
        { time: "12:30 PM – 02:00 PM", title: "Lunch at Tavern Siem Reap", description: "Lunch with the group.", tag: "LUNCH" },
        { time: "02:00 PM – 02:30 PM", title: "Travel Back to Hotel", description: "Return to the hotel.", tag: "TRAVEL" },
        { time: "02:30 PM onwards", title: "Rest and Recreation", description: "Personal time to rest and enjoy recreation.", tag: "FREE TIME" }
      ]
    },
    {
      label: "DAY 04",
      title: "Farewell and Return to Phnom Penh",
      date: "SUNDAY, NOVEMBER 1, 2026",
      sessions: [
        { time: "08:00 AM – 09:00 AM", title: "Breakfast", description: "Breakfast at the hotel.", tag: "BREAKFAST" },
        { time: "09:00 AM – 11:00 AM", title: "Rest", description: "Free time before checkout.", tag: "REST" },
        { time: "11:00 AM – 12:00 PM", title: "Check-out and Programme Recap", description: "Check out, recap the programme, share messages, and take a group photo.", tag: "CHECKOUT" },
        { time: "12:00 PM – 02:00 PM", title: "Farewell Lunch at Preah Dak", description: "Farewell lunch at Preah Dak.", tag: "LUNCH" },
        { time: "02:00 PM – 08:00 PM", title: "Depart to Phnom Penh", description: "Bus journey back to Phnom Penh.", tag: "RETURN JOURNEY" }
      ]
    }
  ]
};

const byId = (id) => document.getElementById(id);
document.querySelectorAll("#brand-name, #footer-brand-name").forEach(el => el.textContent = EVENT_CONFIG.brand);
if (byId("event-kicker")) {
  byId("event-kicker").textContent = EVENT_CONFIG.kicker;
  byId("event-title").innerHTML = EVENT_CONFIG.title.split(" ").reduce((acc, word, i) => {
    if (i === 0) return word;
    const count = acc.split("<br>").join(" ").split(" ").filter(Boolean).length;
    return count >= Math.ceil(EVENT_CONFIG.title.split(" ").length / 2) ? acc + "<br>" + word : acc + " " + word;
  }, "");
  byId("event-description").textContent = EVENT_CONFIG.description;
  byId("event-date-label").textContent = EVENT_CONFIG.dateLabel;
  byId("event-location").textContent = EVENT_CONFIG.location;
}
if (byId("agenda-subtitle")) {
  byId("agenda-subtitle").textContent = EVENT_CONFIG.agendaSubtitle;
  byId("agenda-event-date").textContent = EVENT_CONFIG.dateLabel;
}

function updateCountdown() {
  const target = new Date(EVENT_CONFIG.date).getTime();
  const diff = target - Date.now();
  if (diff <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => byId(id).textContent = id === "days" ? "000" : "00");
    byId("countdown-status").textContent = "THE BUS HAS DEPARTED";
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  byId("days").textContent = String(days).padStart(3, "0");
  byId("hours").textContent = String(hours).padStart(2, "0");
  byId("minutes").textContent = String(minutes).padStart(2, "0");
  byId("seconds").textContent = String(seconds).padStart(2, "0");
}
if (byId("days")) { updateCountdown(); setInterval(updateCountdown, 1000); }

const tabs = byId("day-tabs");
if (tabs) {
  function renderDay(index) {
    const day = EVENT_CONFIG.agenda[index];
    document.querySelectorAll(".day-tab").forEach((tab, i) => {
      tab.classList.toggle("active", i === index);
      tab.setAttribute("aria-selected", i === index ? "true" : "false");
    });
    byId("day-label").textContent = day.label;
    byId("day-title").textContent = day.title;
    byId("day-date").textContent = day.date;
    const list = byId("schedule-list");
    list.innerHTML = "";
    day.sessions.forEach((session, i) => {
      const row = document.createElement("article");
      row.className = "schedule-row";
      row.style.animationDelay = `${i * 45}ms`;
      row.innerHTML = `<div class="schedule-time">${session.time}</div><div><h3 class="schedule-title"></h3><p class="schedule-description"></p><span class="schedule-tag"></span></div>`;
      row.querySelector(".schedule-title").textContent = session.title;
      row.querySelector(".schedule-description").textContent = session.description;
      row.querySelector(".schedule-tag").textContent = session.tag;
      list.appendChild(row);
    });
  }
  EVENT_CONFIG.agenda.forEach((day, index) => {
    const button = document.createElement("button");
    button.className = "day-tab";
    button.type = "button";
    button.role = "tab";
    button.textContent = day.label;
    button.addEventListener("click", () => renderDay(index));
    tabs.appendChild(button);
  });
  renderDay(0);
}

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? "×" : "☰";
  });
}


// Keep navigation consistent, then switch its color theme after scrolling.
const siteHeader = document.querySelector(".site-header");
function updateHeaderTheme() {
  if (siteHeader) siteHeader.classList.toggle("scrolled", window.scrollY > 45);
}
window.addEventListener("scroll", updateHeaderTheme, { passive: true });
window.addEventListener("load", updateHeaderTheme);
updateHeaderTheme();

// Short fade/slide transition when moving between Countdown and Agenda.
document.querySelectorAll('a[href="index.html"], a[href="agenda.html"]').forEach(link => {
  link.addEventListener("click", event => {
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
    event.preventDefault();
    document.body.classList.add("page-leaving");
    window.setTimeout(() => { window.location.href = url.href; }, 180);
  });
});

// Hide the logo image if no logo file has been added yet.
document.querySelectorAll(".brand-logo").forEach(img => {
  img.addEventListener("error", () => { img.style.display = "none"; });
});

// Show the event banner when assets/event-banner.jpg exists.
const eventBanner = document.getElementById("event-banner");
if (eventBanner) {
  const bannerWrap = eventBanner.closest(".hero-art");
  eventBanner.addEventListener("load", () => bannerWrap.classList.remove("banner-missing"));
  eventBanner.addEventListener("error", () => bannerWrap.classList.add("banner-missing"));
  if (eventBanner.complete && eventBanner.naturalWidth > 0) bannerWrap.classList.remove("banner-missing");
}
