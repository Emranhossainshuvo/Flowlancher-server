const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000; 

// middleqwares 
app.use(cors());
app.use(express.json());



// root 
app.get('/', (req, res) => {
    res.send('FlowLancher server is running')
})

app.listen(port, () => {
    console.log(`FlowLancher is running from port: ${port}`)
})