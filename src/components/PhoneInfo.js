// file: src/components/PhoneInfo.js
import React, { Component } from 'react';

class PhoneInfo extends Component { 
  static defaultProps = { // info값 전달을 까먹을 때를 대비하여 info 기본 값 설정
    info: {  // info 객체
      name: '이름',
      phone: '010-0000-0000',
      id: 0
    },
  }
  
  handleRemove = () => {
    //삭제 버튼이 클릭되면 onRemove에 id를 넣어서 호출
    const {info, onRemove} = this.props;
    onRemove(info.id);
  }

  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    const {
      name, phone
    } = this.props.info;  // props로 받아옴
    
    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    );
  }
}

export default PhoneInfo;