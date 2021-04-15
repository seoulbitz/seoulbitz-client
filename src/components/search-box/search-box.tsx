import { theme } from '@/styles/theme';
import { useRouter } from 'next/dist/client/router';
import React, { FC, useRef } from 'react';
import { i18n } from '../../../i18n';
import Search from '../icons/search/search';
import Button from '../styled-system/button/button';
import Div from '../styled-system/div/div';
import Input from '../styled-system/input/input';

type SearchBoxProps = {
  onSearch?: (string) => void;
};

const SearchBox: FC<SearchBoxProps> = ({ onSearch }) => {
  const router = useRouter();
  const {
    query: { query }
  } = router;

  const inputRef = useRef<HTMLInputElement>();

  const handleSearch = () => {
    const keyword = inputRef.current.value;
    if (keyword === '') {
      return;
    }

    if (!onSearch) {
      return;
    }

    onSearch(keyword);
  };

  const handleButtonClick = () => {
    handleSearch();
  };

  const handleInputKeyDown = (ev: any) => {
    if (ev.code !== 'Enter') {
      return;
    }
    handleSearch();
  };

  return (
    <Div
      display="flex"
      flexDirection="row"
      width="100%"
      height="48px"
      borderBottom="1px solid #0511F2">
      <Input
        style={{
          outline: 'unset'
        }}
        defaultValue={query}
        ref={inputRef}
        width="100%"
        padding="0px"
        border="0px"
        // placeholder="Search"
        placeholder={i18n.language === 'en' ? 'Search' : '검색'}
        fontFamily={theme.fonts.futura}
        fontSize="16px"
        lineHeight="20px"
        fontWeight="400"
        color="#777777"
        onKeyDown={handleInputKeyDown}
      />
      <Button
        style={{
          outline: 'unset'
        }}
        cursor="pointer"
        width="24px"
        padding="0px"
        border="0px"
        backgroundColor="initial"
        onClick={handleButtonClick}>
        <Search display="block" width="18px" height="18px" />
      </Button>
    </Div>
  );
};

export default SearchBox;
