const apiPost = async (model, data, mode) => {
    try {
        const apiUrl = `http://localhost:3000/${model}`;
        console.log(data);
        const response = await fetch(apiUrl, {
            method: mode,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            console.log(response);
            throw new Error('Erreur lors de la création des données');
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur API POST :', error);
        throw error;
    }
};

export { apiPost };
