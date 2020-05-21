import Mock from 'mockjs'
import MyInfo from './MyInfo.js'

Mock.mock('http://localhost:8080/api/data01', 'get', () => {
  return MyInfo.page1
})
