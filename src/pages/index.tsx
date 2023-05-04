import React, { useState } from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import getUsersData, { User } from '@/helpers/getUsersDataHelper';
import Heading from '@/components/Layout/Heading';
import UserCardLayout from '@/components/Layout/UserCardLayout';
import UserCardsGridLayout from '@/components/Layout/UserCardsGridLayout';
import LoadMoreBtn from '@/components/Button/LoadMoreBtn';
import Loader from '@/components/Loader';
import Head from 'next/head';

const Home: React.FC<Props> = ({ users, currentUserDataPage }) => {
  const [usersList, setUsersList] = useState<User[]>(users);
  const [isUserDataComplete, setIsUserDataComplete] = useState<boolean>(false);
  const [isDataLoading, setIsDataLoading] = useState<boolean>(false);
  const [userPage, setUserPage] = useState<number>(currentUserDataPage);

  const handleLoadMoreUsers = async () => {
    setIsDataLoading(true);
    const { usersData, isUsersCompleted } = await getUsersData(userPage + 1);
    setUsersList((prevUserList) => prevUserList.concat(usersData));
    setIsDataLoading(false);

    if (isUsersCompleted) {
      setIsUserDataComplete(isUsersCompleted);
      return;
    }

    setUserPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Heading> User List </Heading>

      <MainLayout>
        <UserCardsGridLayout>
          {usersList.map((userData) => (
            <UserCardLayout key={userData.userId} {...userData} />
          ))}
        </UserCardsGridLayout>

        {isDataLoading ? (
          <Loader />
        ) : (
          <LoadMoreBtn
            onClick={handleLoadMoreUsers}
            disabled={isUserDataComplete}
          />
        )}
      </MainLayout>
    </>
  );
};

export async function getStaticProps() {
  const homeStaticProps: StaticProps = {
    props: { users: [], currentUserDataPage: 0 },
  };

  try {
    const { usersData, currentUserPage } = await getUsersData(1);

    homeStaticProps.props = {
      users: usersData,
      currentUserDataPage: currentUserPage,
    };
  } catch (error) {
    console.error('Error!', error);
  }

  return homeStaticProps;
}

type Props = {
  users: User[];
  currentUserDataPage: number;
};

type StaticProps = {
  props: { users: User[]; currentUserDataPage: number };
};

export default Home;
