import { useState } from "react";

export default function EleitorConsciente() {
  const perguntas = [
    // AUTORIDADE & ESTRUTURA DO ESTADO
    { pergunta: "Qual destas correntes acredita que a proteção dos valores cristãos deve orientar a política pública?", correta: "Democracia Cristã" },
    { pergunta: "Que corrente valoriza a tradição, a estabilidade social e o respeito pelas instituições familiares e religiosas?", correta: "Conservadorismo" },

    // ECONOMIA & PROPRIEDADE
    { pergunta: "Qual destas correntes valoriza mais a liberdade individual e o funcionamento do mercado com mínima intervenção do Estado?", correta: "Liberalismo" },
    { pergunta: "Qual destas ideologias defende que o progresso social deve ser alcançado através de reformas democráticas e redistribuição de riqueza?", correta: "Socialismo democrático" },
    { pergunta: "Qual destas ideologias propõe mudanças profundas na estrutura económica e social, mesmo que isso implique restrições temporárias à liberdade individual?", correta: "Socialismo radical" },
    { pergunta: "Que ideologia defende uma sociedade sem classes através da propriedade coletiva dos meios de produção?", correta: "Comunismo" },

    // SOCIEDADE & IDENTIDADE
    { pergunta: "Qual destas ideologias defende que a justiça social deve centrar-se na correção de desigualdades ligadas à identidade (raça, género, orientação sexual)?", correta: "Wokismo" },

    // AMBIENTE & SUSTENTABILIDADE
    { pergunta: "Qual destas ideologias combina preocupações ambientais com justiça social, defendendo a transição ecológica e equidade?", correta: "Eco-socialismo" },
    { pergunta: "Qual destas correntes considera que o crescimento económico deve ser limitado ou revertido em favor da preservação do planeta?", correta: "Ambientalismo radical" }
  ];

  const [passo, setPasso] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  const responder = (resposta) => {
    if (respostaSelecionada === null) {
      setRespostaSelecionada(resposta);
      setRespostas([...respostas, resposta]);
    }
  };

  const proxima = () => {
    setPasso(passo + 1);
    setRespostaSelecionada(null);
  };

  const acertos = respostas.filter(
    (resposta, i) => resposta === perguntas[i].correta
  ).length;

  const esquerda = [
    "Comunismo",
    "Socialismo radical",
    "Socialismo democrático",
    "Eco-socialismo",
    "Wokismo",
    "Ambientalismo radical",
  ];

  const centro = [
    "Liberalismo",
    "Democracia Cristã",
  ];

  const direita = [
    "Conservadorismo",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-center">Eleitor Consciente</h1>

      {passo < perguntas.length ? (
        <div className="max-w-4xl w-full">
          <p className="text-xl font-semibold mb-6">{perguntas[passo].pergunta}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-bold text-red-600 mb-2">Esquerda</h3>
              {esquerda.map((opcao, index) => renderOpcao(opcao, index))}
            </div>
            <div>
              <h3 className="font-bold text-yellow-600 mb-2">Centro</h3>
              {centro.map((opcao, index) => renderOpcao(opcao, index + 10))}
            </div>
            <div>
              <h3 className="font-bold text-blue-600 mb-2">Direita</h3>
              {direita.map((opcao, index) => renderOpcao(opcao, index + 20))}
            </div>
          </div>

          {respostaSelecionada && (
            <div className="mt-6 text-center">
              {respostaSelecionada === perguntas[passo].correta ? (
                <p className="text-green-600 font-semibold">Certo! ✅</p>
              ) : (
                <p className="text-red-600 font-semibold">
                  Errado. A resposta correta era: <span className="underline">{perguntas[passo].correta}</span>
                </p>
              )}
              <button
                onClick={proxima}
                className="mt-4 bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-full"
              >
                Próxima pergunta →
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Teste Concluído</h2>
          <p className="text-lg mb-4">
            Acertaste {acertos} em {perguntas.length} perguntas.
          </p>
          {acertos === perguntas.length ? (
            <p className="text-green-600 font-semibold">
              Parabéns! És um Eleitor Consciente.
            </p>
          ) : (
            <p className="text-yellow-600 font-semibold">
              Boa tentativa! Explora os nossos recursos para aprender mais.
            </p>
          )}
        </div>
      )}

      <footer className="mt-12 text-sm text-gray-500 text-center">
        Projeto independente por cidadãos que se importam.
      </footer>
    </div>
  );

  function renderOpcao(opcao, index) {
    const correta = perguntas[passo].correta;
    const foiRespondida = respostaSelecionada !== null;
    const corBotao =
      !foiRespondida
        ? "bg-blue-600 hover:bg-blue-700"
        : opcao === correta
        ? "bg-green-600"
        : opcao === respostaSelecionada
        ? "bg-red-600"
        : "bg-gray-300";

    return (
      <button
        key={index}
        onClick={() => responder(opcao)}
        disabled={foiRespondida}
        className={`w-full text-white py-2 px-4 mb-2 rounded-2xl shadow ${corBotao}`}
      >
        {opcao}
      </button>
    );
  }
}
