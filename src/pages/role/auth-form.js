import React, {Component} from 'react'
import { Form, Input } from 'antd'
import PropTypes from 'prop-types'

/*添加角色的form组件*/
export default class AddForm extends Component {
  static propTypes = {
    setName: PropTypes.func.isRequired
  }

  handleChange = (value) => {
    this.props.setName(value.roleName)
  }

  render() {

    return (
      <Form
        onValuesChange={this.handleChange}
        initialValues={{
          categoryName: ''
        }}
      >
        <Form.Item
          label="角色名称"
          name="roleName"
          rules={[
            {
              required: true, message: '角色名称必须输入'
            }
          ]}
        >
          <Input placeholder='请输入角色名称'/>
        </Form.Item>
      </Form>
    )
  }
}