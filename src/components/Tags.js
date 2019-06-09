import React from 'react';

const Tags = ({ tags = [] }) => {
  const allTags = tags.map(t => <span key={t}> {t}</span>);
  return <>{allTags}</>;
};

export default Tags;
