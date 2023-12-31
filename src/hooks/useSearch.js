import { get } from 'lodash';
import { useState, useEffect } from 'react';

export default function useSearch(
  arrayToSearch,
  searchField,
  searchId,
  searchVariant,
) {
  const [searchResult, setSearchResult] = useState();

  function handleSearch() {
    const result = arrayToSearch
      .filter(
        (element) => searchVariant[searchId].fields.some(
          (field) => get(element, field)
            .trim()
            .toLowerCase()
            .includes(searchField.trim().toLowerCase()),
        ),
      );
    setSearchResult(result);
  }

  useEffect(() => {
    if (searchField.length < 1) {
      setSearchResult(null);
    } else {
      handleSearch(searchField);
    }
  }, [searchField, searchId]);

  return searchResult;
}
