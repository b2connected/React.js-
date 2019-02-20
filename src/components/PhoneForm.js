import React, { Component } from 'react';  

class PhoneForm extends Component {
    state = {
      name: '',
      phone: ''
    }
    handleChange = (e) => { //onChange이벤트가 발생하면
      this.setState({
        [e.target.name]:e.target.value  // name에 현재 텍스트의 값을 넣음
      });
    }
    handleSubmit = (e) => { 
        // 페이지 리로딩 방지
        e.preventDefault(); 
        // 상태값을 onCreate를 통해 부모에게 전달
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
            name: '',
            phone: ''
        })
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="이름"  // placeholder
            value={this.state.name}  // name 값 초기화 (데이터 등록 시)
            onChange={this.handleChange}   // input의 텍스트 값이 바뀔 때마다 이벤트 발생
            name="name"
         />  
           <input
            placeholder="전화번호"  // placeholder
            value={this.state.phone}  // name 값 초기화 (데이터 등록 시)
            onChange={this.handleChange}   // input의 텍스트 값이 바뀔 때마다 이벤트 발생
            name="phone"
          />  
          <button thpe="submit">등록</button> 
        </form>
      );
    }
  }
  
  export default PhoneForm;