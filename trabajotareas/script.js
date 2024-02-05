let tareas = [];

function agregarTarea() {
    const inputTarea = document.getElementById('inputTarea');
    const textoTarea = inputTarea.value.trim();

    if (textoTarea !== '') {
        tareas.push({ texto: textoTarea, completada: false });
        inputTarea.value = '';
        actualizarListaTareas();
    }
}

function eliminarTarea(indice) {
    tareas.splice(indice, 1);
    actualizarListaTareas();
}

function completarTarea(indice) {
    tareas[indice].completada = !tareas[indice].completada;
    actualizarListaTareas();
}

function actualizarListaTareas() {
    const listaTareas = document.getElementById('listaTareas');
    const totalTareas = document.getElementById('totalTareas');
    const tareasPendientes = document.getElementById('tareasPendientes');

    listaTareas.innerHTML = '';
    totalTareas.textContent = tareas.length;
    tareasPendientes.textContent = tareas.filter(tarea => !tarea.completada).length;

    tareas.forEach((tarea, indice) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';

        const textoTarea = document.createElement('span');
        textoTarea.textContent = tarea.texto;

        const botonesContainer = document.createElement('div');
        botonesContainer.className = 'botones-container';

        const botonEliminar = document.createElement('button');
        botonEliminar.className = 'btn btn-danger btn-sm';
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => eliminarTarea(indice));

        const botonCompletar = document.createElement('button');
        botonCompletar.className = 'btn btn-success btn-sm ml-2';
        botonCompletar.textContent = tarea.completada ? 'Desmarcar' : 'Marcar';
        botonCompletar.addEventListener('click', () => completarTarea(indice));

        botonesContainer.appendChild(botonEliminar);
        botonesContainer.appendChild(botonCompletar);

        listItem.appendChild(textoTarea);
        listItem.appendChild(botonesContainer);

        listaTareas.appendChild(listItem);
    });
}

// Inicializar la lista de tareas
actualizarListaTareas();
