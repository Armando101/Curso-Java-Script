const getHash = () =>
	location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; // Nos regresa el id

export default getHash;