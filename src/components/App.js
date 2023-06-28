import user from './database/user.json';
import data from './database/data.json';

import Profile from './Profile';
import Statistics from './Statistics';


export const App = () => {
  return (
    <>
      {/* Task 1 */}
      Task 1
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* Task 2 */}
      Task 2
      <Statistics data={data} title="Upload stats" />
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
