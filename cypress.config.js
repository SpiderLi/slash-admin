export default {
  projectId: '3my7m9',
  e2e: {
    // 指定你项目的 e2e 测试相关配置
    baseUrl: 'http://localhost:3000', // 根据你的项目设置
    specPattern: 'cypress/e2e/**/*.cy.js', // 测试文件路径
    supportFile: 'cypress/support/e2e.js',
  },
};
