export default async function handler(req, res) {
    const id = process.env.ID;
    const service = process.env.SERVICE;
    const response = await fetch(`https://justmysocks5.net/members/getbwcounter.php?service=${service}&id=${id}`);
    const data = await response.json();
    res.status(200).json(data);
}
