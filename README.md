# 📜 Descrição do Projeto
O Jogo do Número Secreto é uma aplicação web onde o jogador deve adivinhar o número gerado aleatoriamente pelo sistema.
O jogo desafia o usuário a descobrir o número com base em dicas, como "o número secreto é maior" ou "o número secreto é menor".

O jogo foi projetado para ser dinâmico, permitindo definir facilmente o limite superior do intervalo de números.
Inclui funcionalidade de reinício para começar um novo jogo após acertar o número secreto.

---

## 🛠️ Funcionalidades
- **Número secreto aleatório**: Geração de números únicos com base em um intervalo configurável.
- **Mensagens dinâmicas**: Instruções e dicas claras, ajustadas ao intervalo definido.
- **Interface responsiva**: Utiliza eventos de teclado (Enter) para facilitar a jogabilidade.
- **Histórico de números sorteados**: Garante que cada número secreto seja único por jogo.
- **Feedback por tentativas**: Informa o número de tentativas para acertar.

---

## 🚀 Tecnologias Utilizadas
- **HTML5**: Estrutura da página.
- **CSS3**: Estilização básica para uma experiência visual agradável.
- **JavaScript**: Implementação de lógica, manipulação da DOM e geração de números aleatórios.

---

## 📸 Screenshots

| Tela                     | Imagem                                                                                  | Descrição                                                        |
|--------------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| **Tela Inicial**          | ![Tela Inicial](assets/Inicio.png)                                                       | A tela inicial do jogo, onde o jogador começa a adivinhar.      |
| **Inserir Número Válido** | ![Inserir Número Válido](assets/Inserir%20Numero%20Valido.png)                               | O jogador insere um número dentro do intervalo permitido.       |
| **Número Maior**          | ![Número Maior](assets/Numero%20Maior.png)                                                 | O sistema informa que o número secreto é maior que o palpite.   |
| **Número Menor**          | ![Número Menor](assets/Numero%20Menor.png)                                                 | O sistema informa que o número secreto é menor que o palpite.   |
| **Acertou**               | ![Acertou](assets/Acertou.png)                                                          | A tela que aparece quando o jogador acerta o número secreto.    |


## 🧩 Estrutura do Código

### Principais Componentes

#### Funções
- **`exibirTextoNaTela(tag, texto)`**: Exibe mensagens dinâmicas na tela.
- **`gerarNumeroAleatorio()`**: Gera o número secreto sem repetições no intervalo.
- **`verificarChute()`**: Valida o palpite do jogador e exibe dicas.
- **`reiniciarJogo()`**: Reinicia o jogo, redefinindo as variáveis e a interface.

#### Elementos de Interface
- **`kick_button`**: Botão para enviar o palpite.
- **`reiniciar`**: Botão para começar um novo jogo.

#### Mensagens Dinâmicas
- Instruções ajustadas ao limite superior definido pela constante `numeroLimite`.

---

## 📝 Como Usar
1. **Clone este repositório**:

   ```bash
   git clone https://github.com/mauricioliveir/jogoNumeroSecreto.git
   ```

2. **Abra o arquivo `index.html` no seu navegador**.

3. **Insira um número entre 1 e o limite configurado** (valor padrão: 50).

4. **Clique no botão "Chutar" ou pressione Enter**.

5. **Siga as dicas até acertar o número secreto**!

6. Após acertar, clique em "Novo Jogo" para recomeçar.

---

## 🔧 Configuração Personalizada

### Alterar intervalo de números:
Altere o valor da constante `numeroLimite` no código JavaScript para definir o intervalo de números possíveis:

```javascript
const numeroLimite = 50; 
```

---

## 💡 Lições Aprendidas
Este projeto ajudou a consolidar conceitos como:
- Uso de funções reutilizáveis para manipular a interface.
- Manipulação da DOM com `querySelector`.
- Controle de fluxo com condicionais.
- Geração de números aleatórios com lógica de exclusividade.
- Organização do código utilizando boas práticas de programação.

---

## 🎯 Próximos Passos
- Adicionar tema escuro/claro.
- Melhorar a interface gráfica com animações.
- Exibir estatísticas ao longo do jogo (tentativas médias, recordes, etc.).

---

## 👩‍💻 Desenvolvido por
Este projeto foi realizado no âmbito do curso da Alura + ONE G8.

**Aluno**: Mauricio De Oliveira

- LinkedIn: [Mauricio De Oliveira](https://www.linkedin.com/in/monitormauricio/)
- GitHub: [Meu Git](https://github.com/mauricioliveir)

---

## 📌 Referências
- **Alura** - Lógica de Programação
- **ONE G8** - Oracle Next Education