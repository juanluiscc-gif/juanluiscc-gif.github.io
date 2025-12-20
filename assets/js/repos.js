// Client-side script that fetches public repos for the user and renders them
(async function(){
  const user = 'juanluiscc-gif';
  const container = document.getElementById('repos');
  try{
    const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=updated`);
    if(!res.ok) throw new Error('No fue posible obtener los repositorios');
    const repos = await res.json();
    if(!Array.isArray(repos) || repos.length === 0){ container.innerHTML = '<p>No se encontraron repositorios públicos.</p>'; return }

    // Filter out archived and optionally forks (keep forks but mark them)
    const visible = repos
      .filter(r => !r.archived)
      .sort((a,b)=> new Date(b.updated_at) - new Date(a.updated_at));

    container.innerHTML = '';
    visible.forEach(r => {
      const el = document.createElement('article');
      el.className = 'card';
      el.innerHTML = `
        <h3><a href="${r.html_url}" target="_blank" rel="noopener">${r.name}</a></h3>
        <p class="meta">${r.language || ''} · ⭐ ${r.stargazers_count} · ${new Date(r.updated_at).toLocaleDateString()}</p>
        <p>${(r.description) ? r.description : ''}</p>
      `.trim();
      container.appendChild(el);
    });
  }catch(err){
    console.error(err);
    container.innerHTML = '<p>No fue posible cargar los proyectos. Comprueba la consola para más detalles.</p>';
  }
})();