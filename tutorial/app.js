const { createReadStream } = require(`fs`);

const reader = createReadStream(`./content/big2.txt`, {
    highWaterMark: 128, 
    encoding:`utf-8`
});

reader.on(`data`,(values)=>{
    console.log(values);
})

reader.on(`error`, (err) => {
    console.log(err);
})