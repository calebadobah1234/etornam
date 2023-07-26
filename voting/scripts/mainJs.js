const fetchedData = [];
console.log(fetchedData);
const getData = async () => {
  const data = await fetch("http://localhost:5000/get-20-items")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then(async (resp) => {
      fetchedData.push(resp);
      console.log(fetchedData);
      const insertData = document.getElementById("main");
      const mappedData = fetchedData.map((item) => {
        const go = item.map((items) => {
          return item.name;
        });
        return `<div>${go}</div>`;
      });
      console.log(mappedData);
    });
};

getData();
