type CallBackError = Error | null;
type CallBack = (error: CallBackError, response: Object) => void;
type SendRequest = (cb: CallBack) => void;

// Declaro una variable de tipo SendRequest, recibe una función de Callbak y la ejecuta
const sendRequest: SendRequest = (cb: CallBack): void => {
    if(cb) {
        cb(null, { message: 'Todo salió bien' });
    }
}