import React, { useCallback } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useDebounce } from 'use-debounce';
import { useNavigate, useLocation } from 'react-router-dom';

function TodoSearch({ query, onSearchChange }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [debouncedQuery, setDebouncedQuery] = useDebounce(query, 300);

  const handleSearchChange = useCallback(
    (e) => {
      onSearchChange(e.target.value);
    },
    [onSearchChange]
  );

  const handleSearch = () => {
    navigate({
      pathname: location.pathname,
      search: `?query=${debouncedQuery.trim()}`,
    });
    onSearchChange(debouncedQuery.trim());
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
      <Input
        value={query}
        onChange={handleSearchChange} // Update query state
        placeholder="검색어를 입력하세요"
        style={{
          flex: 1,
        }}
      />

      <Button
        text="검색"
        onClick={handleSearch} // Button click will update the URL and trigger the search
        variant={debouncedQuery.trim() ? 'primary' : 'default'}
        style={{
          height: '48px',
          padding: '0 40px',
          fontSize: '16px',
          borderRadius: '8px',
          width: 'auto',
          whiteSpace: 'nowrap',
        }}
      />
    </div>
  );
}

export default TodoSearch;
