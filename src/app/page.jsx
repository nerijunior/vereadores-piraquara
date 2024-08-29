"use client";
import { useEffect, useState } from "react";
import { TableContainer, Link, Thead, Tbody, Table, Tr, Th, Text, Td } from "@chakra-ui/react";
import { useData } from "@/hooks/useData";

export default function Home() {
  const {data} = useData();

  if (!data){
    return <p>Carregando...</p>
  }

  return (
    <TableContainer>
        <Table variant="striped" overflowX='scroll'>
          <Thead>
            <Tr>
              <Th>Vereador</Th>
              <Th>Qtde Materias</Th>
              <Th>saibro</Th>
              <Th>lombadas</Th>
              <Th>tapa_buraco</Th>
              <Th>poda_verde</Th>
              <Th>iluminacao_publica</Th>
              <Th>imposto</Th>
              <Th>mocao</Th>
              <Th>ruas_asfalto</Th>
              <Th>limpeza</Th>
              <Th>onibus</Th>
              <Th>valeta</Th>
              <Th>pintura</Th>
              <Th>calçada</Th>
              <Th>esgoto</Th>
              <Th>estacionamento</Th>
              <Th>sinalizacao</Th>
              <Th>evento</Th>
              <Th>semáforo</Th>
              <Th>solicitacoes</Th>
              <Th>manutencao</Th>
              <Th>energia_eletrica</Th>
              <Th>saude</Th>
              <Th>desapropriação</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row, i) => (
              <Tr key={i}>
                <Td>
                  <Link color='teal.500' href={`/vereador/${i+1}`}>{row.vereador}</Link>
                </Td>
                <Td>{row.total_materias}</Td>
                <Td>
                  {row.saibro} <Text as="sub">({row["saibro_%"]}%)</Text>
                </Td>
                <Td>
                  {row.lombadas} <Text as="sub">({row["lombadas_%"]}%)</Text>
                </Td>
                <Td>
                  {row.tapa_buraco}{" "}
                  <Text as="sub">({row["tapa_buraco_%"]}%)</Text>
                </Td>
                <Td>
                  {row.poda_verde}{" "}
                  <Text as="sub">({row["poda_verde_%"]}%)</Text>
                </Td>
                <Td>
                  {row.iluminacao_publica}{" "}
                  <Text as="sub">({row["iluminacao_publica_%"]}%)</Text>
                </Td>
                <Td>
                  {row.imposto} <Text as="sub">({row["imposto_%"]}%)</Text>
                </Td>
                <Td>
                  {row.mocao} <Text as="sub">({row["mocao_%"]}%)</Text>
                </Td>
                <Td>
                  {row.ruas_asfalto}{" "}
                  <Text as="sub">({row["ruas_asfalto_%"]}%)</Text>
                </Td>
                <Td>
                  {row.limpeza} <Text as="sub">({row["limpeza_%"]}%)</Text>
                </Td>
                <Td>
                  {row.onibus} <Text as="sub">({row["onibus_%"]}%)</Text>
                </Td>
                <Td>
                  {row.valeta} <Text as="sub">({row["valeta_%"]}%)</Text>
                </Td>
                <Td>
                  {row.pintura} <Text as="sub">({row["pintura_%"]}%)</Text>
                </Td>
                <Td>
                  {row.calçada} <Text as="sub">({row["calçada_%"]}%)</Text>
                </Td>
                <Td>
                  {row.esgoto} <Text as="sub">({row["esgoto_%"]}%)</Text>
                </Td>
                <Td>
                  {row.estacionamento}{" "}
                  <Text as="sub">({row["estacionamento_%"]}%)</Text>
                </Td>
                <Td>
                  {row.sinalizacao}{" "}
                  <Text as="sub">({row["sinalizacao_%"]}%)</Text>
                </Td>
                <Td>
                  {row.evento} <Text as="sub">({row["evento_%"]}%)</Text>
                </Td>
                <Td>
                  {row.semáforo} <Text as="sub">({row["semáforo_%"]}%)</Text>
                </Td>
                <Td>
                  {row.solicitacoes}{" "}
                  <Text as="sub">({row["solicitacoes_%"]}%)</Text>
                </Td>
                <Td>
                  {row.manutencao}{" "}
                  <Text as="sub">({row["manutencao_%"]}%)</Text>
                </Td>
                <Td>
                  {row.energia_eletrica}{" "}
                  <Text as="sub">({row["energia_eletrica_%"]}%)</Text>
                </Td>
                <Td>
                  {row.saude} <Text as="sub">({row["saude_%"]}%)</Text>
                </Td>
                <Td>
                  {row.desapropriação}{" "}
                  <Text as="sub">({row["desapropriação_%"]}%)</Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
    </TableContainer>
  );
}
