export const Projects:Projects[] = [
    {
        title:"Thumbnaily",
        description:"A Ai thumbnail generator , takes a refernce image from users and prompt and then crafts perfect thumbnail for the required title",
        image:"/thumbnaily.avif",
        techUsed:["NextJS" , "Typescript","AWS S3" , "Postgresql" , "Prisma" , "Virtual Machine" , "CI/CD"],
        liveLink:"",
        githubLink:""
    },
    {
        title:"Yaatra AI",
        description:"a full-stack AI-powered travel planning application using React and Vite for the frontend with express as the backend",
        image:"/aiyatra.png",
        techUsed:["React-Vite" , "Typescript"],
        liveLink:"",
        githubLink:""
    },
    {
        title:"DeCerts",
        description:"A decentalised certificate genrator build on top of solana blockchain network , It mints a NFT for each certificate to introduce authenticity.",
        image:"/decert.png",
        techUsed:["React-Vite" , "Solana" , "Blockchain" ,"Metaplex NFT" , "RPC Nodes"],
        liveLink:"",
        githubLink:""
    },
    {
        title:"Sol Devta",
        description:"A solana token dispenser for solana testnet blockchain network. Users link thier wallet and request for airdrops , the tool provides them with tokens in devnet for them touse while testing.",
        image:"/soldevta.png",
        techUsed:["React-Vite" , "Express" , "Solana" ,"AlchemyRPC" , "Blockchain"],
        liveLink:"",
        githubLink:""
    },
    {
        title:"Baatcheet",
        description:"A real-time chat application with WebSocket protocol enabling instant message delivery and room-based communication",
        image:"/baatcheet.png",
        techUsed:["React-Vite" , "Typescript" , "Websockets" ,"NodeJs" , "TailwindCSS"],
        liveLink:"",
        githubLink:""
    },
    {
        title:"Roast My Resume",
        description:"A full-stack web application that provides AI-powered humorous critiques of resumes using OpenAI's GPT model",
        image:"/resumeroast.png",
        techUsed:["React-Vite" , "Typescript" , "ExpressJS" ,"OpenAI API" , "TailwindCSS"],
        liveLink:"",
        githubLink:""
    }
    
]

interface Projects{
    title:string
    liveLink:string
    githubLink:string
    description:string
    image:string
    techUsed:string[]
}