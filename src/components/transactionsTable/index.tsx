import { useEffect } from "react";
import { api } from "../../Services/api";
import { Container } from "./styles";

export function TransactionsTable(){

    useEffect(()=>{
        api('/transactions')
        .then(response=>console.log(response.data))
    }, [])

    return(
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
                        <td>Desenvolvimento de web site</td>
                        <td>R$ 1.500,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/08/2021</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de web site</td>
                        <td>R$ 1.500,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/08/2021</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento de web site</td>
                        <td>R$ 1.500,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/08/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}