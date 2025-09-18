import React, { useState } from 'react';
import { Card } from 'antd';
import { EditOutlined, DeleteOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Meta } = Card;

const UserCardAntd = ({ user, avatar, onEdit, onDelete }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      // transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        hoverable
        style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: '16px' }}
        cover={<img alt={user.username} src={avatar} style={{ height: 200, objectFit: 'contain', background: '#f8f9fa', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }} />}
        actions={[
          liked ? (
            <motion.div
              whileTap={{ scale: 1.3 }}
              transition={{ type: 'spring', stiffness: 300 }}
              key="like"
            >
              <HeartFilled style={{ color: 'red' }} onClick={handleLike} />
            </motion.div>
          ) : (
            <motion.div
              whileTap={{ scale: 1.3 }}
              transition={{ type: 'spring', stiffness: 300 }}
              key="like"
            >
              <HeartOutlined onClick={handleLike} />
            </motion.div>
          ),
          <EditOutlined key="edit" onClick={() => onEdit(user)} />, 
          <DeleteOutlined key="delete" onClick={() => onDelete(user.id)} />
        ]}
      >
        <Meta 
            title={user.name}
            description={
                <div style={{ marginTop: 8, fontSize: 14, lineHeight: 1.6 }}>
                <div><strong>Username:</strong> {user.username}</div>
                <div><strong>Email:</strong> {user.email}</div>
                <div><strong>Phone:</strong> {user.phone}</div>
                <div><strong>Website:</strong> {user.website}</div>
                <div><strong>Company:</strong> {user.company?.name}</div>
                <div>
                    <strong>Address:</strong> {user.address?.street}, {user.address?.city}
                </div>
                </div>
            }
            />
      </Card>
    </motion.div>
  );
};

export default UserCardAntd;