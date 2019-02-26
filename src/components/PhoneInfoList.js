// src/components/PhoneInfoList.js
import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],  
    onRemove: () => console.warn('onRemove not defined'),
    onUpdate: () => console.warn('onUpdate not defined'),
  }

  render() {
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(  // map을 통하여 JSX로 변환
      info => (
      <PhoneInfo 
      key={info.id} 
      // key값 : 리액트 배열을 렌더링할 때, 필수 값
      info={info}
      onRemove={onRemove}
      onUpdate={onUpdate}
      />)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default PhoneInfoList;