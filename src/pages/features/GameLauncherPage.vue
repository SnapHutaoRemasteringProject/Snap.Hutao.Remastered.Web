<template>
  <div class="feature-page">
    <!-- 页面头部 -->
    <div class="container px-4 py-5 text-center">
      <h1 class="display-5 fw-bold text-body-emphasis">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0d6efd" class="me-2">
          <path d="M4 6h16v10H4z" opacity=".3"/><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>
        </svg>
        游戏启动器
      </h1>
      <p class="lead mb-4">快速启动和管理《原神》游戏</p>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- 功能概述 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">功能概述</h5>
              <p class="card-text">
                游戏启动器是 Snap.Hutao.Remastered 的核心功能之一，提供便捷的游戏启动体验，
                支持多账号管理、自动登录、游戏参数配置等功能。
              </p>
            </div>
          </div>

          <!-- 主要特性 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title mb-4">主要特性</h5>
              
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="card h-100 border">
                    <div class="card-body">
                      <div class="d-flex align-items-center mb-3">
                        <div class="feature-icon me-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#0d6efd">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        </div>
                        <h6 class="mb-0">多账号管理</h6>
                      </div>
                      <p class="card-text small">
                        支持添加和管理多个游戏账号，快速切换不同账号。
                      </p>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="card h-100 border">
                    <div class="card-body">
                      <div class="d-flex align-items-center mb-3">
                        <div class="feature-icon me-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#0d6efd">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </div>
                        <h6 class="mb-0">自动登录</h6>
                      </div>
                      <p class="card-text small">
                        保存登录信息，实现一键自动登录，无需重复输入账号密码。
                      </p>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="card h-100 border">
                    <div class="card-body">
                      <div class="d-flex align-items-center mb-3">
                        <div class="feature-icon me-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#0d6efd">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                          </svg>
                        </div>
                        <h6 class="mb-0">启动参数配置</h6>
                      </div>
                      <p class="card-text small">
                        自定义游戏启动参数，优化游戏性能和体验。
                      </p>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="card h-100 border">
                    <div class="card-body">
                      <div class="d-flex align-items-center mb-3">
                        <div class="feature-icon me-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#0d6efd">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                          </svg>
                        </div>
                        <h6 class="mb-0">游戏状态监控</h6>
                      </div>
                      <p class="card-text small">
                        实时监控游戏运行状态，提供游戏时长统计。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 使用指南 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">使用指南</h5>
              
              <div class="row g-3">
                <div class="col-md-4">
                  <div class="text-center">
                    <div class="display-6 text-primary mb-2">1</div>
                    <h6>添加账号</h6>
                    <p class="small text-muted">在设置中添加游戏账号信息。</p>
                  </div>
                </div>
                
                <div class="col-md-4">
                  <div class="text-center">
                    <div class="display-6 text-primary mb-2">2</div>
                    <h6>配置参数</h6>
                    <p class="small text-muted">根据需要配置游戏启动参数。</p>
                  </div>
                </div>
                
                <div class="col-md-4">
                  <div class="text-center">
                    <div class="display-6 text-primary mb-2">3</div>
                    <h6>启动游戏</h6>
                    <p class="small text-muted">选择账号，点击启动按钮开始游戏。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 常见问题 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">常见问题</h5>
              
              <div class="accordion" id="gameLauncherFaq">
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      启动器无法启动游戏怎么办？
                    </button>
                  </h3>
                  <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#gameLauncherFaq">
                    <div class="accordion-body">
                      1. 检查游戏路径是否正确配置<br>
                      2. 确保有足够的系统权限<br>
                      3. 尝试以管理员身份运行启动器<br>
                      4. 检查防病毒软件是否阻止了启动
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      自动登录失败如何处理？
                    </button>
                  </h3>
                  <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#gameLauncherFaq">
                    <div class="accordion-body">
                      1. 检查账号密码是否正确<br>
                      2. 确认网络连接正常<br>
                      3. 尝试重新输入登录信息<br>
                      4. 检查游戏客户端是否有更新
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      如何添加多个游戏账号？
                    </button>
                  </h3>
                  <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#gameLauncherFaq">
                    <div class="accordion-body">
                      1. 进入设置页面<br>
                      2. 点击"添加账号"按钮<br>
                      3. 输入新的账号信息<br>
                      4. 保存设置后即可在启动器中选择
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 相关功能 -->
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">相关功能</h5>
              <p class="card-text">
                游戏启动器与其他功能紧密集成，提供完整的游戏体验。
              </p>
              <div class="d-flex flex-wrap gap-2">
                <router-link to="/features/dashboard" class="btn btn-outline-primary btn-sm">
                  仪表板
                </router-link>
                <router-link to="/features/wish-export" class="btn btn-outline-primary btn-sm">
                  祈愿记录导出
                </router-link>
                <router-link to="/features/real-time-notes" class="btn btn-outline-primary btn-sm">
                  实时便笺
                </router-link>
              </div>
            </div>
          </div>

          <!-- 导航按钮 -->
          <div class="d-flex justify-content-between mt-5 pt-4 border-top">
            <router-link to="/features" class="btn btn-outline-primary">
              ← 返回功能列表
            </router-link>
            <div>
              <router-link to="/docs" class="btn btn-outline-secondary me-2">
                查看文档
              </router-link>
              <router-link to="/download" class="btn btn-primary">
                下载体验
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 游戏启动器页面逻辑
</script>

<style scoped>
.feature-page {
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
  min-height: calc(100vh - 200px);
}

.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
}

.feature-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.display-6 {
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1;
}

.accordion-button:not(.collapsed) {
  background-color: rgba(13, 110, 253, 0.1);
  color: #0d6efd;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}
</style>
