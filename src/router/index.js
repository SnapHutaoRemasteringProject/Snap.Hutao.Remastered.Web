import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import DocsPage from '../pages/DocsPage.vue'
import DownloadPage from '../pages/DownloadPage.vue'
import BugReportPage from '../pages/statements/BugReportPage.vue'
import TosPage from '../pages/statements/TosPage.vue'
import PrivacyNoticePage from '../pages/statements/PrivacyNoticePage.vue'
import LatestPage from '../pages/statements/LatestPage.vue'
import DashboardPage from '../pages/features/DashboardPage.vue'
import GameLauncherPage from '../pages/features/GameLauncherPage.vue'
import FeaturesIndexPage from '../pages/features/FeaturesIndexPage.vue'
import GenericFeaturePage from '../pages/features/GenericFeaturePage.vue'
import MhyAccountSwitchPage from '../pages/features/MhyAccountSwitchPage.vue'
import HutaoSettingsPage from '../pages/features/HutaoSettingsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/docs',
    name: 'Docs',
    component: DocsPage
  },
  {
    path: '/download',
    name: 'Download',
    component: DownloadPage
  },
  // 声明页面
  {
    path: '/statements/bug-report',
    name: 'BugReport',
    component: BugReportPage
  },
  {
    path: '/statements/tos',
    name: 'Tos',
    component: TosPage
  },
  {
    path: '/statements/privacy-notice',
    name: 'PrivacyNotice',
    component: PrivacyNoticePage
  },
  {
    path: '/statements/latest',
    name: 'Latest',
    component: LatestPage
  },
  // 重定向旧路径到新路径
  {
    path: '/statements/bug-report.html',
    redirect: '/statements/bug-report'
  },
  {
    path: '/statements/tos.html',
    redirect: '/statements/tos'
  },
  {
    path: '/statements/privacy-notice.html',
    redirect: '/statements/privacy-notice'
  },
  {
    path: '/statements/latest.html',
    redirect: '/statements/latest'
  },
  // 功能页面
  {
    path: '/features',
    name: 'Features',
    component: FeaturesIndexPage
  },
  {
    path: '/features/dashboard',
    name: 'Dashboard',
    component: DashboardPage
  },
  {
    path: '/features/game-launcher',
    name: 'GameLauncher',
    component: GameLauncherPage
  },
  // 通用功能页面
  {
    path: '/features/wish-export',
    name: 'WishExport',
    component: GenericFeaturePage
  },
  {
    path: '/features/achievements',
    name: 'Achievements',
    component: GenericFeaturePage
  },
  {
    path: '/features/real-time-notes',
    name: 'RealTimeNotes',
    component: GenericFeaturePage
  },
  {
    path: '/features/character-data',
    name: 'CharacterData',
    component: GenericFeaturePage
  },
  {
    path: '/features/hutao-api',
    name: 'HutaoAPI',
    component: GenericFeaturePage
  },
  {
    path: '/features/develop-plan',
    name: 'DevelopPlan',
    component: GenericFeaturePage
  },
  {
    path: '/features/character-wiki',
    name: 'CharacterWiki',
    component: GenericFeaturePage
  },
  {
    path: '/features/weapon-wiki',
    name: 'WeaponWiki',
    component: GenericFeaturePage
  },
  {
    path: '/features/monster-wiki',
    name: 'MonsterWiki',
    component: GenericFeaturePage
  },
  {
    path: '/zh/features/imaginarium-theater',
    name: 'ImaginariumTheater',
    component: GenericFeaturePage
  },
  // 专用功能页面
  {
    path: '/features/mhy-account-switch',
    name: 'MhyAccountSwitch',
    component: MhyAccountSwitchPage
  },
  {
    path: '/features/hutao-settings',
    name: 'HutaoSettings',
    component: HutaoSettingsPage
  },
  // 重定向旧路径到新路径 - 按字母顺序排列以确保正确匹配
  {
    path: '/advanced/loopback.html',
    redirect: '/docs'
  },
  {
    path: '/features/achievements.html',
    redirect: '/features/achievements'
  },
  {
    path: '/features/character-data.html',
    redirect: '/features/character-data'
  },
  {
    path: '/features/character-wiki.html',
    redirect: '/features/character-wiki'
  },
  {
    path: '/features/dashboard.html',
    redirect: '/features/dashboard'
  },
  {
    path: '/features/develop-plan.html',
    redirect: '/features/develop-plan'
  },
  {
    path: '/features/game-launcher.html',
    redirect: '/features/game-launcher'
  },
  {
    path: '/features/hutao-API.html',
    redirect: '/features/hutao-api'
  },
  {
    path: '/features/hutao-settings.html',
    redirect: '/features/hutao-settings'
  },
  {
    path: '/features/mhy-account-switch.html',
    redirect: '/features/mhy-account-switch'
  },
  {
    path: '/features/monster-wiki.html',
    redirect: '/features/monster-wiki'
  },
  {
    path: '/features/real-time-notes.html',
    redirect: '/features/real-time-notes'
  },
  {
    path: '/features/weapon-wiki.html',
    redirect: '/features/weapon-wiki'
  },
  {
    path: '/features/wish-export.html',
    redirect: '/features/wish-export'
  },
  {
    path: '/support-us.html',
    redirect: '/docs'
  },
  {
    path: '/zh/features/imaginarium-theater.html',
    redirect: '/zh/features/imaginarium-theater'
  },
  {
    path: '/zh/support-us.html',
    redirect: '/docs'
  },
  // 重定向未知路径到首页
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
