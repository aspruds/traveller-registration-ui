import transportDetail from "@/store/modules/travel-details/transport-detail";
import traveller from "@/store/modules/travel-details/traveller";

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
