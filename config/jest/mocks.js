const token = 'NOT_A_TOKEN';
const error = 'NOT_AN_ERROR';
const user  = 'NOT_A_USER';
const credential = 'NOT_A_CREDENTIAL';
const post1 = {
      "id": "59edd93052db76aefs2b36ee_TEST",
      "comment": "Iusto aut quae non asperiores eius illo ut.",
      "created": 1508760000,
      "likes": [{
          "id": "52edd9352db76aeff2b34ed",
          "firstName": "Harold",
          "lastName": "Cassin"
      }],
      "author": {
        "id": "34edd9c052db76aeff2b33es",
        "firstName": "Tristian",
        "lastName": "Farrell",
        "groupId": "844t1zdqp0",
        "avatar": "https://lab.lectrum.io/redux/api/image/844t1zdqp0/placeholder.jpg"
      }
};

const post2 = {
      "id": "59edd93052db76aefs2b36ed_TEST",
      "comment": "Iusto aut quae non asperiores eius illo ut.",
      "created": 1508760000,
      "likes": [{
          "id": "52edd9352db76aeff2b34ed",
          "firstName": "Harold",
          "lastName": "Cassin"
      }],
      "author": {
        "id": "34edd9c052db76aeff2b33es",
        "firstName": "Tristian",
        "lastName": "Farrell",
        "groupId": "844t1zdqp0",
        "avatar": "https://lab.lectrum.io/redux/api/image/844t1zdqp0/placeholder.jpg"
      }
};

const posts = [post1, post2];
const comment = 'NOT_COMMENT';
const postId = 'NOT_ID';

const likedPostIds = { postId: 'NOT_ID', user: {} };
const dislikedPostIds = { postId: 'NOT_ID', userId: 'NOT_ID' };    

const profile = {
    firstName: 'Walter',
    lastName:  'White',
    id:        '123',
    avatar:    'avatar',
    token,
};

global.__ = {
    credential,
    token,
    error,
    user,
    posts,
    post1,
    post2,
    profile,
    postId,
    comment,
    likedPostIds,
    dislikedPostIds,
};
