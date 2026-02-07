<template>
  <div class="feature-page">
    <!-- 页面头部 -->
    <div class="container px-4 py-5 text-center">
      <h1 class="display-5 fw-bold text-body-emphasis">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0d6efd" class="me-2">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        {{ featureTitle }}
      </h1>
      <p class="lead mb-4">{{ featureDescription }}</p>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- 功能概述 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">功能概述</h5>
              <p class="card-text">
                {{ featureTitle }} 是 Snap.Hutao.Remastered 的核心功能之一，为用户提供完整的游戏体验。
              </p>
              <p class="card-text">
                {{ featureDescription }}
              </p>
            </div>
          </div>

          <!-- 主要特性 -->
          <div class="card mb-4" v-if="featureInfo.features && featureInfo.features.length > 0">
            <div class="card-body">
              <h5 class="card-title mb-4">主要特性</h5>
              
              <div class="row g-3">
                <div class="col-12" v-for="(feature, index) in featureInfo.features" :key="index">
                  <div class="d-flex align-items-start mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#0d6efd" class="me-2 mt-1 flex-shrink-0">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>{{ feature }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 相关功能 -->
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">相关功能</h5>
              <p class="card-text">
                该功能与其他功能紧密集成，提供完整的游戏数据管理体验。
              </p>
              <div class="d-flex flex-wrap gap-2">
                <router-link to="/features/dashboard" class="btn btn-outline-primary btn-sm">
                  仪表板
                </router-link>
                <router-link to="/features/game-launcher" class="btn btn-outline-primary btn-sm">
                  游戏启动器
                </router-link>
                <router-link to="/features/wish-export" class="btn btn-outline-primary btn-sm">
                  祈愿记录导出
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
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 根据路由参数确定功能标题和描述
const featureMap = {
  'wish-export': {
    title: '祈愿记录导出功能',
    description: '导出和分析您的原神祈愿历史记录，分析抽卡概率，规划抽卡策略',
    progress: 100,
    features: [
      '支持导出祈愿历史记录为UIGF（统一祈愿记录格式）、JSON、CSV等多种格式',
      '分析抽卡概率，统计五星、四星角色和武器的出货率',
      '自动计算距离保底还有多少抽',
      '保存历史抽卡记录，支持筛选和搜索'
    ]
  },
  'achievements': {
    title: '成就功能',
    description: '跟踪成就完成进度，查看未完成成就，获取完成建议',
    progress: 100,
    features: [
      '显示所有成就的完成状态和进度',
      '提供成就完成建议和攻略',
      '统计成就完成数量和奖励',
      '支持按类别、难度筛选成就'
    ]
  },
  'real-time-notes': {
    title: '实时便笺功能',
    description: '查看实时树脂、探索度、每日任务等游戏状态信息',
    progress: 100,
    features: [
      '实时显示树脂恢复时间和数量',
      '查看每日委托完成状态',
      '显示探索度、声望等进度',
      '提供树脂使用建议和规划'
    ]
  },
  'character-data': {
    title: '角色数据功能',
    description: '详细查看和管理所有角色信息，包括等级、天赋、命座等',
    progress: 100,
    features: [
      '显示所有角色的详细信息',
      '查看角色等级、天赋、命座',
      '管理角色装备和圣遗物',
      '提供角色培养建议'
    ]
  },
  'hutao-api': {
    title: '胡桃API功能',
    description: '提供API接口，支持第三方应用集成',
    progress: 100,
    features: [
      '提供RESTful API接口',
      '支持数据查询和操作',
      '包含完整的API文档',
      '支持OAuth2认证'
    ]
  },
  'develop-plan': {
    title: '开发计划功能',
    description: '查看项目开发计划和路线图',
    progress: 100,
    features: [
      '显示项目开发路线图',
      '查看功能开发进度',
      '了解版本更新计划',
      '参与功能投票和建议'
    ]
  },
  'character-wiki': {
    title: '角色Wiki功能',
    description: '查看角色详细资料、技能介绍、培养建议',
    progress: 100,
    features: [
      '查看所有角色的详细资料',
      '了解角色技能和天赋',
      '获取角色培养建议',
      '查看角色故事和背景'
    ]
  },
  'weapon-wiki': {
    title: '武器Wiki功能',
    description: '查看武器详细资料、属性介绍、获取方式',
    progress: 100,
    features: [
      '查看所有武器的详细资料',
      '了解武器属性和特效',
      '获取武器培养建议',
      '查看武器获取方式'
    ]
  },
  'monster-wiki': {
    title: '怪物Wiki功能',
    description: '查看怪物详细资料、掉落物品、战斗技巧',
    progress: 100,
    features: [
      '查看所有怪物的详细资料',
      '了解怪物攻击模式和弱点',
      '查看怪物掉落物品',
      '获取战斗技巧和建议'
    ]
  },
  'imaginarium-theater': {
    title: '幻想真境剧诗功能',
    description: '查看幻想真境剧诗相关数据和攻略（中文）',
    progress: 100,
    features: [
      '查看幻想真境剧诗关卡信息',
      '获取阵容搭配建议',
      '查看奖励和掉落',
      '提供通关攻略和技巧'
    ]
  }
}

// 获取当前功能名称
const featureName = computed(() => {
  const path = route.path
  const match = path.match(/\/features\/(.+)/)
  if (match && match[1]) {
    return match[1]
  }
  return 'unknown'
})

// 获取功能信息
const featureInfo = computed(() => {
  return featureMap[featureName.value] || {
    title: '功能页面',
    description: 'Snap.Hutao.Remastered 功能页面',
    progress: 50
  }
})

const featureTitle = computed(() => featureInfo.value.title)
const featureDescription = computed(() => featureInfo.value.description)
const developmentProgress = computed(() => featureInfo.value.progress)
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

.progress-bar-striped {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
}

.progress-bar-animated {
  animation: progress-bar-stripes 1s linear infinite;
}

@keyframes progress-bar-stripes {
  0% {
    background-position: 1rem 0;
  }
  100% {
    background-position: 0 0;
  }
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}
</style>
