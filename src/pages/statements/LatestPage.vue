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

          <!-- 版本更新说明 -->
          <div class="card mb-4 border-success">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-3">
                <h5 class="card-title mb-0">版本 1.18.4.0 更新说明</h5>
                <span class="badge bg-success">新版本</span>
              </div>
              <div data-pjax="true" data-test-selector="body-content" data-view-component="true" class="markdown-body">
                <h1>版本 1.18.4.0 更新说明</h1>
                <p>本次更新带来了多项社区期待的功能改进与问题修复，特别是<strong>树脂相关功能已正式恢复</strong>，同时针对 HoYoLab 登录、签到稳定性等问题进行了集中处理。以下是详细变更内容。</p>
                <hr>
                <h3>✨ 新增功能</h3>
                <ul>
                  <li>
                    <p><strong>领取奖励时支持屏蔽原石领取选项</strong>（<a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="4001169417" data-permission-text="Title is private" data-url="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues/62" data-hovercard-type="issue" data-hovercard-url="/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues/62/hovercard" href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues/62" aria-keyshortcuts="Alt+ArrowUp">#62</a>）<br>
                    在领取各类奖励时，用户现在可选择屏蔽原石领取，避免误操作消耗原石，提升资源管理的灵活性。</p>
                  </li>
                  <li>
                    <p><strong>优化养成计算的材料添加体验</strong>（<a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="4000092033" data-permission-text="Title is private" data-url="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues/59" data-hovercard-type="issue" data-hovercard-url="/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues/59/hovercard" href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues/59" aria-keyshortcuts="Alt+ArrowUp">#59</a>）<br>
                    对【养成计算】功能中的材料添加流程进行了重构，现在支持批量选择、快速搜索等便捷操作，大幅提升添加效率。</p>
                  </li>
                  <li>
                    <p><strong>为更多注入模块添加独立开关</strong>（<a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="3978445876" data-permission-text="Title is private" data-url="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues/50" data-hovercard-type="issue" data-hovercard-url="/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues/50/hovercard" href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues/50" aria-keyshortcuts="Alt+ArrowUp">#50</a>）<br>
                    扩展了注入功能的控制粒度，用户可根据需要在设置中单独启用或禁用特定注入模块，增强可控性。</p>
                  </li>
                  <li>
                    <p><strong>恢复树脂相关功能</strong><br>
                    经过一段时间的开发与测试，树脂原功能现已正式恢复上线，欢迎体验。</p>
                  </li>
                </ul>
                <hr>
                <h3>🐛 问题修复</h3>
                <ul>
                  <li>
                    <p><strong>修复 HoYoLab 登录报错问题</strong>（<a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="3991906924" data-permission-text="Title is private" data-url="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues/55" data-hovercard-type="issue" data-hovercard-url="/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues/55/hovercard" href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues/55" aria-keyshortcuts="Alt+ArrowUp">#55</a>）<br>
                    解决了因接口变更导致的 HoYoLab 账号登录失败的问题，现在可正常登录并使用相关功能。</p>
                  </li>
                  <li>
                    <p><strong>修复签到功能在当天首次打开时无法正常运行的问题</strong>（<a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="3987196975" data-permission-text="Title is private" data-url="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues/52" data-hovercard-type="issue" data-hovercard-url="/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues/52/hovercard" href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues/52" aria-keyshortcuts="Alt+ArrowUp">#52</a>）<br>
                    优化了签到逻辑，确保每天首次打开应用时签到功能可正常触发，不再需要手动重试。</p>
                  </li>
                  <li>
                    <p><strong>修复悬浮窗"调整视野"开关与注入选项"视野热开关"不同步的问题</strong>（<a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="3977724888" data-permission-text="Title is private" data-url="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues/49" data-hovercard-type="issue" data-hovercard-url="/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues/49/hovercard" href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues/49" aria-keyshortcuts="Alt+ArrowUp">#49</a>）<br>
                    现在悬浮窗的"调整视野"启用状态会与注入选项中的"视野热开关"保持一致，操作更加直观。</p>
                  </li>
                </ul>
                <hr>
                <h3>📦 安装与升级说明</h3>
                <p>为简化安装流程，我们强烈建议您使用 <strong>Snap.Hutao.Deployment.exe 安装器</strong> 进行安装或升级。该工具将自动完成证书安装与应用更新，无需手动干预。</p>
                <ul>
                  <li>如果您仍选择手动安装，请务必提前安装 <strong><a href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/raw/refs/heads/main/SnapHutaoRemasteringProject%20CA.cer">项目 CA 证书</a></strong> 至系统"受信任的根证书颁发机构"，否则应用将无法运行。</li>
                </ul>
                <hr>
                <h3><g-emoji class="g-emoji" alias="warning">⚠️</g-emoji> 已知限制</h3>
                <ul>
                  <li>帧率解锁功能在"千星奇域"等特定场景下仍然受限，且不可与宏功能同时启用。</li>
                </ul>
                <hr>
                <h3>🙏 致谢</h3>
                <p>感谢开发贡献者的代码贡献<br>
                以及所有通过 Issue、讨论区反馈问题和建议的社区成员。</p>
                <p>如您在使用中遇到任何问题，欢迎通过 <a href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues">Issues</a> 提交反馈。</p>
                <p><strong>Full Changelog</strong>: <a class="commit-link" href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/compare/1.18.3.0...1.18.4.0"><tt>1.18.3.0...1.18.4.0</tt></a></p>
              </div>
              <p class="card-text text-muted small mt-3">
                发布时间：2026年2月28日
              </p>
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
