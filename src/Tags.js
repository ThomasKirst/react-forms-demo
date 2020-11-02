import { useState } from 'react';

export default function Tags({ tags, headline, onUpdateTags }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onUpdateTags(inputValue.toLocaleUpperCase());
      setInputValue('');
    }
  };

  return (
    <div>
      <label>{headline}</label>
      <input
        type="text"
        placeholder="Please tell us something"
        onChange={handleChange}
        value={inputValue}
        onKeyDown={handleKeyDown}
      />
      <ul>
        {tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    </div>
  );
}
