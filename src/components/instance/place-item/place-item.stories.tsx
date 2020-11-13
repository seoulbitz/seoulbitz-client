import React from 'react';
import PlaceItem from './place-item';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'emotion-theming';
import { Cell, Grid } from '@/components/content/layout-grid/layout-grid';
export default {
  title: 'component/PlaceItem',
  component: PlaceItem
};
const DUMMY_DATA_LIST = {
  places: [
    {
      categorylocation: 'Restaurants / Itaewon',
      koreanname: '맥파이 브루잉 컴퍼니',
      englishname: 'Magpei Brewing Co.',
      discription: 'This is pizza',
      likes: '12 likes / 0.6km far',
      image:
        'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/57286270_114670046398227_2576349361528457787_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=js3DIwAOIPkAX8dsjiC&tp=18&oh=76cb6bf0910fc3ef3ed12303dcb65cbe&oe=5FD47285'
    },
    {
      categorylocation: 'Restaurants / Itaewon',
      koreanname: '맥파이 브루잉 컴퍼니',
      englishname: 'Magpei Brewing Co.',
      discription: 'This is pizza',
      likes: '12 likes / 0.6km far',
      image:
        'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/57286270_114670046398227_2576349361528457787_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=js3DIwAOIPkAX8dsjiC&tp=18&oh=76cb6bf0910fc3ef3ed12303dcb65cbe&oe=5FD47285'
    },
    {
      categorylocation: 'Restaurants / Itaewon',
      koreanname: '맥파이 브루잉 컴퍼니',
      englishname: 'Magpei Brewing Co.',
      discription: 'This is pizza',
      likes: '12 likes / 0.6km far',
      image:
        'https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/57286270_114670046398227_2576349361528457787_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=103&_nc_ohc=js3DIwAOIPkAX8dsjiC&tp=18&oh=76cb6bf0910fc3ef3ed12303dcb65cbe&oe=5FD47285'
    }
  ]
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Grid>
      {DUMMY_DATA_LIST.places.map((place, index) => {
        return (
          <Cell key={index} width={[1, 1 / 2, 7 / 12]}>
            <PlaceItem
              categorylocation={place.categorylocation}
              koreanname={place.koreanname}
              englishname={place.englishname}
              discription={place.discription}
              likes={place.likes}
              image={place.image}
            />
          </Cell>
        );
      })}
    </Grid>
  </ThemeProvider>
);
export const Default = Template.bind({});
Default.argTypes = {};
