import React from 'react';
import Avatar from '../Avatar';
import classes from './UserCardLayout.module.css';
import Name from '../Typography/Name';
import Email from '../Typography/Email';
import UserId from '../Typography/UserId';

const UserCardLayout: React.FC<Props> = ({ avatar, name, email, userId }) => {
  return (
    <li className={classes.userCard}>
      <Avatar src={avatar} alt={`${name}'s avatar`} />
      <div>
        <p>
          <Name>{name}</Name> <UserId>{userId}</UserId>
        </p>
        <Email>{email}</Email>
      </div>
    </li>
  );
};

type Props = {
  avatar: string;
  name: string;
  email: string;
  userId: string;
};

export default UserCardLayout;
