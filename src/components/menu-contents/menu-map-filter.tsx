import React, { useEffect, useState } from 'react';
import Button from '../styled-system/button/button';
import StyledButton from '../button/button';
import Div from '../styled-system/div/div';
import MenuMapGraphics from './menu-map-graphics';
import Span from '../styled-system/span/span';
import { theme } from '@/styles/theme';
import sanity from '@/services/sanity';
import { useRecoilState } from 'recoil';
import { locationListState } from '@/services/recoil/atoms';

const MenuMapFilter = () => {
  const [locationList, setLocationList] = useRecoilState(locationListState);
  const [categories, setCategories] = useState([]);
  const [zones, setZones] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const [categories, zones] = await Promise.all([
        sanity.api.locationCategory.find(),
        sanity.api.locationZone.find()
      ]);
      setCategories(categories);
      setZones(zones);
    };

    fetch();
  }, []);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedZones, setSelectedZones] = useState([]);

  let selectedAreas = [];
  zones.forEach((zone) => {
    if (selectedZones.includes(zone.name)) {
      const areas = zone.areas.map((area) => {
        return area.name;
      });
      selectedAreas = [...selectedAreas, ...areas];
    }
  });

  if (categories.length === 0 && zones.length === 0) {
    return null;
  }

  const handleSearch = async () => {
    setIsSearching(true);
    let order = {};
    switch (locationList.sortBy) {
      case 'latest': {
        order = { _createdAt: 'desc' };
        break;
      }
      case 'likes': {
        order = { likes: 'desc' };
        break;
      }
      // TODO: Replace with order by distance
      case 'distance': {
        order = { likes: 'desc' };
        break;
      }
    }
    setLocationList((state) => {
      return {
        ...state,
        locations: []
      };
    });

    const locations = await sanity.api.location.findByFilters({
      categories: selectedCategories,
      areas: selectedAreas,
      order
    });

    setLocationList((state) => {
      return {
        ...state,
        locations
      };
    });
    setIsSearching(false);
  };

  return (
    <Div
      paddingTop="32px"
      paddingBottom="32px"
      backgroundColor="#FAFAFA"
      width="calc(100% + 40px)"
      marginLeft="-20px"
      paddingLeft="20px"
      paddingRight="20px"
      borderTop="1px solid #FAFAFA"
      borderBottom="1px solid #FAFAFA">
      <Div
        fontFamily={theme.fonts.futura}
        fontSize="18px"
        lineHeight="22px"
        fontWeight="700">
        Select one or more categories and/or neighbourhoods to filter search
        results
      </Div>
      <Div
        marginTop="32px"
        display="grid"
        gridColumnGap="20px"
        gridRowGap="8px"
        gridTemplateRows="repeat(4, auto)"
        gridTemplateColumns="repeat(3, 1fr)">
        {categories.map((category) => {
          const { _id, name } = category;
          const isSelected = selectedCategories.includes(name);
          return (
            <Div key={_id}>
              <Button
                style={{
                  outline: 'none'
                }}
                cursor="pointer"
                width="100%"
                fontFamily={theme.fonts.futura}
                fontSize="14px"
                lineHeight="18px"
                fontWeight="500"
                borderRadius="100px"
                height="28px"
                border={isSelected ? '1px solid #0511F2' : '1px solid #D1D1D1'}
                backgroundColor={isSelected ? '#0511F2' : 'initial'}
                color={isSelected ? '#FFFFFF' : '#000000'}
                onClick={() => {
                  setSelectedCategories((prevSelectedCategories) => {
                    if (isSelected) {
                      return prevSelectedCategories.filter((category) => {
                        return category !== name;
                      });
                    }
                    return [...prevSelectedCategories, name];
                  });
                }}>
                {name}
              </Button>
            </Div>
          );
        })}
      </Div>
      <Div marginTop="32px">
        <MenuMapGraphics
          display="block"
          selectedZones={selectedZones}
          onSelect={(newSelectedZones) => {
            setSelectedZones(newSelectedZones);
          }}
        />
      </Div>
      {selectedZones.length > 0 && (
        <Div marginTop="8px">
          {selectedAreas.map((area, i) => {
            return (
              <Span
                display="inline-block"
                key={area}
                fontFamily={theme.fonts.futura}
                fontSize="16px"
                lineHeight="20px"
                fontWeight="500"
                marginTop="8px"
                marginRight="4px">
                {area}
                {i === selectedAreas.length - 1 ? '' : ','}
              </Span>
            );
          })}
        </Div>
      )}
      <Div display="flex" flexDirection="row" marginTop="32px">
        <StyledButton
          variant="black"
          marginRight="10px"
          disabled={isSearching}
          onClick={() => {
            setSelectedCategories([]);
            setSelectedZones([]);
          }}>
          RESET
        </StyledButton>
        <StyledButton
          variant="blue"
          marginLeft="10px"
          disabled={isSearching}
          onClick={handleSearch}>
          SEARCH
        </StyledButton>
      </Div>
    </Div>
  );
};

export default MenuMapFilter;
