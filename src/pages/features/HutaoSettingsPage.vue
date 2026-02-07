<template>
  <div class="feature-page">
    <!-- 页面头部 -->
    <div class="container px-4 py-5 text-center">
      <h1 class="display-5 fw-bold text-body-emphasis">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0d6efd" class="me-2">
          <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
        </svg>
        胡桃设置功能
      </h1>
      <p class="lead mb-4">自定义和配置 Snap.Hutao.Remastered 的各项设置</p>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- 功能概述 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">功能概述</h5>
              <p class="card-text">
                胡桃设置功能提供全面的应用配置选项，允许您根据个人喜好和使用习惯自定义 Snap.Hutao.Remastered。
                从界面主题到数据同步，所有设置都可以在这里进行调整。
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
                            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
                          </svg>
                        </div>
                        <h6 class="mb-0">通知设置</h6>
                      </div>
                      <p class="card-text small">
                        配置各种通知选项，包括树脂恢复提醒、每日委托提醒等。
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
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                          </svg>
                        </div>
                        <h6 class="mb-0">账号管理</h6>
                      </div>
                      <p class="card-text small">
                        管理游戏账号，配置自动登录、多账号切换等设置。
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
                        <h6 class="mb-0">数据同步</h6>
                      </div>
                      <p class="card-text small">
                        配置数据同步选项，包括同步频率、数据备份和恢复设置。
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
                            <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"/>
                          </svg>
                        </div>
                        <h6 class="mb-0">安全设置</h6>
                      </div>
                      <p class="card-text small">
                        配置应用安全选项，包括密码保护、数据加密等安全功能。
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
                    <h6>访问设置</h6>
                    <p class="small text-muted">从主菜单或应用内访问设置界面。</p>
                  </div>
                </div>
                
                <div class="col-md-4">
                  <div class="text-center">
                    <div class="display-6 text-primary mb-2">2</div>
                    <h6>配置选项</h6>
                    <p class="small text-muted">浏览各个设置类别，调整配置选项。</p>
                  </div>
                </div>
                
                <div class="col-md-4">
                  <div class="text-center">
                    <div class="display-6 text-primary mb-2">3</div>
                    <h6>保存应用</h6>
                    <p class="small text-muted">保存设置并应用到应用中。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 常见问题 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">常见问题</h5>
              
              <div class="accordion" id="hutaoSettingsFaq">
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      设置会同步到云端吗？
                    </button>
                  </h3>
                  <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#hutaoSettingsFaq">
                    <div class="accordion-body">
                      设置同步选项：<br>
                      1. 本地设置：仅保存在当前设备<br>
                      2. 云端同步：通过账号同步到云端（可选）<br>
                      3. 导出/导入：手动导出设置文件<br>
                      4. 备份恢复：定期备份设置
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      如何恢复默认设置？
                    </button>
                  </h3>
                  <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#hutaoSettingsFaq">
                    <div class="accordion-body">
                      恢复默认设置的步骤：<br>
                      1. 打开设置界面<br>
                      2. 滚动到底部<br>
                      3. 点击"恢复默认设置"按钮<br>
                      4. 确认操作<br>
                      5. 重启应用生效
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      设置会影响性能吗？
                    </button>
                  </h3>
                  <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#hutaoSettingsFaq">
                    <div class="accordion-body">
                      大多数设置不会影响性能：<br>
                      1. 界面设置：基本不影响性能<br>
                      2. 数据同步：可能影响网络使用<br>
                      3. 通知设置：可能增加系统资源使用<br>
                      4. 高级设置：根据具体功能可能影响性能
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      可以导出设置吗？
                    </button>
                  </h3>
                  <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#hutaoSettingsFaq">
                    <div class="accordion-body">
                      支持多种设置导出方式：<br>
                      1. JSON格式：适合备份和恢复<br>
                      2. 文本格式：适合查看和编辑<br>
                      3. 加密格式：保护敏感设置<br>
                      4. 云端备份：自动同步到云端
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
                胡桃设置功能与其他功能紧密集成，提供完整的应用体验。
              </p>
              <div class="d-flex flex-wrap gap-2">
                <router-link to="/features/dashboard" class="btn btn-outline-primary btn-sm">
                  仪表板
                </router-link>
                <router-link to="/features/game-launcher" class="btn btn-outline-primary btn-sm">
                  游戏启动器
                </router-link>
                <router-link to="/features/mhy-account-switch" class="btn btn-outline-primary btn-sm">
                  账号切换
                </router-link>
                <router-link to="/features" class="btn btn-outline-primary btn-sm">
                  所有功能
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
// 胡桃设置功能页面逻辑
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
