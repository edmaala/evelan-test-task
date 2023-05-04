export default async function getUsersData(pageNumber: number) {
  const usersApiResponse: Response = await fetch(
    `${process.env.API_URL}/users?page=${pageNumber}`
  );

  const {
    data: rawUsersData,
    total_pages: totalPages,
    page: currentUserPage,
  }: RawGetUserData = await usersApiResponse.json();

  const isUsersCompleted = totalPages === currentUserPage;

  const usersData: User[] = rawUsersData.map(
    ({ first_name, last_name, id, ...rawUserData }) => ({
      ...rawUserData,
      userId: id,
      name: `${first_name} ${last_name}`,
    })
  );

  return { usersData, currentUserPage, isUsersCompleted };
}

export type User = {
  userId: string;
  email: string;
  name: string;
  avatar: string;
};

export type RawUser = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type RawGetUserData = {
  page: number;
  total_pages: number;
  data: RawUser[];
};
