<template>
  <div class="header">
    <div class="header-content">
      <Breadcrumb />
      <p>Welcome</p>
      <div class="avatar">
        <el-dropdown>
          <img src="src/assets/avatar.png" alt="User Avatar">
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>你好，{{ store.userInfo?.userName }}</el-dropdown-item>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item @click="logout">
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserInfoStore } from '@store/mouldes/user'
import { router } from 'src/router'
const store = useUserInfoStore()
const logout = () => {
  store.clearUserInfo()
  // 重定向到首页
  router.push('/login')
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.header-content {
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width:100%;
  padding-right: 50px;
  border-bottom: 2px solid black;
}

.avatar {
  display: flex;
}

.avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.el-dropdown-link{
  p{
    top: 30px;
  }
}
</style>
