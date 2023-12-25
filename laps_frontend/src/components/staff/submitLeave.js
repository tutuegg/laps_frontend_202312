import { useState } from 'react';
import axios from "axios";
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
} from 'antd';
//import { useParams } from 'react-router-dom';

const { TextArea } = Input;


const SubmitLeave = () => {
    const [form] = Form.useForm();
    const [list, setList] = useState({});

    const initialValues = {
        LeaveType: 'ANNUAL_LEAVE',
    };

    const onFinish = (values) => {
        setList(values);
        CreatApplication();
    };

    function CreatApplication() {
        const selectedDate = list.FromDate.toDate();
        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const day = String(selectedDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        console.log(formattedDate);
        const user_id = 1

        const data = {
            fromDate: formattedDate,
            dayOff: list.Dates,
            employeeLeaveType: list.LeaveType.toUpperCase()
        }
        console.log('Received values of form: ', data);
        axios.post(`http://localhost:8080/api/application/create/${user_id}`, data)
            .then(response => {
                console.log(response.data)
            })
            .catch(e => {
                console.log('fail')
                console.log(e.response.data)
            })
    }
    return (
        <>
            <Form
                form={form}
                name="submit"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                initialValues={initialValues}
            >

                <Form.Item label="LeaveType" name="LeaveType">
                    <Select
                        initialValues="ANNUAL_LEAVE"
                        style={{ width: 120 }}
                        options={[
                            { value: 'ANNUAL_LEAVE', label: 'Annual Leave1' },
                            { value: 'type2', label: 'type2' },
                            { value: 'type3', label: 'type3' },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="FromDate" name="FromDate">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Dates" name="Dates">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Reasons" name="Reasons">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="ContactDetails" name="ContactDetails">
                    <Input />
                </Form.Item>
                <Form.Item label=" ">
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default SubmitLeave;