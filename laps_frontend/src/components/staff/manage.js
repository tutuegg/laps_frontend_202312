import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, message, Popconfirm } from 'antd';

const Manage = () => {
    const [historyList, setHistoryList] = useState([]);
    const user_id = 1; // 注释掉
    useEffect(() => {
        // 获取数据
        axios.get(`http://localhost:8080/api/application/get-application-by-employee-id/${user_id}`)
            .then(response => {
                const filteredData = response.data.map(item => ({
                    application_id: item.application_id,
                    fromDate: item.fromDate,
                    leaveType: item.employeeLeaveType,
                    dayOff: item.dayOff,
                    applicationStatus: item.applicationStatus,
                    compensationStart: item.compensationStart
                }));
                setHistoryList(filteredData);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, [user_id]);

    // 取消申请
    const handleCancel = (application_id) => {
        axios.put(`http://localhost:8080/api/application/cancel/${application_id}`)
            .then(() => {
                const updatedList = historyList.map(item => {
                    if (item.application_id === application_id) {
                        return { ...item, applicationStatus: 'Cancelled' };
                    }
                    return item;
                });
                setHistoryList(updatedList);
                message.success('Application cancelled successfully');
            })
            .catch(error => {
                console.error("Error cancelling application: ", error);
                message.error("Failed to cancel application");
            });
    };

    // 删除申请
    const handleDelete = (index) => {
        const selected = historyList[index];
        axios.delete(`http://localhost:8080/api/application/delete/${selected.application_id}`)
            .then(() => {
                const updatedList = [...historyList];
                updatedList.splice(index, 1);
                setHistoryList(updatedList);
                message.success('Application deleted successfully');
            })
            .catch(error => {
                console.error("Error deleting application: ", error);
                message.error("Failed to delete application");
            });
    };

    return (
        <Card title="Application History">
            {historyList.map((item, index) => (
                <Card
                    key={item.application_id}
                    style={{ marginTop: 16 }}
                    type="inner"
                    title={item.fromDate}
                    extra={
                        item.applicationStatus === 'Applied'
                        ? <Button onClick={() => handleCancel(item.application_id)}>Cancel</Button>
                        : <Popconfirm
                            title="Are you sure to delete this application?"
                            onConfirm={() => handleDelete(index)}
                            onCancel={() => message.error('Deletion cancelled')}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button danger>Delete</Button>
                        </Popconfirm>
                    }
                >
                    <p>Leave Type: {item.leaveType}</p>
                    <p>From Date: {item.fromDate}</p>
                </Card>
            ))}
        </Card>
    );
};

export default Manage;
