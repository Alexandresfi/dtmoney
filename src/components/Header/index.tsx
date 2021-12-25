import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps{
    onOpenModal: () => void;
}

export function Header({onOpenModal}: HeaderProps) {
   

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney" />
                
                <button type='button' onClick={onOpenModal}>
                    Nova tansição
                </button>
            </Content>
           
        </Container>
    )
}