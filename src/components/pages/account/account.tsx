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
import MapMarker from '@/components/icons/map-marker/map-marker';
import AccountNoItemsPanel from './account-no-items-panel';

const Marker: FC<any> = (props) => {
  return (
    <MapMarker
      width="32px"
      height="32px"
      marginLeft="-16px"
      marginTop="-32px"
    />
  );
};

const Account = () => {
  const router = useRouter();

  const [user, setUser] = useState(null);

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
                My Profile
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
                Username: {user.displayName}
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
                Email: {user.email}
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
                    Edit
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
                    textAlign="center"
                    fontFamily={theme.fonts.futura}
                    fontSize="16px"
                    lineHeight="20px"
                    fontWeight="500"
                    color="#000000">
                    Account settings
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
                textDecoration="underline"
                cursor="pointer"
                textAlign="center"
                fontFamily={theme.fonts.futura}
                fontSize="16px"
                lineHeight="20px"
                fontWeight="500"
                color="#F43333"
                onClick={handleLogOut}>
                Log out
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
                    Bookmarks
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
                                key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                              }}
                              defaultCenter={{
                                lat: (locationBookmarks[0]
                                  .content as LocationDocument).location.lat,
                                lng: (locationBookmarks[0]
                                  .content as LocationDocument).location.lng
                              }}
                              defaultZoom={18}>
                              {locationBookmarks.map(({ content }) => {
                                const location = content as LocationDocument;
                                const { lat, lng } = location.location;
                                return (
                                  <Marker
                                    key={location._id}
                                    lat={lat}
                                    lng={lng}
                                  />
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
                          images,
                          likes,
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
                                  images={images}
                                  likes={likes}
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
                          thumbnailImage,
                          subtitle,
                          likes
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
                                  likes={likes}
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
  );
};

export default Account;
