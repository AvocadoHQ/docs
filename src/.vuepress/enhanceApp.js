import pageComponents from '@internal/page-components'
/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  router.addRoutes([
    { path: '/', redirect: '/0.5.x' },
    { path: '/0.x/*', redirect: '/0.5.x' },
    { path: '/0.1/*', redirect: '/0.4.x' },
  ])

  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component)
  }
}

