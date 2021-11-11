import arrowUpImg from '../../assets/arrow-up.svg'
import arrowDownImg from '../../assets/arrow-down.svg'
import arrowMoneyImg from '../../assets/money.svg'
import { Container } from "./style";

export function Summary(){
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={arrowUpImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={arrowDownImg} alt="Saídas" />
        </header>
        <strong>-R$500,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={arrowMoneyImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}