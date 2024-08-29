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

  return { data };
}
