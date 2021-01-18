import { formatFixedSI } from "@gapit/format-si";
import { getMetricValue } from "@gapit/grafana-metric";

const { showcase, sidebar, dataHalls, pods } = customProperties;

for (const dict of [...Object.values(sidebar), ...dataHalls, ...pods]) {
  const { id, metric, baseUnit, digits } = dict;

  // Get the metric value by name
  const metricValue = getMetricValue(metric, showcase);

  if (typeof metricValue == "string" || typeof metricValue == "number") {
    // Format the value to SI format
    const { value, unit } = formatFixedSI(metricValue, baseUnit, digits);
    htmlNode.getElementById(id + "-value").textContent = `${value} ${unit}`;
  }
}
