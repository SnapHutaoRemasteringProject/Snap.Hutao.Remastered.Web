<template>
  <div class="home-page">
    <!-- 英雄区域 -->
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <div class="card border-0 shadow-lg">
            <div class="card-body p-4 text-center">
              <div class="mb-3">
                <img src="/logo.png" alt="Snap.Hutao.Remastered Logo" class="me-3" style="height: 128px; width: 128px;">
              </div>
              <h3 class="card-title mb-3">Snap.Hutao.Remastered</h3>
              <p class="card-text">现代化的原神工具</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Snap.Hutao.Remastered</h1>
          <p class="lead">一个专为《原神》玩家设计的现代化工具，提供角色管理、资源计算、游戏数据统计等功能。</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <router-link to="/download" class="btn btn-primary btn-lg px-4 me-md-2">
              立即下载
            </router-link>
            <router-link to="/docs" class="btn btn-outline-secondary btn-lg px-4">
              查看文档
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 功能特性 -->
    <div class="container px-4 py-5" id="featured-3">
      <h2 class="pb-2 border-bottom text-center">核心功能</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 rounded-circle" style="width: 60px; height: 60px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
          </div>
          <h3 class="fs-2">游戏数据管理</h3>
          <p>轻松管理你的原神账号数据，包括角色、武器、圣遗物等详细信息。</p>
        </div>
        <div class="feature col">
          <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 rounded-circle" style="width: 60px; height: 60px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
          </div>
          <h3 class="fs-2">资源计算器</h3>
          <p>精确计算角色升级、天赋提升所需的材料和摩拉，规划你的资源使用。</p>
        </div>
        <div class="feature col">
          <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 rounded-circle" style="width: 60px; height: 60px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
            </svg>
          </div>
          <h3 class="fs-2">性能优化</h3>
          <p>采用现代技术栈重构，提供更快的启动速度和更流畅的操作体验。</p>
        </div>
      </div>
    </div>

    <!-- 技术栈 -->
    <div class="container px-4 py-5">
      <div class="row align-items-center g-5 py-5">
        <div class="col-lg-6">
          <h2 class="display-6 fw-bold mb-3">技术栈</h2>
          <p class="lead">Snap.Hutao.Remastered 基于现代 .NET 技术构建，提供原生 Windows 应用体验。</p>
          <div class="d-flex flex-wrap gap-2 mt-4">
            <span class="badge bg-primary fs-6 p-2">.NET</span>
            <span class="badge bg-primary fs-6 p-2">C#</span>
            <span class="badge bg-primary fs-6 p-2">WinUI 3</span>
            <span class="badge bg-primary fs-6 p-2">XAML</span>
            <span class="badge bg-primary fs-6 p-2">Windows App SDK</span>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card border-0 shadow">
            <div class="card-body p-4">
              <h5 class="card-title mb-3">原生 Windows 应用</h5>
              <p class="card-text">采用 .NET + WinUI 3 技术栈，提供真正的原生 Windows 应用体验。</p>
              <p class="card-text">高性能、低资源占用、完美集成 Windows 系统特性。</p>
              <a href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered" 
                 target="_blank" 
                 class="btn btn-outline-primary mt-2">
                访问 GitHub 仓库
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 主页组件逻辑
</script>

<style scoped>
.home-page {
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
  min-height: calc(100vh - 200px);
}

.feature-icon {
  background: linear-gradient(135deg, #0d6efd, #0dcaf0) !important;
}

.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.badge {
  transition: all 0.2s ease;
}

.badge:hover {
  transform: scale(1.05);
}

.rounded-circle {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
