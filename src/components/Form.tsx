import React, { FC } from 'react';
import { Form, Input, Button, Checkbox, Typography, Select } from 'antd';
const { Title } = Typography;
const { Option } = Select;

interface IFormDistance{}

const FormDistance:FC<IFormDistance> = () =>  {
    const [form] = Form.useForm();
    const handleSubmit = (values : any) => {
        console.log(values)
    }
    return(
        <div style={{ display : 'flex', flexDirection: 'column', justifyContent : 'center', alignContent : 'center'}}>
            <Title level={3}> Chose type of Distance</Title>
            <Form onFinish={handleSubmit} form={form}>
                <Form.Item
                    label=""
                    name="type"
                >
                    <Select defaultValue="hausdorff" style={{ width: 290 }}>
                        <Option value="gromov">Hausdorff Distance</Option>
                        <Option value="integral">Integral Distance</Option>
                        <Option value="hausdorff">Hausdorrf Distance</Option>
                    </Select>
                </Form.Item>
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
