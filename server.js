const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; //whatever webservice should give a port number

//API route
app.get('/api', (req, res) => {
	res.json({message: "Hello, this is the backend"});
});

//static files from the React app 
app.use(express.static(path.join(__dirname, 'client/build')));

app.listen(PORT, () => {
	console.log(`Server is srunning on http://localhost:${PORT}`);
});