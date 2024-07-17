const hotspots = [
    { id: 'formatos', top: '27%', left: '10%', title: 'Aquí sirven los formatos', description: 'Encuentra aquí formatos para documentar tus proyectos' },
    { id: 'oportunidades', top: '15%', right: '30%', title: 'Destapa una oportunidad', description: '<b>Encuentra </b>aquí técnicas y oportunidades para la generación de ideas' },
    { id: 'utensilios', top: '40%', left: '25%', title: 'Utensilios creativos', description: 'Encuentra aquí herramientas y técnicas de ideación útiles para pensar de forma creativa' },
    { id: 'recetas', top: '60%', left: '30%', title: 'Lee una receta', description: 'Encuentra aquí documentos vitales para generar ideas de alto impacto' },
    { id: 'comentarios', top: '50%', left: '50%', title: 'Hornea un comentario', description: 'Queremos saber lo que se te ocurre y lo que piensas, deja tu comentario' },
    { id: 'ideas', top: '10%', right: '5%', title: 'Deja una idea adherida', description: 'Deja escrita tu idea en nuestra nevera' },
    { id: 'ingredientes', top: '80%', left: '10%', title: 'Ingredientes innovadores', description: 'Prueba y testea los ingredientes, haz prototipos de tu idea y acércate a hacerla realidad' },
];

const hotspotsContainer = document.getElementById('hotspots');

hotspots.forEach(hotspot => {
    const hotspotElement = document.createElement('div');
    hotspotElement.className = 'hotspot';
    hotspotElement.style.top = hotspot.top;
    hotspotElement.style.left = hotspot.left;
    hotspotElement.style.right = hotspot.right;
    hotspotElement.innerHTML = '🍃';

    const content = document.createElement('div');
    content.className = 'hotspot-content';
    content.innerHTML = `
        <h5>${hotspot.title}</h5>
        <p>${hotspot.description}</p>
    `;
    hotspotElement.appendChild(content);
    hotspotsContainer.appendChild(hotspotElement);
});