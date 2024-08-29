"use client";

import Image from "next/image";
import { useData } from "@/hooks/useData";
import { Card, CardBody, Container, Heading, Text } from "@chakra-ui/react";

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

  window.vereador = vereador;

  return (
    <Container>
      <Heading>{vereador.vereador}</Heading>
      <Image
        src={`/fotos/${id - 1}.png`}
        alt="Foto vereador"
        width={128}
        height={128}
      />

      <Text>Total de materias: {vereador.total_materias}</Text>

      <Heading size={2}>Assunto mais pautados:</Heading>

      {assuntos.map((assunto) => (
        <Card key={assunto}>
          <CardBody>
            <Text>
              {assunto} - {vereador[assunto]} vezes - {vereador[`${assunto}_%`]}%
            </Text>
          </CardBody>
        </Card>
      ))}

      <Text>* total de materias publicadas entre 2023 e 2024</Text>
      <Text>Fonte: Câmara Municipal de Piraquara</Text>
    </Container>
  );
}
