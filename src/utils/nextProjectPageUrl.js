const decreasingFrictionUrl = "/projects/decreasing-friction"
const dataDrivenDecisionsUrl = "/projects/data-driven-decisions"
const surfacingDataAndInsightsUrl = "/projects/surfacing-data-and-insights"

const urlMapping = {
  [decreasingFrictionUrl]: {
    back: surfacingDataAndInsightsUrl,
    forward: dataDrivenDecisionsUrl,
  },
  [dataDrivenDecisionsUrl]: {
    back: decreasingFrictionUrl,
    forward: surfacingDataAndInsightsUrl,
  },
  [surfacingDataAndInsightsUrl]: {
    back: dataDrivenDecisionsUrl,
    forward: decreasingFrictionUrl,
  },
  // add more keys here for more projects
}

const nextProjectPageUrl = (currentUrl, direction) =>
  urlMapping[currentUrl][direction]

export default nextProjectPageUrl
