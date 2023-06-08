export default function handler(req, res) {
    if (req.method === 'POST') {
      const formData = JSON.parse(req.body);
      // Process the form data as needed
      console.log(formData);
  
      // Send a response
      res.status(200).end();
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }
  