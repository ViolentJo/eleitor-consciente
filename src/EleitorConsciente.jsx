import { useState } from "react";

export default function EleitorConsciente() {
  const perguntas = [
    { pergunta: "Qual destas correntes valoriza mais a liberdade individual e a redução do papel do Estado na economia?", correta: "Liberalismo clássico" },
    { pergunta: "Que corrente defende a abolição do Estado, das hierarquias e da propriedade privada como caminho para a liberdade plena?", correta: "Anarquismo" },
    { pergunta: "Qual destas correntes valoriza a estabilidade social, a tradição e o respeito por instituições como a família e a religião?", correta: "Conservadorismo" },
    { pergunta: "Que corrente sustenta que a justiça social deve ser alcançada através da redistribuição de riqueza pelo Estado?", correta: "Socialismo democrático" },
    { pergunta: "Qual destas ideologias defende que o mérito individual deve determinar o sucesso económico e social?", correta: "Liberalismo" },
    { pergunta: "Que corrente ideológica defende o multiculturalismo, os direitos identitários e o combate a todas as formas de opressão social?", correta: "Wokismo" },
    { pergunta: "Qual destas correntes acredita que o Estado deve proteger os valores cristãos na política e na sociedade?", correta: "Democracia Cristã" },
    { pergunta: "Qual destas ideologias considera o Estado forte e centralizado como essencial para manter a ordem e a unidade nacional?", correta: "Autoritarismo" },
    { pergunta: "Que ideologia considera o ambiente e os direitos dos animais mais importantes que o crescimento económico?", correta: "Ambientalismo radical" },
    { pergunta: "Qual destas ideologias recusa a existência de classes sociais e defende uma sociedade igualitária sem propriedade privada?", correta: "Comunismo" },
    { pergunta: "Que ideologia considera que o mercado, quando livre, é o melhor regulador da economia e das relações sociais?", correta: "Liberalismo clássico" },
    { pergunta: "Qual destas ideologias rejeita completamente qualquer forma de autoridade, incluindo o Estado e a polícia?", correta: "Anarquismo" },
    { pergunta: "Qual destas ideologias considera a desigualdade social como uma consequência inevitável da liberdade individual?", correta: "Liberalismo" },
    { pergunta: "Que corrente acredita que a propriedade privada dos meios de produção deve ser substituída por propriedade coletiva?", correta: "Comunismo" },
    { pergunta: "Qual destas correntes dá prioridade à cultura e valores nacionais sobre a globalização?", correta: "Nacionalismo conservador" },
    { pergunta: "Que ideologia vê o Estado como instrumento temporário para alcançar a abolição total das classes sociais?", correta: "Marxismo-leninismo" },
    { pergunta: "Que corrente valoriza a tradição religiosa e defende a sua presença na vida pública e nas leis?", correta: "Democracia Cristã" },
    { pergunta: "Qual destas correntes considera que o progresso tecnológico deve ser desacelerado para proteger o planeta?", correta: "Ambientalismo radical" },
    { pergunta: "Qual destas ideologias defende que a justiça social deve focar-se sobretudo nas minorias identitárias?", correta: "Wokismo" },
    { pergunta: "Qual destas correntes aceita o autoritarismo como meio necessário para manter a unidade nacional?", correta: "Fascismo" },
    { pergunta: "Que ideologia defende a igualdade absoluta como objetivo central, mesmo que para isso haja perda de liberdade individual?", correta: "Socialismo radical" },
    { pergunta: "Qual destas correntes aceita a desigualdade como natural, desde que exista igualdade perante a lei?", correta: "Liberalismo clássico" },
    { pergunta: "Qual destas ideologias acredita que o bem-estar humano deve ser subordinado à preservação dos ecossistemas?", correta: "Ecocentrismo" },
    { pergunta: "Que ideologia rejeita a existência de género como construção social e defende o fim das categorias binárias?", correta: "Wokismo" },
    { pergunta: "Qual destas correntes vê o multiculturalismo como ameaça à identidade nacional?", correta: "Nacionalismo conservador" },
    { pergunta: "Qual destas ideologias defende que a liberdade económica só é possível com igualdade de oportunidades garantida pelo Estado?", correta: "Liberalismo social" },
    { pergunta: "Que corrente defende que a ordem social deve ser mantida através de autoridade firme e disciplina cívica?", correta: "Conservadorismo autoritário" },
    { pergunta: "Qual destas correntes considera a democracia liberal uma ilusão e propõe estruturas diretas e horizontais?", correta: "Anarquismo" },
    { pergunta: "Qual destas ideologias é contra o conceito de meritocracia e defende redistribuição total de rendimentos?", correta: "Comunismo" },
    { pergunta: "Que corrente valoriza a continuidade cultural, a herança histórica e a soberania territorial como pilares da nação?", correta: "Conservadorismo" }
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

  const opcoesUnicas = [...new Set(perguntas.map((p) => p.correta))].sort();

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-center">Eleitor Consciente</h1>

      {passo < perguntas.length ? (
        <div className="max-w-xl w-full">
          <p className="text-xl font-semibold mb-4">{perguntas[passo].pergunta}</p>
          <div className="space-y-2">
            {opcoesUnicas.map((opcao, index) => {
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
                  className={`w-full text-white py-2 px-4 rounded-2xl shadow ${corBotao}`}
                >
                  {opcao}
                </button>
              );
            })}
          </div>

          {respostaSelecionada && (
            <div className="mt-4 text-center">
              {respostaSelecionada === perguntas[passo].correta ? (
                <p className="text-green-600 font-semibold">Certo! ✅</p>
              ) : (
                <p className="text-red-600 font-semibold">
                  Errado. A resposta correta era:{" "}
                  <span className="underline">{perguntas[passo].correta}</span>
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
}
