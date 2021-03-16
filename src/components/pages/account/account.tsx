import firebase from '@/services/firebase';
import GoogleMapReact from 'google-map-react';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
import Layout from '@/components/layout/layout';
import A from '@/components/styled-system/a/a';
import Div from '@/components/styled-system/div/div';
import { theme } from '@/styles/theme';
import React, { FC, useEffect, useState } from 'react';
import Button from '../../button/button';
import { AccountToggle } from './account-toggle';
import { useRouter } from 'next/dist/client/router';
import Span from '@/components/styled-system/span/span';
import Link from 'next/link';
import sanity from '@/services/sanity';
import { ArticleDocument } from '@/services/sanity/api/article';
import { LocationDocument } from '@/services/sanity/api/location';
import ContentItem from '@/components/content-item/content-item';
import MapMarkerLarge from '@/components/icons/map-marker/map-marker-large';
import MapMarkerSmall from '@/components/icons/map-marker/map-marker-small';
import AccountNoItemsPanel from './account-no-items-panel';
import { TFunction } from 'next-i18next';
import { withTranslation } from '../../../../i18n';
import Meta from '@/components/meta/Meta';

const LocationMarker = (props: any) => {
  return <Div {...props} />;
};

const MarkerContainer = (props: any) => {
  return <Div {...props} />;
};

type AccountProps = { readonly t: TFunction };

const Account: FC<AccountProps> = ({ t }) => {
  const router = useRouter();

  const [user, setUser] = useState(null);

  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const user = await firebase.auth.getVerifiedUser();
      console.log(user);
      if (user) {
        setUser(user);
        return;
      }
      router.push('/');
    };

    fetch();
  }, []);

  // const [bookmarks, setBookmarks] = useState(null);
  const [bookmarksType, setBookmarksType] = useState('locations');
  const [locationBookmarks, setLocationBookmarks] = useState(null);
  const [articleBookmarks, setArticleBookmarks] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      if (user) {
        const bookmarks = await sanity.api.userBookmark.getBookmarks();
        const locationBookmarks = bookmarks.filter(
          ({ content }) => content._type === 'location'
        );
        const articleBookmarks = bookmarks.filter(
          ({ content }) => content._type === 'article'
        );
        setLocationBookmarks(locationBookmarks);
        setArticleBookmarks(articleBookmarks);
      }
    };

    fetch();
  }, [user]);

  const handleLogOut = async (ev) => {
    ev.preventDefault();
    await firebase.auth.logOut();
    window.location.reload();
  };

  const handleToggleChange = (value: 'locations' | 'articles') => {
    setBookmarksType(value);
  };

  return (
    <>
      <Meta
        meta={{
          title: 'Account | Seoulbitz',
          description: '',
          keywords: '',
          ogTitle: 'Account | Seoulbitz',
          ogDescription: '',
          ogSiteName: 'Seoulbitz',
          ogImage: ''
        }}
      />
      <Layout>
        {user && (
          <>
            <Grid width={1} flexDirection="column" alignItems="center">
              <Cell width={[1]} marginTop={['72px', null, '80px']}>
                <Div
                  textAlign="center"
                  fontFamily={theme.fonts.futura}
                  fontSize="28px"
                  lineHeight="34px"
                  fontWeight="700"
                  color="#000000">
                  {t('account:title')}
                </Div>
              </Cell>
              <Cell
                display="flex"
                alignItems="center"
                justifyContent="center"
                width={[1]}
                marginTop={['32px', null, '40px']}>
                <Div
                  fontFamily={theme.fonts.futura}
                  fontSize="16px"
                  lineHeight="20px"
                  fontWeight="500"
                  color="#080CCE">
                  {t('account:username')} {user.displayName}
                </Div>
              </Cell>
              <Cell
                display="flex"
                alignItems="center"
                justifyContent="center"
                width={[1]}
                marginTop="8px">
                <Div
                  fontFamily={theme.fonts.futura}
                  fontSize="16px"
                  lineHeight="20px"
                  fontWeight="500"
                  color="#080CCE">
                  {t('account:email')} {user.email}
                </Div>
              </Cell>
              <Cell
                display="flex"
                alignItems="center"
                justifyContent="center"
                width={[1]}
                marginTop={['32px', null, '40px']}>
                <Link href="/account/edit-profile" passHref>
                  <A textDecoration="initial">
                    <Button width="150px" variant="black">
                      {t('account:edit')}
                    </Button>
                  </A>
                </Link>
              </Cell>
              <Cell
                width={[1]}
                marginTop={['24px', null, '32px']}
                display="flex"
                justifyContent="center">
                <Link href="/account/settings" passHref>
                  <A color="#000000">
                    <Span
                      whiteSpace="nowrap"
                      textAlign="center"
                      fontFamily={theme.fonts.futura}
                      fontSize="16px"
                      lineHeight="20px"
                      fontWeight="500"
                      color="#000000">
                      {t('account:account-settings')}
                    </Span>
                  </A>
                </Link>
              </Cell>
              <Cell
                width={[1]}
                marginTop="24px"
                display="flex"
                justifyContent="center">
                <Span
                  whiteSpace="nowrap"
                  textDecoration="underline"
                  cursor="pointer"
                  textAlign="center"
                  fontFamily={theme.fonts.futura}
                  fontSize="16px"
                  lineHeight="20px"
                  fontWeight="500"
                  color="#ff1075"
                  onClick={handleLogOut}>
                  {t('account:logout')}
                </Span>
              </Cell>
            </Grid>
            <Grid width={1}>
              {locationBookmarks !== null && articleBookmarks !== null && (
                <>
                  <Cell
                    display="flex"
                    justifyContent="center"
                    width={[1]}
                    marginTop={['72px', null, '80px']}>
                    <Div
                      fontFamily={theme.fonts.futura}
                      fontSize="28px"
                      lineHeight="34px"
                      fontWeight="700"
                      color="#000000">
                      {t('account:bookmarks')}
                    </Div>
                  </Cell>
                  <Cell
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width={[1]}
                    marginTop={['28px', '32px', '40px']}>
                    {/* Toggle UI  */}
                    <AccountToggle onChange={handleToggleChange} />
                  </Cell>
                  {bookmarksType === 'locations' &&
                    (locationBookmarks.length > 0 ? (
                      <>
                        <Cell
                          width={1}
                          marginTop={['40px', null, '48px']}
                          marginBottom={['40px', null, '48px']}>
                          <Div position="relative" paddingTop={['100%', '0px']}>
                            <Div
                              position={['absolute', 'relative']}
                              height={[null, '400px']}
                              top="0"
                              left="0"
                              right="0"
                              bottom="0">
                              <GoogleMapReact
                                bootstrapURLKeys={{
                                  key:
                                    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                                }}
                                defaultCenter={{
                                  lat: 37.5384,
                                  lng: 126.9654
                                }}
                                onClick={() => {
                                  setSelectedLocation(null);
                                }}
                                defaultZoom={11}>
                                {locationBookmarks.map(({ content }) => {
                                  const location = content as LocationDocument;
                                  const { lat, lng } = location.location;
                                  if (
                                    selectedLocation &&
                                    selectedLocation._id === content._id
                                  ) {
                                    return (
                                      <MarkerContainer
                                        className="hey"
                                        transform="translateY(-148px)"
                                        lat={lat}
                                        lng={lng}
                                        position="relative"
                                        style={{
                                          zIndex: 2
                                        }}>
                                        <Div
                                          position="absolute"
                                          bottom="0"
                                          backgroundColor="#ffffff"
                                          width="24px"
                                          height="24px"
                                          margin="0 auto"
                                          transform="translate(-50%,-47px) rotate(45deg)"
                                        />
                                        <LocationMarker
                                          transform="translateX(-50%)"
                                          marginBottom="18px"
                                          backgroundColor="#ffffff"
                                          width="304px"
                                          height="98px"
                                          borderRadius="8px"
                                          // boxShadow="0px 4px 4px rgba(0, 0, 0, 0.08)"
                                          onClick={(ev) => {
                                            ev.stopPropagation();
                                          }}>
                                          <Link
                                            href={`/locations/${selectedLocation.slug.current}`}
                                            passHref>
                                            <A textDecoration="initial">
                                              <Div
                                                display="flex"
                                                flexDirection="row"
                                                padding="8px">
                                                <Div
                                                  flex="1"
                                                  padding="8px"
                                                  paddingRight="16px">
                                                  <Div>
                                                    <Span
                                                      fontFamily={
                                                        theme.fonts.futura
                                                      }
                                                      fontSize="16px"
                                                      lineHeight="20px"
                                                      fontWeight="800"
                                                      color=" #080CCE">
                                                      {
                                                        selectedLocation.title
                                                          .en
                                                      }
                                                      ,
                                                    </Span>
                                                    <Span
                                                      fontFamily={
                                                        theme.fonts.nanumSquare
                                                      }
                                                      fontWeight="800"
                                                      marginLeft="4px"
                                                      fontSize="16px"
                                                      lineHeight="20px"
                                                      color=" #080CCE">
                                                      {
                                                        selectedLocation.title
                                                          .ko
                                                      }
                                                    </Span>
                                                  </Div>
                                                  <Div marginTop="8px">
                                                    <Span
                                                      fontFamily={
                                                        theme.fonts.futura
                                                      }
                                                      fontSize="14px"
                                                      lineHeight="18px"
                                                      fontWeight="500"
                                                      color="#777777">
                                                      {
                                                        selectedLocation
                                                          .category.name
                                                      }{' '}
                                                      /{' '}
                                                      {
                                                        selectedLocation.area
                                                          .name
                                                      }
                                                    </Span>
                                                  </Div>
                                                </Div>

                                                <Div
                                                  width="96px"
                                                  height="82px"
                                                  position="relative">
                                                  <Div
                                                    position="absolute"
                                                    top="0"
                                                    left="0"
                                                    right="0"
                                                    bottom="0"
                                                    backgroundSize="cover"
                                                    backgroundImage={`url('${sanity.image.getUrl(
                                                      selectedLocation
                                                        .thumbnailImage.asset
                                                    )}')`}
                                                    backgroundPosition="center"
                                                    borderRadius="8px"
                                                  />
                                                </Div>
                                              </Div>
                                            </A>
                                          </Link>
                                        </LocationMarker>

                                        <MapMarkerLarge
                                          style={{
                                            transform: 'translateX(-50%)'
                                          }}
                                          key={content._id}
                                        />
                                      </MarkerContainer>
                                    );
                                  }

                                  return (
                                    <MarkerContainer
                                      key={content._id}
                                      lat={lat}
                                      lng={lng}
                                      onClick={() => {
                                        setSelectedLocation(content);
                                      }}>
                                      <MapMarkerSmall
                                        style={{
                                          zIndex: 0,
                                          transform: 'translate(-50%,-100%)'
                                        }}></MapMarkerSmall>
                                    </MarkerContainer>
                                  );
                                })}
                              </GoogleMapReact>
                            </Div>
                          </Div>
                        </Cell>
                        {locationBookmarks.map((bookmark, i) => {
                          const { content } = bookmark;
                          const location = content as LocationDocument;
                          const {
                            _id,
                            slug,
                            title,
                            subtitle,
                            thumbnailImage,
                            userLikes,
                            category,
                            area
                          } = location;
                          const remainder = i % 4;

                          const href = `/locations/${slug.current}`;

                          return (
                            <Cell
                              key={_id}
                              width={[
                                1,
                                1 / 2,
                                remainder === 1 || remainder === 2
                                  ? 5 / 12
                                  : 7 / 12
                              ]}
                              marginBottom={['40px', null, '24px']}>
                              <Link href={href} passHref>
                                <A textDecoration="initial" color="initial">
                                  <ContentItem
                                    kind="location"
                                    title={title.en}
                                    titleKo={title.ko}
                                    subtitle={subtitle}
                                    images={[thumbnailImage]}
                                    likes={userLikes.length}
                                    category={category.name}
                                    area={area.name}
                                  />
                                </A>
                              </Link>
                            </Cell>
                          );
                        })}
                      </>
                    ) : (
                      <Cell
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width={[1, 10 / 12]}
                        marginTop={['40px', null, '48px']}
                        marginLeft="auto"
                        marginRight="auto">
                        <AccountNoItemsPanel />
                      </Cell>
                    ))}
                  {bookmarksType === 'articles' &&
                    (articleBookmarks.length > 0 ? (
                      <>
                        <Cell
                          width={1}
                          marginBottom={['40px', null, '48px']}></Cell>
                        {articleBookmarks.map((bookmark, i) => {
                          const { content } = bookmark;
                          const article = content as ArticleDocument;
                          const {
                            _id,
                            title,
                            slug,
                            author,
                            thumbnailImage,
                            subtitle,
                            userLikes
                          } = article;
                          const remainder = i % 4;

                          const href = `/articles/${slug.current}`;

                          return (
                            <Cell
                              key={_id}
                              width={[
                                1,
                                1 / 2,
                                remainder === 1 || remainder === 2
                                  ? 5 / 12
                                  : 7 / 12
                              ]}
                              marginBottom={['40px', null, '24px']}>
                              <Link href={href} passHref>
                                <A textDecoration="initial" color="initial">
                                  <ContentItem
                                    kind="article"
                                    title={title}
                                    subtitle={subtitle}
                                    images={[thumbnailImage]}
                                    likes={userLikes.length}
                                    author={author}
                                  />
                                </A>
                              </Link>
                            </Cell>
                          );
                        })}
                      </>
                    ) : (
                      <Cell
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width={[1, 10 / 12]}
                        marginTop={['40px', null, '48px']}
                        marginLeft="auto"
                        marginRight="auto">
                        <AccountNoItemsPanel />
                      </Cell>
                    ))}
                </>
              )}
            </Grid>
          </>
        )}
      </Layout>
    </>
  );
};

export default withTranslation('common')(Account);
