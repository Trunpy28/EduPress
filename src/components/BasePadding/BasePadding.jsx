import React from 'react'
import { css } from '@emotion/react'
function BasePadding({children, paddingLeftRightPercent}) {
  return (
    <div css={css`
        padding-left: ${paddingLeftRightPercent}%;
        padding-right: ${paddingLeftRightPercent}%;
    `}>
        {children}
    </div>
  )
}

export default BasePadding