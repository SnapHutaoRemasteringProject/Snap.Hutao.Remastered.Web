<template>
  <div class="statement-page">
    <!-- 页面头部 -->
    <div class="container px-4 py-5 text-center">
      <h1 class="display-5 fw-bold text-body-emphasis">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#dc3545" class="me-2">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
        错误报告
      </h1>
      <p class="lead mb-4">报告 Snap.Hutao.Remastered 使用过程中遇到的问题</p>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <!-- 报告指南 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">报告前请阅读</h5>
              <p class="card-text">为了帮助我们更快地定位和解决问题，请在报告前确认以下事项：</p>
              <ul>
                <li>确保使用的是最新版本的应用</li>
                <li>检查是否已经存在类似问题的报告</li>
                <li>详细描述问题发生的步骤</li>
                <li>提供相关的截图或日志文件</li>
              </ul>
            </div>
          </div>

          <!-- 报告方式 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">报告方式</h5>
              
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="card h-100 border">
                    <div class="card-body text-center">
                      <div class="mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0d6efd">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                      <h6>GitHub Issues</h6>
                      <p class="small text-muted">推荐方式，便于跟踪和讨论</p>
                      <a href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues" 
                         target="_blank" 
                         class="btn btn-outline-primary btn-sm mt-2">
                        前往 Issues
                      </a>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="card h-100 border">
                    <div class="card-body text-center">
                      <div class="mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0d6efd">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                      <h6>邮件反馈</h6>
                      <p class="small text-muted">适用于敏感问题或详细咨询</p>
                      <a href="mailto:staff@snaphutaorp.org" 
                         class="btn btn-outline-primary btn-sm mt-2">
                        发送邮件
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 报告模板 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">GitHub Issue 报告模板</h5>
              <p class="card-text">在 GitHub Issues 中提交问题时，请使用以下结构化模板：</p>
              
              <div class="bg-light p-3 rounded mb-3">
                <pre class="mb-0"><code>name: 问题反馈
description: 通过这个议题向开发团队反馈你发现的程序中的问题
title: "[Bug]: 在这里填写一个合适的标题"
type: "Bug"
labels: ["priority:none"]
body:
  - type: markdown
    attributes:
      value: |
        > **请在上方以一句话简短地概括你的问题作为标题**
        > 请按下方的要求填写完整的问题表单，以便我们更快的定位问题。

  - type: input
    id: winver
    attributes:
      label: Windows 版本
      description: |
        `Win+R` 输入 `winver` 回车后在打开的窗口第二行可以找到
      placeholder: 例：22000.556
    validations:
      required: true

  - type: input
    id: shver
    attributes:
      label: Snap Hutao 版本
      description: 在应用标题，应用程序的反馈中心界面中可以找到
      placeholder: 例：1.9.9.0
    validations:
      required: true

  - type: input
    id: deviceid
    attributes:
      label: 设备 ID
      description: |
        > 在胡桃工具箱的反馈中心界面，你可以找到并复制你的设备 ID
        > 如果你的问题涉及程序崩溃，请填写该项，这将有助于我们定位问题
    validations:
      required: true

  - type: dropdown
    id: user-set-category
    attributes:
      label: 问题分类
      description: 请设置一个你认为合适的分类，这将帮助我们快速定位问题
      options:
        - 安装和环境
        - 游戏启动器
        - 祈愿记录
        - 成就管理
        - 我的角色
        - 实时便笺
        - 养成计算
        - 深境螺旋/胡桃数据库
        - Wiki
        - 米游社账号面板
        - 每日签到奖励
        - 胡桃通行证/胡桃云
        - 用户界面
        - 文件缓存
        - 公告
        - 其它
    validations:
      required: true

  - type: textarea
    id: what-happened
    attributes:
      label: 发生了什么？
      description: |
        详细的描述问题发生前后的行为，以便我们解决问题。**如果你的问题涉及程序崩溃，你应当检查 Windows 事件查看器，并将相关的 `.Net 错误`详情附上**
    validations:
      required: true

  - type: textarea
    id: what-expected
    attributes:
      label: 你期望发生的行为？
      description: 详细的描述你期望发生的行为，突出与目前（可能不正确的）行为的不同
    validations:
      required: false

  - type: checkboxes
    id: checklist-final
    attributes:
      label: 最后一步
      description: 回顾你的回答
      options:
        - label: 我认为上述的描述已经足以详细，以允许开发人员能复现该问题
          required: true</code></pre>
              </div>
              
              <div class="alert alert-info">
                <strong>提示：</strong>在 GitHub Issues 页面创建新议题时，系统会自动加载此模板。请按照模板要求填写所有必填字段。
              </div>
              
              <div class="alert alert-warning">
                <strong>重要：</strong>请确保不包含任何个人敏感信息（如账号密码、UID等）。设备 ID 仅用于技术调试，不包含个人身份信息。
              </div>
            </div>
          </div>

          <!-- 常见问题 -->
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">常见问题解答</h5>
              
              <div class="accordion" id="bugReportFaq">
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      应用无法启动怎么办？
                    </button>
                  </h3>
                  <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#bugReportFaq">
                    <div class="accordion-body">
                      1. 检查系统是否满足最低要求（Windows 10/11 64位）<br>
                      2. 确保已安装所有必要的运行库<br>
                      3. 尝试以管理员身份运行<br>
                      4. 查看事件查看器中的错误日志
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      数据同步失败如何处理？
                    </button>
                  </h3>
                  <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#bugReportFaq">
                    <div class="accordion-body">
                      1. 检查网络连接是否正常<br>
                      2. 确认游戏是否正在运行<br>
                      3. 检查防火墙设置是否阻止了应用访问网络<br>
                      4. 尝试重新登录账号
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      功能异常如何排查？
                    </button>
                  </h3>
                  <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#bugReportFaq">
                    <div class="accordion-body">
                      1. 更新应用到最新版本<br>
                      2. 重启应用和游戏<br>
                      3. 检查功能相关的设置项<br>
                      4. 查看应用日志文件（位于应用数据目录）
                    </div>
                  </div>
                </div>
                
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      应用无法连接到GitHub怎么办？
                    </button>
                  </h3>
                  <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#bugReportFaq">
                    <div class="accordion-body">
                      <strong>启动器需要连接到 GitHub 获取更新和功能数据。</strong>如果出现连接问题：
                      <br><br>
                      1. 检查网络连接是否正常<br>
                      2. 尝试使用 <a href="https://steampp.net/" target="_blank">Watt Toolkit（原名Steam++）</a> 加速器<br>
                      3. Watt Toolkit 可以加速 GitHub 访问，解决网络连接问题<br>
                      4. 确保防火墙没有阻止应用访问网络<br>
                      5. 尝试切换网络环境（如使用手机热点）
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
            <a href="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/issues" 
               target="_blank" 
               class="btn btn-primary">
              报告问题 →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 错误报告页面逻辑
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

pre {
  font-size: 0.875rem;
  overflow-x: auto;
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 0.375rem;
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
