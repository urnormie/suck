export default async function handler(req, res) {
  const { number } = req.query;

  if (!number) {
    return res.status(400).json({ error: "Number is required" });
  }

  // Example dummy data
  const data = {
    name: "Rahul Example",
    father_name: "Mr. Kumar",
    mobile: number,
    alt_mobile: "9876543210",
    circle: "Delhi",
    address: "India",
    id_number: "1234-5678-9012"
  };

  res.status(200).json({ data: { result: [data] } });
}
