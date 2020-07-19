const decreasingFrictionUrl = "/projects/decreasing-friction"
const dataDrivenDecisionsUrl = "/projects/data-driven-decisions"
// const surfacingDataAndInsightsUrl = "/projects/surfacing-data-and-insights"

// This is way over engineered for two project pages.
// But once the third project is added this will be needed.
// Carrie wants the next and last project buttons to cycle through
// the pages like an image carousel.

const urlMapping = {
  [decreasingFrictionUrl]: {
    back: dataDrivenDecisionsUrl,
    forward: dataDrivenDecisionsUrl,
  },
  [dataDrivenDecisionsUrl]: {
    back: decreasingFrictionUrl,
    forward: decreasingFrictionUrl,
  },
  // add more keys here for more projects
}

const nextProjectPageUrl = (currentUrl, direction) =>
  urlMapping[currentUrl][direction]

export default nextProjectPageUrl
