<template>
  <div class="download-page">
    <!-- 下载头部 -->
    <div class="container px-4 py-5 text-center">
      <h1 class="display-5 fw-bold text-body-emphasis">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0d6efd" class="me-2">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        </svg>
        下载 Snap.Hutao.Remastered
      </h1>
      <p class="lead mb-4">获取最新版本，体验现代化的胡桃主题原神工具</p>
    </div>

    <!-- Windows 下载区域 -->
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row align-items-center g-5 py-5">
        <div class="col-lg-6">
          <h2 class="display-6 fw-bold mb-4">Windows 版本</h2>
          <p class="lead mb-4">Snap.Hutao.Remastered 专为 Windows 10/11 64位系统优化，提供最佳的原神工具体验。</p>
          
          <div class="card border-primary mb-4">
            <div class="card-body">
              <h5 class="card-title">系统要求</h5>
              <ul class="mb-0">
                <li>Windows 10/11 64位操作系统</li>
                <li>至少 1GB 内存（RAM）</li>
                <li>1GB 可用磁盘空间</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
            <div class="card border-0 shadow-lg">
              <div class="card-body p-5 text-center">
                <div class="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="#0d6efd">
                    <path d="M3 5v14h18V5H3zm16 2v10H5V7h14z"/>
                  </svg>
                </div>
                <h3 class="card-title mb-3">Windows 版下载</h3>
                <p class="card-text mb-4">点击下方按钮下载最新版本的 Windows 安装包</p>
                
                <a href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/releases"
                   class="btn btn-primary btn-lg w-100 mb-3 py-3"
                   target="_blank">
                  <div class="d-flex align-items-center justify-content-center">
                    <div class="me-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                      </svg>
                    </div>
                    <div>
                      <div class="fw-bold">下载 Windows 版</div>
                    </div>
                  </div>
                </a>
              
              <div class="text-muted small mb-4">
                下载Release中的SnapHutaoRemasteringProject CA.cer文件 双击安装证书，保存到受信任的根证书颁发机构，然后下载msix程序包，按照提示完成安装
              </div>
              
              <div class="alert alert-warning mb-4">
                <div class="d-flex align-items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffc107" class="me-2 flex-shrink-0">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                  <div>
                    <strong>重要提醒：</strong>
                    <ul class="mb-0 mt-1">
                      <li>启动器需要连接到 GitHub 获取更新和功能数据</li>
                      <li>如果出现功能无法使用或连接问题，推荐使用 <a href="https://steampp.net/" target="_blank" class="alert-link">Watt Toolkit（原名Steam++）</a> 加速器</li>
                      <li>Watt Toolkit 可以加速 GitHub 访问，解决网络连接问题</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="border-top pt-3">
                <a href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/releases" 
                   target="_blank" 
                   class="btn btn-outline-secondary w-100">
                  查看所有版本
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 安装指南 -->
    <div class="container px-4 py-5">
      <h2 class="text-center mb-5">安装指南</h2>
      
      <div class="row g-4">
        <div class="col-md-3">
          <div class="card h-100 border-0 shadow-sm text-center">
            <div class="card-body">
              <div class="display-6 mb-3">1</div>
              <h5 class="card-title">下载安装包</h5>
              <p class="card-text small">点击上方下载按钮获取最新版本的安装包</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-3">
          <div class="card h-100 border-0 shadow-sm text-center">
            <div class="card-body">
              <div class="display-6 mb-3">2</div>
              <h5 class="card-title">安装证书和msix程序包</h5>
              <p class="card-text small">下载Release中的SnapHutaoRemasteringProject CA.cer文件 双击安装证书，保存到受信任的根证书颁发机构，然后下载msix程序包，按照提示完成安装</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-3">
          <div class="card h-100 border-0 shadow-sm text-center">
            <div class="card-body">
              <div class="display-6 mb-3">3</div>
              <h5 class="card-title">首次启动配置</h5>
              <p class="card-text small">按照引导完成语言、游戏路径等初始设置</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-3">
          <div class="card h-100 border-0 shadow-sm text-center">
            <div class="card-body">
              <div class="display-6 mb-3">4</div>
              <h5 class="card-title">开始使用</h5>
              <p class="card-text small">完成配置后即可使用所有功能</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 常见问题 -->
    <div class="container px-4 py-5">
      <h2 class="text-center mb-5">常见问题</h2>
      
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="accordion" id="downloadFaq">
            <div class="accordion-item">
              <h3 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  安装时遇到安全警告怎么办？
                </button>
              </h3>
              <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#downloadFaq">
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
              <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#downloadFaq">
                <div class="accordion-body">
                  应用内提供了自动更新功能。当有新版本时，应用会提示你更新。你也可以手动从 GitHub Releases 页面下载新版本覆盖安装。
                </div>
              </div>
            </div>
            
            <div class="accordion-item">
              <h3 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                  下载速度很慢怎么办？
                </button>
              </h3>
              <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#downloadFaq">
                <div class="accordion-body">
                  可以尝试使用 GitHub 镜像站点，或者通过第三方下载工具（如 IDM、迅雷等）加速下载。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- GitHub 信息 -->
    <div class="container px-4 py-5">
      <div class="card bg-dark text-white">
        <div class="card-body p-5">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <h3 class="card-title mb-3">开源项目</h3>
              <p class="card-text mb-4">Snap.Hutao.Remastered 是完全开源的项目，源代码托管在 GitHub 上。欢迎开发者参与贡献，报告问题，或者提出新功能建议。</p>
              <a href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered" 
                 target="_blank" 
                 class="btn btn-light">
                访问 GitHub 仓库 →
              </a>
            </div>
            <div class="col-lg-4 text-center">
              <div class="display-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 导航按钮 -->
    <div class="container px-4 py-5">
      <div class="d-flex justify-content-between border-top pt-5">
        <router-link to="/docs" class="btn btn-outline-primary btn-lg">
          ← 查看文档
        </router-link>
        <router-link to="/" class="btn btn-outline-secondary btn-lg">
          返回首页 →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// 下载页面逻辑
</script>

<style scoped>
.download-page {
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
  min-height: calc(100vh - 200px);
}

.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.border-primary {
  border-color: #0d6efd !important;
}

.accordion-button:not(.collapsed) {
  background-color: rgba(13, 110, 253, 0.1);
  color: #0d6efd;
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

.display-6 {
  font-size: 3rem;
  font-weight: 300;
  line-height: 1;
}
</style>
