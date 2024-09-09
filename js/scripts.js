document.getElementById('TipoResiduo').addEventListener('change', function() {
    const Subcategoria = document.getElementById('SubcategoriaResiduo');
    Subcategoria.innerHTML = '';
    
    const Opciones = {
        Plastico: ['Botellas', 'Envases', 'Bolsas'],
        Papel: ['Periódico', 'Revistas', 'Cartón'],
        Vidrio: ['Botellas', 'Frascos'],
        Metales: ['Latas', 'Chatarra'],
        Electronicos: ['Celulares', 'Computadoras', 'Cables']
    };
    
    const TipoSeleccionado = this.value;
    Opciones[TipoSeleccionado].forEach(function(subcat) {
        const option = document.createElement('option');
        option.value = subcat.toLowerCase();
        option.textContent = subcat;
        Subcategoria.appendChild(option);
    });
});
