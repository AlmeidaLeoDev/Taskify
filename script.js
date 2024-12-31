        // 1. Selecionando elementos
        const titulo = document.getElementById('titulo');
        const input = document.getElementById('novaTarefa');
        const lista = document.getElementById('listaTarefas');

        // 2. Manipulando conteúdo
        titulo.addEventListener('click', function() {
            titulo.classList.toggle('destaque');
        });

        // 3. Criando elementos
        function adicionarTarefa() {
            const textoTarefa = input.value;
            if (textoTarefa.trim() === '') return;

            const novaTarefa = document.createElement('div');
            novaTarefa.className = 'tarefa';
            
            novaTarefa.innerHTML = `
                <span>${textoTarefa}</span>
                <button onclick="marcarConcluida(this)">Concluir</button>
                <button onclick="removerTarefa(this)">Remover</button>
            `;

            lista.appendChild(novaTarefa);
            input.value = '';
        }

        // 4. Manipulando classes e removendo elementos
        function marcarConcluida(botao) {
            const tarefa = botao.parentElement;
            const texto = tarefa.querySelector('span');
            texto.classList.toggle('completada');
        }

        function removerTarefa(botao) {
            const tarefa = botao.parentElement;
            tarefa.remove();
        }