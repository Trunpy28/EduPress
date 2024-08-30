import React from 'react'
import UserHeader from '../components/HeaderNavBar/UserHeader'
import { css } from "@emotion/react";

function Home() {
  return (
    <div css={css`
      background-color: #EAEAEA;
    `}>
      <UserHeader></UserHeader>

    </div>
  )
}

export default Home