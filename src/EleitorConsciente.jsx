import { useState } from "react";

export default function EleitorConsciente() {
  const perguntasOriginais = [
    { pergunta: "Qual destas correntes acredita que a proteção dos valores cristãos deve orientar a política pública?", correta: "Democracia Cristã" },
    { pergunta: "Que corrente valoriza a tradição, a estabilidade social e o respeito pelas instituições familiares e religiosas?", correta: "Conservadorismo" },
    { pergunta: "Qual destas correntes valoriza mais a liberdade individual e o funcionamento do mercado com mínima intervenção do Estado?", correta: "Liberalismo" },
    { pergunta: "Qual destas ideologias defende que o progresso social deve ser alcançado através de reformas democráticas e redistribuição de riqueza?", correta: "Socialismo democrático" },
    { pergunta: "Qual destas ideologias propõe mudanças profundas na estrutura económica e social, mesmo que isso implique restrições temporárias à liberdade individual?", correta: "Socialismo radical" },
    { pergunta: "Que ideologia defende uma sociedade sem classes através da propriedade coletiva dos meios de produção?", correta: "Comunismo" },
    { pergunta: "Qual destas ideologias defende que a justiça social deve centrar-se na correção de desigualdades ligadas à identidade (raça, género, orientação sexual)?", correta: "Progressismo" },
    { pergunta: "Qual destas ideologias combina preocupações ambientais com justiça social, defendendo a transição ecológica e equidade?", correta: "Eco-socialismo" },
    { pergunta: "Qual destas correntes considera que o crescimento económico deve ser limitado ou revertido em favor da preservação do planeta?", correta: "Ambientalismo radical" },
    { pergunta: "Qual destas ideologias valoriza a ordem social e a manutenção de hierarquias tradicionais?", correta: "Conservadorismo" },
    { pergunta: "Qual destas correntes defende uma transição gradual para uma sociedade mais igualitária sem recurso à revolução?", correta: "Socialismo democrático" },
    { pergunta: "Que ideologia considera que a intervenção do Estado deve ser mínima, confiando no mercado para organizar a economia?", correta: "Liberalismo" },
    { pergunta: "Qual destas correntes procura eliminar todas as hierarquias sociais através da igualdade económica extrema?", correta: "Socialismo radical" },
    { pergunta: "Que ideologia moderna é associada à defesa ativa de minorias raciais, de género e sexuais nas políticas públicas?", correta: "Progressismo" },
    { pergunta: "Qual destas ideologias combina a luta ambiental com críticas ao capitalismo como causa da crise ecológica?", correta: "Eco-socialismo" }
  ];

  const [introducao, setIntroducao] = useState(true);
  const [perguntas, setPerguntas] = useState([]);
  const [passo, setPasso] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  const mensagensFalha = [
    "A tua ignorância é perigosa para a democracia.",
    "Votar sem saber é como conduzir de olhos fechados. E tu já ias em contramão.",
    "Estás a um passo de votar num tirano. Vai estudar antes que seja tarde.",
    "Com este nível, só devias votar em concursos de TV — e mesmo assim com supervisão.",
    "Isto não é uma opinião mal formada. É desinformação ativa. E mata democracias.",
    "A tua cabeça está vazia e o boletim de voto cheio. Isso devia assustar toda a gente.",
    "Confundes ideologias básicas e provavelmente votas por influência ou impulso.",
    "O teu grau de literacia política é uma ameaça pública.",
    "Se não sabes distinguir socialismo de liberalismo, não devias decidir o futuro do país.",
    "Falhaste mais do que acertaste — e isso diz muito. Mas ainda vais a tempo de aprender."
  ];

  const mensagensSucesso = [
    "Estás apto para votar. És um cidadão exemplar, informado e consciente.",
    "Parabéns. Mostraste que a política não te passa ao lado — és parte da solução.",
    "Tu não votas por impulso. Votas com cabeça. E isso vale ouro.",
    "O teu voto tem peso porque vem de alguém que pensa. Democracia agradece.",
    "És o eleitor que todos os países gostavam de ter.",
    "Mostraste literacia política acima da média. Já merecias um lugar na comissão eleitoral.",
    "Sabes o que defendes, sabes o que rejeitas. És tudo o que um eleitor devia ser.",
    "A tua consciência política é como o teu voto: poderosa.",
    "Não guardes isto para ti. Democracia precisa de mais gente como tu.",
    "És um bom exemplo para o teu círculo. Agora convence os outros a estudar também."
  ];

  const esquerda = [
    "Comunismo",
    "Socialismo radical",
    "Socialismo democrático",
    "Eco-socialismo",
    "Progressismo",
    "Ambientalismo radical",
  ];

  const centro = [
    "Liberalismo",
    "Democracia Cristã",
  ];

  const direita = [
    "Conservadorismo",
  ];

  function baralhar(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function comecarTeste() {
    setPerguntas(baralhar([...perguntasOriginais]));
    setIntroducao(false);
    setPasso(0);
    setRespostas([]);
    setRespostaSelecionada(null);
  }

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

  function getTituloPerfil() {
    if (acertos <= 3) return { titulo: "Perigo democrático", cor: "text-red-700" };
    if (acertos <= 5) return { titulo: "Votante em risco", cor: "text-orange-500" };
    if (acertos <= 7) return { titulo: "Eleitor funcional", cor: "text-yellow-500" };
    if (acertos <= 9) return { titulo: "Cidadão consciente", cor: "text-green-500" };
    return { titulo: "Exemplo cívico nacional", cor: "text-green-700" };
  }

  const { titulo, cor } = getTituloPerfil();

  if (introducao) {
    return (
      <div className="min-h-screen bg-white text-gray-900 p-6 flex flex-col items-center justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-6 text-center">Eleitor Consciente</h1>
          <p className="mb-4">
            <em>“A punição dos bons que não se interessam pela política é serem governados pelos maus.”</em> — Platão
          </p>
          <p className="mb-4">
            A política não é um espetáculo. Não é um jogo de clubes nem um passatempo para distraídos.
          </p>
          <p className="mb-4">
            <strong>Votar não é um ato de impulso, nem um favor a partidos.</strong> É uma decisão que molda o futuro de milhões de pessoas.
          </p>
          <p className="mb-4">
            Se votares sem saber o que defendes, não és neutro: estás a abrir caminho para a tirania, a injustiça e a ignorância.
          </p>
          <p className="mb-4">
            <em>“A diferença entre uma democracia e uma ditadura é que numa democracia primeiro votamos e depois obedecemos; numa ditadura, não precisamos votar.”</em> — Thomas Jefferson
          </p>
          <p className="mb-4">
            📚 <strong>Não é vergonha estudar. Vergonha é votar na ignorância.</strong>
          </p>
          <p className="mb-8">
            <strong>Se não sabes o que estás a fazer, faz um favor a toda a gente e não sejas parte do problema.</strong> Se tens dúvidas, vai estudar antes de votar.
          </p>
          <div className="text-center">
            <button
              onClick={comecarTeste}
              className="bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full text-lg"
            >
              Começar Teste
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (passo < perguntas.length) {
    return (
      <div className="min-h-screen bg-white text-gray-900 p-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-center">Eleitor Consciente</h1>
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-center">Eleitor Consciente</h1>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Teste Concluído</h2>
        <p className="text-lg mb-1">
          Acertaste {acertos} em {perguntas.length} perguntas.
        </p>
        <p className={`text-xl font-bold mb-4 ${cor}`}>{titulo}</p>
        {acertos > perguntas.length / 2 ? (
          <p className="text-green-600 font-semibold">
            {mensagensSucesso[Math.floor(Math.random() * mensagensSucesso.length)]}
          </p>
        ) : (
          <p className="text-red-600 font-semibold">
            {mensagensFalha[Math.floor(Math.random() * mensagensFalha.length)]}
          </p>
        )}
        <button
          onClick={() => setIntroducao(true)}
          className="mt-8 bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full text-lg"
        >
          Tentar novamente
        </button>
      </div>
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
