import { useContext, useEffect } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);
  const lista = transactions.reverse();

  useEffect(() => {
    const lista = transactions.reverse();
    console.log("lista:", lista);
  }, [transactions]);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((lista) => (
            <tr key={lista.id}>
              <td>{lista.title}</td>
              <td className={lista.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(lista.amount)}
              </td>
              <td>{lista.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(lista.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
