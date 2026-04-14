const EXPERIENCE_START_DATE = new Date('2021-11-22')

function getTotalMonths(referenceDate = new Date()) {
  const startYear = EXPERIENCE_START_DATE.getFullYear()
  const startMonth = EXPERIENCE_START_DATE.getMonth()
  const startDay = EXPERIENCE_START_DATE.getDate()
  const currentYear = referenceDate.getFullYear()
  const currentMonth = referenceDate.getMonth()
  const currentDay = referenceDate.getDate()

  let totalMonths = (currentYear - startYear) * 12 + (currentMonth - startMonth)

  if (currentDay < startDay) {
    totalMonths -= 1
  }

  return Math.max(totalMonths, 0)
}

export function getExperienceText(referenceDate = new Date()) {
  const totalMonths = getTotalMonths(referenceDate)

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const yearLabel = `${years} year${years === 1 ? '' : 's'}`

  if (months === 0) {
    return yearLabel
  }

  return `${yearLabel} and ${months} month${months === 1 ? '' : 's'}`
}

export function getExperienceCompactText(referenceDate = new Date()) {
  const totalMonths = getTotalMonths(referenceDate)
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  if (months === 0) {
    return `~${years} years`
  }

  return `~${years}.${months} years`
}