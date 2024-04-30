export const changeLang = (newLang) => {
  return {
    type: "lang/changeLang",
    payload: newLang,
  };
};

export const localeReducer = (state = { lang: "uk" }, action) => {
  switch (action.type) {
    case "lang/changeLang":
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};
