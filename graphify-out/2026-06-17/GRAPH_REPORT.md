# Graph Report - .  (2026-06-15)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 139 nodes · 201 edges · 11 communities (9 shown, 2 thin omitted)
- Extraction: 76% EXTRACTED · 24% INFERRED · 0% AMBIGUOUS · INFERRED: 49 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `00ab038e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Achievement Badges Collection|Achievement Badges Collection]]
- [[_COMMUNITY_Homeschool Platform Index|Homeschool Platform Index]]
- [[_COMMUNITY_Login and Session Management|Login and Session Management]]
- [[_COMMUNITY_AI Learning Tools Dashboard|AI Learning Tools Dashboard]]
- [[_COMMUNITY_Frontend Scripts and Auth|Frontend Scripts and Auth]]
- [[_COMMUNITY_Gamification and Icons|Gamification and Icons]]
- [[_COMMUNITY_Parent Dashboard UI|Parent Dashboard UI]]
- [[_COMMUNITY_Education Levels and Progress|Education Levels and Progress]]
- [[_COMMUNITY_Project Documentation Files|Project Documentation Files]]
- [[_COMMUNITY_Mobile Nav Menu|Mobile Nav Menu]]
- [[_COMMUNITY_HTML Escape Utility|HTML Escape Utility]]

## God Nodes (most connected - your core abstractions)
1. `Trinity Oaks Homeschool Index Page` - 20 edges
2. `material.html — Trinity Oaks Homeschool Material Page` - 11 edges
3. `Student Dashboard Page` - 10 edges
4. `Dashboard HTML` - 9 edges
5. `IIFE Init Script` - 5 edges
6. `Notepad and Pencil Exam Icon` - 5 edges
7. `Badge: Campeon (Champion)` - 5 edges
8. `Badge: Primaria Completa (SVG)` - 5 edges
9. `Badge: Secundaria Completa (SVG)` - 5 edges
10. `doLogin Function` - 4 edges

## Surprising Connections (you probably didn't know these)
- `material.html — Trinity Oaks Homeschool Material Page` --references--> `assets/icons/estrella.png`  [EXTRACTED]
  material.html → assets/icons/estrella.png
- `material.html — Trinity Oaks Homeschool Material Page` --references--> `assets/icons/examen.png`  [EXTRACTED]
  material.html → assets/icons/examen.png
- `material.html — Trinity Oaks Homeschool Material Page` --references--> `assets/icons/grafica.png`  [EXTRACTED]
  material.html → assets/icons/grafica.png
- `material.html — Trinity Oaks Homeschool Material Page` --references--> `assets/icons/robot.png`  [EXTRACTED]
  material.html → assets/icons/robot.png
- `Trinity Oak Homeschool Logo (Dark/White variant)` --references--> `Student Dashboard Page`  [INFERRED]
  Logo 2.png → student.html

## Import Cycles
- None detected.

## Communities (11 total, 2 thin omitted)

### Community 0 - "Achievement Badges Collection"
Cohesion: 0.17
Nodes (27): Badge: Campeon (Champion), Badge: Comprometido (25 sessions), Badge: Constante (Consistent), Badge: Dedicado (10 sessions), Badge: Imparable (Rocket), Badge: Inicio de Ciclo (SVG), Badge: Kinder Completo (SVG), Badge: Leyenda (SVG) (+19 more)

### Community 1 - "Homeschool Platform Index"
Cohesion: 0.12
Nodes (15): AI-Powered Learning Assistant, Charlotte Mason Method, Homeschool Education, Russian Mathematics (Kolmogorov / Davydov), Singapore Mathematics (CPA Method), Waldorf Pedagogy (Rudolf Steiner), WhatsApp Contact (wa.me/525584874261), Email Modal Overlay (+7 more)

### Community 2 - "Login and Session Management"
Cohesion: 0.16
Nodes (18): Primaria Educational Level, Trinity Oak Homeschool Brand, Trinity Oak Homeschool Logo (Dark/White variant), Trinity Oak Homeschool Logo (Color variant), Primaria Level Badge / Emblem, Cinzel Google Font, clearSession Function, doLogin Function (+10 more)

### Community 3 - "AI Learning Tools Dashboard"
Cohesion: 0.15
Nodes (9): material.html — Trinity Oaks Homeschool Material Page, IIFE Init Script, localStorage (browser API), AI Section: Generador de Actividades (sec-act), AI Section: Asistente IA (sec-chat), AI Section: Examen del Mes (sec-exam), AI Section: Reporte Mensual (sec-rep), toggleSection() (+1 more)

### Community 4 - "Frontend Scripts and Auth"
Cohesion: 0.14
Nodes (10): askEmailModal(), cards, months, nav, periods, prices, sha256(), showError() (+2 more)

### Community 5 - "Gamification and Icons"
Cohesion: 0.17
Nodes (16): Badge: Asistente Frecuente (Frequent Assistant), Badge: Mes Perfecto (Perfect Month), Badge: Primera Actividad (First Activity), Badge: Semana Completa (Full Week), AI Assistant / Chatbot Concept, Data Visualization Concept, Secondary School Education Platform, Exam / Activity Submission (+8 more)

### Community 6 - "Parent Dashboard UI"
Cohesion: 0.24
Nodes (9): Add Hijo Modal overlay, Badge toast notification, dash-hero section, hijos-grid section, Dashboard HTML, nav-title (Trinity Oaks Homeschool branding), plan-info-card section, Seguimiento Dashboard blocks (+1 more)

### Community 7 - "Education Levels and Progress"
Cohesion: 0.33
Nodes (7): Badge: Explorador Nato (Telescope), Education Level Tier, Educational Platform / Gamification System, Statistics / Progress Tracking, Bar Chart / Statistics App Icon, Kinder Level Badge Logo, Preparatoria Level Badge Logo

### Community 8 - "Project Documentation Files"
Cohesion: 0.50
Nodes (4): CLAUDE.md – project instructions, graphify-out/graph.json, graphify-out/GRAPH_REPORT.md, graphify-out/wiki/index.md

## Knowledge Gaps
- **28 isolated node(s):** `months`, `nav`, `cards`, `prices`, `periods` (+23 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Trinity Oaks Homeschool Index Page` connect `Homeschool Platform Index` to `Parent Dashboard UI`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Why does `material.html — Trinity Oaks Homeschool Material Page` connect `AI Learning Tools Dashboard` to `Homeschool Platform Index`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `Achievement Badge System` (e.g. with `Educational Platform / Gamification System` and `Statistics / Progress Tracking`) actually correct?**
  _`Achievement Badge System` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Student Dashboard Page` (e.g. with `Trinity Oak Homeschool Logo (Dark/White variant)` and `Trinity Oak Homeschool Logo (Color variant)`) actually correct?**
  _`Student Dashboard Page` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `months`, `nav`, `cards` to the rest of the system?**
  _28 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Homeschool Platform Index` be split into smaller, more focused modules?**
  _Cohesion score 0.11578947368421053 - nodes in this community are weakly interconnected._
- **Should `AI Learning Tools Dashboard` be split into smaller, more focused modules?**
  _Cohesion score 0.14705882352941177 - nodes in this community are weakly interconnected._