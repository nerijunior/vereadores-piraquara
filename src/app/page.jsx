"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useData } from "@/hooks/useData";

export default function Home() {
  const { data, assuntos } = useData();

  if (!data) {
    return <p>Carregando...</p>;
  }

  const totals = data.reduce((acc, row) => {
    assuntos.forEach((assunto) => {
      acc[assunto] = (parseInt(acc[assunto]) || 0) + parseInt(row[assunto]);
    });
    return acc;
  }, {});

  return (
    <div className="p-8">
      <div className="grid grid-cols-4 gap-4 justify-between mb-4">
        {data.map((row, i) => (
          <div
            key={i}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex justify-end px-4 pt-4">
              <div
                id="dropdown"
                className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul className="py-2" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center pb-10">
              <Image
                src={`/fotos/${i}.png`}
                alt="Foto vereador"
                width={128}
                height={128}
                className="rounded-full shadow-lg"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {row.vereador}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Total de {row.total_materias} materias
              </span>
              <div className="flex mt-4 md:mt-6">
                <a
                  href={"/vereador/" + (i + 1)}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Analisar
                </a>
                {/* <a
                  href="#"
                  className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Message
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p class="font-bold 2xl mb-4">Totais</p>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Assunto
              </th>
              <th scope="col" className="px-6 py-3">
                Qtde Materias
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(totals).map((assunto) => (
              <tr key={assunto} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {assunto.split("_").join(" ")}
                </th>
                <td className="px-6 py-4">
                  {totals[assunto]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
