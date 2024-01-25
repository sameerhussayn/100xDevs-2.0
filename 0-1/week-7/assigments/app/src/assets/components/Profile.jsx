/* eslint-disable react/prop-types */
const Profile = ({ user }) => {
  console.log(user)
  return (
    <div className="flex justify-center items-center h-screen text-center">
      <div className="h-80 w-72 border  border-black">
        <div className="h-[40%] bg-card" />
        <div className="flex items-center justify-center -mt-20 mb-4">
          <img src={user.avatar_url} alt="avatar" className="rounded-full h-28" />
        </div>
        <span className="font-bold">{user.userName}</span> <span className="text-slate-500">{user.age}</span>
        <h3 className="text-slate-500">{user.location}</h3>

        <div className="border border-slate-300 mt-6 mb-2" />

        <div className="flex justify-evenly">
          {user.stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="font-bold">{stat.value}</h3>
              <h5 className="text-slate-500">{stat.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
