import { useState, useEffect } from "react";
import Parse from "papaparse";


export function useData() {
  const url =
    "https://raw.githubusercontent.com/nerijunior/vereadores-piraquara/master/data/2023-2024-compilado.csv";
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const content = Parse.parse(data, {
          header: true,
        });

        setData(content.data);
      });
  }, []);

  const ignoreColumns = ["total_materias", "vereador"];
  const assuntos = data ? Object.keys(data[0])
    .filter(
      (key) =>
        !ignoreColumns.includes(key) &&
        key.indexOf("_%") == -1 &&
        key.length > 1
    )
    .sort((a, b) => data[0][b] - data[0][a])
    .map((key) => key) : [];

  return { data, assuntos };
}
