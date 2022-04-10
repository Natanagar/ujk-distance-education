import React, { FC, useState } from 'react';
import { Form, Input, Button, Checkbox, Typography, Select } from 'antd';
import GromovFrom from './GromovForm';
import HausdorffForm from './HausdorffForm'
import GromovForm from "./GromovForm";
import IntegralForm from "./IntegralForm";

const { Title } = Typography;
const { Option } = Select;

interface IFormDistance{}

const FormDistance:FC<IFormDistance> = () =>  {
    const [distance, setDistance] = useState<string>('')
    const [form] = Form.useForm();
    const handleSubmit = (values : any) => {
        console.log(values)
    }
    const handleChangeDistance = (value : string) => {
        setDistance(value)
    }

    return(
        <div style={{ display : 'flex', flexDirection: 'column', justifyContent : 'center', alignContent : 'center'}}>
            <Title level={3}> Chose type of Distance</Title>
            <Form initialValues={{ type : 'hausdorff'}} onFinish={handleSubmit} form={form}>    
                <Form.Item
                    label=""
                    name="type"
                >
                    <Select onChange={handleChangeDistance}  style={{ width: 290 }}>
                        <Option value="gromov">Gromov Distance</Option>
                        <Option value="integral">Integral Distance</Option>
                        <Option value="hausdorff">Hausdorrf Distance</Option>
                    </Select>
                </Form.Item>
                {distance === "hausdorff"
                    ? <HausdorffForm />
                    : distance === "gromov"
                        ? <GromovForm /> : distance === "integral"
                            ? <IntegralForm /> : null}
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Calculate
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default FormDistance;
