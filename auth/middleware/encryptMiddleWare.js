import { createHmac } from 'crypto';

export const encrypt = (req, _, next) => {
    const hmac = createHmac('sha256', req.body.password);
    // hmac.update(salt);
    req.body.password = hmac.digest('hex');
    console.log(req.body.password);
    next();
}