import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const LoginGroup = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const Login = styled.button`
    width: 322px;
    height: 44px;
    border: 1px solid black;
    border-radius: 22px;
    background-color: white;
  `;

  const KakaoLogin = styled(Login)`
    border-color: yellow;
  `

  const GoogleLogin = styled(Login)`
    border-color: grey;
  `

  const FacebookLogin = styled(Login)`
    border-color: blue;
  `

  return (
    <LoginGroup>
      <KakaoLogin>카카오로 로그인</KakaoLogin>
      <GoogleLogin>구글로 로그인</GoogleLogin>
      <FacebookLogin>페이스북으로 로그인</FacebookLogin>
    </LoginGroup>
  );
}

export default App;