import { myAxios } from "./helper";

export const loadAllCategories = () => {
  return myAxios.get(`/categories/`).then((respone) => {
    return respone.data;
  });
};
