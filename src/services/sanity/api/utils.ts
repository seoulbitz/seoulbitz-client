export const getOrderQuery = (order: {
  likes?: 'asc' | 'desc';
  _createdAt?: 'asc' | 'desc';
}) => {
  if (Object.keys(order).length === 0) {
    return '';
  }

  const query = Object.entries(order).reduce((acc, [key, value]) => {
    const pair = `${key} ${value}`;

    if (acc) {
      return `${acc}, ${pair}`;
    }

    return pair;
  }, '');

  return ` | order(${query})`;
};
