import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  console.log(items);
  // _(items) creates an item that you can chain lodash methods to
  return _(items).slice(startIndex).take(pageSize).value();
}