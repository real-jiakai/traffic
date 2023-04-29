export default async function handler(req,res) {
    const reponse = await fetch('https://justmysocks5.net/members/getbwcounter.php?service=736256&id=427add3b-c088-4c29-8a19-c70b3ee389cb')
    const data = await reponse.json()
    res.status(200).json(data)
};
