const decreasingFrictionUrl = "/projects/decreasing-friction"
const dataDrivenDecisionsUrl = "/projects/data-driven-decisions"
const coreUsersUrl = "/projects/core-users"

const urlMapping = {
  [decreasingFrictionUrl]: {
    back: coreUsersUrl,
    forward: dataDrivenDecisionsUrl,
  },
  [dataDrivenDecisionsUrl]: {
    back: decreasingFrictionUrl,
    forward: coreUsersUrl,
  },
  [coreUsersUrl]: {
    back: dataDrivenDecisionsUrl,
    forward: decreasingFrictionUrl,
  },
}

const nextProjectPageUrl = (currentUrl, direction) =>
  urlMapping[currentUrl][direction]

export default nextProjectPageUrl
