import React, { Component } from 'react'
// import { Icon } from 'antd'
import './style.less'
import './style.css'
import Modal from '../../components/modal'

const ua = window.navigator.userAgent.toLocaleLowerCase()
const isIOS = /iphone|ipad|ipod/.test(ua)
const isAndroid = /android/.test(ua)

class HelloWorld extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      visible: false
    }
    this.originHeight = 0
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  componentDidMount () {
    this.originHeight = document.documentElement.clientHeight || document.body.clientHeight
    /* 键盘弹起后页面高度变小 */
    let originHeight = document.documentElement.clientHeight || document.body.clientHeight
    window.addEventListener('resize', () => {
      const resizeHeight = document.documentElement.clientHeight || document.body.clientHeight
      if (resizeHeight < originHeight) {
        // 键盘弹起所后所需的页面逻辑
        // if(isAndroid) {

        // }
      } else {
        // 键盘弹起所后所需的页面逻辑
        if (isAndroid) {
          console.log('android 键盘关闭了')
        }
      }
      originHeight = resizeHeight
    }, false)
  }
  componentWillUnmount () {
  }
  handleChange (value) {
    this.setState({ value })
  }
  handleFocus () {
    if (isIOS) {
      console.log('ios 键盘打开了')
    }
    if (isAndroid) {
      console.log('android 键盘打开了')
    }
  }
  handleBlur () {
    if (isIOS) {
      console.log('ios 键盘关闭了')
    }
  }
  render = () => {
    const { value, visible } = this.state
    return (
      <div className='con'>
        <div onClick={() => this.setState({ visible: true })}>点我</div>
        <div className='title'>
          Hello, express-react-dev-template
        </div>
        <Modal
          visible={visible}
          onVisibleChange={visible => this.setState({ visible })}
        >
          <div className='modal-content'>
            <div className='modal-top' onClick={() => this.setState({ visible: false })} >关闭</div>
            <textarea
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              value={value}
              onChange={(e) => this.handleChange(e.target.value)}
              onKeyDown={this.handleKeyDown}
            />
          </div>
        </Modal>
      </div>
    )
  }
}

export default HelloWorld
