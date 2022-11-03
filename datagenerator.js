const ObjectsToCsv = require('objects-to-csv')

   
let data = [];

  (async () => {
    console.log("staring")
    let batch = 30000
    let totalData = 300000
    let numpages = totalData / batch
    for (let index = 0; index < numpages; index++) {
        console.log("generating btach ", index + 1)
        data = []
        for (let j = index * batch; j < (index * batch) + batch; j++) {
            data.push({
                id: j+1
            })
        }
        const csv = new ObjectsToCsv(data);
        await csv.toDisk('./data.csv', { append: true });
    }
    console.log("data generated")
  })();

