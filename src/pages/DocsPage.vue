<template>
  <div class="docs-page">
    <!-- 文档头部 -->
    <div class="container px-4 py-5 text-center">
      <h1 class="display-5 fw-bold text-body-emphasis">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0d6efd" class="me-2">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
        文档与指南
      </h1>
      <p class="lead mb-4">Snap.Hutao.Remastered 使用文档、API 参考和开发指南</p>
    </div>

    <div class="container">
      <div class="row">
        <!-- 侧边栏 -->
        <div class="col-lg-3 mb-4">
          <div class="card border-0 shadow-sm">
            <div class="card-body">
              <h5 class="card-title mb-3">快速导航</h5>
              <div class="list-group list-group-flush">
                <a href="#installation" class="list-group-item list-group-item-action">安装指南</a>
                <a href="#quick-start" class="list-group-item list-group-item-action">快速上手</a>
                <a href="#faq" class="list-group-item list-group-item-action">常见问题</a>
              </div>
              
              <div class="mt-4">
                <a href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered" 
                   target="_blank" 
                   class="btn btn-outline-primary w-100 mb-2">
                  GitHub 仓库
                </a>
                <router-link to="/download" class="btn btn-primary w-100">
                  下载最新版
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- 主要内容 -->
        <div class="col-lg-9">
          <!-- 安装指南 -->
          <section id="installation" class="mb-5">
            <h2 class="mb-4">安装指南</h2>
            
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">系统要求</h5>
                <ul class="mb-0">
                  <li>Windows 10/11 64位系统</li>
                  <li>至少 1GB RAM</li>
                  <li>1GB 可用磁盘空间</li>
                  <li>.NET运行时（已包含在安装包中）</li>
                  <li>支持 WinUI 3 的 Windows 版本</li>
                </ul>
                <div class="alert alert-info mt-3 mb-0">
                  <strong>技术栈：</strong>Snap.Hutao.Remastered 基于 .NET + WinUI 3 构建，提供原生 Windows 应用体验。
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">安装步骤</h5>
                <ol>
                  <li>从下载页面获取最新版本的安装包</li>
                  <li>下载Release中的SnapHutaoRemasteringProject CA.cer文件 双击安装证书，保存到受信任的根证书颁发机构。</li>
                  <li>然后下载msix程序包，按照提示完成安装</li>
                  <li>安装完成后，可以在开始菜单找到应用快捷方式</li>
                </ol>
                <div class="alert alert-info mt-3">
                  <strong>注意：</strong>安装过程中可能会提示需要管理员权限，请点击"是"继续。
                </div>
              </div>
            </div>
          </section>

          <!-- 快速上手 -->
          <section id="quick-start" class="mb-5">
            <h2 class="mb-4">快速上手</h2>
            
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">首次启动</h5>
                <p>安装完成后，首次启动应用会引导你完成初始设置：</p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">基本功能</h5>
                <p>主界面包含以下核心功能区域：</p>
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="card h-100 border">
                      <div class="card-body text-center">
                        <div class="mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0d6efd">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        </div>
                        <h6>角色面板</h6>
                        <p class="small text-muted">查看和管理所有角色信息</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card h-100 border">
                      <div class="card-body text-center">
                        <div class="mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0d6efd">
                            <path d="M4.22 2.32L2.8 3.73 7.29 8.22 3 12.51v5.48c0 1.66 1.34 3 3 3h12c.65 0 1.26-.21 1.76-.56l1.52 1.52 1.41-1.41L4.22 2.32zM19 18c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-4.73l3.68-3.68L19 17.73V18zm-7-9c1.1 0 2 .9 2 2 0 .29-.07.56-.19.8l1.42 1.42C15.94 12.94 16 12.48 16 12c0-2.21-1.79-4-4-4-1.48 0-2.75.81-3.44 2h1.62c.33-.38.78-.62 1.31-.62.36 0 .69.12.96.32l1.42-1.42C12.56 9.07 12.29 9 12 9z"/>
                          </svg>
                        </div>
                        <h6>装备管理</h6>
                        <p class="small text-muted">武器和圣遗物配置</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card h-100 border">
                      <div class="card-body text-center">
                        <div class="mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0d6efd">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                          </svg>
                        </div>
                        <h6>数据统计</h6>
                        <p class="small text-muted">游戏数据分析和图表</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card h-100 border">
                      <div class="card-body text-center">
                        <div class="mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0d6efd">
                            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                          </svg>
                        </div>
                        <h6>实用功能</h6>
                        <p class="small text-muted">提供一些不破坏游戏公平性的合理便利工具</p>
                        <h6 class="small text-muted">此功能无法在千星奇域使用</h6>
                        <h6 class="small text-muted">我们添加了宏检测</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 常见问题 -->
          <section id="faq" class="mb-5">
            <h2 class="mb-4">常见问题</h2>
            
            <div class="accordion" id="faqAccordion">
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                    下载速度慢怎么办？
                  </button>
                </h3>
                <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    可以尝试使用 GitHub 镜像站点，或者通过第三方下载工具加速。
                  </div>
                </div>
              </div>
              
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                    安装时遇到安全警告？
                  </button>
                </h3>
                <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    下载Release中的SnapHutaoRemasteringProject CA.cer文件 双击安装证书，保存到受信任的根证书颁发机构。
                  </div>
                </div>
              </div>
              
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                    如何更新到新版本？
                  </button>
                </h3>
                <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    应用内提供了自动更新功能，也可以手动从 GitHub Releases 页面下载新版本覆盖安装。
                  </div>
                </div>
              </div>
              
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                    遇到问题如何反馈？
                  </button>
                </h3>
                <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    请在 GitHub Issues 页面提交问题报告，详细描述遇到的问题和复现步骤。
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 导航按钮 -->
          <div class="d-flex justify-content-between mt-5 pt-4 border-top">
            <router-link to="/" class="btn btn-outline-primary">
              ← 返回首页
            </router-link>
            <router-link to="/download" class="btn btn-primary">
              前往下载页面 →
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 文档页面逻辑
</script>

<style scoped>
.docs-page {
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
  min-height: calc(100vh - 200px);
}

.list-group-item {
  border: none;
  padding: 0.75rem 1rem;
}

.list-group-item:hover {
  background-color: #f8f9fa;
}

.list-group-item-action {
  color: #495057;
}

.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
}

pre {
  font-size: 0.875rem;
  overflow-x: auto;
}

.accordion-button:not(.collapsed) {
  background-color: rgba(13, 110, 253, 0.1);
  color: #0d6efd;
}
</style>
