import { Subject } from 'rxjs';

const subject = new Subject();

export const authService = {
    setToken: token => subject.next(token),
    clearToken: () => subject.next(),
    getToken: () => subject.asObservable()
};