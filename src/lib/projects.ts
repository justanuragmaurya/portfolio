export const Projects:Projects[] = [
    {
        title:"Thumbnaily Ai",
        description:"A Ai thumbnail generator , takes a refernce image from users and prompt and then crafts perfect thumbnail for the required title",
        image:"/project-1.avif",
        techUsed:["NextJS" , "Typescript","AWS S3" , "Postgresql" , "Prisma" , "Virtual Machine" , "CI/CD"],
        liveLink:"",
        githubLink:""
    },
    {
        title:"Yaatra AI",
        description:"a full-stack AI-powered travel planning application using React and Vite for the frontend with express as the backend",
        image:"/project-2.png",
        techUsed:["React-Vite" , "Typescript"],
        liveLink:"",
        githubLink:""
    },
]

interface Projects{
    title:string
    liveLink:string
    githubLink:string
    description:string
    image:string
    techUsed:string[]
}