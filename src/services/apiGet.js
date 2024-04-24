const getFromApi = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur API GET :', error);
        throw error;
    }
};

const fetchData = async (model) => {
    const url = `http://localhost:3000/${model}`;
    return await getFromApi(url);
};

export { fetchData };
