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
  link: string
  at: string
  jobDescription: string
}

export type ProjectType = {
  name: string
  image: ImageType
  summary: string
  websiteLink: string
  repositoryLink: string
}

export type TalkType = {
  name: string
  description: string
  date: Date
  link: string
}

export type AllContent = {
  home: HomeType
  allWorkExperiences: ExperienceType[]
  allCommunityExperiences: ExperienceType[]
  allProjects: ProjectType[]
  allTalks: TalkType[]
}

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
          link
          startDate
          endDate
        }
        allCommunityExperiences(orderBy: startDate_DESC){
          title
          at
          jobDescription
          link
          startDate
          endDate
        }
        allProjects(orderBy: _createdAt_DESC, first:"4") {
          name
          image {
            alt
            url
          }
          summary
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
