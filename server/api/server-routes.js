export default defineEventHandler((event)=>{

    const {name} = useQuery(event)
 
    return {
        message: `Name: ${name}`
    }
})