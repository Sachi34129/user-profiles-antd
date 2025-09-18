import React, { useState, useEffect } from 'react';
import { Row, Col, Modal, Form, Input, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { AnimatePresence } from 'framer-motion';
import UserCardAntd from './components/UserCardAntd';
import { motion } from "framer-motion";
import './index.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const showEditModal = (user) => {
    setEditingUser(user);
    form.setFieldsValue({
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website,
      company: user.company?.name || ''
    });
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      setUsers(prev => prev.map(u => u.id === editingUser.id ? { ...u, name: values.name, email: values.email, phone: values.phone, website: values.website, company: { ...u.company, name: values.company } } : u));
      setIsModalVisible(false);
      setEditingUser(null);
      form.resetFields();
    } catch (err) {
      // validation failed
    }
  };

  if (loading) return (
    <div className="spinner-center">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </div>
  );

  return (
    <motion.div
      style={{ minHeight: "100vh" }}
      animate={{ backgroundColor: ["#ff9a9e", "#fad0c4", "#fbc2eb", "#a1c4fd"] }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
    >
      <div className="container py-4 animated-bg">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          fontSize: "2.5rem",
          marginBottom: "2rem",
          letterSpacing: "1px",
          color: "#000000",
        }}
      >
        User Profiles
      </motion.h1>
        <Row gutter={[24, 24]}>
          <AnimatePresence>
            {users.map(user => (
              <Col xs={24} sm={12} md={8} key={user.id}>
                <UserCardAntd
                  user={user}
                  avatar={`https://avatars.dicebear.com/v2/avataaars/${encodeURIComponent(user.username)}.svg?options[mood][]=happy`}
                  onEdit={showEditModal}
                  onDelete={handleDelete}
                />
              </Col>
            ))}
          </AnimatePresence>
        </Row>

        <Modal
          title="Edit user"
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          onOk={handleSave}
          okText="Save"
          centered
        >
          <Form layout="vertical" form={form}>
            <Form.Item name="name" label="Name" rules={[{ required: true }] }>
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }] }>
              <Input />
            </Form.Item>
            <Form.Item name="phone" label="Phone">
              <Input />
            </Form.Item>
            <Form.Item name="website" label="Website">
              <Input />
            </Form.Item>
            <Form.Item name="company" label="Company">
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </motion.div>
    
  );
}

export default App;