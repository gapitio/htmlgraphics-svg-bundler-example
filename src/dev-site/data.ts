import createSeries from "./create-series";

window.data = {
  state: LoadingState.Done,
  series: [
    createSeries(customProperties.sidebar.totalItLoad.metric, 1000),
    createSeries(customProperties.sidebar.totalCooling.metric, 1000),
    createSeries(customProperties.sidebar.totalPue.metric, 1000),
  ],
};
