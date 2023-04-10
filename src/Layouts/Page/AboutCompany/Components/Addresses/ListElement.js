import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    outline: none;
    border-radius: 0px;
    background-color: #FFFFF;
    color: #0F172A;
    font-size: 15px;
    font-weight: 400;
    font-family: Inter;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-4 py-3'>
            <Option className='flex-grow-1 pe-5'>{props.children}</Option>
            <div className='d-flex flex-row gap-2'>
                <IconOnlyButton icon={<EditIcon/>}/>
                <IconOnlyButton icon={<RemoveIcon/>}/>
            </div>
        </div>
    );
}

export default ListElement;