import Vue from 'vue'

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const requireComponent = require.context(
  '../', true, /\.vue$/
)

requireComponent.keys().forEach(fileName => {
  if (fileName.match(/\/(common|components|pages)/g)) {
    const componentConfig = requireComponent(fileName)
    const componentName = capitalizeFirstLetter(
      /([^/]+)\.vue$/.exec(fileName)[1]
    )
    
    Vue.component(componentName, componentConfig.default || componentConfig)
  }
})
