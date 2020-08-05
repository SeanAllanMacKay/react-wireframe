import auth from '../auth';

export default async (req, res, next) => {
  const token = req.headers['x-access-token'] || req.headers['authorization'];

  if (token) {
    const verifiedToken = await auth.verify(token);
    if (verifiedToken) {
      req._id = verifiedToken._id;
      req.body._id = verifiedToken._id;
      next();
    } else {
      res.status(401).send({ success: false, error: 'Unauthorized' });
    }
  }
};
