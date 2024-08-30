import React from "react";
import { css } from "@emotion/react";
import BasePadding from "../BasePadding/BasePadding";
import logo from "../../assets/logo.svg";
import { LogoWrapper } from "./styled";

function UserHeader() {
  return (
    <>
      <BasePadding paddingLeftRightPercent={20}>
        <div
          css={css`
            height: 72px;
            display: flex;
            align-items: center;
          `}
        >
          <LogoWrapper>
            <img src={logo} css={css`
              width: 39.3px;
              position: relative;
              height: 30px;
              overflow: hidden;
              flex-shrink: 0;
            `}/>
            <span
              css={css`
                font-size: 28px;
                font-weight: bold;
                color: black;
              `}
            >
              EduPress
            </span>
          </LogoWrapper>
        </div>
      </BasePadding>
    </>
  );
}

export default UserHeader;
