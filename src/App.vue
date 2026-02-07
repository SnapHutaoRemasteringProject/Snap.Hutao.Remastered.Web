<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/layout/NavBar.vue'
</script>

<template>
  <div class="app">
    <NavBar />
    <main class="main-content">
      <RouterView />
    </main>
    <footer class="footer mt-auto py-5 bg-dark text-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <div class="d-flex align-items-center mb-3">
              <img src="/logo.png" alt="Snap.Hutao.Remastered Logo" class="me-3" style="height: 40px; width: 40px;">
              <div>
                <h5 class="fw-bold mb-0">Snap.Hutao.Remastered</h5>
                <p class="text-muted mb-0">胡桃重制版</p>
              </div>
            </div>
            <p class="text-muted">一个专为《原神》玩家设计的现代化工具，提供角色管理、资源计算、游戏数据统计等功能。</p>
          </div>
          
          <div class="col-lg-2 col-md-6 mb-4">
            <h5 class="fw-bold mb-3">快速链接</h5>
            <ul class="list-unstyled">
              <li class="mb-2"><router-link to="/" class="text-white text-decoration-none">首页</router-link></li>
              <li class="mb-2"><router-link to="/docs" class="text-white text-decoration-none">文档</router-link></li>
              <li class="mb-2"><router-link to="/download" class="text-white text-decoration-none">下载</router-link></li>
              <li class="mb-2"><a href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered" 
                 target="_blank" 
                 class="text-white text-decoration-none">GitHub</a></li>
            </ul>
          </div>
          
          <div class="col-lg-2 col-md-6 mb-4">
            <h5 class="fw-bold mb-3">声明页面</h5>
            <ul class="list-unstyled">
              <li class="mb-2"><router-link to="/statements/latest" class="text-white text-decoration-none">最新声明</router-link></li>
              <li class="mb-2"><router-link to="/statements/tos" class="text-white text-decoration-none">服务条款</router-link></li>
              <li class="mb-2"><router-link to="/statements/privacy-notice" class="text-white text-decoration-none">隐私政策</router-link></li>
              <li class="mb-2"><router-link to="/statements/bug-report" class="text-white text-decoration-none">错误报告</router-link></li>
            </ul>
          </div>
          
          <div class="col-lg-3 col-md-6 mb-4">
            <h5 class="fw-bold mb-3">项目信息</h5>
            <ul class="list-unstyled text-muted">
              <li class="mb-2">开源项目 · 免费使用</li>
              <li class="mb-2">基于 .NET + WinUI 3 构建</li>
              <li class="mb-2">仅支持 Windows 系统</li>
            </ul>
          </div>
          
          <div class="col-lg-3 mb-4">
            <h5 class="fw-bold mb-3">联系我们</h5>
            <p class="text-muted mb-3">问题反馈请提交到 GitHub Issues，欢迎开发者参与贡献。</p>
            <a href="https://github.com/SnapHutaoRemasteringProject" 
               target="_blank" 
               class="btn btn-outline-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="me-1">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub 组织
            </a>
          </div>
        </div>
        
        <hr class="my-4 text-muted">
        
        <div class="row">
          <div class="col-md-6">
            <p class="text-muted mb-0">© 2026 SnapHutaoRemasteringProject · 保留所有权利</p>
          </div>
          <div class="col-md-6 text-md-end">
            <p class="text-muted mb-0">本工具与米哈游无关，为第三方开源项目</p>
            <p class="text-muted mb-0">本工具与DGP Studio无关，为其衍生开源项目</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 1rem;
}

.text-decoration-none:hover {
  text-decoration: underline !important;
}
</style>
