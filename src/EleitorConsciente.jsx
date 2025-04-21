import { useState } from "react";

export default function EleitorConsciente() {
  const perguntas = [
    {
      pergunta: "Qual destes partidos é de esquerda?",
      opcoes: ["Iniciativa Liberal", "Chega", "Bloco de Esquerda", "CDS-PP"],
      correta: "Bloco de Esquerda",
    },
    {
      pergunta: "Quem tem poder legislativo em Portugal?",
      opcoes: [
        "Presidente da República",
        "Governo",
        "Tribunal Constitucional",
        "Assembleia da República",
      ],
      correta: "Assembleia da República",
    },
    {
      pergunta: "O que aconteceu na Alemanha com a subida do nazismo?",
      opcoes: [
        "Melhoria das liberdades individuais",
        "Fim da desigualdade económica",
        "Perda de liberdades e Segunda Guerra Mundial",
        "Crescimento da União Europeia",
      ],
      correta: "Perda de liberdades e Segunda Guerra Mundial",
    },
  ];

  const [passo, setPasso] = useState(0);
  const [respostas, setRespostas] = useState([]);

  const responder = (resposta) => {
    setRespostas([...respostas, resposta]);
    setPasso(passo + 1);
  };

  const acertos = respostas.filter(
    (resposta, i) => resposta === perguntas[i].correta
  ).length;

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-center">Eleitor Consciente</h1>

      {passo < perguntas.length ? (
        <div className="max-w-xl w-full">
          <p className="text-xl font-semibold mb-4">
            {perguntas[passo].pergunta}
          </p>
          <div className="space-y-2">
            {perguntas[passo].opcoes.map((opcao, index) => (
              <button
                key={index}
                onClick={() => responder(opcao)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-2xl shadow"
              >
                {opcao}
              </button>
            ))}
          </div>
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
