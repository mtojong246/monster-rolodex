import './search-box.styles.css';
import { ChangeEvent } from 'react';

type SearchPageProps = {
  className: string;
  placeholder: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchPageProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;