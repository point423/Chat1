const express = require('express');
const router = express.Router();
const friendController = require('../controllers/friendController');
const authMiddleware = require('../middleware/authMiddleware');

// 应用身份验证中间件到所有路由
router.use(authMiddleware);

// 获取用户列表
router.get('/users', friendController.getUsers);

// 发送好友请求
router.post('/friends/requests', friendController.sendFriendRequest);

// 获取好友请求
router.get('/friends/requests', friendController.getFriendRequests);

// 处理好友请求
router.put('/friends/requests/:id', friendController.handleFriendRequest);

// 获取好友列表
router.get('/friends', friendController.getFriends);

module.exports = router;