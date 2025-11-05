export const USERS = [
    {
        scenario:'Every field filled',
        name:'Test1', 
        email:'test1@email.com', 
        password:'test1pass', 
        country:'Brazil', 
        gender:'Male', 
        hobbies:['Read books', 'Video Games', 'Movies', 'Travel', 'Sports', 'Board Games']
    },
    {
        scenario:'With no hobbies',
        name:'Test2', 
        email:'test2@email.com', 
        password:'test2pass', 
        country:'Canada', 
        gender:'Male', 
        hobbies:[]
    },
    {
        scenario:'Female user',
        name:'Test3', 
        email:'test3@email.com', 
        password:'test3pass', 
        country:'Mexico', 
        gender:'Female', 
        hobbies:['Video Games', 'Travel', 'Board Games']
    },
    {
        scenario:'Other gender user',
        name:'Test4', 
        email:'test4@email.com', 
        password:'test4pass', 
        country:'Portugal', 
        gender:'Other', 
        hobbies:['Read books', 'Video Games']
    },
    {
        scenario:'USA user',
        name:'Test5', 
        email:'test5@email.com', 
        password:'test5pass', 
        country:'United States of America', 
        gender:'Female', 
        hobbies:['Travel', 'Sports', 'Video Games']
    }
]