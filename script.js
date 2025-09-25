/* =======================================================
   REGISTRO DE CATEGORIAS OFICIAIS + ÍCONES
   (adicione/edite à vontade; chips aparecem mesmo sem itens)
========================================================== */
const CATEGORY_ICONS = {
  produtividade:"⚡", advocacia:"⚖️", marketing:"🎯", seo:"📈", vendas:"🤝",
  programacao:"💻", redes_sociais:"📱", chatgpt_prompts:"🤖", criacao_conteudo:"✍️",
  automacao:"🔁", imagem_midjourney:"🎨", analise_dados:"📊", design:"🖌️",
  ux_ui:"🧩", social_media:"💬", atendimento:"🎧", financeiro:"💰",
  educacao:"📚", saude:"🩺", juridico:"📜", empreendedorismo:"🚀",
  dados:"🧮", ti:"🛠️", rh:"🧑‍💼", suporte_tecnico:"🛟",
  logistica:"🚚", e_commerce:"🛒", atendimento_publico:"🏛️",
  engenharia:"🏗️", civil:"🧱", eletrica:"🔌", mecanica:"⚙️",
  arquitetura:"🏛️", imobiliario:"🏠", turismo:"🧳", gastronomia:"🍽️",
  fotografia:"📷", musica:"🎵", video:"🎬", publicidade:"📰",
  jornalismo:"🗞️", politica:"🏛️", esportes:"🏅", fitness:"💪",
  bem_estar:"🧘", beleza:"💄", moda:"👗", cosmeticos:"🧴",
  pets:"🐶", agricultura:"🌾", meio_ambiente:"🌳", sustentabilidade:"♻️",
  energia:"⚡", automotivo:"🚗", viagens:"✈️", hotelaria:"🏨",
  jogos:"🎮", cybersecurity:"🛡️", devops:"⚙️", cloud:"☁️",
  ia:"🧠", ml:"🔮", nlp:"🗣️", vendas_b2b:"🏢",
  vendas_b2c:"🛍️", atendimento_ao_cliente:"🤝", outros:"✨"
};

const CATEGORY_REGISTRY = Object.keys(CATEGORY_ICONS);

/* =========
   DADOS BASE (amostra curada: 10+ categorias * 5 itens = 50+ prompts)
   Você pode expandir facilmente adicionando objetos ao array PROMPTS.
   ========= */
const PROMPTS = [
  // PRODUTIVIDADE
  { id:"prod_001", category:"produtividade", title:"Checklist matinal de alta performance", summary:"Rotina de foco (5 min).", prompt:"Gere um checklist matinal de 5 minutos: metas do dia, 3 MITs, bloqueios de agenda, 1 hábito de saúde e mensagem motivacional curta. Entregar em lista numerada." },
  { id:"prod_002", category:"produtividade", title:"Plano semanal em 30 minutos", summary:"Deep Work + operação.", prompt:"Crie um plano semanal equilibrando blocos de Deep Work e tarefas operacionais. Sugira distribuição por energia alta/média/baixa e metas mensuráveis para a semana." },
  { id:"prod_003", category:"produtividade", title:"Matriz de Eisenhower", summary:"Urgente x Importante.", prompt:"Aplique a matriz de Eisenhower à lista: {{TAREFAS}}. Classifique em 4 quadrantes e proponha ações objetivas por quadrante." },
  { id:"prod_004", category:"produtividade", title:"Reunião de 15 minutos", summary:"Pauta e decisões.", prompt:"Crie pauta para reunião de 15 minutos: objetivo, decisões necessárias, checklist de insumos e divisão de falas 5-5-5. Inclua template de ata." },
  { id:"prod_005", category:"produtividade", title:"Resumo executivo", summary:"TL;DR de textos longos.", prompt:"A partir do texto: {{TEXTO}}, gere um resumo com 5 bullets, riscos e próximos passos (3 itens)." },

  // ADVOCACIA (Consumerista)
  { id:"adv_001", category:"advocacia", title:"Contestação de cobrança prescrita", summary:"Mais de 5 anos.", prompt:"Elabore contestação por cobrança de dívida prescrita (art. 189 CC e art. 206, §5º, I). Inclua fatos, prescrição, abuso na cobrança, pedidos e jurisprudência resumida." },
  { id:"adv_002", category:"advocacia", title:"Retirada de negativação indevida (tutela)", summary:"Pedido liminar.", prompt:"Redija petição de tutela de urgência (art. 300 CPC) para exclusão imediata de restrição, com probabilidade do direito, perigo de dano e multa diária." },
  { id:"adv_003", category:"advocacia", title:"Cobrança vexatória", summary:"Prática abusiva.", prompt:"Elabore peça fundamentando abusividade de ligações repetitivas (CDC arts. 6º, IV; 42; 71), pedidos de cessação e dano moral." },
  { id:"adv_004", category:"advocacia", title:"Ação declaratória de inexistência de débito", summary:"Fraude/contrato não reconhecido.", prompt:"Inicial com inexigibilidade, retirada de restrição, danos morais, inversão do ônus (art. 6º, VIII CDC) e tutela de urgência." },
  { id:"adv_005", category:"advocacia", title:"Repetição do indébito em dobro", summary:"Cobrança indevida.", prompt:"Minuta pedindo devolução em dobro (art. 42, par. único CDC), requisitos e provas." },

  // MARKETING
  { id:"mkt_001", category:"marketing", title:"Persona e proposta de valor", summary:"ICP + PV.", prompt:"A partir de {{SEGMENTO}} e {{PRODUTO}}, descreva persona, dores, ganhos e proposta de valor única com 3 provas sociais." },
  { id:"mkt_002", category:"marketing", title:"Plano de lançamento 7 dias", summary:"Pré, durante, pós.", prompt:"Crie cronograma para {{OFERTA}} em 7 dias com canais, mensagens, métricas e orçamento." },
  { id:"mkt_003", category:"marketing", title:"Calendário editorial 30 dias", summary:"Topo/Meio/Fundo.", prompt:"Monte 30 ideias de conteúdo para {{NICHO}} por estágio de funil e canal (IG/TikTok/YouTube/Blog)." },
  { id:"mkt_004", category:"marketing", title:"Anúncio AIDA (3 variações)", summary:"Meta/Google.", prompt:"Escreva 3 criativos no formato AIDA com headline, copy, descrição e ângulos." },
  { id:"mkt_005", category:"marketing", title:"E-mail de boas-vindas (flow)", summary:"3 mensagens.", prompt:"Redija sequência de 3 e-mails (D0, D2, D5) para novos leads de {{OFERTA}} com CTA claro." },

  // SEO
  { id:"seo_001", category:"seo", title:"Pesquisa de palavras-chave (clusters)", summary:"Intenção e volume.", prompt:"Liste clusters para {{TEMA}} com intenção (info/comercial), volume estimado e dificuldade relativa." },
  { id:"seo_002", category:"seo", title:"Briefing SEO", summary:"H2/H3 e E-E-A-T.", prompt:"Monte briefing para {{KW}} com H2/H3, perguntas PAA, entidades e fontes confiáveis." },
  { id:"seo_003", category:"seo", title:"Title & Meta (10 variações)", summary:"CTR alto.", prompt:"Escreva 10 títulos (≤60) e 10 metas (≤155) para {{PAGINA}} focando {{KW}}." },
  { id:"seo_004", category:"seo", title:"Plano de links internos", summary:"Pilares e satélites.", prompt:"Defina páginas pilar/satélite para {{TEMA}}, com âncoras e caminhos de navegação." },
  { id:"seo_005", category:"seo", title:"Checklist on-page", summary:"20 itens.", prompt:"Checklist técnico (HTML, headings, CWV, imagens, schema, canonical, sitemap/robots)." },

  // VENDAS
  { id:"sales_001", category:"vendas", title:"Script de prospecção fria", summary:"Abertura 30s.", prompt:"Script de ligação fria para {{ICP}} com aberturas, qualificação e CTA." },
  { id:"sales_002", category:"vendas", title:"Outreach (3 toques)", summary:"D0/D3/D7.", prompt:"Crie 3 e-mails curtos para marcar demo de {{PRODUTO}}." },
  { id:"sales_003", category:"vendas", title:"Discovery call", summary:"Perguntas poderosas.", prompt:"Roteiro com perguntas de dor, impacto, urgência e autoridade." },
  { id:"sales_004", category:"vendas", title:"Proposta comercial enxuta", summary:"Estrutura.", prompt:"Esboce proposta com escopo, cronograma, garantias, preço e CTA de aceite." },
  { id:"sales_005", category:"vendas", title:"Playbook de renovação", summary:"Evitar churn.", prompt:"Plano de 90 dias pré-renovação: health score, QBR, expansão e ofertas." },

  // PROGRAMAÇÃO
  { id:"dev_001", category:"programacao", title:"Esqueleto de API REST", summary:"Rotas CRUD + testes.", prompt:"Gere esqueleto de API para {{LINGUAGEM}} com camadas (controller/service/repo) e testes." },
  { id:"dev_002", category:"programacao", title:"Checklist de código limpo", summary:"Boas práticas.", prompt:"Checklist para PRs: nomes, funções pequenas, erros tratados, logs e performance." },
  { id:"dev_003", category:"programacao", title:"Dockerfile + Compose", summary:"Dev up rápido.", prompt:"Dockerfile e docker-compose para {{APP}} com hot reload e volume de dados." },
  { id:"dev_004", category:"programacao", title:"Pipeline CI simples", summary:"Lint, test, build.", prompt:"YAML de CI para {{PLATAFORMA_CI}} com etapas e artefatos." },
  { id:"dev_005", category:"programacao", title:"Guia de performance web", summary:"Perf budget.", prompt:"Plano para otimizar {{APP}} (caching, lazy, split, indexes, profiling)." },

  // REDES SOCIAIS
  { id:"social_001", category:"redes_sociais", title:"Calendário Instagram 30 dias", summary:"Reels/Carrossel/Stories.", prompt:"Calendário para 30 dias sobre {{NICHO}} com CTAs." },
  { id:"social_002", category:"redes_sociais", title:"TikTok viral (5 roteiros)", summary:"Hook + CTA.", prompt:"5 roteiros curtos com abertura forte e dicas rápidas." },
  { id:"social_003", category:"redes_sociais", title:"Post de autoridade (LinkedIn)", summary:"Story + aprendizado.", prompt:"Post para LinkedIn com storytelling e CTA de comentários." },
  { id:"social_004", category:"redes_sociais", title:"Sequência de Stories com enquete", summary:"Engajamento.", prompt:"5 sequências para {{NEGOCIO}}: pergunta, quiz e CTA para DM." },
  { id:"social_005", category:"redes_sociais", title:"Calendário Shorts/YouTube", summary:"Vídeos curtos.", prompt:"20 ideias de shorts com títulos atrativos." },

  // CHATGPT PROMPTS
  { id:"prompt_001", category:"chatgpt_prompts", title:"Otimizador de Prompt", summary:"Melhora qualquer prompt.", prompt:"Reescreva o prompt abaixo para máxima clareza, contexto e formato de saída estruturado: {{PROMPT}}" },
  { id:"prompt_002", category:"chatgpt_prompts", title:"Prompt para Brainstorm", summary:"Ideias criativas.", prompt:"Gere 10 ideias únicas sobre {{TEMA}} em tópicos." },
  { id:"prompt_003", category:"chatgpt_prompts", title:"Prompt para Pesquisa", summary:"Resultados resumidos.", prompt:"Resuma os 5 principais artigos sobre {{ASSUNTO}} em bullets curtos." },
  { id:"prompt_004", category:"chatgpt_prompts", title:"Prompt para Planilha", summary:"Geração de CSV.", prompt:"Produza tabela CSV com colunas {{COLUNAS}} sobre {{TEMA}}." },
  { id:"prompt_005", category:"chatgpt_prompts", title:"Prompt para Slide Deck", summary:"Markdown.", prompt:"Gere slides em markdown sobre {{TEMA}} com título e bullets." },

  // CRIAÇÃO DE CONTEÚDO
  { id:"cont_001", category:"criacao_conteudo", title:"Post de Blog SEO", summary:"2000 palavras.", prompt:"Escreva artigo sobre {{TEMA}} com H2/H3, bullets, CTA e meta description." },
  { id:"cont_002", category:"criacao_conteudo", title:"Storytelling para Marca", summary:"500 palavras.", prompt:"Narativa da marca {{MARCA}} de forma inspiradora." },
  { id:"cont_003", category:"criacao_conteudo", title:"Copy para Landing Page", summary:"Conversão alta.", prompt:"Copy de LP com Headline, Benefícios, Provas, Oferta, Garantia, FAQ, CTA." },
  { id:"cont_004", category:"criacao_conteudo", title:"Newsletter semanal", summary:"Curadoria + CTA.", prompt:"E-mail com 5 links, resumos e CTA." },
  { id:"cont_005", category:"criacao_conteudo", title:"Carrossel Instagram (5 slides)", summary:"CTA final.", prompt:"Textos para 5 slides sobre {{ASSUNTO}}." },

  // AUTOMAÇÃO
  { id:"auto_001", category:"automacao", title:"Zapier: Funil de Leads", summary:"Captação automatizada.", prompt:"Capturar leads de {{FONTE}}, enviar a planilha e disparar e-mail." },
  { id:"auto_002", category:"automacao", title:"Make: fluxo CRM + WhatsApp", summary:"Integração.", prompt:"Integrar {{CRM}} + WhatsApp + Sheets." },
  { id:"auto_003", category:"automacao", title:"Webhook + GPT", summary:"Texto automático.", prompt:"Configurar webhook que envia dados ao GPT e grava em Airtable." },
  { id:"auto_004", category:"automacao", title:"Email Drip (5 e-mails)", summary:"Onboarding.", prompt:"Campanha de 5 e-mails para {{OFERTA}}." },
  { id:"auto_005", category:"automacao", title:"Relatório semanal automático", summary:"PDF por e-mail.", prompt:"Gerar PDF de vendas e enviar por e-mail semanalmente." },

  // IMAGEM / MIDJOURNEY
  { id:"img_001", category:"imagem_midjourney", title:"Retrato hiper-realista", summary:"Estilo fotográfico.", prompt:"Prompt para retrato hiper-realista de {{PESSOA}}, iluminação softbox, 8k." },
  { id:"img_002", category:"imagem_midjourney", title:"Cena cyberpunk", summary:"Arte conceitual.", prompt:"Cidade cyberpunk à noite, chuva, neon, wide." },
  { id:"img_003", category:"imagem_midjourney", title:"Logo minimalista", summary:"Branding IA.", prompt:"Logo flat, tipografia clean, fundo claro." },
  { id:"img_004", category:"imagem_midjourney", title:"Mockup de produto", summary:"Apresentação pro.", prompt:"Mockup realista de {{PRODUTO}} em cenário minimalista." },
  { id:"img_005", category:"imagem_midjourney", title:"Poster vintage", summary:"Retro 80s.", prompt:"Pôster anos 80, textura papel, tipografia bold." },

  // ANÁLISE DE DADOS
  { id:"data_001", category:"analise_dados", title:"Resumo de planilha", summary:"Insights automáticos.", prompt:"Gerar insights de CSV (tendências, outliers, média, soma)." },
  { id:"data_002", category:"analise_dados", title:"Relatório de vendas", summary:"KPIs e gráficos.", prompt:"Resumo dos KPIs: faturamento, ticket médio, top produtos." },
  { id:"data_003", category:"analise_dados", title:"Detecção de anomalias", summary:"Outliers.", prompt:"Detectar outliers na coluna {{COLUNA}} e listar casos suspeitos." },
  { id:"data_004", category:"analise_dados", title:"Plano de dashboard", summary:"Métricas visuais.", prompt:"Definir layout com CTR, CPC, CPL, ROI e gráficos recomendados." },
  { id:"data_005", category:"analise_dados", title:"Glossário de KPIs", summary:"Explicação simples.", prompt:"Explique as métricas de {{LISTA}} em linguagem simples." },
];

/* =========
   Estado & utilidades
   ========= */
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));
const state = {
  selectedCategory: 'todas',
  query: '',
  sort: 'title_asc',
  favorites: new Set(JSON.parse(localStorage.getItem('favPrompts')||'[]'))
};

const saveFavs = () => localStorage.setItem('favPrompts', JSON.stringify([...state.favorites]));
const by = (k) => (a,b) => (a[k]||'').localeCompare(b[k]||'', 'pt', {sensitivity:'base'});

/* =========
   Categorias
   ========= */
function mergeCategories(){
  const set = new Set(CATEGORY_REGISTRY.map(c=>c.toLowerCase()));
  PROMPTS.forEach(p => set.add((p.category||'').toLowerCase()));
  return ['todas', ...[...set].sort((a,b)=>a.localeCompare(b,'pt',{sensitivity:'base'}))];
}

function iconFor(cat){
  return CATEGORY_ICONS[cat] || CATEGORY_ICONS[cat.toLowerCase()] || '✨';
}

function renderCategories(){
  const cats = mergeCategories();
  const bar = $('#categoryBar');
  bar.innerHTML = '';
  cats.forEach(cat=>{
    const btn = document.createElement('button');
    btn.className = 'chip' + (state.selectedCategory===cat?' active':''); 
    const label = (cat==='todas' ? 'Todas' : (cat[0].toUpperCase()+cat.slice(1).replaceAll('_',' ')));
    btn.innerHTML = `<span class="icon">${cat==='todas'?'🌐':iconFor(cat)}</span><span>${label}</span>`;
    btn.dataset.cat = cat;
    btn.addEventListener('click', ()=>{
      state.selectedCategory = cat;
      $$('.chip').forEach(c=>c.classList.remove('active'));
      btn.classList.add('active');
      renderList();
    });
    bar.appendChild(btn);
  });
}

/* =========
   Filtragem/Ordenação com busca debounced
   ========= */
let searchDebounce;
function triggerSearch(){
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(()=>{
    state.query = $('#searchInput').value || '';
    renderList();
  }, 120);
}

function getFiltered(){
  let list = PROMPTS.slice();
  if(state.selectedCategory!=='todas'){
    list = list.filter(p => (p.category||'').toLowerCase() === state.selectedCategory.toLowerCase());
  }
  if(state.query.trim()){
    const q = state.query.toLowerCase();
    list = list.filter(p =>
      (p.title||'').toLowerCase().includes(q) ||
      (p.summary||'').toLowerCase().includes(q) ||
      (p.prompt||'').toLowerCase().includes(q)
    );
  }
  if(state.sort==='title_asc') list.sort(by('title'));
  if(state.sort==='title_desc') list.sort((a,b)=>by('title')(b,a));
  if(state.sort==='category_asc') list.sort(by('category'));
  return list;
}

/* =========
   Utilidades UI
   ========= */
function copyToClipboard(text){
  navigator.clipboard.writeText(text).then(()=>{
    toast('Copiado! ✅');
  }).catch(()=>{
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta);
    ta.select(); document.execCommand('copy'); ta.remove();
    toast('Copiado! ✅');
  });
}

function toast(msg){
  let t = document.createElement('div');
  t.textContent = msg;
  t.style.position='fixed'; t.style.bottom='16px'; t.style.left='50%';
  t.style.transform='translateX(-50%)'; t.style.background='#0f1a30';
  t.style.border='1px solid #20325d'; t.style.color='white';
  t.style.padding='10px 14px'; t.style.borderRadius='10px';
  t.style.boxShadow='0 6px 20px rgba(0,0,0,.35)'; t.style.zIndex='99';
  document.body.appendChild(t);
  setTimeout(()=>{ t.remove(); }, 1200);
}

/* =========
   Renderização
   ========= */
function cardTemplate(p){
  const isFav = state.favorites.has(p.id);
  return `
    <article class="card" data-id="${p.id}">
      <h3>${p.title}</h3>
      <div class="pill">Categoria: <span class="category">${p.category}</span></div>
      <p>${p.summary||''}</p>
      <details>
        <summary>Ver prompt</summary>
        <pre class="muted" style="white-space:pre-wrap">${p.prompt}</pre>
      </details>
      <div class="actions">
        <button class="icon-btn copy" title="Copiar">📋 Copiar</button>
        <button class="icon-btn star ${isFav?'active':''}" title="Favoritar">⭐ ${isFav?'Favorito':'Favoritar'}</button>
      </div>
    </article>
  `;
}

function attachCardEvents(card, p){
  card.querySelector('.copy').addEventListener('click', ()=>copyToClipboard(p.prompt));
  card.querySelector('.star').addEventListener('click', ()=>{
    if(state.favorites.has(p.id)) state.favorites.delete(p.id);
    else state.favorites.add(p.id);
    saveFavs(); renderList();
  });
}

function renderFavs(){
  const favIds = new Set(state.favorites);
  const favs = PROMPTS.filter(p=>favIds.has(p.id));
  const favBox = $('#favList');
  const favSection = $('#favoritos');
  if(!favs.length){
    favBox.innerHTML = '';
    favSection.querySelector('.muted').style.display = 'block';
    return;
  }
  favSection.querySelector('.muted').style.display = 'none';
  favBox.innerHTML = '';
  favs.forEach(p=>{
    const wrap = document.createElement('div');
    wrap.innerHTML = cardTemplate(p);
    const card = wrap.firstElementChild;
    attachCardEvents(card, p);
    favBox.appendChild(card);
  });
}

function renderList(){
  const list = getFiltered();
  const box = $('#list');
  const empty = $('#emptyState');
  box.innerHTML = '';
  if(list.length === 0){
    empty.hidden = false;
  } else {
    empty.hidden = true;
    // Minimal layout thrash: build once, inject once
    const frag = document.createDocumentFragment();
    list.forEach(p=>{
      const wrap = document.createElement('div');
      wrap.innerHTML = cardTemplate(p);
      const card = wrap.firstElementChild;
      attachCardEvents(card, p);
      frag.appendChild(card);
    });
    box.appendChild(frag);
  }
  $('#countBox').textContent = `${list.length} prompt(s) encontrados`;
  renderFavs();
}

/* =========
   Tema (claro/escuro)
   ========= */
function toggleTheme(){
  const root = document.documentElement;
  if(root.classList.contains('light')) root.classList.remove('light');
  else root.classList.add('light');
}

/* =========
   Eventos UI
   ========= */
window.addEventListener('DOMContentLoaded', ()=>{
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  renderCategories();
  renderList();

  // Busca
  $('#searchBtn').addEventListener('click', triggerSearch);
  $('#searchInput').addEventListener('input', triggerSearch);
  $('#searchInput').addEventListener('keydown', (e)=>{ if(e.key==='Enter') triggerSearch(); });
  $('#clearSearch').addEventListener('click', ()=>{ $('#searchInput').value=''; triggerSearch(); });

  // Ordenação
  $('#sortSelect').addEventListener('change', (e)=>{ state.sort = e.target.value; renderList(); });

  // Limpar filtros / Recarregar categorias
  $('#clearBtn').addEventListener('click', ()=>{
    $('#searchInput').value='';
    state.query='';
    state.sort='title_asc'; $('#sortSelect').value='title_asc';
    state.selectedCategory='todas';
    renderCategories(); renderList();
  });
  $('#loadAllBtn').addEventListener('click', ()=>{ renderCategories(); renderList(); });

  // Doação
  const copyPixBtn = document.getElementById('copyPix');
  if(copyPixBtn){ copyPixBtn.addEventListener('click', ()=>copyToClipboard('csdesweb@gmail.com')); }

  // Tema
  const themeBtn = document.getElementById('themeToggle');
  if(themeBtn){ themeBtn.addEventListener('click', toggleTheme); }
});
