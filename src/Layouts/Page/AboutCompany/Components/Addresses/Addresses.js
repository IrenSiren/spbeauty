import { Container } from "react-bootstrap";
import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex flex-column gap-4 mx-5 p-4 border col justify-content-between'>
            <Container>
                <div className='title'>Адреса заведений</div>
                <div className='d-inline-flex flex-column gap-2 pt-2'>
                    <div className='d-flex flex-column gap-2'>
                        <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                        <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                    </div>
                </div>
            </Container> 
                    <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
        
    );
}

export default Addresses;