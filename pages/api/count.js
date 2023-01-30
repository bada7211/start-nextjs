const count = {value:700}
export default function handler(req, res) {
    console.log(req.method);
    console.log('req', req.body.value);
    if(req.method === 'PATCH'){
        count.value = req.body.value;
    }
    res.status(200).json(count)
}
  