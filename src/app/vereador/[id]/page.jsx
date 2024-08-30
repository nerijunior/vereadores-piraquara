"use client";

import Image from "next/image";
import { useData } from "@/hooks/useData";

export default function Vereador(route) {
  const { id } = route.params;
  const { data } = useData();

  if (!data) {
    return <p>Carregando...</p>;
  }

  const vereador = data[id - 1];

  const ignoreColumns = ["total_materias", "vereador"];
  const assuntos = Object.keys(vereador)
    .filter(
      (key) =>
        !ignoreColumns.includes(key) &&
        key.indexOf("_%") == -1 &&
        key.length > 1
    )
    .sort((a, b) => vereador[b] - vereador[a])
    .map((key) => key);

  return (
    <div className="p-8">
      <a href="/" className="inline-flex mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Voltar</a>

      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{vereador.vereador}</h1>
      
      <Image
        src={`/fotos/${id - 1}.png`}
        alt="Foto vereador"
        width={128}
        height={128}
        className="rounded-full shadow-lg"
      />

      <p>Total de materias: {vereador.total_materias}</p>

      <h2 size={2}>Assuntos mais pautados:</h2>

      {assuntos.map((assunto) => (
        <div key={assunto}>
          <div>
            <p>
              {assunto} - {vereador[assunto]} vezes - {vereador[`${assunto}_%`]}
              %
            </p>
          </div>
        </div>
      ))}

      <a href="/" className="inline-flex mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Voltar</a>

      <p className="text-sm text-gray-500">* total de materias publicadas entre 2023 e 2024 - Fonte: Câmara Municipal de Piraquara</p>

    </div>
  );
}
