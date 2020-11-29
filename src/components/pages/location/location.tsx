import Div from '@/components/styled-system/div/div';
import Header from '@/components/styled-system/header/header';
import Aside from '@/components/styled-system/aside/aside';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'emotion-theming';
import React, { FC } from 'react';
import Main from '@/components/styled-system/main/main';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import sanity from 'services/sanity';
import ArrowLeft from '@/components/icons/arrow-left/arrow-left';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LocationDocument } from '@/services/sanity/api/location';
import Span from '@/components/styled-system/span/span';
import P from '@/components/styled-system/p/p';
import Button from '@/components/styled-system/button/button';
import Heart from '@/components/icons/heart/heart';
import Bookmark from '@/components/icons/bookmark/bookmark';
import Share from '@/components/icons/share/share';
import GoogleMapReact from 'google-map-react';
import MapMarker from '@/components/icons/map-marker/map-marker';
import RecommendedLocationsMobile from './recommended-locations-mobile';
import RecommendedLocationsTablet from './recommended-locations-tablet';
import RecommendedLocationsDesktop from './recommended-locations-desktop';
import ArrowRight from '@/components/icons/arrow-right/arrow-right';

SwiperCore.use([Navigation, Pagination]);

const MenuBar = () => {
  return <Div height="56px" backgroundColor="#ffffff"></Div>;
};

const FlowBar = () => {
  return <Div height="28px" backgroundColor="#000000"></Div>;
};

const DesktopHeader = () => {
  return (
    <Div
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="0 24px">
      <Div width="240px" height="48px" borderBottom="1px solid #0511F2"></Div>
      <Div display="flex">
        <Div width="108px" height="48px" border="1px solid #0511F2" marginRight="16px"></Div>
        <Div width="67px" height="48px" border="1px solid #000000"></Div>
      </Div>
    </Div>
  );
};

const SideBar = () => {
  return (
    <>
      <Div height="88px" backgroundColor="#F4F2EF"></Div>
      <Div height="96px" backgroundColor="#ffffff"></Div>
      <Div height="614px" backgroundColor="#fafafa"></Div>
      <Div height="532px" padding="24px 0 48px 0" backgroundColor="#ffffff" />
    </>
  );
};

const Location: FC<{ location: LocationDocument }> = (props) => {
  const {
    title: { en: enTitle, ko: koTitle },
    subtitle,
    likes,
    images,
    body,
    location,
    recommendedLocations
  } = props.location;

  return (
    <ThemeProvider theme={theme}>
      <Div display="flex" flexDirection="column" minHeight="100%">
        {/* Mobile Header */}
        <Div display={[null, null, 'none']}>
          <Header position="fixed" top="0" height="84px" width="100%" zIndex={10}>
            <MenuBar />
            <FlowBar />
          </Header>
        </Div>

        {/* Desktop Header */}
        <Div display={['none', null, 'block']}>
          <Header
            position="fixed"
            top={0}
            left={0}
            height="88px"
            paddingLeft="392px"
            width="100%"
            backgroundColor="#ffffff"
            zIndex={10}>
            <DesktopHeader />
          </Header>
        </Div>

        <Div display="flex">
          {/* Sidebar */}
          <Div display={['none', null, 'block']} minWidth="392px" zIndex={20}>
            <Aside position="fixed" top={0} left={0} bottom={0} width="392px" display="flex">
              <Div width="100%" overflowY="auto">
                <SideBar />
              </Div>
              <Div width="32px" backgroundColor="#000000" height="100%"></Div>
            </Aside>
          </Div>

          {/* Content */}
          <Div width="100%" marginTop={['84px', null, '88px']}>
            <Main display="flex" flexDirection="column">
              <Grid width={1} justifyContent="center">
                <Cell width={[1, null]} marginTop={['72px', null, '88px']}>
                  <Div color="#080CCE">
                    <Span
                      fontFamily={theme.fonts.nanumSquare}
                      fontSize="28px"
                      lineHeight="34px"
                      fontWeight="800">
                      {koTitle},{' '}
                    </Span>
                    <Span
                      fontFamily={theme.fonts.futura}
                      fontSize="28px"
                      lineHeight="34px"
                      fontWeight="700">
                      {enTitle}
                    </Span>
                  </Div>
                </Cell>
                <Cell width={[1, null]} marginTop="16px">
                  <Span
                    fontFamily={theme.fonts.futura}
                    fontWeight="500"
                    fontSize="16px"
                    lineHeight="20px"
                    color="#000000">
                    {subtitle}
                  </Span>
                </Cell>
                <Cell width={[1, null]} marginTop="16px">
                  <Span
                    fontFamily={theme.fonts.futura}
                    fontWeight="500"
                    fontSize="16px"
                    lineHeight="20px"
                    color="#777777">
                    Shopping / Itaewon
                    <br />
                    0.5km far
                  </Span>
                </Cell>
                <Cell width={[1, null]} marginTop="24px">
                  <Div display="flex" flexDirection="row">
                    <Div
                      marginRight="8px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center">
                      <Button
                        outline="none"
                        display="inline-block"
                        background="none"
                        border="0px"
                        padding="0"
                        margin="0"
                        cursor="pointer">
                        <Heart verticalAlign="middle" />
                      </Button>
                      {likes > 0 && (
                        <Div
                          fontFamily={theme.fonts.futura}
                          fontWeight="500"
                          fontSize="16px"
                          lineHeight="20px"
                          color="#000000"
                          marginLeft="4px"
                          marginRight="4px">
                          {likes}
                        </Div>
                      )}
                    </Div>
                    <Div marginRight="8px">
                      <Button
                        outline="none"
                        display="inline-block"
                        background="none"
                        border="0px"
                        padding="0"
                        margin="0"
                        cursor="pointer">
                        <Bookmark verticalAlign="middle" />
                      </Button>
                    </Div>
                    <Div>
                      <Button
                        outline="none"
                        display="inline-block"
                        background="none"
                        border="0px"
                        padding="0"
                        margin="0"
                        cursor="pointer">
                        <Share verticalAlign="middle" />
                      </Button>
                    </Div>
                  </Div>
                </Cell>
                <Cell width={[1, null]} marginTop="32px">
                  <Div width={['100vw', null, '100%']} marginLeft={['-20px', '-24px', 'auto']}>
                    <Swiper
                      spaceBetween={0}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}>
                      {images.map((image) => {
                        const url = sanity.image.getUrl(image);
                        return (
                          <SwiperSlide key={url}>
                            <Div display={['block', 'none']} position="relative" paddingTop="100%">
                              <Div
                                position="absolute"
                                top="0"
                                left="0"
                                right="0"
                                bottom="0"
                                backgroundImage={`url(${url})`}
                                backgroundSize="cover"
                                backgroundPosition="center"
                              />
                            </Div>
                            <Div
                              display={['none', 'block']}
                              height={[null, '440px', '440px']}
                              backgroundImage={`url(${url})`}
                              backgroundSize="cover"
                              backgroundPosition="center"
                            />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </Div>
                </Cell>
                <Cell width={[1, null]} marginTop={['8px', null, '8px']}>
                  <P
                    fontFamily={theme.fonts.adelle}
                    fontSize="16px"
                    lineHeight="24px"
                    fontWeight="400"
                    marginTop={['24px', null, '32px']}
                    marginBottom="0px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </P>
                  <P
                    fontFamily={theme.fonts.adelle}
                    fontSize="16px"
                    lineHeight="24px"
                    fontWeight="400"
                    marginTop={['24px', null, '32px']}
                    marginBottom="0px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </P>
                  <P
                    fontFamily={theme.fonts.adelle}
                    fontSize="16px"
                    lineHeight="24px"
                    fontWeight="400"
                    marginTop={['24px', null, '32px']}
                    marginBottom="0px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </P>
                  <P
                    fontFamily={theme.fonts.adelle}
                    fontSize="16px"
                    lineHeight="24px"
                    fontWeight="400"
                    marginTop={['24px', null, '32px']}
                    marginBottom="0px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </P>
                  <P
                    fontFamily={theme.fonts.adelle}
                    fontSize="16px"
                    lineHeight="24px"
                    fontWeight="400"
                    marginTop={['24px', null, '32px']}
                    marginBottom="0px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </P>
                  <P
                    fontFamily={theme.fonts.adelle}
                    fontSize="16px"
                    lineHeight="24px"
                    fontWeight="400"
                    marginTop={['24px', null, '32px']}
                    marginBottom="0px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </P>
                </Cell>
                <Cell width={[1, null]} marginTop={['24px', null, '32px']}>
                  <Div position="relative" paddingTop={['100%', '0px']}>
                    <Div
                      position={['absolute', 'relative']}
                      height={[null, '400px']}
                      top="0"
                      left="0"
                      right="0"
                      bottom="0">
                      <GoogleMapReact
                        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
                        defaultCenter={{
                          lat: location.lat,
                          lng: location.lng
                        }}
                        defaultZoom={18}>
                        <Marker lat={location.lat} lng={location.lng} />
                      </GoogleMapReact>
                    </Div>
                  </Div>
                </Cell>
                <Cell width={1}>
                  <Div height="1px" backgroundColor="#f2f2f2" marginTop="40px" />
                </Cell>
                <Cell width={1}>
                  <Div
                    marginTop="40px"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Div
                      fontFamily={theme.fonts.futura}
                      fontSize="20px"
                      lineHeight="24px"
                      fontWeight="700">
                      You might also want to checkout:
                    </Div>
                    <Div display={['none', null, 'block']}>
                      <Div display="flex" flexDirection="row">
                        <Div>
                          <Button
                            background="none"
                            border="1px solid #000000"
                            margin="0"
                            outline="none"
                            width="40px"
                            height="40px"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            cursor="pointer">
                            <ArrowLeft verticalAlign="middle" />
                          </Button>
                        </Div>
                        <Div marginLeft="8px">
                          <Button
                            background="none"
                            border="1px solid #000000"
                            margin="0"
                            outline="none"
                            width="40px"
                            height="40px"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            cursor="pointer">
                            <ArrowRight verticalAlign="middle" />
                          </Button>
                        </Div>
                      </Div>
                    </Div>
                  </Div>
                  <Div
                    display={[null, 'none']}
                    marginTop="24px"
                    width={['100vw']}
                    marginLeft="-20px">
                    <RecommendedLocationsMobile />
                  </Div>
                  <Div display={['none', 'block', 'none']} marginTop="24px">
                    <RecommendedLocationsTablet />
                  </Div>
                  <Div display={['none', 'none', 'block']} marginTop="24px">
                    <RecommendedLocationsDesktop />
                  </Div>
                </Cell>
                <Cell width={1}>
                  <Div height="1px" backgroundColor="#f2f2f2" marginTop="40px" />
                </Cell>
                <Cell width={1}>
                  <Div
                    marginTop="40px"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Div
                      fontFamily={theme.fonts.futura}
                      fontSize="20px"
                      lineHeight="24px"
                      fontWeight="700">
                      Trending articles:
                    </Div>
                    <Div display={['none', null, 'block']}>
                      <Div display="flex" flexDirection="row">
                        <Div>
                          <Button
                            background="none"
                            border="1px solid #000000"
                            margin="0"
                            outline="none"
                            width="40px"
                            height="40px"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            cursor="pointer">
                            <ArrowLeft verticalAlign="middle" />
                          </Button>
                        </Div>
                        <Div marginLeft="8px">
                          <Button
                            background="none"
                            border="1px solid #000000"
                            margin="0"
                            outline="none"
                            width="40px"
                            height="40px"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            cursor="pointer">
                            <ArrowRight verticalAlign="middle" />
                          </Button>
                        </Div>
                      </Div>
                    </Div>
                  </Div>
                  <Div
                    display={[null, 'none']}
                    marginTop="24px"
                    width={['100vw']}
                    marginLeft="-20px">
                    <RecommendedLocationsMobile />
                  </Div>
                  <Div display={['none', 'block', 'none']} marginTop="24px">
                    <RecommendedLocationsTablet />
                  </Div>
                  <Div display={['none', 'none', 'block']} marginTop="24px">
                    <RecommendedLocationsDesktop />
                  </Div>
                </Cell>
              </Grid>
            </Main>
          </Div>
        </Div>
      </Div>
    </ThemeProvider>
  );
};

const Marker: FC<any> = (props) => {
  return <MapMarker width="32px" height="32px" marginLeft="-16px" marginTop="-32px" />;
};

export default Location;

export const getServerSideProps = async (context) => {
  const { slug } = context.params;
  const location = await sanity.api.location.findOneBySlug(slug);

  if (!location) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      location
    }
  };
};
