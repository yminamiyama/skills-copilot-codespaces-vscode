// Create web server
const server = http.createServer(app);

// Start listening on port
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});