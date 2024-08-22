const getFact = async () => {
    const blob = await fetch(`https://randomuser.me/api/`);
    return parsedData = await blob.json(); 
}

const a = getFact();
console.log(a)