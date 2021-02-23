import React from 'react'
import styled from 'styled-components'
import { Text, Heading, Link, Image } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const LayoutWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
`

const StyledHeading = styled(Heading)`
  margin: 16px 0;
`

const StyledImage = styled(Image)`
  align-self: center;
`

const StyledLink = styled(Link)`
  align-self: center;
  margin-top: 16px;
`

const HowItWorks = () => {
  const TranslateString = useI18n()

  return (
    <LayoutWrapper>
      <StyledImage src="/images/pancake-lottery-bunny.png" alt="lottery bunny" width={163} height={140} />
      <StyledHeading size="lg" as="h3" color="secondary">
        {TranslateString(632, 'คัพเค้กล๊อตเตอรี่เล่นยังไง')}
      </StyledHeading>
      <Text fontSize="16px">
        {TranslateString(
          999,
          'ใช้ CUP ซื้อตั๋วล๊อตเตอรรี่. เมื่อถูก 1, 2, 3, หรือ 4 ตัวเรียงของเลขที่ซื้อไว้ก็ได้รางวัลไปเลย!',
        )}
      </Text>
      <StyledLink href="https://docs.pancakeswap.finance/lottery-1">Read more</StyledLink>
    </LayoutWrapper>
  )
}

export default HowItWorks
