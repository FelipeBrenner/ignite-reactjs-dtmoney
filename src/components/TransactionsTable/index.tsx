import { Container } from "../TransactionsTable/styles";

export function TransactionsTable() {
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
          <tr>
            <td>Fone de ouvido</td>
            <td className="deposit">R$200.00</td>
            <td>Venda</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Fita led</td>
            <td className="widthdraw">- R$90.00</td>
            <td>Compra</td>
            <td>21/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}