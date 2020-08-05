import express from 'express';
import bcrypt from 'bcrypt';
import auth from '@services/auth';

import User from '@db/schemas/User';

const router = express.Router({ mergeParams: true });

router.route('/').get(async (req, res) => {
  const { password, ...rest } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 8);

  User.create(
    {
      password: hashedPassword,
      projects: [],
      organizations: [],
      accountType: 'basic',
      private: true,
      ...rest,
    },
    (err, user) => {
      if (err) return res.status(500).send({ success: false });

      const token = auth.sign({ _id: user._id });

      return res.status(200).send({ success: true, token });
    }
  );
});

export default { router };
