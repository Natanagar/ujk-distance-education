import React, { FC, useState } from 'react';
import { Form, InputNumber } from 'antd';
import styled from 'styled-components';

interface IGromovForm{

}

const Container = styled.div`
  width : 800px;
  justify-content: center;
  display : flex;
`;
const ListInputContainer = styled.div`
  flex-direction: column;
  margin: 0 50px;
`;


const GromovFrom:FC<IGromovForm> =() => {
    const [size, setSize] = useState<number>(0)
    const handleChangeSize = (value:number) => setSize(value)

    return(
        <Container>
            <Form.Item name="size" label="Please, chose the size">
                <InputNumber onChange={handleChangeSize} min={1} max={4} />
            </Form.Item>


                <ListInputContainer>
            {Array.from(Array(size).keys()).map((item) => (
                        <Form.Item key={item + Date.now()} label="Please input the number" name={`${"number" + item}`}>
                            <InputNumber min={0} max={6}/>
                        </Form.Item>)

            )}
                </ListInputContainer>
    </Container>)
}

export default GromovFrom;
