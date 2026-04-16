// ── Data ──────────────────────────────────────────────────────────────────
const DATA = [
  {
    id: 1,
    name: "Nguyen Van An",
    sid: "S4113001",
    cls: "CS2024A",
    avg: 42,
    risk: 84,
    gap: 23,
    status: "at-risk",
    trend: "down",
    pred: 40,
    interventions: [
      {
        type: "Email follow-up",
        date: "2025-03-28",
        note: "Sent reminder about upcoming final assessment",
        status: "Done",
      },
    ],
    scores: [
      { sub: "Software Engineering", s: 38 },
      { sub: "Data Structures", s: 42 },
      { sub: "Database Systems", s: 48 },
      { sub: "Computer Networks", s: 40 },
    ],
  },
  {
    id: 2,
    name: "Tran Thi Bich",
    sid: "S4113002",
    cls: "CS2024A",
    avg: 71,
    risk: 12,
    gap: 0,
    status: "safe",
    trend: "up",
    pred: 74,
    interventions: [],
    scores: [
      { sub: "Software Engineering", s: 68 },
      { sub: "Data Structures", s: 75 },
      { sub: "Database Systems", s: 70 },
      { sub: "Computer Networks", s: 71 },
    ],
  },
  {
    id: 3,
    name: "Le Nguyen Bao Quang",
    sid: "S4123868",
    cls: "CS2024A",
    avg: 58,
    risk: 56,
    gap: 12,
    status: "medium",
    trend: "stable",
    pred: 56,
    interventions: [
      {
        type: "Counseling session",
        date: "2025-04-01",
        note: "Discussed study plan and current workload issues",
        status: "In Progress",
      },
    ],
    scores: [
      { sub: "Software Engineering", s: 55 },
      { sub: "Data Structures", s: 62 },
      { sub: "Database Systems", s: 57 },
      { sub: "Computer Networks", s: 58 },
    ],
  },
  {
    id: 4,
    name: "Pham Le Viet An",
    sid: "S4065605",
    cls: "CS2024A",
    avg: 35,
    risk: 91,
    gap: 30,
    status: "at-risk",
    trend: "down",
    pred: 33,
    interventions: [
      {
        type: "Parent notification",
        date: "2025-03-25",
        note: "Family notified regarding academic performance",
        status: "Done",
      },
      {
        type: "Extra tutorial",
        date: "2025-04-05",
        note: "Enrolled in weekend supplemental tutorial program",
        status: "In Progress",
      },
    ],
    scores: [
      { sub: "Software Engineering", s: 32 },
      { sub: "Data Structures", s: 38 },
      { sub: "Database Systems", s: 35 },
      { sub: "Computer Networks", s: 35 },
    ],
  },
  {
    id: 5,
    name: "Hoang Dinh Thinh",
    sid: "S4113609",
    cls: "CS2024A",
    avg: 82,
    risk: 8,
    gap: 0,
    status: "safe",
    trend: "up",
    pred: 85,
    interventions: [],
    scores: [
      { sub: "Software Engineering", s: 78 },
      { sub: "Data Structures", s: 88 },
      { sub: "Database Systems", s: 80 },
      { sub: "Computer Networks", s: 82 },
    ],
  },
  {
    id: 6,
    name: "Vo Thi Cam Tu",
    sid: "S4113010",
    cls: "CS2024B",
    avg: 48,
    risk: 73,
    gap: 17,
    status: "at-risk",
    trend: "down",
    pred: 45,
    interventions: [
      {
        type: "Counseling session",
        date: "2025-04-08",
        note: "Mental health check-in and academic support referral",
        status: "In Progress",
      },
    ],
    scores: [
      { sub: "Software Engineering", s: 45 },
      { sub: "Data Structures", s: 50 },
      { sub: "Database Systems", s: 49 },
      { sub: "Computer Networks", s: 48 },
    ],
  },
  {
    id: 7,
    name: "Dang Minh Duc",
    sid: "S4113011",
    cls: "CS2024B",
    avg: 65,
    risk: 34,
    gap: 0,
    status: "medium",
    trend: "stable",
    pred: 66,
    interventions: [],
    scores: [
      { sub: "Software Engineering", s: 62 },
      { sub: "Data Structures", s: 67 },
      { sub: "Database Systems", s: 66 },
      { sub: "Computer Networks", s: 65 },
    ],
  },
  {
    id: 8,
    name: "Nguyen Phuong Linh",
    sid: "S4113012",
    cls: "CS2024B",
    avg: 77,
    risk: 18,
    gap: 0,
    status: "safe",
    trend: "up",
    pred: 79,
    interventions: [],
    scores: [
      { sub: "Software Engineering", s: 75 },
      { sub: "Data Structures", s: 80 },
      { sub: "Database Systems", s: 76 },
      { sub: "Computer Networks", s: 77 },
    ],
  },
  {
    id: 9,
    name: "Bui Thanh Trung",
    sid: "S4113013",
    cls: "CS2024B",
    avg: 38,
    risk: 87,
    gap: 27,
    status: "at-risk",
    trend: "down",
    pred: 36,
    interventions: [
      {
        type: "Academic plan review",
        date: "2025-04-10",
        note: "Reviewed pass requirements and created recovery plan",
        status: "In Progress",
      },
    ],
    scores: [
      { sub: "Software Engineering", s: 36 },
      { sub: "Data Structures", s: 40 },
      { sub: "Database Systems", s: 38 },
      { sub: "Computer Networks", s: 38 },
    ],
  },
  {
    id: 10,
    name: "Le Thi Hoa",
    sid: "S4113014",
    cls: "CS2024B",
    avg: 54,
    risk: 62,
    gap: 8,
    status: "medium",
    trend: "stable",
    pred: 53,
    interventions: [],
    scores: [
      { sub: "Software Engineering", s: 52 },
      { sub: "Data Structures", s: 55 },
      { sub: "Database Systems", s: 55 },
      { sub: "Computer Networks", s: 54 },
    ],
  },
  {
    id: 11,
    name: "Phan Quoc Hung",
    sid: "S4113015",
    cls: "CS2024B",
    avg: 90,
    risk: 3,
    gap: 0,
    status: "safe",
    trend: "up",
    pred: 92,
    interventions: [],
    scores: [
      { sub: "Software Engineering", s: 88 },
      { sub: "Data Structures", s: 92 },
      { sub: "Database Systems", s: 90 },
      { sub: "Computer Networks", s: 90 },
    ],
  },
  {
    id: 12,
    name: "Tran Van Thanh",
    sid: "S4113016",
    cls: "CS2024A",
    avg: 61,
    risk: 41,
    gap: 4,
    status: "medium",
    trend: "stable",
    pred: 62,
    interventions: [],
    scores: [
      { sub: "Software Engineering", s: 58 },
      { sub: "Data Structures", s: 65 },
      { sub: "Database Systems", s: 60 },
      { sub: "Computer Networks", s: 61 },
    ],
  },
];

let curView = "dashboard",
  prevView = "dashboard",
  selStudent = null,
  dashF = "all";
let trendInited = false,
  analyticsInited = false;


// ── Navigation ──────────────────────────────────────────────────────────
function go(v) {
  prevView = curView;
  document
    .querySelectorAll(".view")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(".nav-item")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById("view-" + v).classList.add("active");
  const ni = document.getElementById("nav-" + v);
  if (ni) ni.classList.add("active");
  curView = v;

  if (v === "students") renderStudents();
  if (v === "analytics") {
    const emptyState = document.getElementById("analytics-empty");
    const contentState = document.getElementById("analytics-content");

    if (isAnalysisRun) {
      // Nếu đã chạy phân tích, hiển thị kết quả luôn
      emptyState.style.display = "none";
      contentState.style.display = "block";
    } else {
      // Nếu chưa chạy, hiển thị màn hình chờ
      emptyState.style.display = "flex";
      document.getElementById("analytics-msg").textContent =
        "Analytics engine is idle. Run analysis to generate predictions.";
      document.getElementById("run-btn").style.display = "block";
      contentState.style.display = "none";
    }
  }
  if (v === "interventions") renderInterv();
  if (v === "detail" && selStudent) renderDetail();
}

function openDetail(id, from) {
  selStudent = DATA.find((s) => s.id === id);
  prevView = from || curView;
  go("detail");
}

// ── Helpers ─────────────────────────────────────────────────────────────
function badge(status) {
  const m = {
    "at-risk": ["bd", "At-Risk"],
    medium: ["bw", "Medium"],
    safe: ["bg", "Safe"],
  };
  return `<span class="badge ${m[status][0]}">${m[status][1]}</span>`;
}
function riskBar(r) {
  const c = r >= 70 ? "#ef4444" : r >= 40 ? "#f59e0b" : "#22c55e";
  return `<div style="display:flex;align-items:center;gap:8px"><div style="flex:1;height:5px;border-radius:3px;background:#e2e8f0"><div style="width:${r}%;height:100%;border-radius:3px;background:${c}"></div></div><span style="font-size:14px;color:#64748b;min-width:30px;font-weight:600">${r}%</span></div>`;
}
function trendArrow(t) {
  return t === "up"
    ? '<span style="color:#16a34a;font-weight:bold">↑</span>'
    : t === "down"
      ? '<span style="color:#dc2626;font-weight:bold">↓</span>'
      : '<span style="color:#94a3b8;font-weight:bold">→</span>';
}
function initials(n) {
  return n
    .split(" ")
    .slice(-2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}
function avColor(id) {
  return ["#1e3a8a", "#14532d", "#7f1d1d", "#4c1d95", "#134e4a", "#831843"][
    id % 6
  ];
}
function toast(msg, bg = "#166534") {
  const t = document.createElement("div");
  t.style.cssText = `position:absolute;bottom:20px;right:20px;background:${bg};color:#fff;padding:12px 18px;border-radius:8px;font-size:15px;font-weight:500;z-index:999;box-shadow:0 4px 12px rgba(0,0,0,.2)`;
  t.textContent = msg;
  document.getElementById("app").appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

// ── Dashboard ────────────────────────────────────────────────────────────
function filterDash(v) {
  dashF = v;
  renderDash();
}
function renderDash() {
  const list = dashF === "all" ? DATA : DATA.filter((s) => s.status === dashF);
  document.getElementById("dash-tbody").innerHTML = list
    .map(
      (s) => `
    <tr onclick="openDetail(${s.id},'dashboard')">
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:30px;height:30px;border-radius:50%;background:${avColor(s.id)};display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#fff;flex-shrink:0">${initials(s.name)}</div>
        <div><div style="font-weight:600;font-size:15px">${s.name}</div><div style="font-size:12px;color:#94a3b8;margin-top:2px">${s.sid}</div></div>
      </div></td>
      <td><span style="font-size:13px;font-weight:600;background:#f1f5f9;padding:3px 8px;border-radius:5px;color:#475569">${s.cls}</span></td>
      <td style="min-width:130px">${riskBar(s.risk)}</td>
      <td style="font-size:14px">${s.gap > 0 ? `<span style="color:#dc2626;font-weight:700">+${s.gap} pts</span>` : '<span style="color:#16a34a;font-weight:600">On track</span>'}</td>
      <td>${badge(s.status)}</td>
      <td><button class="btn" style="font-size:12px;padding:4px 10px;font-weight:600" onclick="event.stopPropagation();openDetail(${s.id},'dashboard')">View →</button></td>
    </tr>`,
    )
    .join("");

  const atRisk = DATA.filter((s) => s.status === "at-risk");
  document.getElementById("alert-list").innerHTML = atRisk
    .map(
      (s) => `
    <div style="padding:12px 18px;border-bottom:1px solid #f8fafc;display:flex;align-items:center;gap:10px;cursor:pointer" onclick="openDetail(${s.id},'dashboard')">
      <span style="width:8px;height:8px;border-radius:50%;background:#ef4444;flex-shrink:0;animation:blink 1.6s infinite;display:inline-block"></span>
      <div style="flex:1"><div style="font-size:15px;font-weight:700;color:#0f172a">${s.name}</div>
        <div style="font-size:13px;color:#64748b;margin-top:3px;font-weight:500">Risk: ${s.risk}% · Needs +${s.gap} pts to pass</div></div>
      <span class="badge bd" style="font-size:12px">${s.risk}%</span>
    </div>`,
    )
    .join("");
}

function initTrend() {
  if (trendInited || typeof Chart === "undefined") {
    if (!trendInited) setTimeout(initTrend, 150);
    return;
  }
  trendInited = true;
  Chart.defaults.font.size = 13;
  new Chart(document.getElementById("trendChart"), {
    type: "line",
    data: {
      labels: ["Wk1", "Wk2", "Wk3", "Wk4", "Wk5", "Wk6", "Wk7", "Wk8"],
      datasets: [
        {
          label: "Class",
          data: [72, 70, 68, 65, 61, 59, 63, 66],
          borderColor: "#2563eb",
          borderWidth: 2.5,
          pointRadius: 3,
          pointBackgroundColor: "#2563eb",
          fill: true,
          backgroundColor: "rgba(37,99,235,.08)",
          tension: 0.4,
        },
        {
          label: "At-Risk",
          data: [52, 49, 47, 44, 41, 38, 40, 42],
          borderColor: "#ef4444",
          borderWidth: 2,
          borderDash: [5, 4],
          pointRadius: 2,
          pointBackgroundColor: "#ef4444",
          fill: false,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { color: "#94a3b8" } },
        y: {
          grid: { color: "rgba(0,0,0,.04)" },
          ticks: { color: "#94a3b8" },
          min: 30,
          max: 85,
        },
      },
    },
  });
}

// ── Students ─────────────────────────────────────────────────────────────
function getFiltered() {
  const nm = (document.getElementById("f-name")?.value || "").toLowerCase();
  const cl = document.getElementById("f-cls")?.value || "";
  const st = document.getElementById("f-stat")?.value || "";
  return DATA.filter(
    (s) =>
      (!nm ||
        s.name.toLowerCase().includes(nm) ||
        s.sid.toLowerCase().includes(nm)) &&
      (!cl || s.cls === cl) &&
      (!st || s.status === st),
  );
}
function renderStudents() {
  const fl = getFiltered();
  const cnt = document.getElementById("s-count");
  if (cnt) cnt.textContent = `${fl.length} of ${DATA.length} students`;
  const tb = document.getElementById("students-tbody");
  if (!tb) return;
  tb.innerHTML =
    fl
      .map(
        (s) => `
    <tr onclick="openDetail(${s.id},'students')">
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:34px;height:34px;border-radius:50%;background:${avColor(s.id)};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#fff;flex-shrink:0">${initials(s.name)}</div>
        <span style="font-weight:600;font-size:15px">${s.name}</span></div></td>
      <td style="font-size:14px;color:#64748b;font-weight:500">${s.sid}</td>
      <td><span style="font-size:13px;background:#f1f5f9;padding:3px 8px;border-radius:5px;color:#475569;font-weight:600">${s.cls}</span></td>
      <td style="font-size:16px;font-weight:700">${s.avg}</td>
      <td style="min-width:130px">${riskBar(s.risk)}</td>
      <td style="font-size:15px">${s.gap > 0 ? `<span style="color:#dc2626;font-weight:700">+${s.gap}</span>` : '<span style="color:#16a34a;font-weight:700">—</span>'}</td>
      <td>${badge(s.status)}</td>
      <td><div style="display:flex;gap:6px">
        <button class="btn" style="font-size:12px;padding:4px 10px;font-weight:600" onclick="event.stopPropagation();openDetail(${s.id},'students')">Profile</button>
      </div></td>
    </tr>`,
      )
      .join("") ||
    `<tr><td colspan="8" style="text-align:center;padding:30px;color:#94a3b8;font-size:15px;font-weight:500">No students match the filter criteria.</td></tr>`;
}
function resetFilters() {
  ["f-name", "f-cls", "f-subj", "f-stat"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  renderStudents();
}

// ── Analytics ────────────────────────────────────────────────────────────
function runAnalysis() {
  document.getElementById("analytics-msg").textContent =
    "Processing background algorithms...";
  document.getElementById("run-btn").style.display = "none";
  setTimeout(() => {
    isAnalysisRun = true; // Xác nhận đã chạy thành công
    document.getElementById("analytics-empty").style.display = "none";
    document.getElementById("analytics-content").style.display = "block";
    renderAnalytics();
    initAnalyticsCharts();
  }, 1500);
}

function renderAnalytics() {
  const tb = document.getElementById("analytics-tbody");
  if (!tb) return;
  tb.innerHTML = DATA.map(
    (s) => `
    <tr onclick="openDetail(${s.id},'analytics')">
      <td><div style="display:flex;align-items:center;gap:10px">
        <div style="width:30px;height:30px;border-radius:50%;background:${avColor(s.id)};display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#fff;flex-shrink:0">${initials(s.name)}</div>
        <span style="font-size:15px;font-weight:600">${s.name}</span></div></td>
      <td style="font-size:15px;font-weight:600">${s.avg}</td>
      <td style="font-size:15px;font-weight:700">${s.pred}</td>
      <td><div style="display:flex;align-items:center;gap:8px">
        <div style="width:60px;height:5px;border-radius:3px;background:#e2e8f0"><div style="width:${s.risk}%;height:100%;border-radius:3px;background:${s.risk >= 70 ? "#ef4444" : s.risk >= 40 ? "#f59e0b" : "#22c55e"}"></div></div>
        <span style="font-size:14px;font-weight:700;color:${s.risk >= 70 ? "#dc2626" : s.risk >= 40 ? "#d97706" : "#16a34a"}">${s.risk}%</span></div></td>
      <td style="font-size:15px">${s.gap > 0 ? `<span style="color:#dc2626;font-weight:700">+${s.gap} pts</span>` : '<span style="color:#16a34a;font-weight:700">Passing ✓</span>'}</td>
      <td style="font-size:18px">${trendArrow(s.trend)}</td>
    </tr>`,
  ).join("");
}
function initAnalyticsCharts() {
  if (analyticsInited || typeof Chart === "undefined") {
    if (!analyticsInited) setTimeout(initAnalyticsCharts, 150);
    return;
  }
  analyticsInited = true;
  Chart.defaults.font.size = 13;
  // Risk distribution
  const buckets = [0, 0, 0, 0, 0];
  DATA.forEach((s) => buckets[Math.min(4, Math.floor(s.risk / 20))]++);
  new Chart(document.getElementById("riskChart"), {
    type: "bar",
    data: {
      labels: ["0–20%", "21–40%", "41–60%", "61–80%", "81–100%"],
      datasets: [
        {
          label: "Students",
          data: buckets,
          backgroundColor: [
            "#22c55e",
            "#86efac",
            "#fbbf24",
            "#f97316",
            "#ef4444",
          ],
          borderRadius: 5,
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { color: "#94a3b8" } },
        y: {
          grid: { color: "rgba(0,0,0,.04)" },
          ticks: { color: "#94a3b8", stepSize: 1 },
        },
      },
    },
  });
  // Scatter
  new Chart(document.getElementById("scatterChart"), {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Students",
          data: DATA.map((s) => ({ x: s.avg, y: s.risk })),
          backgroundColor: DATA.map((s) =>
            s.risk >= 70
              ? "rgba(239,68,68,.85)"
              : s.risk >= 40
                ? "rgba(245,158,11,.85)"
                : "rgba(34,197,94,.85)",
          ),
          pointRadius: 7,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          title: {
            display: true,
            text: "Avg Score",
            font: { size: 13, weight: "bold" },
            color: "#64748b",
          },
          grid: { color: "rgba(0,0,0,.04)" },
          ticks: { color: "#94a3b8" },
          min: 25,
          max: 100,
        },
        y: {
          title: {
            display: true,
            text: "Risk %",
            font: { size: 13, weight: "bold" },
            color: "#64748b",
          },
          grid: { color: "rgba(0,0,0,.04)" },
          ticks: { color: "#94a3b8" },
          min: 0,
          max: 100,
        },
      },
    },
  });
}

// ── Interventions ────────────────────────────────────────────────────────
function renderInterv() {
  const all = [];
  DATA.forEach((s) =>
    s.interventions.forEach((i) => all.push({ ...i, sname: s.name })),
  );
  const cnt = document.getElementById("i-count");
  if (cnt) cnt.textContent = `${all.length} records`;
  const tb = document.getElementById("interv-tbody");
  if (!tb) return;
  tb.innerHTML = all.length
    ? all
        .map(
          (i) => `
    <tr>
      <td style="font-size:15px;font-weight:600">${i.sname}</td>
      <td><span class="badge bb" style="font-size:13px">${i.type}</span></td>
      <td style="font-size:14px;color:#64748b;font-weight:500">${i.date}</td>
      <td style="font-size:15px;max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.note}</td>
      <td><span class="badge ${i.status === "Done" ? "bg" : "bw"}" style="font-size:13px">${i.status}</span></td>
    </tr>`,
        )
        .join("")
    : '<tr><td colspan="5" style="text-align:center;padding:30px;color:#94a3b8;font-size:15px;font-style:italic">No interventions recorded yet.</td></tr>';
}

// ── Student Detail ────────────────────────────────────────────────────────
function renderDetail() {
  const s = selStudent;
  if (!s) return;
  document.getElementById("d-name").textContent = s.name;
  document.getElementById("d-badge").innerHTML = badge(s.status);

  document.getElementById("d-profile").innerHTML = `
    <div style="text-align:center;margin-bottom:20px">
      <div style="width:64px;height:64px;border-radius:50%;background:${avColor(s.id)};display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;color:#fff;margin:0 auto 10px">${initials(s.name)}</div>
      <div style="font-size:20px;font-weight:700;color:#0f172a">${s.name}</div>
      <div style="font-size:14px;color:#64748b;margin-top:4px;font-weight:500">${s.sid} · ${s.cls}</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
      <div style="background:#f8fafc;border-radius:8px;padding:14px;text-align:center">
        <div style="font-size:13px;color:#64748b;margin-bottom:4px;font-weight:600">Avg Score</div>
        <div style="font-size:28px;font-weight:700;color:#0f172a">${s.avg}</div>
      </div>
      <div style="background:${s.risk >= 70 ? "#fef2f2" : s.risk >= 40 ? "#fffbeb" : "#f0fdf4"};border-radius:8px;padding:14px;text-align:center">
        <div style="font-size:13px;color:#64748b;margin-bottom:4px;font-weight:600">Risk</div>
        <div style="font-size:28px;font-weight:700;color:${s.risk >= 70 ? "#dc2626" : s.risk >= 40 ? "#d97706" : "#16a34a"}">${s.risk}%</div>
      </div>
    </div>
    ${
      s.gap > 0
        ? `<div style="background:#fef2f2;border-radius:6px;padding:10px 14px;font-size:14px;color:#991b1b;text-align:center">Needs <strong style="font-size:15px">+${s.gap} pts</strong> to reach passing threshold</div>`
        : '<div style="background:#f0fdf4;border-radius:6px;padding:10px 14px;font-size:14px;color:#166534;text-align:center;font-weight:600">Currently on track to pass ✓</div>'
    }`;

  // Gauge SVG
  const r = s.risk;
  const rad = Math.PI + (r / 100) * Math.PI;
  const cx = 85,
    cy = 78,
    rad2 = 58;
  const nx = (cx + rad2 * Math.cos(rad)).toFixed(1),
    ny = (cy + rad2 * Math.sin(rad)).toFixed(1);
  const gc = r >= 70 ? "#ef4444" : r >= 40 ? "#f59e0b" : "#22c55e";
  const g = document.getElementById("d-gauge");
  g.innerHTML = `
    <path d="M27 78 A58 58 0 0 1 143 78" fill="none" stroke="#e2e8f0" stroke-width="14" stroke-linecap="round"/>
    <path d="M27 78 A58 58 0 0 1 ${nx} ${ny}" fill="none" stroke="${gc}" stroke-width="14" stroke-linecap="round"/>
    <circle cx="${nx}" cy="${ny}" r="7" fill="${gc}"/>
    <text x="85" y="85" text-anchor="middle" font-size="24" font-weight="800" fill="${gc}">${r}%</text>`;

  document.getElementById("d-scores").innerHTML =
    s.scores
      .map(
        (sc, idx) => `
    <div style="margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <div style="font-size:15px;color:#334155;font-weight:600">${sc.sub}</div>
        <div style="display:flex;align-items:center;gap:4px">
          <input type="number" id="score-input-${idx}" value="${sc.s}" min="0" max="100" style="width:70px; padding:4px 6px; font-size:15px; font-weight:700; text-align:right; border:1px solid #cbd5e1; border-radius:5px; color:${sc.s < 50 ? "#dc2626" : sc.s < 65 ? "#d97706" : "#16a34a"}">
          <span style="font-size:15px; font-weight:700; color:${sc.s < 50 ? "#dc2626" : sc.s < 65 ? "#d97706" : "#16a34a"}">/100</span>
        </div>
      </div>
      <div style="height:8px;background:#e2e8f0;border-radius:4px">
        <div style="width:${sc.s}%;height:100%;border-radius:4px;background:${sc.s < 50 ? "#ef4444" : sc.s < 65 ? "#f59e0b" : "#22c55e"}"></div>
      </div>
    </div>`,
      )
      .join("") +
    `<button class="btn btn-primary" style="width:100%; margin-top:20px; justify-content:center; padding:12px; font-size:16px; font-weight:600" onclick="saveScores()">Save Changes</button>`;

  renderDetailLog();
}

function saveScores() {
  const s = selStudent;
  let valid = true;
  s.scores.forEach((sc, idx) => {
    const val = parseInt(document.getElementById(`score-input-${idx}`).value);
    if (isNaN(val) || val < 0 || val > 100) valid = false;
    else sc.s = val;
  });
  if (!valid) {
    toast("Invalid score. Must be 0-100.", "#991b1b");
    return;
  }
  s.avg = Math.round(
    s.scores.reduce((sum, sc) => sum + sc.s, 0) / s.scores.length,
  );
  renderDetail();
  toast("Scores updated successfully.", "#166534");
}

function renderDetailLog() {
  const s = selStudent;
  const el = document.getElementById("d-log");
  if (!el) return;
  el.innerHTML = s.interventions.length
    ? s.interventions
        .map(
          (i) => `
      <div style="border:1px solid #f1f5f9;border-radius:8px;padding:12px;margin-bottom:10px;background:#fafafa">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <span class="badge bb" style="font-size:12px">${i.type}</span>
          <span class="badge ${i.status === "Done" ? "bg" : "bw"}" style="font-size:12px">${i.status}</span>
        </div>
        <div style="font-size:13px;color:#94a3b8;margin-bottom:4px;font-weight:500">${i.date}</div>
        <div style="font-size:15px;color:#334155">${i.note}</div>
      </div>`,
        )
        .join("")
    : '<div style="font-size:14px;color:#94a3b8;font-style:italic">No interventions recorded yet.</div>';
}

function addInterv() {
  const type = document.getElementById("i-type").value;
  const note = document.getElementById("i-note").value.trim();
  if (!note) {
    toast("Please add a note before recording.", "#7f1d1d");
    return;
  }
  const today = new Date().toISOString().split("T")[0];
  selStudent.interventions.push({
    type,
    date: today,
    note,
    status: "In Progress",
  });
  document.getElementById("i-note").value = "";
  renderDetailLog();
  toast("Intervention recorded successfully", "#166534");
}

function sendWarn() {
  const msg = document.getElementById("warn-txt").value.trim();
  if (!msg) return;
  const fb = document.getElementById("warn-fb");
  fb.textContent = `✓ Warning sent to ${selStudent.name} via in-app notification`;
  fb.style.color = "#16a34a";
  document.getElementById("warn-txt").value = "";
  setTimeout(() => {
    if (fb) fb.textContent = "";
  }, 4500);
}

// ── Other ────────────────────────────────────────────────────────────────
let currentImportType = '';

function openImportModal(type) {
  currentImportType = type;
  document.getElementById('modal-title').textContent = `Upload ${type} File`;
  document.getElementById('import-modal').style.display = 'flex';
}

function closeImportModal() {
  document.getElementById('import-modal').style.display = 'none';
  document.getElementById('hidden-file-input').value = ''; // Reset input
}

function showImportStatus(msg, type) {
  const el = document.getElementById("import-status");
  if (!el) return;

  el.style.display = "block";
  el.textContent = msg;

  if (type === "success") {
    el.style.background = "#dcfce7"; // Nền xanh nhạt
    el.style.color = "#166534"; // Chữ xanh đậm
    el.style.borderColor = "#bbf7d0";
  } else {
    el.style.background = "#fee2e2"; // Nền đỏ nhạt
    el.style.color = "#991b1b"; // Chữ đỏ đậm
    el.style.borderColor = "#fecaca";
  }

  // Tự động ẩn đi sau 3 giây
  setTimeout(() => {
    el.style.display = "none";
  }, 10000);
}

function saveImport() {
  closeImportModal();
  showImportStatus(
    `Success: ${currentImportType} file imported successfully!`,
    "success",
  );
}

function cancelImport() {
  closeImportModal();
  showImportStatus("Error: Import cancelled.", "error");
}

// ── Init ─────────────────────────────────────────────────────────────────
renderDash();
setTimeout(initTrend, 200);
