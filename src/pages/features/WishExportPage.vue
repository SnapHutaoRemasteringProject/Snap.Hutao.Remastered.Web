<template>
  <div class="feature-page">
    <!-- 页面头部 -->
    <div class="container px-4 py-5 text-center">
      <h1 class="display-5 fw-bold text-body-emphasis">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0d6efd" class="me-2">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        </svg>
        祈愿记录导出功能
      </h1>
      <p class="lead mb-4">导出和分析您的原神祈愿历史记录</p>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- 功能概述 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">功能概述</h5>
              <p class="card-text">
                祈愿记录导出功能允许您导出原神游戏中的祈愿历史记录，分析抽卡概率，规划抽卡策略。
                支持多种导出格式和详细的数据分析，帮助您更好地管理抽卡资源。
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
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                          </svg>
                        </div>
                        <h6 class="mb-0">数据导出</h6>
                      </div>
                      <p class="card-text small">
                        支持导出祈愿历史记录为UIGF（统一祈愿记录格式）、JSON、CSV等多种格式，方便数据分析和备份。
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
                        <h6 class="mb-0">概率分析</h6>
                      </div>
                      <p class="card-text small">
                        分析抽卡概率，统计五星、四星角色和武器的出货率，提供详细的统计数据。
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
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
                          </svg>
                        </div>
                        <h6 class="mb-0">保底计算</h6>
                      </div>
                      <p class="card-text small">
                        自动计算距离保底还有多少抽，提醒您合理安排抽卡计划。
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
                        <h6 class="mb-0">历史记录</h6>
                      </div>
                      <p class="card-text small">
                        保存历史抽卡记录，支持按时间、卡池类型、角色/武器类型进行筛选和搜索。
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
                    <h6>数据获取</h6>
                    <p class="small text-muted">从游戏内获取祈愿历史记录链接，或使用自动同步功能。</p>
                  </div>
                </div>
                
                <div class="col-md-4">
                  <div class="text-center">
                    <div class="display-6 text-primary mb-2">2</div>
                    <h6>数据分析</h6>
                    <p class="small text-muted">查看抽卡统计、概率分析和保底计算。</p>
                  </div>
                </div>
                
                <div class="col-md-4">
                  <div class="text-center">
                    <div class="display-6 text-primary mb-2">3</div>
                    <h6>数据导出</h6>
                    <p class="small text-muted">选择导出格式，保存祈愿记录到本地。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 常见问题 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">常见问题</h5>
              
              <div class="accordion" id="wishExportFaq">
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      如何获取祈愿历史记录？
                    </button>
                  </h3>
                  <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#wishExportFaq">
                    <div class="accordion-body">
                      1. 在游戏内打开祈愿界面<br>
                      2. 点击"历史记录"按钮<br>
                      3. 复制页面链接<br>
                      4. 在应用中粘贴链接进行解析
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      导出数据包含哪些信息？
                    </button>
                  </h3>
                  <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#wishExportFaq">
                    <div class="accordion-body">
                      导出的数据包含：<br>
                      1. 抽卡时间<br>
                      2. 获得的角色/武器<br>
                      3. 卡池类型<br>
                      4. 抽卡次数<br>
                      5. 保底计数<br>
                      6. 其他相关元数据
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      数据安全吗？
                    </button>
                  </h3>
                  <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#wishExportFaq">
                    <div class="accordion-body">
                      1. 所有数据仅在本地处理，不会上传到服务器<br>
                      2. 导出文件保存在本地，由您完全控制<br>
                      3. 应用不会收集任何个人信息<br>
                      4. 数据加密存储，确保安全
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      支持哪些导出格式？
                    </button>
                  </h3>
                  <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#wishExportFaq">
                    <div class="accordion-body">
                      目前支持以下导出格式：<br>
                      1. UIGF（统一祈愿记录格式）- 标准格式，兼容其他工具<br>
                      2. JSON - 适合程序处理<br>
                      3. CSV - 适合Excel等表格软件<br>
                      4. Excel - 直接生成Excel文件
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
                祈愿记录导出功能与其他功能紧密集成，提供完整的游戏数据管理体验。
              </p>
              <div class="d-flex flex-wrap gap-2">
                <router-link to="/features/dashboard" class="btn btn-outline-primary btn-sm">
                  仪表板
                </router-link>
                <router-link to="/features/character-data" class="btn btn-outline-primary btn-sm">
                  角色数据
                </router-link>
                <router-link to="/features/achievements" class="btn btn-outline-primary btn-sm">
                  成就功能
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
// 祈愿记录导出功能页面逻辑
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
