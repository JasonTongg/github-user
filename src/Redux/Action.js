let url = 'https://api.github.com/users/maryantocinn';

export const getUserList = (payload) => {
  return {
    type: 'Get User',
    payload: payload,
  };
};

export const getUserApi = async (dispatch) => {
  let rawData = await fetch(url);
  let data = await rawData.json();
  return dispatch(getUserList(data));
};
