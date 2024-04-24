const apiDelete = async (model, id) => {
    try {
        const url = `http://localhost:3000/${model}/${id}`;
        const response = await fetch(url, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Erreur lors de la suppression des données');
        }
        return;
    } catch (error) {
        console.error('Erreur API DELETE :', error);
        throw error;
    }
};

export { apiDelete };
