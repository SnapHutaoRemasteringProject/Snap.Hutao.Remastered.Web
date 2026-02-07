<template>
  <div class="statement-page">
    <!-- 页面头部 -->
    <div class="container px-4 py-5 text-center">
      <h1 class="display-5 fw-bold text-body-emphasis">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0d6efd" class="me-2">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
        最新声明
      </h1>
      <p class="lead mb-4">Snap.Hutao.Remastered 最新动态和重要公告</p>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- 最新公告 -->
          <div class="card mb-4 border-primary">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-3">
                <h5 class="card-title mb-0">重要公告</h5>
                <span class="badge bg-primary">最新</span>
              </div>
              <p class="card-text">
                <strong>项目维护状态变更：</strong>原开发团队 DGP Studio 已停止运营，
                Snap.Hutao.Remastered 现由开源社区维护。我们将继续提供更新和支持。
              </p>
              <p class="card-text">
                <strong>免费祈愿记录云存储：</strong>我们正在开发免费的祈愿记录云存储功能，
                预计在后续版本中推出。这将帮助您安全地备份和同步祈愿记录数据。
              </p>
              <p class="card-text">
                <strong>域名变更通知：</strong>原 hut.ao 域名已变更为 snaphutaorp.org，
                所有相关链接已更新。如果您遇到任何链接问题，请及时反馈。
              </p>
              <div class="alert alert-info mt-3">
                <strong>社区维护说明：</strong>作为社区维护项目，我们欢迎开发者贡献代码，
                也期待用户积极参与测试和反馈。项目未来发展将更加透明和开放。
              </div>
              <p class="card-text text-muted small">
                发布时间：2026年2月7日
              </p>
            </div>
          </div>


          <!-- 重要通知 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title mb-4">重要通知</h5>
              
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="card h-100 border">
                    <div class="card-body">
                      <h6 class="card-title">安全更新</h6>
                      <p class="card-text small">
                        定期检查更新以确保使用最新安全版本。
                        建议启用自动更新功能。
                      </p>
                      <router-link to="/download" class="btn btn-outline-primary btn-sm">
                        检查更新
                      </router-link>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="card h-100 border">
                    <div class="card-body">
                      <h6 class="card-title">问题反馈</h6>
                      <p class="card-text small">
                        遇到问题或有建议？请通过错误报告页面反馈。
                        您的反馈对我们非常重要。
                      </p>
                      <router-link to="/statements/bug-report" class="btn btn-outline-primary btn-sm">
                        报告问题
                      </router-link>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="card h-100 border">
                    <div class="card-body">
                      <h6 class="card-title">文档更新</h6>
                      <p class="card-text small">
                        使用文档已更新，包含最新功能说明和操作指南。
                      </p>
                      <router-link to="/docs" class="btn btn-outline-primary btn-sm">
                        查看文档
                      </router-link>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="card h-100 border">
                    <div class="card-body">
                      <h6 class="card-title">社区支持</h6>
                      <p class="card-text small">
                        加入我们的社区，与其他用户交流使用经验。
                      </p>
                      <a href="https://github.com/SnapHutaoRemasteringProject" 
                         target="_blank" 
                         class="btn btn-outline-primary btn-sm">
                        访问 GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 法律声明 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">法律声明</h5>
              <p class="card-text">
                Snap.Hutao.Remastered 是一个第三方开源工具，与米哈游（miHoYo）及其游戏《原神》无任何官方关联。
                使用本工具前请阅读相关条款。
              </p>
              <div class="d-flex gap-2">
                <router-link to="/statements/tos" class="btn btn-outline-secondary btn-sm">
                  服务条款
                </router-link>
                <router-link to="/statements/privacy-notice" class="btn btn-outline-secondary btn-sm">
                  隐私政策
                </router-link>
              </div>
            </div>
          </div>

          <!-- 订阅更新 -->
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">获取更新通知</h5>
              <p class="card-text small mb-3">
                关注 GitHub 仓库或加入社区，及时获取最新版本和功能更新。
              </p>
              <div class="d-flex flex-wrap gap-2">
                <a href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered" 
                   target="_blank" 
                   class="btn btn-primary btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="me-1">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Star 项目
                </a>
                <a href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/releases" 
                   target="_blank" 
                   class="btn btn-outline-primary btn-sm">
                  查看 Releases
                </a>
                <a href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues" 
                   target="_blank" 
                   class="btn btn-outline-secondary btn-sm">
                  提交反馈
                </a>
              </div>
            </div>
          </div>

          <!-- 导航按钮 -->
          <div class="d-flex justify-content-between mt-5 pt-4 border-top">
            <router-link to="/" class="btn btn-outline-primary">
              ← 返回首页
            </router-link>
            <div>
              <router-link to="/statements/bug-report" class="btn btn-outline-secondary me-2">
                错误报告
              </router-link>
              <router-link to="/download" class="btn btn-primary">
                下载最新版
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 最新声明页面逻辑
</script>

<style scoped>
.statement-page {
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
  min-height: calc(100vh - 200px);
}

.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
}

.border-primary {
  border-color: #0d6efd !important;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0.75rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #dee2e6;
}

.timeline-item {
  position: relative;
}

.timeline-badge {
  position: absolute;
  left: -2rem;
  top: 0;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
}

.timeline-content {
  padding-left: 1rem;
}

.badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}
</style>
