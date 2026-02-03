<template>
  <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <router-link to="/" class="d-flex align-items-center mb-3 me-3 mb-md-0 me-md-auto text-dark text-decoration-none">
      <img src="/public/logo.png" alt="Snap.Hutao.Remastered Logo" class="me-3" style="height: 64px; width: 64px;">
      <span class="fs-4 fw-bold">Snap.Hutao.Remastered</span>
    </router-link>

    <ul class="nav me-3">
      <li class="nav-item">
        <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">
          首页
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/docs" class="nav-link" :class="{ active: $route.path === '/docs' }">
          文档
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/download" class="nav-link" :class="{ active: $route.path === '/download' }">
          下载
        </router-link>
      </li>
      <li class="nav-item">
        <a href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered" 
           target="_blank" 
           class="nav-link">
          GitHub
        </a>
      </li>
    </ul>
  </header>
</template>

<script setup>
// 导航栏逻辑
</script>

<style scoped>
.nav-link {
  color: #495057;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: #0d6efd;
}

.nav-link.active {
  color: #0d6efd;
  font-weight: 600;
}

.border-bottom {
  border-color: rgba(0, 0, 0, 0.1) !important;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    text-align: center;
    padding: 1rem !important;
  }
  
  .nav {
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .nav-item {
    margin: 0.25rem;
  }
}
</style>
