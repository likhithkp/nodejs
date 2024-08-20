const getFact = async () => {
    const blob = await fetch(`https://randomuser.me/api/`);
    const parsedData = await blob.json(); 
}
getFact();
