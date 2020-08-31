import transportDetail from "@/store/modules/transport-detail/transport-detail";
import traveller from "@/store/modules/traveller/traveller.js";

const state = () => ({
  error: false,
  success: false
});

const modules = {
  transportDetail,
  traveller
};

export const registration = {
  namespaced: true,
  state,
  modules
};
