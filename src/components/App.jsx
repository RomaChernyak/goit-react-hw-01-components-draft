import userData from './database/user.json';
import dataArray from './database/data.json';
import friendsArray from './database/friends.json';
import transArray from './database/transactions.json';

import Profile from './Profile';

// const { username, tag, location, avatar, stats } = data;
// const { followers, views, likes } = stats;

// console.log(dataArray);
// console.log(friendsArray);
// console.log(userData);
// console.log(transArray);


export const App = () => {
  return (
    <>
      {/* Task 1 */}
      <Profile user={userData} />
      {/* Task 2 */}
      Task 2
      {/* Task 3 */}
      Task 3
      {/* Task 4 */}
      Task 4
    </>
  );
};



// ================================
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
