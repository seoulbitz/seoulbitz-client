/* eslint-disable react/display-name */
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { FC } from 'react';
import StyledButton from '../button/button';
import Heart from '../icons/heart/heart';
import MenuMapFilter from './menu-map-filter';
import A from '../styled-system/a/a';
import Button from '../styled-system/button/button';
import Div, { DivProps } from '../styled-system/div/div';
import Li from '../styled-system/li/li';
import Span from '../styled-system/span/span';
import Ul from '../styled-system/ul/ul';
import { theme } from '@/styles/theme';
import { withTranslation, i18n } from '../../../i18n';
import { TFunction } from 'next-i18next';

const PAGE_LIST_ITEMS = [
  {
    label: 'About Us',
    labelko: '우리에 대해서',
    href: '/about-us'
  },
  {
    label: 'Terms and Conditions',
    labelko: '이용약관',
    href: '/terms-and-conditions'
  },
  {
    label: 'Privacy Policy',
    labelko: '개인정보 보호정책',
    href: '/privacy-policy'
  },
  {
    label: 'FAQ',
    labelko: '자주하는 질문',
    href: '/faq'
  }
];

const SOCIAL_MEDIA_ITEMS = [
  {
    href: 'mailto:someone@yoursite.com', // TODO: change to seoulbitz mail
    icon: () => (
      <svg
        style={{ verticalAlign: 'middle' }}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5 23.5 5.649 23.5 12 18.351 23.5 12 23.5z"
          stroke="#000"
          strokeMiterlimit={10}
        />
        <path
          d="M4.824 6.773l6.363 6.11c.486.467 1.249.46 1.728-.006l6.293-6.104c.025-.026.063-.038.088-.057a1.957 1.957 0 00-1.217-.429H5.91c-.454 0-.864.158-1.198.416.044.026.082.038.113.07zM19.73 16.326a.79.79 0 01.19.133c.088-.227.145-.473.145-.738V8.274c0-.12-.013-.234-.038-.347l-4.395 4.263c1.778 1.86 3.682 3.802 4.099 4.136z"
          fill="#000"
          stroke="#000"
          strokeWidth={0.2}
          strokeMiterlimit={10}
        />
        <path
          d="M14.636 13.167c2.655 2.787 3.759 3.922 4.333 4.325a1.982 1.982 0 01-.883.215H5.916c-.322 0-.618-.082-.89-.22l4.396-4.358.857.839c.965.94 2.504.952 3.48.025l.877-.826zM3.972 7.895a1.924 1.924 0 00-.037.378v7.454c0 .258.056.504.145.731l4.338-4.3-4.446-4.263z"
          fill="#000"
          stroke="#000"
          strokeWidth={0.2}
          strokeMiterlimit={10}
        />
      </svg>
    )
  },
  {
    href: 'https://www.youtube.com/channel/UC5Ce1XGat0JJOXcFWZl1jcg',
    icon: () => (
      <svg
        style={{ verticalAlign: 'middle' }}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5 23.5 5.649 23.5 12 18.351 23.5 12 23.5z"
          stroke="#000"
          strokeMiterlimit={10}
        />
        <path
          d="M19.819 8.046a2.046 2.046 0 00-1.444-1.45C17.1 6.256 12 6.256 12 6.256s-5.102 0-6.376.34c-.7.19-1.254.744-1.444 1.45C3.84 9.326 3.84 12 3.84 12s0 2.674.34 3.954c.19.706.738 1.26 1.444 1.45 1.274.34 6.376.34 6.376.34s5.101 0 6.375-.34c.7-.19 1.255-.744 1.444-1.45.34-1.28.34-3.954.34-3.954s0-2.674-.34-3.954z"
          fill="#000"
        />
        <path d="M10.33 14.421V9.572L14.591 12l-4.263 2.421z" fill="#fff" />
      </svg>
    )
  },
  {
    href: 'https://www.facebook.com/seoul.kr',
    icon: () => (
      <svg
        style={{ verticalAlign: 'middle' }}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5 23.5 5.649 23.5 12 18.351 23.5 12 23.5z"
          stroke="#000"
          strokeMiterlimit={10}
        />
        <path
          d="M10.171 19.252h2.92v-7.315h2.037l.214-2.447h-2.257V8.096c0-.58.113-.807.674-.807h1.583V4.75h-2.024c-2.175 0-3.153.958-3.153 2.786V9.49h-1.52v2.478h1.52v7.284h.007z"
          fill="#000"
        />
      </svg>
    )
  },
  {
    href: 'https://www.instagram.com/seoulbitz/',
    icon: () => (
      <svg
        style={{ verticalAlign: 'middle' }}
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5 23.5 5.649 23.5 12 18.351 23.5 12 23.5z"
          stroke="#000"
          strokeMiterlimit={10}
        />
        <path
          d="M12 6.602c1.76 0 1.967.007 2.66.038.644.032.99.14 1.224.227.31.12.524.265.757.492.233.234.372.448.492.757.088.233.195.58.227 1.223.031.694.038.902.038 2.661 0 1.76-.007 1.968-.038 2.661-.032.644-.139.99-.227 1.224-.12.309-.265.523-.492.756a2.043 2.043 0 01-.757.492c-.233.088-.58.196-1.223.227-.694.032-.902.038-2.661.038-1.76 0-1.968-.006-2.661-.038-.643-.031-.99-.139-1.224-.227a2.095 2.095 0 01-.756-.492 2.016 2.016 0 01-.492-.756c-.088-.234-.196-.58-.227-1.224-.032-.693-.038-.901-.038-2.66 0-1.76.006-1.968.038-2.662.031-.643.139-.99.227-1.223.12-.31.265-.523.492-.757.233-.233.447-.372.756-.492.234-.088.58-.195 1.224-.227.693-.025.902-.038 2.66-.038zm0-1.185c-1.785 0-2.012.006-2.712.038-.7.031-1.179.145-1.595.309-.435.17-.8.39-1.167.757a3.15 3.15 0 00-.756 1.166c-.164.416-.271.896-.31 1.595-.03.7-.037.927-.037 2.712 0 1.784.006 2.011.038 2.712.031.7.145 1.179.309 1.595.17.435.39.8.756 1.166.366.366.732.593 1.167.757.416.164.895.271 1.595.31.7.03.927.037 2.712.037 1.784 0 2.011-.006 2.711-.038.7-.031 1.18-.145 1.596-.309.435-.17.8-.39 1.166-.757.366-.365.593-.731.757-1.166.164-.416.271-.896.309-1.595.031-.7.038-.928.038-2.712 0-1.785-.007-2.012-.038-2.712-.032-.7-.145-1.179-.309-1.595-.17-.435-.391-.8-.757-1.166a3.15 3.15 0 00-1.166-.757c-.416-.164-.896-.271-1.596-.31-.7-.024-.927-.037-2.711-.037z"
          fill="#000"
        />
        <path
          d="M12 8.62a3.38 3.38 0 100 6.76 3.38 3.38 0 000-6.76zm0 5.575A2.196 2.196 0 019.806 12c0-1.21.983-2.194 2.194-2.194 1.21 0 2.194.983 2.194 2.194 0 1.21-.983 2.194-2.194 2.194zM16.3 8.488a.788.788 0 11-1.577 0 .788.788 0 011.577 0z"
          fill="#000"
        />
      </svg>
    )
  }
];

type MenuContentsProps = { readonly t: TFunction } & DivProps;

const MenuContents: FC<MenuContentsProps> = ({ t, children, ...props }) => {
  const router = useRouter();

  const isLocationList = router.pathname === '/';
  const isArticleList = router.pathname === '/articles';

  return (
    <Div paddingLeft="20px" paddingRight="20px" {...props}>
      {isLocationList ? (
        <MenuMapFilter />
      ) : (
        <>
          <Div width="100%" height={['16px', null, '0px']}></Div>
          <Link href="/" passHref>
            <A textDecoration="initial">
              <StyledButton variant="blue" marginTop="16px">
                {t('menu-contents:locations')}
              </StyledButton>
            </A>
          </Link>
        </>
      )}
      {!isArticleList && (
        <Link href="/articles" passHref>
          <A textDecoration="initial">
            <StyledButton variant="blue" marginTop="16px">
              {t('menu-contents:story')}
            </StyledButton>
          </A>
        </Link>
      )}
      <Div marginTop="48px">
        <Ul listStyle="none" margin="0px" padding="0px">
          {PAGE_LIST_ITEMS.map((item) => {
            return (
              <Li key={item.label} padding="4px 0px">
                <Link href={item.href} passHref>
                  <A textDecoration="initial">
                    <Span
                      fontFamily={theme.fonts.futura}
                      fontSize="16px"
                      lineHeight="20px"
                      fontWeight="500"
                      color="#000000">
                      {i18n.language === 'en'
                        ? `${item.label}`
                        : `${item.labelko}`}
                    </Span>
                  </A>
                </Link>
              </Li>
            );
          })}
        </Ul>
      </Div>
      <Div marginTop="48px">
        <Div>
          {SOCIAL_MEDIA_ITEMS.map((item) => {
            const IconComponent = item.icon;
            return (
              <A key={item.href} href={item.href} target="_blank">
                <Button
                  cursor="pointer"
                  padding="initial"
                  margin="initial"
                  background="initial"
                  border="initial"
                  marginRight="8px">
                  <IconComponent />
                </Button>
              </A>
            );
          })}
        </Div>
        <Div
          marginTop="16px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500"
          color="#000000">
          {t('menu-contents:contact')}
        </Div>
        <Div
          marginTop="4px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="700"
          color="#000000"
          fontStyle="italic">
          contact@seoulbitz.com
        </Div>
      </Div>
      <Div marginTop="48px">
        <Div
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="500"
          color="#080CCE">
          {t('menu-contents:discription')}
        </Div>
        <Div
          marginTop="8px"
          fontFamily={theme.fonts.futura}
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400"
          color="#000000">
          {t('menu-contents:content-discription')}
        </Div>
      </Div>
      <Div marginTop="48px" marginBottom="48px">
        <Div
          fontFamily={theme.fonts.futura}
          fontSize="12px"
          lineHeight="16px"
          fontWeight="400"
          color="#000000">
          ©2021 Seoulbitz. All Rights Reserved.
        </Div>
      </Div>
    </Div>
  );
};

export default withTranslation('common')(MenuContents);
