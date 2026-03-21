// import { useState, useMemo } from "react";

// // ─── Helpers ────────────────────────────────────────────────────────────────

// function MiniBar({ value, max }) {
//   const pct = max > 0 ? Math.min((value / max) * 100, 100) : 0;
//   return (
//     <div className="flex items-center gap-2">
//       <div className="w-10 h-[3px] rounded-full bg-border overflow-hidden flex-shrink-0">
//         <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${pct}%` }} />
//       </div>
//       <span className="tabular-nums">{value}</span>
//     </div>
//   );
// }

// function PlusMinus({ value }) {
//   if (value === 0 || value == null) return <span className="text-muted-foreground tabular-nums">±0</span>;
//   if (value > 0) return <span className="text-emerald-400 tabular-nums">+{value}</span>;
//   return <span className="text-rose-400 tabular-nums">{value}</span>;
// }

// function Dash() {
//   return <span className="text-muted-foreground/30">—</span>;
// }

// function SummaryPill({ label, value }) {
//   return (
//     <div className="flex flex-col items-center px-3 py-2 rounded-lg bg-muted border border-border min-w-[56px]">
//       <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">{label}</span>
//       <span className="text-base font-bold text-foreground tabular-nums leading-tight">{value}</span>
//     </div>
//   );
// }

// // ─── Table primitives ────────────────────────────────────────────────────────

// function Th({ label, col, sortCol, sortDir, onSort, className = "" }) {
//   const active = sortCol === col;
//   return (
//     <th
//       onClick={() => onSort(col)}
//       className={`px-3 py-2.5 text-left text-[10px] uppercase tracking-widest font-semibold cursor-pointer select-none whitespace-nowrap transition-colors
//         ${active ? "text-primary" : "text-muted-foreground hover:text-foreground"}
//         ${className}`}
//     >
//       {label}
//       <span className="ml-1 opacity-60">{active ? (sortDir === "asc" ? "↑" : "↓") : "↕"}</span>
//     </th>
//   );
// }

// function StatsThead({ sortCol, sortDir, onSort, hasPlayoffs, hasToi }) {
//   const th = (label, col, cls = "") => (
//     <Th key={col} label={label} col={col} sortCol={sortCol} sortDir={sortDir} onSort={onSort} className={cls} />
//   );

//   const rsColspan = hasToi ? 4 : 3;

//   return (
//     <thead>
//       <tr className="border-b border-border bg-muted/50">
//         <th colSpan={rsColspan} className="px-3 py-1.5 text-left text-[9px] uppercase tracking-widest text-muted-foreground/60 font-semibold border-r border-border">
//           Regular Season
//         </th>
//         <th colSpan={8} className="px-3 py-1.5 text-left text-[9px] uppercase tracking-widest text-muted-foreground/60 font-semibold border-r border-border">
//           Skater Stats
//         </th>
//         <th colSpan={4} className="px-3 py-1.5 text-left text-[9px] uppercase tracking-widest text-muted-foreground/60 font-semibold border-r border-border">
//           Specials
//         </th>
//         {hasPlayoffs && (
//           <th colSpan={4} className="px-3 py-1.5 text-left text-[9px] uppercase tracking-widest text-muted-foreground/60 font-semibold">
//             Playoffs
//           </th>
//         )}
//       </tr>
//       <tr className="border-b border-border bg-card">
//         <th className="px-3 py-2.5 text-left text-[10px] uppercase tracking-widest font-semibold text-muted-foreground pl-4 whitespace-nowrap">Season</th>
//         <th className="px-3 py-2.5 text-left text-[10px] uppercase tracking-widest font-semibold text-muted-foreground whitespace-nowrap">Team</th>
//         <th className={`px-3 py-2.5 text-left text-[10px] uppercase tracking-widest font-semibold text-muted-foreground whitespace-nowrap ${!hasToi ? "border-r border-border" : ""}`}>League</th>
//         {hasToi && <th className="px-3 py-2.5 text-left text-[10px] uppercase tracking-widest font-semibold text-muted-foreground whitespace-nowrap border-r border-border">TOI</th>}
//         {th("GP", "gp")}
//         {th("G", "g")}
//         {th("A", "a")}
//         {th("PTS", "p")}
//         {th("+/−", "plusMinus")}
//         {th("PIM", "pim")}
//         {th("SOG", "shots")}
//         <th className="px-3 py-2.5 text-left text-[10px] uppercase tracking-widest font-semibold text-muted-foreground whitespace-nowrap border-r border-border">S%</th>
//         {th("PPG", "ppg")}
//         {th("SHG", "shG")}
//         {th("GWG", "gwg")}
//         <th className="px-3 py-2.5 text-left text-[10px] uppercase tracking-widest font-semibold text-muted-foreground whitespace-nowrap border-r border-border">PPP</th>
//         {hasPlayoffs && <>
//           <th className="px-3 py-2.5 text-left text-[10px] uppercase tracking-widest font-semibold text-muted-foreground whitespace-nowrap">GP</th>
//           <th className="px-3 py-2.5 text-left text-[10px] uppercase tracking-widest font-semibold text-muted-foreground whitespace-nowrap">G</th>
//           <th className="px-3 py-2.5 text-left text-[10px] uppercase tracking-widest font-semibold text-muted-foreground whitespace-nowrap">A</th>
//           <th className="px-3 py-2.5 text-left text-[10px] uppercase tracking-widest font-semibold text-muted-foreground whitespace-nowrap pr-4">PTS</th>
//         </>}
//       </tr>
//     </thead>
//   );
// }

// function StatsRow({ s, maxP, maxShots, hasToi, hasPlayoffs }) {
//   return (
//     <tr className="border-b border-border/60 transition-colors duration-100 hover:bg-muted/40">
//       <td className="px-3 py-2.5 pl-4 whitespace-nowrap text-xs text-muted-foreground tabular-nums">{s.season}</td>
//       <td className="px-3 py-2.5 whitespace-nowrap">
//         <span className="text-xs font-medium text-foreground">{s.team}</span>
//       </td>
//       <td className={`px-3 py-2.5 whitespace-nowrap text-xs text-muted-foreground ${!hasToi ? "border-r border-border" : ""}`}>
//         {s.league}
//       </td>
//       {hasToi && (
//         <td className="px-3 py-2.5 text-xs text-muted-foreground tabular-nums border-r border-border whitespace-nowrap">
//           {s.toi || <Dash />}
//         </td>
//       )}
//       <td className="px-3 py-2.5 text-xs text-foreground tabular-nums">{s.gp}</td>
//       <td className="px-3 py-2.5 text-xs tabular-nums font-semibold text-foreground">{s.g}</td>
//       <td className="px-3 py-2.5 text-xs tabular-nums font-semibold text-foreground">{s.a}</td>
//       <td className="px-3 py-2.5 text-xs tabular-nums font-bold min-w-[90px]">
//         <MiniBar value={s.p} max={maxP} />
//       </td>
//       <td className="px-3 py-2.5 text-xs"><PlusMinus value={s.plusMinus} /></td>
//       <td className="px-3 py-2.5 text-xs tabular-nums text-foreground">{s.pim}</td>
//       <td className="px-3 py-2.5 text-xs tabular-nums min-w-[90px]">
//         {(s.shots || 0) > 0 ? <MiniBar value={s.shots} max={maxShots} /> : <Dash />}
//       </td>
//       <td className="px-3 py-2.5 text-xs tabular-nums text-foreground border-r border-border">
//         {(s.shootingPct || 0) > 0 ? `${(s.shootingPct * 100).toFixed(1)}%` : <Dash />}
//       </td>
//       <td className="px-3 py-2.5 text-xs tabular-nums text-foreground">{(s.ppg || 0) > 0 ? s.ppg : <Dash />}</td>
//       <td className="px-3 py-2.5 text-xs tabular-nums text-foreground">{(s.shG || 0) > 0 ? s.shG : <Dash />}</td>
//       <td className="px-3 py-2.5 text-xs tabular-nums text-foreground">{(s.gwg || 0) > 0 ? s.gwg : <Dash />}</td>
//       <td className="px-3 py-2.5 text-xs tabular-nums text-foreground border-r border-border">{(s.ppp || 0) > 0 ? s.ppp : <Dash />}</td>
//       {hasPlayoffs && <>
//         <td className="px-3 py-2.5 text-xs tabular-nums text-muted-foreground">{s.playoffs?.gp ?? <Dash />}</td>
//         <td className="px-3 py-2.5 text-xs tabular-nums text-foreground font-semibold">{s.playoffs?.g ?? <Dash />}</td>
//         <td className="px-3 py-2.5 text-xs tabular-nums text-foreground font-semibold">{s.playoffs?.a ?? <Dash />}</td>
//         <td className="px-3 py-2.5 text-xs tabular-nums text-foreground font-bold pr-4">{s.playoffs?.p ?? <Dash />}</td>
//       </>}
//     </tr>
//   );
// }

// function TotalsRow({ totals, label, hasToi, hasPlayoffs }) {
//   return (
//     <tr className="border-t-2 border-primary/20 bg-muted/60">
//       <td className="px-3 py-2.5 pl-4 text-[10px] uppercase tracking-widest text-primary font-semibold" colSpan={3}>
//         {label} Totals
//       </td>
//       {hasToi && <td className="border-r border-border px-3 py-2.5 text-xs text-muted-foreground" />}
//       {!hasToi && <td className="border-r border-border p-0 w-0" />}
//       <td className="px-3 py-2.5 text-xs tabular-nums font-semibold text-foreground">{totals.gp}</td>
//       <td className="px-3 py-2.5 text-xs tabular-nums font-semibold text-foreground">{totals.g}</td>
//       <td className="px-3 py-2.5 text-xs tabular-nums font-semibold text-foreground">{totals.a}</td>
//       <td className="px-3 py-2.5 text-xs tabular-nums font-bold text-foreground">{totals.p}</td>
//       <td className="px-3 py-2.5 text-xs"><PlusMinus value={totals.plusMinus} /></td>
//       <td className="px-3 py-2.5 text-xs tabular-nums font-semibold text-foreground">{totals.pim}</td>
//       <td className="px-3 py-2.5 text-xs tabular-nums font-semibold text-foreground">{totals.shots > 0 ? totals.shots : "—"}</td>
//       <td className="px-3 py-2.5 text-xs tabular-nums text-muted-foreground border-r border-border">
//         {totals.shots > 0 ? `${(totals.g / totals.shots * 100).toFixed(1)}%` : "—"}
//       </td>
//       <td className="px-3 py-2.5 text-xs tabular-nums font-semibold text-foreground">{totals.ppg}</td>
//       <td className="px-3 py-2.5 text-xs tabular-nums font-semibold text-foreground">{totals.shG}</td>
//       <td className="px-3 py-2.5 text-xs tabular-nums font-semibold text-foreground">{totals.gwg}</td>
//       <td className="px-3 py-2.5 text-xs tabular-nums font-semibold text-foreground border-r border-border">{totals.ppp}</td>
//       {hasPlayoffs && <>
//         <td className="px-3 py-2.5 text-xs tabular-nums text-muted-foreground">{totals.poGp || "—"}</td>
//         <td className="px-3 py-2.5 text-xs tabular-nums font-semibold text-foreground">{totals.poG || "—"}</td>
//         <td className="px-3 py-2.5 text-xs tabular-nums font-semibold text-foreground">{totals.poA || "—"}</td>
//         <td className="px-3 py-2.5 text-xs tabular-nums font-bold text-foreground pr-4">{totals.poP || "—"}</td>
//       </>}
//     </tr>
//   );
// }

// // ─── League Table ─────────────────────────────────────────────────────────────

// function computeTotals(rows) {
//   return rows.reduce((acc, s) => ({
//     gp: acc.gp + (s.gp || 0),
//     g: acc.g + (s.g || 0),
//     a: acc.a + (s.a || 0),
//     p: acc.p + (s.p || 0),
//     plusMinus: acc.plusMinus + (s.plusMinus || 0),
//     pim: acc.pim + (s.pim || 0),
//     shots: acc.shots + (s.shots || 0),
//     ppg: acc.ppg + (s.ppg || 0),
//     ppp: acc.ppp + (s.ppp || 0),
//     shG: acc.shG + (s.shG || 0),
//     gwg: acc.gwg + (s.gwg || 0),
//     poGp: acc.poGp + (s.playoffs?.gp || 0),
//     poG: acc.poG + (s.playoffs?.g || 0),
//     poA: acc.poA + (s.playoffs?.a || 0),
//     poP: acc.poP + (s.playoffs?.p || 0),
//   }), { gp: 0, g: 0, a: 0, p: 0, plusMinus: 0, pim: 0, shots: 0, ppg: 0, ppp: 0, shG: 0, gwg: 0, poGp: 0, poG: 0, poA: 0, poP: 0 });
// }

// function LeagueTable({ leagueName, rows, sortCol, sortDir, onSort, maxP, maxShots }) {
//   const hasToi = rows.some(s => s.toi && s.toi !== "0" && s.toi !== 0);
//   const hasPlayoffs = rows.some(s => s.playoffs);
//   const totals = computeTotals(rows);

//   const sorted = useMemo(() => {
//     return [...rows].sort((a, b) => {
//       let av = a[sortCol] ?? "";
//       let bv = b[sortCol] ?? "";
//       return sortDir === "asc" ? (av < bv ? -1 : av > bv ? 1 : 0) : (av > bv ? -1 : av < bv ? 1 : 0);
//     });
//   }, [rows, sortCol, sortDir]);

//   return (
//     <div className="rounded-xl border border-border overflow-hidden bg-card">
//       <div className="px-4 py-3 border-b border-border bg-muted/30 flex items-center gap-3">
//         <span className="text-sm font-bold text-foreground tracking-tight">{leagueName}</span>
//         <span className="text-xs text-muted-foreground">{rows.length} season{rows.length !== 1 ? "s" : ""}</span>
//       </div>
//       <div className="overflow-x-auto scrollbar-thin">
//         <table className="w-full text-sm border-collapse">
//           <StatsThead sortCol={sortCol} sortDir={sortDir} onSort={onSort} hasPlayoffs={hasPlayoffs} hasToi={hasToi} />
//           <tbody>
//             {sorted.map((s, i) => (
//               <StatsRow key={i} s={s} maxP={maxP} maxShots={maxShots} hasToi={hasToi} hasPlayoffs={hasPlayoffs} />
//             ))}
//           </tbody>
//           <tfoot>
//             <TotalsRow totals={totals} label={leagueName} hasToi={hasToi} hasPlayoffs={hasPlayoffs} />
//           </tfoot>
//         </table>
//       </div>
//     </div>
//   );
// }

// // ─── Main Export ─────────────────────────────────────────────────────────────

// const LEAGUE_ORDER = ["NHL", "AHL", "USHL", "NCAA", "USDP", "Other"];

// function getLeagueGroup(league) {
//   if (league === "NHL") return "NHL";
//   if (league === "AHL") return "AHL";
//   if (league === "USHL") return "USHL";
//   if (league === "NCAA") return "NCAA";
//   if (["USDP", "USA-S15"].includes(league)) return "USDP";
//   return "Other";
// }

// export default function StatsTable({ stats = [] }) {
//   const [sortCol, setSortCol] = useState("season");
//   const [sortDir, setSortDir] = useState("asc");
//   const [activeTab, setActiveTab] = useState("All");

//   function handleSort(col) {
//     if (sortCol === col) setSortDir(d => d === "asc" ? "desc" : "asc");
//     else { setSortCol(col); setSortDir("desc"); }
//   }

//   const grouped = useMemo(() => {
//     const map = {};
//     for (const s of stats) {
//       const group = getLeagueGroup(s.league);
//       if (!map[group]) map[group] = [];
//       map[group].push(s);
//     }
//     return map;
//   }, [stats]);

//   const leagueGroups = LEAGUE_ORDER.filter(l => grouped[l]);
//   const tabs = ["All", ...leagueGroups];
//   const visibleGroups = activeTab === "All" ? leagueGroups : [activeTab];

//   const maxP = Math.max(...stats.map(s => s.p || 0), 0);
//   const maxShots = Math.max(...stats.map(s => s.shots || 0), 0);

//   const nhlRows = grouped["NHL"] || [];
//   const nhlTotals = computeTotals(nhlRows);

//   return (
//     <div
//       className="min-h-screen bg-background text-foreground p-4 md:p-8 space-y-6"
//       style={{ fontFamily: "'DM Mono', 'Fira Code', 'Courier New', monospace" }}
//     >
      
//       {/* Header */}
//       <div>
//         <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">Career Statistics</p>
//         <h1 className="text-2xl font-bold text-foreground tracking-tight">Player Stats</h1>
//       </div>

//       {/* NHL Career Summary */}
//       {nhlRows.length > 0 && (
//         <div className="rounded-xl border border-primary/30 bg-primary/10 p-4">
//           <p className="text-[10px] uppercase tracking-widest text-primary/70 mb-3 font-semibold">NHL Career Totals</p>
//           <div className="flex flex-wrap gap-2">
//             {[
//               ["GP", nhlTotals.gp],
//               ["G", nhlTotals.g],
//               ["A", nhlTotals.a],
//               ["PTS", nhlTotals.p],
//               ["P/GP", (nhlTotals.p / Math.max(nhlTotals.gp, 1)).toFixed(2)],
//               ["PIM", nhlTotals.pim],
//               ["SOG", nhlTotals.shots],
//               ["PPG", nhlTotals.ppg],
//               ["SHG", nhlTotals.shG],
//               ["GWG", nhlTotals.gwg],
//               ...(nhlTotals.poGp > 0 ? [["PO GP", nhlTotals.poGp], ["PO PTS", nhlTotals.poP]] : []),
//             ].map(([label, value]) => (
//               <SummaryPill key={label} label={String(label)} value={String(value)} />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* League filter tabs */}
//       <div className="flex gap-1.5 flex-wrap">
//         {tabs.map(tab => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-3 py-1.5 rounded-md text-xs font-medium uppercase tracking-wider border transition-all duration-150
//               ${activeTab === tab
//                 ? "bg-primary/15 text-primary border-primary/40"
//                 : "text-muted-foreground border-border hover:text-foreground"
//               }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Per-league tables */}
//       <div className="space-y-6">
//         {visibleGroups.map(league => (
//           <LeagueTable
//             key={league}
//             leagueName={league}
//             rows={grouped[league]}
//             sortCol={sortCol}
//             sortDir={sortDir}
//             onSort={handleSort}
//             maxP={maxP}
//             maxShots={maxShots}
//           />
//         ))}
//       </div>

//       {/* Stat legend */}
//       <div className="flex flex-wrap gap-x-5 gap-y-1 pt-2 border-t border-border">
//         {[
//           ["GP","Games Played"],["G","Goals"],["A","Assists"],["PTS","Points"],
//           ["+/−","Plus/Minus"],["PIM","Penalty Min"],["SOG","Shots on Goal"],
//           ["S%","Shooting %"],["PPG","Power Play G"],["SHG","Shorthanded G"],
//           ["GWG","Game-Winning G"],["PPP","Power Play Pts"],
//         ].map(([abbr, full]) => (
//           <div key={abbr} className="flex items-center gap-1.5">
//             <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{abbr}</span>
//             <span className="text-[10px] text-muted-foreground/50">{full}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }