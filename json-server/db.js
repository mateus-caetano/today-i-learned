
module.exports = () => {
    const data = { 'users': [] }
    
    for (let index = 1; index <= 100; index++) {
        data.users.push({
            'id': index,
            'name': `user${index}`,
            'date_of_birth': new Date(
                `${(index * 1000) % 2018}`, 
                `${index % 12}`, 
                `${index % 28}`
            )
        })
    }
    return data
}