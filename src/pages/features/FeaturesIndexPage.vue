<template>
  <div class="features-page">
    <!-- 页面头部 -->
    <div class="container px-4 py-5 text-center">
      <h1 class="display-5 fw-bold text-body-emphasis">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0d6efd" class="me-2">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        功能特性
      </h1>
      <p class="lead mb-4">探索 Snap.Hutao.Remastered 的所有强大功能</p>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- 功能介绍 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">功能总览</h5>
              <p class="card-text">
                Snap.Hutao.Remastered 提供了丰富的功能，帮助《原神》玩家更好地管理游戏数据、
                规划资源使用、分析游戏进度。所有功能都经过精心设计，确保用户体验和实用性。
              </p>
            </div>
          </div>

          <!-- 功能列表 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title mb-4">功能列表</h5>
              
              <div class="row g-4">
                <!-- 仪表板 -->
                <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border feature-card">
                    <div class="card-body">
                      <div class="d-flex align-items-center mb-3">
                        <div class="feature-icon me-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#0d6efd">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                          </svg>
                        </div>
                        <h6 class="mb-0">仪表板</h6>
                      </div>
                      <p class="card-text small">
                        全面的游戏数据概览和实时统计，提供直观的数据可视化。
                      </p>
                      <router-link to="/features/dashboard" class="btn btn-outline-primary btn-sm">
                        查看详情
                      </router-link>
                    </div>
                  </div>
                </div>
                
                <!-- 游戏启动器 -->
                <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border feature-card">
                    <div class="card-body">
                      <div class="d-flex align-items-center mb-3">
                        <div class="feature-icon me-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#0d6efd">
                            <path d="M4 6h16v10H4z" opacity=".3"/><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>
                          </svg>
                        </div>
                        <h6 class="mb-0">游戏启动器</h6>
                      </div>
                      <p class="card-text small">
                        快速启动游戏，管理多个游戏账号，自动登录功能。
                      </p>
                      <router-link to="/features/game-launcher" class="btn btn-outline-primary btn-sm">
                        查看详情
                      </router-link>
                    </div>
                  </div>
                </div>
                
                <!-- 祈愿记录导出 -->
                <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border feature-card">
                    <div class="card-body">
                      <div class="d-flex align-items-center mb-3">
                        <div class="feature-icon me-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#0d6efd">
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                          </svg>
                        </div>
                        <h6 class="mb-0">祈愿记录导出</h6>
                      </div>
                      <p class="card-text small">
                        导出祈愿历史记录，分析抽卡概率，规划抽卡策略。
                      </p>
                      <router-link to="/features/wish-export" class="btn btn-outline-primary btn-sm">
                        查看详情
                      </router-link>
                    </div>
                  </div>
                </div>
                
                <!-- 成就功能 -->
                <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border feature-card">
                    <div class="card-body">
                      <div class="d-flex align-items-center mb-3">
                        <div class="feature-icon me-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#0d6efd">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
                          </svg>
                        </div>
                        <h6 class="mb-0">成就功能</h6>
                      </div>
                      <p class="card-text small">
                        跟踪成就完成进度，查看未完成成就，获取完成建议。
                      </p>
                      <router-link to="/features/achievements" class="btn btn-outline-primary btn-sm">
                        查看详情
                      </router-link>
                    </div>
                  </div>
                </div>
                
                <!-- 实时便笺 -->
                <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border feature-card">
                    <div class="card-body">
                      <div class="d-flex align-items-center mb-3">
                        <div class="feature-icon me-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#0d6efd">
                            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                          </svg>
                        </div>
                        <h6 class="mb-0">实时便笺</h6>
                      </div>
                      <p class="card-text small">
                        查看实时树脂、探索度、每日任务等游戏状态信息。
                      </p>
                      <router-link to="/features/real-time-notes" class="btn btn-outline-primary btn-sm">
                        查看详情
                      </router-link>
                    </div>
                  </div>
                </div>
                
                <!-- 角色数据 -->
                <div class="col-md-6 col-lg-4">
                  <div class="card h-100 border feature-card">
                    <div class="card-body">
                      <div class="d-flex align-items-center mb-3">
                        <div class="feature-icon me-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#0d6efd">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        </div>
                        <h6 class="mb-0">角色数据</h6>
                      </div>
                      <p class="card-text small">
                        详细查看和管理所有角色信息，包括等级、天赋、命座等。
                      </p>
                      <router-link to="/features/character-data" class="btn btn-outline-primary btn-sm">
                        查看详情
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 更多功能 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">更多功能</h5>
              <p class="card-text">
                除了上述核心功能外，Snap.Hutao.Remastered 还提供以下功能：
              </p>
              <div class="row">
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0d6efd" class="me-2">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <router-link to="/features/hutao-api" class="text-decoration-none">胡桃API功能</router-link>
                    </li>
                    <li class="mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0d6efd" class="me-2">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <router-link to="/zh/features/imaginarium-theater" class="text-decoration-none">幻想真境剧诗功能（中文）</router-link>
                    </li>
                    <li class="mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0d6efd" class="me-2">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <router-link to="/features/develop-plan" class="text-decoration-none">开发计划功能</router-link>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0d6efd" class="me-2">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <router-link to="/features/character-wiki" class="text-decoration-none">角色Wiki功能</router-link>
                    </li>
                    <li class="mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0d6efd" class="me-2">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <router-link to="/features/weapon-wiki" class="text-decoration-none">武器Wiki功能</router-link>
                    </li>
                    <li class="mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0d6efd" class="me-2">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <router-link to="/features/monster-wiki" class="text-decoration-none">怪物Wiki功能</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 使用建议 -->
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">使用建议</h5>
              <p class="card-text">
                为了获得最佳使用体验，建议：
              </p>
              <ul>
                <li>定期更新到最新版本以获取新功能和修复</li>
                <li>在设置中配置自动同步功能</li>
                <li>查看文档了解详细功能说明</li>
                <li>加入社区交流使用经验</li>
              </ul>
              <div class="d-flex flex-wrap gap-2">
                <router-link to="/docs" class="btn btn-outline-primary">
                  查看文档
                </router-link>
                <router-link to="/download" class="btn btn-primary">
                  下载体验
                </router-link>
                <a href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered" 
                   target="_blank" 
                   class="btn btn-outline-secondary">
                  GitHub 仓库
                </a>
              </div>
            </div>
          </div>

          <!-- 导航按钮 -->
          <div class="d-flex justify-content-between mt-5 pt-4 border-top">
            <router-link to="/" class="btn btn-outline-primary">
              ← 返回首页
            </router-link>
            <router-link to="/docs" class="btn btn-primary">
              查看详细文档 →
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 功能索引页面逻辑
</script>

<style scoped>
.features-page {
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
  min-height: calc(100vh - 200px);
}

.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
}

.feature-card {
  height: 100%;
}

.feature-card:hover {
  border-color: #0d6efd;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.feature-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

a.text-decoration-none:hover {
  text-decoration: underline !important;
}
</style>
