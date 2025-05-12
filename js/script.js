
  // Crear el elemento del cursor personalizado
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  // Actualizar la posición del cursor personalizado
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // Obtener todos los elementos de proyecto
  const projects = document.querySelectorAll('.project');

  projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
      const title = project.getAttribute('data-title');
      cursor.textContent = title;
      cursor.style.display = 'block';
    });

    project.addEventListener('mouseleave', () => {
      cursor.style.display = 'none';
    });
  });
