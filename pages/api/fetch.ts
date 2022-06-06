const API_URL = 'https://graphql.datocms.com'
const API_TOKEN = process.env.DATOCMS_API_TOKEN

type ImageType = {
  url: string
  alt: string
}

export type HomeType = {
  title: string
  aboutMe: string
  aboutImage: ImageType
  myTechStacks: string[]
}

export type ExperienceType = {
  startDate: Date
  endDate?: Date
  title: string
  at: string
  jobDescription: string
}

export type ProjectType = {
  name: string
  image: ImageType
  stack: string[]
  description: string
  websiteLink: string
  repositoryLink: string
}

export type TalkType = {
  name: string
  description: string
  date: Date
  link: string
}

export type AllContent = HomeType & ExperienceType & ProjectType & TalkType

export async function fetchAPI(query: string) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
    }),
  })

  const json = await res.json()

  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getHome() {
  const data: Promise<AllContent> = fetchAPI(`
      query HomeQuery {
        home {
          title
          aboutMe
          aboutImage {
            url
            alt
          }
          myTechStacks
        }
        allWorkExperiences(orderBy: startDate_DESC) {
          title
          at
          jobDescription
          startDate
          endDate
        }
        allCommunityExperiences(orderBy: startDate_DESC){
          title
          at
          jobDescription
          startDate
          endDate
        }
        allProjects(orderBy: _createdAt_DESC, first:"4") {
          name
          image {
            alt
            url
          }
          stack
          description
          websiteLink
          repositoryLink
        }
        allTalks(orderBy: createdAt_DESC){
          name
          description
          date
          link
        }
      }
    `)

  return data
}
