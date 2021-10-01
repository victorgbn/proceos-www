const updateCounter = async () => {
    const data = await fetch('https://api.countapi.xyz/hit/devlabdemo/visits')
    const count = await data.json()
    console.log(count.value)
}
updateCounter()