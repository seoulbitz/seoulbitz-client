import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import Div from '@/components/styled-system/div/div';
import SeoulbitzLogo from '@/components/icons/seoulbitz-logo/seoulbitz-logo';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'emotion-theming';
import Button from '@/components/button/button';
import Img from '@/components/styled-system/img/img';
import { i18n } from '../../../../i18n';

const Welcome: FC = () => {
  const router = useRouter();

  const [language, setLanguage] = useState('en');

  const handleButtonClick = (language: 'en' | 'ko') => (e) => {
    // TODO: 클릭 시 클릭한 버튼의 언어 설정하기
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);

    localStorage.setItem('already-visited', 'true');
    const {
      query: { redirect }
    } = router;
    const pathname = redirect ? (redirect as string) : '/';
    router.replace({
      pathname
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Div>
        <Grid
          width={[1]}
          height={[null, null, '100vh']}
          justifyContent="center"
          alignItems={[null, null, 'center']}>
          <Cell
            display={['none', null, 'block']}
            width={[0, 1 / 4]}
            height="635px"
            position="relative">
            <Img
              display="block"
              position="absolute"
              right="0"
              top="0"
              width="448px"
              src="https://cdn.sanity.io/images/duesb6xh/production/c99f4f043552e67e1a07c28dadd74e52aa6d4ac1-824x1151.png"
            />
          </Cell>
          <Cell
            width={[1, 1 / 2]}
            paddingTop={['88px', '88px', '0px']}
            paddingBottom={['64px', '64px', '0px']}>
            <Div textAlign="center" display={['block', null, 'none']}>
              <SeoulbitzLogo width="210px" height="40px" />
            </Div>
            <Div textAlign="center" display={['none', null, 'block']}>
              <SeoulbitzLogo width="294px" height="56px" />
            </Div>
            <Div marginTop={['48px', null, '56px']}>
              <Div
                textAlign="center"
                fontFamily={theme.fonts.futura}
                fontSize="28px"
                lineHeight="34px"
                fontWeight="700"
                color="#000000">
                The best bits of Seoul
              </Div>
              <Div
                marginTop={['16px', null, '24px']}
                textAlign="center"
                fontFamily={theme.fonts.futura}
                fontSize="16px"
                lineHeight="20px"
                fontWeight="500"
                color="#000000">
                A wide exploration of Seoul and South Korea’s latest trends,
                hotspots, not-to-miss events - and more…
              </Div>
            </Div>
            <Div marginTop={['48px', null, '56px']}>
              <Div
                textAlign="center"
                fontFamily={theme.fonts.futura}
                fontSize="28px"
                lineHeight="34px"
                fontWeight="700"
                color="#000000">
                놓쳐선 안될 서울의 한 조각
              </Div>
              <Div
                marginTop={['16px', null, '24px']}
                textAlign="center"
                fontFamily={theme.fonts.futura}
                fontSize="16px"
                lineHeight="20px"
                fontWeight="500"
                color="#000000">
                서울의 최신 트렌드, 핫스팟, 이벤트 등을 탐구합니다.
              </Div>
            </Div>
            <Div textAlign="center" marginTop={['48px', null, '56px']}>
              <Button
                variant="black"
                display="inline-block"
                width="initial"
                marginRight="8px"
                value="en"
                onClick={handleButtonClick('en')}>
                English
              </Button>
              <Button
                variant="black"
                display="inline-block"
                width="initial"
                marginLeft="8px"
                value="ko"
                onClick={handleButtonClick('ko')}>
                한국어
              </Button>
            </Div>
            <Div marginTop={['48px']} display={['block', null, 'none']}>
              <Img
                src="https://cdn.sanity.io/images/duesb6xh/production/9ecfd26b518288fe0d8651490746cb771453eb11-768x768.png"
                width="100%"
              />
            </Div>
          </Cell>
          <Cell
            display={['none', null, 'block']}
            width={[0, 1 / 4]}
            height="384px"
            position="relative">
            <Img
              display="block"
              position="absolute"
              left="0"
              top="0"
              width="384px"
              src="https://cdn.sanity.io/images/duesb6xh/production/9ecfd26b518288fe0d8651490746cb771453eb11-768x768.png"
            />
          </Cell>
        </Grid>
      </Div>
    </ThemeProvider>
  );
};

export default Welcome;
