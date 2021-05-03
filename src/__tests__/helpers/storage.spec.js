import { setItem, getItem, removeItem } from '~/helpers/storage';

const key = 'cached';
const value = 'cached';

describe('storage helper', () => {
  it('should be able to set item in storage.', () => {
    const setItemMock = jest.fn();
    global.localStorage.__proto__.setItem = setItemMock;

    setItem(key, value);

    expect(setItemMock).toHaveBeenLastCalledWith(key, JSON.stringify(value));
  });

  it('should be able to get item in storage.', () => {
    const getItemMock = jest.fn().mockReturnValue(JSON.stringify(value));
    global.localStorage.__proto__.getItem = getItemMock;

    const item = getItem(key);

    expect(getItemMock).toHaveBeenLastCalledWith(key);
    expect(item).toBe(value);
  });

  it('should be able to remove item in storage.', () => {
    const removeItemMock = jest.fn();
    global.localStorage.__proto__.removeItem = removeItemMock;

    removeItem(key);

    expect(removeItemMock).toHaveBeenLastCalledWith(key);
  });
});
