'use strict';

/* =========================================================
   Ícones (SVG inline, traço estilo Lucide)
   ========================================================= */
const ICONS = {
  sparkles: '<path d="M12 3l1.9 5.8L20 10.7l-5.8 1.9L12 18.5l-1.9-5.9L4 10.7l6.1-1.9z"/>',
  layout: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  barChart: '<path d="M3 3v18h18"/><path d="M7 16v-5"/><path d="M12 16V8"/><path d="M17 16V7"/>',
  pie: '<path d="M21.2 15.9A10 10 0 1 1 8 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.7V17c0 .6-.5 1-1 1.2C7.9 18.8 7 20.2 7 22"/><path d="M14 14.7V17c0 .6.5 1 1 1.2 1.1.6 2 2 2 3.8"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>',
  table: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  dollar: '<path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  package: '<path d="m7.5 4.3 9 5.1"/><path d="M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  receipt: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  trendingUp: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  pencil: '<path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
  tag: '<path d="M12.6 2.6A2 2 0 0 0 11.2 2H4a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4l8.7 8.7a2.4 2.4 0 0 0 3.4 0l6.6-6.6a2.4 2.4 0 0 0 0-3.4z"/><circle cx="7.5" cy="7.5" r="1"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  trash: '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11v6M14 11v6"/>',
  check: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  alert: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
  arrowUp: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  arrowDown: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
};
const icon = (name) => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ''}</svg>`;

/* =========================================================
   Dados de exemplo (usados se dados.csv não puder ser lido)
   ========================================================= */
const SAMPLE = `nome,categoria,produto,valor,quantidade,total
Ana Souza,Eletrônicos,Fone de Ouvido,149.90,2,299.80
Bruno Lima,Informática,Mouse Sem Fio,89.90,3,269.70
Carla Mendes,Vestuário,Camiseta,59.90,4,239.60
Diego Rocha,Alimentos,Café Especial 500g,42.50,6,255.00
Eduarda Alves,Casa,Jogo de Panelas,399.00,1,399.00
Felipe Costa,Esportes,Bola de Futebol,129.90,2,259.80
Gabriela Nunes,Beleza,Perfume,219.00,1,219.00
Henrique Dias,Informática,Teclado Mecânico,349.90,1,349.90
Isabela Ferreira,Livros,Romance,54.90,3,164.70
João Pereira,Eletrônicos,Smartwatch,899.00,1,899.00
Karina Ribeiro,Vestuário,Calça Jeans,179.90,2,359.80
Lucas Martins,Alimentos,Azeite Extra Virgem,38.90,5,194.50
Mariana Gomes,Casa,Luminária,119.90,2,239.80
Nicolas Barbosa,Esportes,Tênis de Corrida,459.90,1,459.90
Olívia Cardoso,Beleza,Hidratante,34.90,4,139.60
Pedro Teixeira,Informática,Monitor 24 pol,1099.00,1,1099.00
Quésia Araújo,Livros,Livro de Receitas,79.90,2,159.80
Rafael Moreira,Eletrônicos,Caixa de Som Bluetooth,249.90,2,499.80
Sofia Carvalho,Vestuário,Jaqueta,289.90,1,289.90
Thiago Pinto,Alimentos,Chocolate Amargo,12.90,10,129.00
Úrsula Melo,Casa,Jogo de Toalhas,99.90,3,299.70
Vinícius Castro,Esportes,Halteres 5kg,89.90,4,359.60
Wesley Freitas,Beleza,Shampoo,29.90,6,179.40
Yasmin Correia,Informática,Webcam HD,199.90,2,399.80
Zeca Monteiro,Livros,Ficção Científica,64.90,2,129.80
Amanda Vieira,Eletrônicos,Carregador Portátil,129.90,3,389.70
Bernardo Lopes,Vestuário,Boné,49.90,5,249.50
Camila Duarte,Alimentos,Mel Orgânico,27.90,8,223.20
Daniel Fonseca,Casa,Cafeteira Elétrica,279.90,1,279.90
Elisa Ramos,Esportes,Tapete de Yoga,119.90,2,239.80`;

/* =========================================================
   Estado
   ========================================================= */
const DIMS = ['categoria', 'faixa', 'produto', 'nome'];
const DIM_LABEL = { categoria: 'Categoria', faixa: 'Faixa', produto: 'Produto', nome: 'Cliente' };
const BANDS = [
  { key: 'Até R$ 50', max: 50, color: 'var(--seq-1)' },
  { key: 'R$ 50 – 150', max: 150, color: 'var(--seq-2)' },
  { key: 'R$ 150 – 400', max: 400, color: 'var(--seq-3)' },
  { key: 'Acima de R$ 400', max: Infinity, color: 'var(--seq-4)' },
];

const state = {
  rows: [],
  source: '',
  filters: Object.fromEntries(DIMS.map((d) => [d, new Set()])),
  search: '',
  sort: { key: 'total', dir: -1 },
  goal: 0,
  catOrder: [],
  catColor: new Map(),
  productCat: new Map(),
};

const $ = (s) => document.querySelector(s);
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* =========================================================
   Formatação
   ========================================================= */
const fmtBRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const fmtCompact = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', notation: 'compact', maximumFractionDigits: 1 });
const fmtCompactNum = new Intl.NumberFormat('pt-BR', { notation: 'compact', maximumFractionDigits: 1 });
const fmtInt =new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 });
const fmtPct = new Intl.NumberFormat('pt-BR', { style: 'percent', maximumFractionDigits: 1 });
const money = (v) => (Math.abs(v) >= 1e5 ? fmtCompact.format(v) : fmtBRL.format(v));
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').trim().toLowerCase();

/* =========================================================
   CSV
   ========================================================= */
function parseCSV(text) {
  text = text.replace(/^﻿/, '');
  const firstLine = text.split(/\r?\n/, 1)[0];
  const count = (c) => firstLine.split(c).length - 1;
  const delim = [';', '\t'].reduce((best, c) => (count(c) > count(best) ? c : best), ',');

  const out = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; } else quoted = false;
      } else field += c;
    } else if (c === '"') quoted = true;
    else if (c === delim) { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); out.push(row); row = []; field = '';
    } else field += c;
  }
  if (field !== '' || row.length) { row.push(field); out.push(row); }
  return out.filter((r) => r.some((c) => c.trim() !== ''));
}

function toNumber(v) {
  let s = String(v ?? '').replace(/[R$\s]/g, '');
  if (s.includes(',') && s.includes('.')) {
    s = s.lastIndexOf(',') > s.lastIndexOf('.') ? s.replace(/\./g, '').replace(',', '.') : s.replace(/,/g, '');
  } else if (s.includes(',')) s = s.replace(',', '.');
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : 0;
}

const bandOf = (valor) => BANDS.find((b) => valor <= b.max).key;

function buildRows(matrix) {
  if (matrix.length < 2) throw new Error('O arquivo não contém linhas de dados.');
  const header = matrix[0].map(norm);
  const idx = {};
  ['nome', 'categoria', 'produto', 'valor', 'quantidade', 'total'].forEach((k) => (idx[k] = header.indexOf(k)));
  const missing = ['nome', 'categoria', 'produto', 'valor', 'quantidade'].filter((k) => idx[k] < 0);
  if (missing.length) throw new Error(`Colunas ausentes: ${missing.join(', ')}`);

  return matrix.slice(1).map((r, i) => {
    const valor = toNumber(r[idx.valor]);
    const quantidade = toNumber(r[idx.quantidade]);
    const rawTotal = idx.total >= 0 ? (r[idx.total] || '').trim() : '';
    const row = {
      id: i,
      nome: (r[idx.nome] || '').trim() || '(sem nome)',
      categoria: (r[idx.categoria] || '').trim() || '(sem categoria)',
      produto: (r[idx.produto] || '').trim() || '(sem produto)',
      valor,
      quantidade,
      total: rawTotal ? toNumber(rawTotal) : valor * quantidade,
      faixa: bandOf(valor),
    };
    row._s = norm(`${row.nome} ${row.categoria} ${row.produto}`);
    return row;
  });
}

// persist: 'save' grava o CSV no navegador; 'restored' indica que veio de lá
function loadData(text, source, { persist, savedAt } = {}) {
  let rows;
  try {
    rows = buildRows(parseCSV(text));
  } catch (err) {
    toast(err.message, 'error');
    return false;
  }
  state.rows = rows;
  state.source = source;
  DIMS.forEach((d) => state.filters[d].clear());

  // Cor segue a categoria: atribuída uma vez na carga, nunca repintada por filtro
  const byCat = sumBy(rows, 'categoria');
  state.catOrder = [...byCat].sort((a, b) => b[1].total - a[1].total).map(([k]) => k);
  state.catColor = new Map(state.catOrder.map((k, i) => [k, i < 8 ? `var(--series-${i + 1})` : 'var(--series-other)']));
  state.productCat = new Map(rows.map((r) => [r.produto, r.categoria]));

  const grand = rows.reduce((s, r) => s + r.total, 0);
  state.goal = Number(storage.get(`goal:${source}`)) || niceStep(grand * 1.25);

  $('#source span').textContent = `${source} · ${rows.length} linhas`;
  $('#colChart').innerHTML = '';
  $('#productBars').innerHTML = '';
  $('#clientBars').innerHTML = '';
  render();

  if (persist === 'save') {
    const saved = saveDataset(text, source);
    setSavedIndicator(saved ? Date.now() : null, true);
    toast(`${rows.length} registros importados${saved ? ' e salvos no navegador' : ''}`);
  } else if (persist === 'restored') {
    setSavedIndicator(savedAt, true);
    toast(`${rows.length} registros restaurados do navegador`);
  } else {
    setSavedIndicator(null, false);
    toast(`${rows.length} registros carregados de ${source}`);
  }
  return true;
}

/* =========================================================
   Filtros (cross-filter estilo Power BI)
   ========================================================= */
const matchSearch = (r) => !state.search || r._s.includes(state.search);

// Linhas com todos os filtros aplicados, exceto o da dimensão informada:
// o visual "dono" da dimensão destaca a seleção em vez de se auto-filtrar.
function rowsExcept(dim) {
  return state.rows.filter((r) => matchSearch(r) &&
    DIMS.every((d) => d === dim || !state.filters[d].size || state.filters[d].has(r[d])));
}

function sumBy(rows, key) {
  const m = new Map();
  for (const r of rows) {
    const o = m.get(r[key]) || { total: 0, qtd: 0, n: 0 };
    o.total += r.total; o.qtd += r.quantidade; o.n++;
    m.set(r[key], o);
  }
  return m;
}

const isDim = (dim, val) => state.filters[dim].size > 0 && !state.filters[dim].has(val);
const hasFilters = () => DIMS.some((d) => state.filters[d].size) || !!state.search;

function toggleFilter(dim, val, multi) {
  const s = state.filters[dim];
  if (val === '__all__') s.clear();
  else if (multi) s.has(val) ? s.delete(val) : s.add(val);
  else if (s.size === 1 && s.has(val)) s.clear();
  else { s.clear(); s.add(val); }
  render();
}

function clearAll() {
  DIMS.forEach((d) => state.filters[d].clear());
  state.search = '';
  $('#search').value = '';
  render();
}

/* =========================================================
   Render
   ========================================================= */
function render() {
  if (!state.rows.length) return;
  const filtered = rowsExcept(null);
  renderKPIs(filtered);
  renderGauge(filtered);
  renderColumns();
  renderDonut();
  renderHBars($('#productBars'), 'produto', 8);
  renderHBars($('#clientBars'), 'nome', 8);
  renderSlicer();
  renderChips();
  renderTable(filtered);
  hideTooltip();
}

function animateNumber(el, to, fmt) {
  const from = el._v ?? 0;
  el._v = to;
  odometer(el, fmt(to), to >= from ? 1 : -1);
}

/* Odômetro: cada dígito é uma faixa 0–9 (repetida 3x) que rola até o novo valor.
   Dígitos são alinhados pela direita, então unidades continuam no mesmo lugar
   quando o número ganha ou perde casas. dir: 1 = sobe, -1 = desce. */
const ODO_CYCLES = 3;
const ODO_STRIP = Array.from({ length: 10 * ODO_CYCLES }, (_, i) => `<span>${i % 10}</span>`).join('');

function odometer(el, text, dir = 1) {
  el.setAttribute('aria-label', text);
  if (reduceMotion) { el.textContent = text; el._digits = null; return; }

  const oldDigits = el._digits || [];               // dígitos anteriores, da direita p/ esquerda
  const chars = [...text];
  const digitCount = chars.filter((c) => /\d/.test(c)).length;
  el._digits = chars.filter((c) => /\d/.test(c)).map(Number).reverse();
  el.classList.add('odo');

  const frag = document.createDocumentFragment();
  const strips = [];
  let fromRight = digitCount;
  chars.forEach((c) => {
    if (!/\d/.test(c)) {
      const s = document.createElement('span');
      s.className = 'odo-sep';
      s.textContent = c;
      frag.appendChild(s);
      return;
    }
    fromRight--;
    const next = Number(c);
    const prev = oldDigits[fromRight] ?? 0;
    const col = document.createElement('span');
    col.className = 'odo-digit';
    col.innerHTML = `<span class="odo-strip">${ODO_STRIP}</span>`;
    frag.appendChild(col);

    // Casas menos significativas dão uma volta extra, como num odômetro real
    const changed = next !== prev || !el._ready;
    const extra = changed && fromRight < 2 ? 1 : 0;
    let start, end;
    if (dir > 0) {
      start = prev;
      end = next + 10 * ((next < prev ? 1 : 0) + extra);
      if (changed && end === start) end += 10;
    } else {
      start = prev + 20;
      end = next + 20 - 10 * ((next > prev ? 1 : 0) + extra);
      if (changed && end === start) end -= 10;
    }
    strips.push({ strip: col.firstChild, start, end, delay: (digitCount - 1 - fromRight) * 45 });
  });

  el.replaceChildren(frag);
  el._ready = true;
  strips.forEach(({ strip, start }) => { strip.style.transition = 'none'; strip.style.setProperty('--n', start); });
  void el.offsetWidth; // fixa a posição inicial antes de animar
  strips.forEach(({ strip, end, delay }) => {
    strip.style.transition = '';
    strip.style.transitionDelay = `${delay}ms`;
    strip.style.setProperty('--n', end);
  });
}

function deltaHTML(ratio, suffix) {
  if (!Number.isFinite(ratio) || Math.abs(ratio) < 0.0005) return `<span class="muted">${suffix}</span>`;
  const up = ratio > 0;
  return `<span class="${up ? 'up' : 'down'}" style="display:inline-flex;align-items:center;gap:3px">${icon(up ? 'arrowUp' : 'arrowDown')}${fmtPct.format(Math.abs(ratio))}</span><span class="muted">${suffix}</span>`;
}

function renderKPIs(rows) {
  const all = state.rows;
  const total = rows.reduce((s, r) => s + r.total, 0);
  const qty = rows.reduce((s, r) => s + r.quantidade, 0);
  const grand = all.reduce((s, r) => s + r.total, 0);
  const grandQty = all.reduce((s, r) => s + r.quantidade, 0);
  const ticket = rows.length ? total / rows.length : 0;
  const grandTicket = grand / all.length;
  const clients = new Set(rows.map((r) => r.nome)).size;
  const grandClients = new Set(all.map((r) => r.nome)).size;

  animateNumber($('#kpiTotal'), total, money);
  animateNumber($('#kpiQty'), qty, (v) => fmtInt.format(v));
  animateNumber($('#kpiTicket'), ticket, money);
  animateNumber($('#kpiClients'), clients, (v) => fmtInt.format(v));

  const tp = grand ? total / grand : 0, qp = grandQty ? qty / grandQty : 0;
  $('#kpiTotalBar').style.width = `${tp * 100}%`;
  $('#kpiQtyBar').style.width = `${qp * 100}%`;
  $('#kpiTotalPct').textContent = `${fmtPct.format(tp)} do total`;
  $('#kpiQtyPct').textContent = `${fmtPct.format(qp)} do total`;

  $('#kpiTicketDelta').innerHTML = hasFilters() && rows.length
    ? deltaHTML(ticket / grandTicket - 1, 'vs. média geral')
    : '<span class="muted">Média geral por venda</span>';
  $('#kpiClientsDelta').innerHTML = `<span class="muted">de ${fmtInt.format(grandClients)} clientes no total</span>`;
}

function renderGauge(rows) {
  const total = rows.reduce((s, r) => s + r.total, 0);
  const pct = state.goal ? total / state.goal : 0;
  const arc = $('#gaugeArc');
  arc.style.strokeDasharray = `${Math.min(pct, 1) * 100} 100`;
  arc.style.stroke = pct >= 1 ? 'var(--good)' : 'var(--accent)';
  animateNumber($('#gaugeValue'), pct, (v) => fmtPct.format(v));
  const rest = state.goal - total;
  $('#gaugeCaption').innerHTML = rest > 0
    ? `Você está em <strong>${fmtPct.format(pct)}</strong> da meta de <strong>${money(state.goal)}</strong><br><span class="muted">Faltam ${money(rest)}</span>`
    : `<span class="up" style="display:inline-flex;align-items:center;gap:4px">${icon('check')} Meta superada</span> em <strong>${money(-rest)}</strong><br><span class="muted">Meta: ${money(state.goal)}</span>`;
}

function niceStep(v) {
  if (v <= 0) return 1;
  const exp = 10 ** Math.floor(Math.log10(v));
  const n = v / exp;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * exp;
}

function tipHTML(title, color, lines, hint = 'Clique para filtrar · Ctrl+clique p/ múltiplos') {
  const sw = color ? `<span class="tt-sw" style="background:${color}"></span>` : '';
  return `<b>${sw}${esc(title)}</b>` +
    lines.map(([k, v]) => `<div class="tt-row"><span>${k}</span><span>${v}</span></div>`).join('') +
    (hint ? `<div class="tt-hint">${hint}</div>` : '');
}

function renderColumns() {
  const host = $('#colChart');
  const cats = state.catOrder;
  if (!host.firstChild) {
    host.innerHTML = `<div class="col-plot"><div class="col-gridlines"></div><div class="col-bars"></div>
      <div class="col-avg"><span>MÉDIA</span></div></div><div class="col-labels"></div>`;
    const bars = host.querySelector('.col-bars');
    const labels = host.querySelector('.col-labels');
    cats.forEach((c) => {
      const col = document.createElement('div');
      col.className = 'col';
      col.tabIndex = 0;
      col.setAttribute('role', 'button');
      col.dataset.dim = 'categoria';
      col.dataset.val = c;
      col.style.setProperty('--c', state.catColor.get(c));
      col.innerHTML = '<span class="col-val"></span><div class="col-fill"></div>';
      bars.appendChild(col);
      const lb = document.createElement('span');
      lb.textContent = c;
      lb.title = c;
      labels.appendChild(lb);
    });
  }

  const m = sumBy(rowsExcept('categoria'), 'categoria');
  const vals = cats.map((c) => m.get(c)?.total || 0);
  const sum = vals.reduce((a, b) => a + b, 0);
  const max = Math.max(...vals, 0);
  const step = niceStep(max / 4);
  const top = Math.max(step * Math.ceil(max / step), step);

  const grid = host.querySelector('.col-gridlines');
  grid.innerHTML = '';
  for (let v = step; v <= top + 1e-9; v += step) {
    const g = document.createElement('div');
    g.className = 'col-grid';
    g.style.bottom = `${(v / top) * 100}%`;
    g.innerHTML = `<span>${fmtCompact.format(v)}</span>`;
    grid.appendChild(g);
  }

  const nonZero = vals.filter((v) => v > 0);
  const avg = nonZero.length ? nonZero.reduce((a, b) => a + b, 0) / nonZero.length : 0;
  const avgEl = host.querySelector('.col-avg');
  avgEl.style.bottom = `${(avg / top) * 100}%`;
  avgEl.style.opacity = avg ? '' : '0';

  host.querySelectorAll('.col').forEach((col, i) => {
    const c = cats[i], v = vals[i], h = (v / top) * 100;
    const fill = col.querySelector('.col-fill');
    const lab = col.querySelector('.col-val');
    if (!fill.style.height) void fill.offsetHeight;
    requestAnimationFrame(() => { fill.style.height = `${h}%`; });
    lab.style.bottom = `calc(${h}% + 6px)`;
    lab.textContent = v ? fmtCompactNum.format(v) : '';
    col.classList.toggle('dim', isDim('categoria', c));
    const o = m.get(c);
    col.dataset.tip = tipHTML(c, state.catColor.get(c), [
      ['Faturamento', fmtBRL.format(v)],
      ['Itens', fmtInt.format(o?.qtd || 0)],
      ['Participação', fmtPct.format(sum ? v / sum : 0)],
      ['vs. média', avg ? fmtPct.format(v / avg - 1) : '–'],
    ]);
    col.setAttribute('aria-label', `${c}: ${fmtBRL.format(v)}`);
  });
}

function renderDonut() {
  const svg = $('#donut');
  const R = 80, C = 2 * Math.PI * R, GAP = 3;
  if (!svg.firstChild) {
    svg.innerHTML = `<circle cx="100" cy="100" r="${R}" fill="none" stroke="var(--track)" stroke-width="26" opacity=".5"/>` +
      BANDS.map((b) => `<circle class="seg" cx="100" cy="100" r="${R}" stroke="${b.color}" tabindex="0" role="button"
        data-dim="faixa" data-val="${esc(b.key)}" style="stroke-dasharray:0 ${C};stroke-dashoffset:0"></circle>`).join('');
    svg.querySelectorAll('.seg').forEach((seg) => {
      seg.addEventListener('mouseenter', () => setDonutCenter(seg.dataset.val));
      seg.addEventListener('mouseleave', () => setDonutCenter(null));
    });
  }

  const m = sumBy(rowsExcept('faixa'), 'faixa');
  const total = BANDS.reduce((s, b) => s + (m.get(b.key)?.total || 0), 0);
  const nonZero = BANDS.filter((b) => m.get(b.key)?.total).length;
  svg._m = m; svg._total = total;

  let start = 0;
  const legend = $('#donutLegend');
  legend.innerHTML = '';
  svg.querySelectorAll('.seg').forEach((seg, i) => {
    const b = BANDS[i];
    const o = m.get(b.key);
    const v = o?.total || 0;
    const len = total ? (v / total) * C : 0;
    const dash = nonZero > 1 ? Math.max(len - GAP, 0) : len;
    seg.style.strokeDasharray = `${dash} ${C}`;
    seg.style.strokeDashoffset = `${-start}`;
    start += len;
    seg.classList.toggle('dim', isDim('faixa', b.key));
    seg.dataset.tip = tipHTML(b.key, b.color, [
      ['Faturamento', fmtBRL.format(v)],
      ['Vendas', fmtInt.format(o?.n || 0)],
      ['Participação', fmtPct.format(total ? v / total : 0)],
    ]);

    const li = document.createElement('li');
    li.dataset.dim = 'faixa';
    li.dataset.val = b.key;
    li.tabIndex = 0;
    li.setAttribute('role', 'button');
    li.style.setProperty('--c', b.color);
    li.classList.toggle('dim', isDim('faixa', b.key));
    li.innerHTML = `<span class="sw"></span><span>${esc(b.key)}</span><span class="lv">${money(v)}</span><span class="lp">${fmtPct.format(total ? v / total : 0)}</span>`;
    li.addEventListener('mouseenter', () => setDonutCenter(b.key));
    li.addEventListener('mouseleave', () => setDonutCenter(null));
    legend.appendChild(li);
  });
  setDonutCenter(null);
}

function setDonutCenter(key) {
  const svg = $('#donut');
  const m = svg._m || new Map();
  if (key) {
    animateNumber($('#donutValue'), m.get(key)?.total || 0, money);
    $('#donutLabel').textContent = key;
  } else {
    const sel = state.filters.faixa;
    const v = sel.size ? [...sel].reduce((s, k) => s + (m.get(k)?.total || 0), 0) : svg._total || 0;
    animateNumber($('#donutValue'), v, money);
    $('#donutLabel').textContent = sel.size ? 'Selecionado' : 'Total';
  }
}

const initials = (name) => name.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]).join('').toUpperCase();

function renderHBars(host, dim, limit) {
  const m = sumBy(rowsExcept(dim), dim);
  let items = [...m].map(([k, o]) => ({ k, ...o })).sort((a, b) => b.total - a.total);
  const top = items.slice(0, limit);
  // Itens selecionados permanecem visíveis mesmo fora do top N
  items.forEach((it) => { if (state.filters[dim].has(it.k) && !top.includes(it)) top.push(it); });
  items = top;
  const max = items[0]?.total || 1;
  const sum = [...m.values()].reduce((s, o) => s + o.total, 0);

  [...host.children].forEach((c) => { if (!c.dataset.val) c.remove(); });
  const before = new Map([...host.children].map((c) => [c.dataset.val, c.getBoundingClientRect().top]));
  const existing = new Map([...host.children].map((c) => [c.dataset.val, c]));
  const keep = new Set();

  items.forEach((it, i) => {
    let node = existing.get(it.k);
    const isNew = !node;
    if (isNew) {
      node = document.createElement('div');
      node.className = 'hbar';
      node.tabIndex = 0;
      node.setAttribute('role', 'button');
      node.dataset.dim = dim;
      node.dataset.val = it.k;
      const color = dim === 'produto' ? state.catColor.get(state.productCat.get(it.k)) : 'var(--accent)';
      node.style.setProperty('--c', color);
      const lead = dim === 'nome' ? `<span class="avatar">${esc(initials(it.k))}</span>` : '<span class="rank"></span>';
      node.innerHTML = `<div class="hbar-label">${lead}<span>${esc(it.k)}</span></div>
        <div class="hbar-track"><span class="hbar-fill"></span></div><div class="hbar-val"></div>`;
    }
    keep.add(it.k);
    if (isNew) node.addEventListener('animationend', () => (node.style.animation = 'none'), { once: true });
    if (host.children[i] !== node) host.insertBefore(node, host.children[i] || null);
    const rank = node.querySelector('.rank');
    if (rank) rank.textContent = `#${i + 1}`;
    node.querySelector('.hbar-val').textContent = fmtBRL.format(it.total);
    node.classList.toggle('dim', isDim(dim, it.k));
    const fill = node.querySelector('.hbar-fill');
    const w = `${(it.total / max) * 100}%`;
    if (isNew) { node.style.animationDelay = `${i * 40}ms`; requestAnimationFrame(() => requestAnimationFrame(() => (fill.style.width = w))); }
    else fill.style.width = w;

    const cat = dim === 'produto' ? state.productCat.get(it.k) : null;
    node.dataset.tip = tipHTML(it.k, null, [
      ...(cat ? [['Categoria', esc(cat)]] : []),
      ['Faturamento', fmtBRL.format(it.total)],
      ['Itens', fmtInt.format(it.qtd)],
      [dim === 'nome' ? 'Compras' : 'Vendas', fmtInt.format(it.n)],
      ['Participação', fmtPct.format(sum ? it.total / sum : 0)],
    ]);
  });

  existing.forEach((node, k) => { if (!keep.has(k)) node.remove(); });

  // FLIP: anima a reordenação das barras
  if (!reduceMotion) {
    [...host.children].forEach((node) => {
      const prev = before.get(node.dataset.val);
      if (prev == null) return;
      const dy = prev - node.getBoundingClientRect().top;
      if (Math.abs(dy) > 1) node.animate([{ transform: `translateY(${dy}px)` }, { transform: 'none' }], { duration: 550, easing: 'cubic-bezier(.22,1,.36,1)' });
    });
  }

  if (!items.length) host.innerHTML = '<p class="muted small-text" style="text-align:center;padding:40px 0">Sem dados para os filtros atuais</p>';
}

function renderSlicer() {
  const host = $('#slicer');
  const sel = state.filters.categoria;
  host.innerHTML = `<button class="pill ${sel.size ? '' : 'on'}" data-dim="categoria" data-val="__all__" style="--c:var(--text-muted)">Todas</button>` +
    state.catOrder.map((c) => `<button class="pill ${sel.has(c) ? 'on' : ''} ${isDim('categoria', c) ? 'dim' : ''}"
      data-dim="categoria" data-val="${esc(c)}" style="--c:${state.catColor.get(c)}"><span class="dot"></span>${esc(c)}</button>`).join('');
}

function renderChips() {
  const chips = [];
  DIMS.forEach((d) => state.filters[d].forEach((v) => {
    chips.push(`<span class="chip"><b>${DIM_LABEL[d]}:</b>${esc(v)}<button data-remove="${d}" data-rval="${esc(v)}" aria-label="Remover filtro">${icon('x')}</button></span>`);
  }));
  if (state.search) chips.push(`<span class="chip"><b>Busca:</b>“${esc($('#search').value)}”<button data-remove="__search__" aria-label="Limpar busca">${icon('x')}</button></span>`);
  $('#chips').innerHTML = chips.join('');
  $('#clearAll').disabled = !hasFilters();
}

function renderTable(rows) {
  const { key, dir } = state.sort;
  const sorted = [...rows].sort((a, b) => {
    const x = a[key], y = b[key];
    return (typeof x === 'number' ? x - y : String(x).localeCompare(String(y), 'pt-BR')) * dir;
  });
  document.querySelectorAll('th[data-sort]').forEach((th) => {
    th.classList.toggle('asc', th.dataset.sort === key && dir === 1);
    th.classList.toggle('desc', th.dataset.sort === key && dir === -1);
  });
  $('#tbody').innerHTML = sorted.length
    ? sorted.map((r, i) => `<tr style="animation-delay:${Math.min(i, 20) * 18}ms">
        <td>${esc(r.nome)}</td>
        <td><span class="cat-tag" style="--c:${state.catColor.get(r.categoria)}">${esc(r.categoria)}</span></td>
        <td>${esc(r.produto)}</td>
        <td class="num">${fmtBRL.format(r.valor)}</td>
        <td class="num">${fmtInt.format(r.quantidade)}</td>
        <td class="num"><strong>${fmtBRL.format(r.total)}</strong></td>
      </tr>`).join('')
    : '<tr class="empty-row"><td colspan="6">Nenhum registro corresponde aos filtros</td></tr>';
  $('#tableCount').textContent = `${rows.length} de ${state.rows.length} registros`;
}

/* =========================================================
   Tooltip & toasts
   ========================================================= */
const tooltip = $('#tooltip');
let tipTarget = null;

function showTooltip(el, x, y) {
  tipTarget = el;
  tooltip.innerHTML = el.dataset.tip;
  tooltip.classList.add('show');
  positionTooltip(x, y);
}
function positionTooltip(x, y) {
  const r = tooltip.getBoundingClientRect();
  let left = x + 14, top = y + 14;
  if (left + r.width > innerWidth - 8) left = x - r.width - 14;
  if (top + r.height > innerHeight - 8) top = y - r.height - 14;
  tooltip.style.left = `${Math.max(8, left)}px`;
  tooltip.style.top = `${Math.max(8, top)}px`;
}
function hideTooltip() { tipTarget = null; tooltip.classList.remove('show'); }

document.addEventListener('mousemove', (e) => {
  const el = e.target.closest?.('[data-tip]');
  if (!el) { if (tipTarget) hideTooltip(); return; }
  if (el !== tipTarget) showTooltip(el, e.clientX, e.clientY);
  else positionTooltip(e.clientX, e.clientY);
});
document.addEventListener('focusin', (e) => {
  const el = e.target.closest?.('[data-tip]');
  if (el && el.matches(':focus-visible')) {
    const r = el.getBoundingClientRect();
    showTooltip(el, r.right, r.top);
  }
});
document.addEventListener('focusout', hideTooltip);
addEventListener('scroll', hideTooltip, { passive: true });

function toast(msg, type = 'ok') {
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `${icon(type === 'error' ? 'alert' : 'check')}<span>${esc(msg)}</span>`;
  $('#toasts').appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 300); }, 3200);
}

/* =========================================================
   Persistência leve (preferências do usuário)
   ========================================================= */
const storage = {
  get(k) { try { return localStorage.getItem(`dash:${k}`); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(`dash:${k}`, v); return true; } catch { return false; } },
  remove(k) { try { localStorage.removeItem(`dash:${k}`); } catch { /* indisponível */ } },
};

/* =========================================================
   Dados importados salvos no navegador
   ========================================================= */
const DATASET_KEY = 'dataset';

function saveDataset(text, source) {
  const ok = storage.set(DATASET_KEY, JSON.stringify({ source, savedAt: new Date().toISOString(), csv: text }));
  if (!ok) toast('Não foi possível salvar no navegador (arquivo grande demais ou armazenamento bloqueado)', 'error');
  return ok;
}

function loadSavedDataset() {
  try {
    const saved = JSON.parse(storage.get(DATASET_KEY));
    return saved && typeof saved.csv === 'string' ? saved : null;
  } catch {
    return null;
  }
}

// imported: dados vieram de um arquivo do usuário (mostra o botão "Limpar arquivo")
function setSavedIndicator(saved, imported) {
  $('#forgetData').hidden = !imported;
  $('#source').dataset.tip = saved
    ? `Salvo no navegador em ${new Date(saved).toLocaleString('pt-BR')}`
    : 'Dados não salvos no navegador';
}

/* =========================================================
   Eventos
   ========================================================= */
document.addEventListener('click', (e) => {
  const rm = e.target.closest('[data-remove]');
  if (rm) {
    if (rm.dataset.remove === '__search__') { state.search = ''; $('#search').value = ''; }
    else state.filters[rm.dataset.remove].delete(rm.dataset.rval);
    render();
    return;
  }
  const mark = e.target.closest('[data-dim]');
  if (mark) { toggleFilter(mark.dataset.dim, mark.dataset.val, e.ctrlKey || e.metaKey || e.shiftKey); return; }
  const th = e.target.closest('th[data-sort]');
  if (th) {
    const k = th.dataset.sort;
    state.sort = { key: k, dir: state.sort.key === k ? -state.sort.dir : (['valor', 'quantidade', 'total'].includes(k) ? -1 : 1) };
    renderTable(rowsExcept(null));
  }
});

document.addEventListener('keydown', (e) => {
  const inField = e.target.matches('input, textarea');
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[data-dim]:not(button)')) {
    e.preventDefault();
    toggleFilter(e.target.dataset.dim, e.target.dataset.val, e.ctrlKey || e.metaKey || e.shiftKey);
  } else if (e.key === '/' && !inField) {
    e.preventDefault();
    $('#search').focus();
  } else if (e.key === 'Escape') {
    if (inField) e.target.blur();
    clearAll();
  }
});

let searchTimer;
$('#search').addEventListener('input', (e) => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => { state.search = norm(e.target.value); render(); }, 180);
});

$('#clearAll').addEventListener('click', clearAll);

// Importação
function readFile(file) {
  if (!file) return;
  if (!/\.(csv|txt)$/i.test(file.name) && !/csv|text/.test(file.type)) { toast('Selecione um arquivo .csv', 'error'); return; }
  const read = (enc) => new Promise((res) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.readAsText(file, enc); });
  read('utf-8').then((text) => (text.includes('�') ? read('windows-1252') : text)).then((text) => loadData(text, file.name, { persist: 'save' }));
}

$('#forgetData').addEventListener('click', () => {
  if (!confirm(`Remover o arquivo importado "${state.source}" e os dados salvos no navegador?`)) return;
  storage.remove(DATASET_KEY);
  storage.remove(`goal:${state.source}`);
  clearAll();
  toast('Arquivo importado removido');
  loadDefault();
});
$('#fileInput').addEventListener('change', (e) => { readFile(e.target.files[0]); e.target.value = ''; });

const dz = $('#dropzone');
let dragDepth = 0;
addEventListener('dragenter', (e) => { if (![...e.dataTransfer.types].includes('Files')) return; e.preventDefault(); dragDepth++; dz.hidden = false; });
addEventListener('dragover', (e) => e.preventDefault());
addEventListener('dragleave', () => { if (--dragDepth <= 0) { dragDepth = 0; dz.hidden = true; } });
addEventListener('drop', (e) => { e.preventDefault(); dragDepth = 0; dz.hidden = true; readFile(e.dataTransfer.files[0]); });

// Exportação dos dados filtrados
$('#exportBtn').addEventListener('click', () => {
  if (!state.rows.length) return;
  const q = (s) => (/[",\n]/.test(s) ? `"${String(s).replace(/"/g, '""')}"` : s);
  const lines = ['nome,categoria,produto,valor,quantidade,total',
    ...rowsExcept(null).map((r) => [q(r.nome), q(r.categoria), q(r.produto), r.valor.toFixed(2), r.quantidade, r.total.toFixed(2)].join(','))];
  const blob = new Blob(['﻿' + lines.join('\n')], { type: 'text/csv;charset=utf-8' });
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: 'dados_filtrados.csv' });
  a.click();
  URL.revokeObjectURL(a.href);
  toast(`${lines.length - 1} linhas exportadas`);
});

// Meta
$('#editGoal').addEventListener('click', () => {
  const f = $('#goalForm');
  f.hidden = !f.hidden;
  if (!f.hidden) { $('#goalInput').value = Math.round(state.goal); $('#goalInput').focus(); }
});
$('#goalForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const v = Number($('#goalInput').value);
  if (v > 0) { state.goal = v; storage.set(`goal:${state.source}`, v); render(); toast('Meta atualizada'); }
  $('#goalForm').hidden = true;
});

// Tema
const themeToggle = $('#themeToggle');
function applyTheme(t) { document.documentElement.dataset.theme = t; }
applyTheme(storage.get('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
themeToggle.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  storage.set('theme', next);
});

// Navegação lateral com indicador animado + scroll spy
const navItems = [...document.querySelectorAll('.nav a.nav-item')];
const indicator = $('.nav-indicator');
function setActiveNav(i) {
  navItems.forEach((n, j) => n.classList.toggle('active', i === j));
  indicator.style.transform = `translateY(${navItems[i].offsetTop}px)`;
}
navItems.forEach((n, i) => n.addEventListener('click', (e) => {
  e.preventDefault();
  setActiveNav(i);
  document.querySelector(n.getAttribute('href')).scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
}));
const spy = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) {
      const i = navItems.findIndex((n) => n.getAttribute('href') === `#${en.target.id}`);
      if (i >= 0) setActiveNav(i);
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
navItems.forEach((n) => spy.observe(document.querySelector(n.getAttribute('href'))));

/* =========================================================
   Inicialização
   ========================================================= */
document.querySelectorAll('i[data-icon]').forEach((el) => {
  const tpl = document.createElement('template');
  tpl.innerHTML = icon(el.dataset.icon);
  const svg = tpl.content.firstChild;
  if (el.className) svg.classList.add(...el.className.split(' '));
  el.replaceWith(svg);
});

function loadDefault() {
  fetch('dados.csv')
    .then((r) => { if (!r.ok) throw new Error(); return r.text(); })
    .then((text) => loadData(text, 'dados.csv'))
    .catch(() => loadData(SAMPLE, 'dados de exemplo'));
}

// Prioridade: último CSV importado (salvo no navegador) → dados.csv → exemplo
const saved = loadSavedDataset();
if (!saved || !loadData(saved.csv, saved.source, { persist: 'restored', savedAt: saved.savedAt })) {
  if (saved) storage.remove(DATASET_KEY);
  loadDefault();
}
