<template>
  <div class="feature-page">
    <!-- 页面头部 -->
    <div class="container px-4 py-5 text-center">
      <h1 class="display-5 fw-bold text-body-emphasis">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0d6efd" class="me-2">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
        仪表板功能
      </h1>
      <p class="lead mb-4">全面掌控您的原神游戏数据</p>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- 功能概述 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">功能概述</h5>
              <p class="card-text">
                仪表板是 Snap.Hutao.Remastered 的核心功能，提供全面的游戏数据概览和实时统计。
                通过直观的图表和数据分析，帮助您更好地了解游戏进度和资源状况。
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
                        <h6 class="mb-0">角色概览</h6>
                      </div>
                      <p class="card-text small">
                        显示所有角色的等级、命座、天赋等信息，支持快速筛选和排序。
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
                            <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24z"/>
                          </svg>
                        </div>
                        <h6 class="mb-0">资源统计</h6>
                      </div>
                      <p class="card-text small">
                        统计原石、摩拉、树脂等资源的使用情况，提供资源规划建议。
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
                        <h6 class="mb-0">数据图表</h6>
                      </div>
                      <p class="card-text small">
                        使用图表展示角色分布、资源消耗趋势等数据，支持多种图表类型。
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
                        <h6 class="mb-0">实时更新</h6>
                      </div>
                      <p class="card-text small">
                        自动同步游戏数据，保持仪表板信息的最新状态。
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
                    <h6>数据同步</h6>
                    <p class="small text-muted">启动应用后自动同步游戏数据，或手动点击同步按钮。</p>
                  </div>
                </div>
                
                <div class="col-md-4">
                  <div class="text-center">
                    <div class="display-6 text-primary mb-2">2</div>
                    <h6>查看概览</h6>
                    <p class="small text-muted">在主仪表板查看各项数据的汇总信息。</p>
                  </div>
                </div>
                
                <div class="col-md-4">
                  <div class="text-center">
                    <div class="display-6 text-primary mb-2">3</div>
                    <h6>深入分析</h6>
                    <p class="small text-muted">点击具体项目查看详细数据和历史记录。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 常见问题 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">常见问题</h5>
              
              <div class="accordion" id="dashboardFaq">
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      数据同步失败怎么办？
                    </button>
                  </h3>
                  <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#dashboardFaq">
                    <div class="accordion-body">
                      1. 检查网络连接是否正常<br>
                      2. 确认游戏是否正在运行<br>
                      3. 检查账号登录状态<br>
                      4. 尝试重新启动应用
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      图表数据不准确？
                    </button>
                  </h3>
                  <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#dashboardFaq">
                    <div class="accordion-body">
                      1. 确保数据已完全同步<br>
                      2. 检查数据过滤条件<br>
                      3. 更新到最新版本<br>
                      4. 清除缓存后重新同步
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      如何导出数据？
                    </button>
                  </h3>
                  <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#dashboardFaq">
                    <div class="accordion-body">
                      1. 在设置中启用数据导出功能<br>
                      2. 选择导出格式（JSON/CSV）<br>
                      3. 选择要导出的数据类型<br>
                      4. 保存到指定位置
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      仪表板数据无法更新怎么办？
                    </button>
                  </h3>
                  <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#dashboardFaq">
                    <div class="accordion-body">
                      <strong>仪表板需要连接到 GitHub 获取最新数据。</strong>如果出现更新问题：
                      <br><br>
                      1. 检查网络连接是否正常<br>
                      2. 尝试使用 <a href="https://steampp.net/" target="_blank">Watt Toolkit（原名Steam++）</a> 加速器<br>
                      3. Watt Toolkit 可以加速 GitHub 访问，解决网络连接问题<br>
                      4. 确保应用有网络访问权限<br>
                      5. 重启应用后重试
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
                仪表板功能与其他功能紧密集成，提供完整的游戏数据管理体验。
              </p>
              <div class="d-flex flex-wrap gap-2">
                <router-link to="/features/game-launcher" class="btn btn-outline-primary btn-sm">
                  游戏启动器
                </router-link>
                <router-link to="/features/wish-export" class="btn btn-outline-primary btn-sm">
                  祈愿记录导出
                </router-link>
                <router-link to="/features/real-time-notes" class="btn btn-outline-primary btn-sm">
                  实时便笺
                </router-link>
                <router-link to="/features/character-data" class="btn btn-outline-primary btn-sm">
                  角色数据
                </router-link>
              </div>
            </div>
          </div>

          <!-- 导航按钮 -->
          <div class="d-flex justify-content-between mt-5 pt-4 border-top">
            <router-link to="/" class="btn btn-outline-primary">
              ← 返回首页
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
// 仪表板功能页面逻辑
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
