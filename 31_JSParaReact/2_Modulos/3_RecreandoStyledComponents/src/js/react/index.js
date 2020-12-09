function component(strings, ...dynaimcValues) {
  return function (props) {
    let newContent = strings.slice();
    console.log(newContent);
    dynaimcValues.forEach((value, index) => {
      newContent[index] += props[value];
    });
    return `<p>${newContent.join('')}</p>`;
  };
}

export {
  component
}