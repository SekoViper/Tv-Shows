import { jestApiCredent } from '../__test__/jestApiCredent.js';
import { counterCommentsMock } from '../__test__/counterCommentMock.js';

describe('Tests fetch with axios', () => {
  const { BASECOMMENTSAPI, APPENDPOINTID } = jestApiCredent;
  const endpoint = BASECOMMENTSAPI.concat('apps/', APPENDPOINTID, '/comments?');
  const API_PATH_ITEM_5 = endpoint.concat('item_id=5');
  const API_PATH_ITEM_6 = endpoint.concat('item_id=6');
  const fivethItemCommentCount = 5;
  const sixthItemCommentCount = 1;
  const fivethItemCommentsFirstObject = {
    username: 'Manoous',
    comment: 'True Detective, the movie i will always want to watch',
    creation_date: '2022-11-30',
  };
  const fivethItemCommentsSecondObject = {
    username: 'Seko',
    comment: 'Full-Stack developer',
    creation_date: '2022-12-01',

  };
  it('Comment Counts Testing item 5', async () => {
    const comments = await counterCommentsMock(API_PATH_ITEM_5);
    expect(comments.length).toBe(fivethItemCommentCount);
  });

  it('Comment Counts Testing item 6', async () => {
    const comments = await counterCommentsMock(API_PATH_ITEM_6);
    expect(comments.length).toBe(sixthItemCommentCount);
  });

  it('Checks comments objects of Item 5', async () => {
    const comments = await counterCommentsMock(API_PATH_ITEM_5);
    expect(comments[0]).toMatchObject(fivethItemCommentsFirstObject);
    expect(comments[1]).toMatchObject(fivethItemCommentsSecondObject);
  });
});