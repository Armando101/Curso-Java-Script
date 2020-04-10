function logParameter(target, propertyName, index) {
    const metadataKey = `log_${propertyName}_parameters`;

    if(Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    } else {
        target[metadataKey] = [index];
    }
}

class P {
    greet(@logParameter message: string): string {
        return message;
    }
}

const p = new P();
p.greet('Hola!!!');