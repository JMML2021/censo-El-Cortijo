let people = JSON.parse(localStorage.getItem('cortijo_people') || 'null') || INITIAL_PEOPLE;
let families = JSON.parse(localStorage.getItem('cortijo_families') || 'null') || INITIAL_FAMILIES;
const byId = () => Object.fromEntries(people.map(p=>[p.id,p]));
let centralId = (people.find(p=>normalize(p.name).includes('celestina ibarra'))||people[0]).id;
function normalize(s){return (s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
function years(p){let b=(p.birth||'').replace(/^.*?(\d{4}).*$/,'$1'); let d=(p.death||'').replace(/^.*?(\d{4}).*$/,'$1'); return (b||'?')+'–'+(d||'?');}
function save(){localStorage.setItem('cortijo_people',JSON.stringify(people));localStorage.setItem('cortijo_families',JSON.stringify(families));}
function parentsOf(id){const fam=families.find(f=>f.children.includes(id)); if(!fam)return []; return [fam.husb,fam.wife].filter(Boolean);}
function spousesOf(id){return families.filter(f=>f.husb===id||f.wife===id).map(f=>f.husb===id?f.wife:f.husb).filter(Boolean);}
function childrenOf(id){return families.filter(f=>f.husb===id||f.wife===id).flatMap(f=>f.children||[]);}
function ancestors(id, depth=2){let res=[]; let level=[id]; for(let d=0;d<depth;d++){level=[...new Set(level.flatMap(parentsOf))]; res.unshift(level); } return res;}
function descendants(id, depth=2){let res=[]; let level=[id]; for(let d=0;d<depth;d++){level=[...new Set(level.flatMap(childrenOf))]; res.push(level);} return res;}
function node(id, center=false){const p=byId()[id]; if(!p)return ''; const cls='node '+(p.sex==='F'?'f ':'')+(center?'center':''); return `<div class="${cls}" onclick="setCentral('${id}')"><div>${p.sex==='F'?'👩':'👨'}</div><b>${p.name||id}</b><div class="years">${years(p)}</div></div>`;}
function render(){const map=byId(), c=map[centralId]; document.getElementById('centralCard').innerHTML=`<div class="personName">${c.name}</div><p><b>Nac.</b><br>${c.birth||''} ${c.birthPlace||''}</p><p><b>Def.</b><br>${c.death||''} ${c.deathPlace||''}</p><p><b>Profesión:</b> ${c.occupation||'—'}</p>`;
 let html=''; ancestors(centralId).forEach((gen,i)=>{ if(gen.length) html+=`<div class="generation">${gen.map(id=>node(id)).join('')}</div><div class="connector">│</div>`; });
 html+=`<div class="spouseLine">${spousesOf(centralId).map(id=>node(id)).join('')}${node(centralId,true)}</div>`;
 descendants(centralId).forEach(gen=>{ if(gen.length) html+=`<div class="connector">│</div><div class="generation">${gen.map(id=>node(id)).join('')}</div>`; });
 document.getElementById('treeCanvas').innerHTML=html || 'Sin datos.';
 const ids=[...new Set([centralId,...ancestors(centralId).flat(),...spousesOf(centralId),...descendants(centralId).flat()])];
 document.getElementById('listCanvas').innerHTML='<ul>'+ids.map(id=>`<li><button class="secondary" onclick="setCentral('${id}')">${map[id]?.name||id}</button> ${years(map[id]||{})}</li>`).join('')+'</ul>';
 renderTable(); suggestions();}
function setCentral(id){centralId=id; render(); location.hash='arbol';}
function suggestions(){const q=normalize(document.getElementById('search').value); let arr=people.filter(p=>!q||normalize(p.name).includes(q)).slice(0,12); document.getElementById('suggestions').innerHTML=arr.map(p=>`<span class="chip" onclick="setCentral('${p.id}')">${p.name}</span>`).join('');}
function renderTable(){const tbody=document.querySelector('#peopleTable tbody'); tbody.innerHTML=people.slice().sort((a,b)=>(a.name||'').localeCompare(b.name||'')).map(p=>`<tr><td>${p.name}</td><td>${p.birth||''}<br><small>${p.birthPlace||''}</small></td><td>${p.death||''}</td><td>${p.occupation||''}</td><td><button class="secondary" onclick="setCentral('${p.id}')">Ver árbol</button></td></tr>`).join('');}
document.getElementById('search').addEventListener('input', suggestions); document.getElementById('searchBtn').onclick=()=>{let q=normalize(document.getElementById('search').value); let p=people.find(x=>normalize(x.name).includes(q)); if(p)setCentral(p.id);};
document.getElementById('treeView').onclick=()=>{treeCanvas.classList.remove('hidden');listCanvas.classList.add('hidden');treeView.classList.add('active');listView.classList.remove('active')};
document.getElementById('listView').onclick=()=>{treeCanvas.classList.add('hidden');listCanvas.classList.remove('hidden');treeView.classList.remove('active');listView.classList.add('active')};
document.getElementById('fitBtn').onclick=()=>document.getElementById('treeCanvas').scrollTo({left:0,top:0,behavior:'smooth'});
document.getElementById('personForm').onsubmit=e=>{e.preventDefault(); const fd=new FormData(e.target); const id='M'+Date.now(); people.push({id,name:fd.get('name'),sex:fd.get('sex'),birth:fd.get('birth'),birthPlace:fd.get('birthPlace'),death:fd.get('death'),deathPlace:'',occupation:fd.get('occupation'),famc:[],fams:[]}); save(); e.target.reset(); setCentral(id);};
document.getElementById('exportJson').onclick=()=>{const blob=new Blob([JSON.stringify({people,families},null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='censo-el-cortijo-datos.json'; a.click();};
document.getElementById('importJson').onchange=e=>{const file=e.target.files[0]; if(!file)return; const r=new FileReader(); r.onload=()=>{const data=JSON.parse(r.result); people=data.people||people; families=data.families||families; save(); render();}; r.readAsText(file);};
document.getElementById('resetData').onclick=()=>{if(confirm('¿Restaurar datos iniciales?')){localStorage.removeItem('cortijo_people');localStorage.removeItem('cortijo_families');location.reload();}};
render();
