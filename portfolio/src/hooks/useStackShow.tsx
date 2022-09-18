const useStackShow = () => {

    const stackArr:string[] = [
        "JavaScript","TypeScript","JAVA",
        "React","Next.js","Tailwind",
        "Spring","NestJs","StyleComponent",
        "Node.js","Express","MySql",
        "Redis","Jenkins","AWS",
        "Docker","Postman","Confluence",
    ]
    const rand_0_17 = Math.floor(Math.random() * 10);
    return stackArr[rand_0_17]
}

export default useStackShow