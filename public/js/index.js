const fetch = (method, url, cb, input) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        cb(JSON.parse(xhr.responseText));
      }
    }
  };
  xhr.open(method, url);
  xhr.send(input);
};
