import { fromEvent } from "rxjs";
import { map } from "rxjs/internal/operators";

const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget tellus ornare eros vulputate luctus. Praesent vulputate posuere nibh, non maximus est fermentum non. Nam eu eros nec eros viverra posuere sed eu tellus. Nunc eu lacus ipsum. Suspendisse ut rhoncus ligula, non dictum ante. Fusce ut arcu sodales, vulputate ipsum nec, pharetra nisi. Etiam vel suscipit nulla. Aliquam finibus, eros sit amet consequat dapibus, velit arcu rutrum ipsum, eu bibendum magna nibh eu enim.
<br/><br/>
Aliquam lacinia, nibh vel vulputate pellentesque, dolor nunc dictum neque, non consequat massa nibh vitae diam. Nunc ut augue convallis, dignissim massa ac, dapibus nisl. Donec tincidunt est non diam luctus, id interdum arcu iaculis. In nec dignissim erat, eu commodo neque. Nulla facilisi. Cras sed neque ut felis bibendum congue. Ut suscipit magna vitae augue porttitor placerat. Morbi eget dui quis nisi hendrerit auctor.
<br/><br/>
Maecenas lobortis ac justo sit amet vehicula. Mauris vel nisl condimentum, dictum leo et, pulvinar nibh. Aliquam ligula arcu, porta ut iaculis sit amet, vestibulum ac dui. In feugiat sed odio a iaculis. Aliquam sit amet nibh ultricies, gravida sapien a, iaculis justo. Nulla aliquet at massa nec porttitor. Duis dignissim nibh nec nulla pharetra luctus. Cras at blandit diam. Donec bibendum neque sed porta dignissim. Nam vel feugiat leo. Nulla sed sem nibh. Cras dui dui, ullamcorper eu sem eget, luctus luctus ipsum. Integer gravida nulla risus, sed ullamcorper nunc fermentum id. Cras sed nisl erat. Proin a dignissim leo. Quisque imperdiet sapien nec finibus fermentum.
<br/><br/>
Phasellus lacinia posuere dui, eget dapibus mi tristique at. Pellentesque efficitur tristique nunc vel aliquam. Ut non leo a felis ultricies sagittis. Vestibulum eget varius nunc. Maecenas at ex diam. Integer facilisis pulvinar nulla at suscipit. Duis efficitur lacus eget tristique venenatis. Maecenas sollicitudin eleifend turpis eget cursus. Sed lacinia, neque aliquam scelerisque venenatis, diam sem porttitor ligula, eu eleifend mi lectus in massa. Curabitur mollis quam nibh, at consequat urna imperdiet sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non ipsum leo. Fusce a venenatis arcu. Cras ut posuere libero. Curabitur justo velit, feugiat lobortis ex eu, dapibus facilisis tortor.
<br/><br/>
Vivamus justo libero, condimentum non rhoncus sit amet, sollicitudin nec nibh. Duis a neque vel urna condimentum accumsan quis in turpis. Etiam eu odio vel erat euismod venenatis sed sed velit. Nullam eu ligula dictum, vestibulum ante id, maximus quam. Donec iaculis ex non fringilla elementum. Quisque sed nunc vitae orci blandit pretium eget non ex. Aliquam sit amet tempus nibh. Nulla facilisi. Nulla sit amet sapien eu lacus posuere accumsan.
`;

const body = document.querySelector('body');
body.append(text);

const progresBar = document.createElement('div');
progresBar.setAttribute('class', 'progress-bar');

body.append(progresBar);

// Function that calc
const calcPercentScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    // console.log(scrollTop, scrollHeight, clientHeight);
    return (scrollTop/(scrollHeight - clientHeight)) * 100;
};

// Streams
fromEvent(document, 'scroll')
    .pipe(map(calcPercentScroll))
    .subscribe(percent => progresBar.style.width = `${percent}%`);