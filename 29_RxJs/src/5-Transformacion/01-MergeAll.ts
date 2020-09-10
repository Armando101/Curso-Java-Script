import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, pluck, mergeAll } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GitHubUser } from "../inerfaces/github-user.interface";
import { GitHubUsersResponse } from "../inerfaces/github-users.interfaces";

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const showUsers = (users: GitHubUser[]) => {
    console.log(users);
    orderList.innerHTML = ``;

    for(const user of users) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const anchor = document.createElement('a');

        img.src = user.avatar_url;
        anchor.href = user.html_url;
        anchor.text = ' See profile';
        anchor.target = '_blank';

        li.append(img);
        li.append(user.login + '');
        li.append(anchor);

        orderList.append(li);
    }
}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

// Para el tipado utilizamos quickType
input$.pipe(
    debounceTime<KeyboardEvent>(300),
    pluck<KeyboardEvent, string>('target', 'value'),
    map<string, Observable<GitHubUsersResponse>>(text =>  ajax.getJSON(`https://api.github.com/search/users?q=${ text }`)),
    mergeAll<GitHubUsersResponse>(),
    pluck<GitHubUsersResponse, GitHubUser[]>('items')
).subscribe(users => {
    showUsers(users);
    console.log(users[0].avatar_url)
});