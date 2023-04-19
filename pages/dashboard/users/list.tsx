import { IUser }from  '@/src/types/UserTypes';

export default function UserList({user}: {user: IUser}){

    
        return (
            <div key={user.id} className="mb-5">
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-600">{user.createdAt.toString()}</p>
            </div>
        )
}