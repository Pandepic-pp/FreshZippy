const fs=require('fs');
const items = (req, res) => {
    fs.readFile( `../server/items.json`, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        console.log(data);
        res.send(JSON.parse(data));
    });
}
module.exports={items};