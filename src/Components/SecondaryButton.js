import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
        background: #FFFFFF;
        border: 1px solid #64748B;
        box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
        border-radius: 24px;
        min-width: ${minWidth};
        color: #64748B;
        &:hover {
            color: #818EA0;
            border: 1px solid #FFFFFF;
            background: #FFFFFF;
        }
        &:active {
            background: #FFFFFF;
            color: #A2ACB9;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;