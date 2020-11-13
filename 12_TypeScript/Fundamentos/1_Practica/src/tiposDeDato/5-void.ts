// Void

// Tipo explícito
function showInfo(user: any): void {
    console.log('User info: ', user.id, user.username, user.firstName, user.lastName);
}

showInfo({id: 1, username: 'armando101', firstName: 'Armando', lastName: 'Rivera'});

// Tipo inferido
function showFormattedInfo(user: any) {
    console.log('User Info: ', `
    id: ${user.id}
    username: ${user.username}
    firstName: ${user.firstName}
    lastName: ${user.lastName}
    `);
}

showFormattedInfo({id: 1, username: 'armando101', firstName: 'Armando', lastName: 'Rivera'});

// Tipo void, como tipo de dato en variablee
let unusable: void;
// unusable = null;
// unusable = undefined;
