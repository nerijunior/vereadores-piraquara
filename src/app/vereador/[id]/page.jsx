"use client";

import Image from "next/image";
import { useData } from "@/hooks/useData";
import { IconHelp } from "@tabler/icons-react"

const assuntosKeywords = {
  saude: "médico|farmácia|Telemedicina|saúde| ubs |FRALDAS ADULTAS",
  saibro: "saibro|saibreamento|patrola|anti pó|anti-pó|ensaibramento",
  lombadas:
    "travessa elevada|travessia elevada|lombada|lombadas|tachões|tachão|redutores de velocidade|redutor de velocidade",
  tapa_buraco: "tapa buraco|buraco|recape|ciclovia|requalificação da rua",
  poda_verde:
    "roçada|poda verde|poda|corte do Pinheiro|corte da árvore|retirada de galh",
  iluminacao_publica:
    "lâmpadas|iluminação pública|luminária|Iluminação|lâmpada",
  imposto: "imposto|iptu",
  mocao: "moção",
  ruas_asfalto:
    "asfáltic|asfalto|revitalização da|ciclo via|recuperação da R|manutenção da rua|pavimentação|reparo na Av|inclusão da Rua|oficialização das ruas|abertura das Rua",
  limpeza: "limpeza|lixo|entulho|coleta seletiva|veículos abandonados",
  onibus: "ônibus|Comec|AMEP|transporte coletivo",
  valeta: "valeta|manilha",
  pintura: "pintura",
  calçada:
    "calçada|meio fio|guia rebaixada|rebaixamento de guia|rampa de acesso|calçamento",
  agua_esgoto:
    "sanepar|esgoto|grelha|boca de lobo|tampa do bueiro|bueiro|BOEIRO|água pluvial|Desobstrução da Galeria|tampa de lobo|drenagem na",
  estacionamento: "estacionamento",
  sinalizacao:
    "semáforo|semafórico|sinalização|colocado placas|Placa de sinalização|Sinalização com placa|sinalização viária|faixa branca|placas de indentificação|realocação da placa|colocação de placa",
  evento:
    "autorização para um evento|para a realização d|fechamento da Rua|eventos religiosos",
  solicitacoes: "solicitação à secretaria",
  manutencao: "manutenção|manutunção|do telhado na quadra",
  energia_eletrica:
    "energia elétrica|extensão de rede|reparação elétrica|REDE ELETRICA",
  desapropriação: "desapropriação",
  transito:
    "readequação da via preferencial|mão única|sistema viário|Registro de Veículos",
  queimada: "queimada",
  solicitacao_meio_ambiente: "secretaria de meio ambiente",
  solicitacao_informacao:
    "solicito informações|solicita informações|Requeiro informações",
  solicitacao_educacao: "secretaria de educação",
  solicitacao_fiscalizacao: "fiscalização",
  horta_comunitaria: "horta comunitária",
  assistencia_social: "assistência social",
  esportes: "esportes|Cancha de Bocha|parque infantil|atletas|cancha de areia",
  educacao_infantil: "CEMEI|CMEI|educação infantil|MERENDA ESCOLAR",
  servidores_municipais: "Face Card",
  licitações: "licitações",
  patrulha_escolar: "patrulha escolar",
  reciclagem: "recicláveis|pneu|material metálico",
  seguranca: "concertinas|vigilância armada",
  imovel_abandonado: "imóvel descuidado",
  animais: "animais",
  armazem_familia: "Armazém da Família",
  amamentacao_materna: "agosto Dourado",
  tapume: "tapume",
};

export default function Vereador(route) {
  const { id } = route.params;
  const { data, assuntos } = useData();

  if (!data) {
    return <p>Carregando...</p>;
  }

  const vereador = data[id - 1];

  return (
    <div className="p-8">
      <div className="flex gap-4 mb-4">
        <Image
          src={`/fotos/${id - 1}.png`}
          alt="Foto vereador"
          width={128}
          height={128}
          className="rounded-full shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {vereador.vereador}
          </h1>
          <p className="mb-4">
            Total de materias:{" "}
            <span className="font-bold">{vereador.total_materias}</span>
          </p>
        
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Assunto
              </th>
              <th scope="col" className="px-6 py-3">
                Qtde de Materias
              </th>
              <th scope="col" className="px-6 py-3">
                %
              </th>
            </tr>
          </thead>
          <tbody>
            {assuntos.filter(a => vereador[a] !== "0").map((assunto) => (
              <tr
                key={assunto}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  width="40%"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  <span>{assunto.split('_').join(' ')} <IconHelp size={16} className="inline-flex bg-blue-100 text-blue-800 rounded-full" title={assuntosKeywords[assunto]
                      ? assuntosKeywords[assunto]
                          .split("|")
                          .map((w) => w.toLowerCase())
                          .join(", ")
                      : ""} /></span>
                </th>
                <td className="px-6 py-4">{vereador[assunto]}</td>
                <td className="px-6 py-4">{vereador[`${assunto}_%`]}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <a
        href="/"
        className="inline-flex mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Voltar
      </a>

      <p className="text-sm text-gray-500">
        * total de materias publicadas entre 2023 e 2024 - Fonte: Câmara
        Municipal de Piraquara
      </p>

      <p className="text-sm text-gray-500">** Mantendo o mouse em (?) são exibidas as palavras-chave usadas para categoriar as materias</p>
    </div>
  );
}
