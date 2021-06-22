import Form from "../components/formulario";

export default function Users({fakeUsers, reallyUsers}) {
    return (
        <div>
            <h1>Welcome to Users!</h1>
            <h2>Add new User</h2>

            <Form/>
            <h2>The really good Users</h2>
            <ul>
                {
                    reallyUsers.map((user) => (<li key={user}>{user.firstName}</li>))
                }
            </ul>

            <h2>Fake Users</h2>
            <ul>
                {
                    fakeUsers.map((user) => (<li key={user}>{user.name}</li>))
                }
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const jsonplaceholderRes = await fetch('https://jsonplaceholder.typicode.com/users');
    const fakeUsers = await jsonplaceholderRes.json();
    
    const res = await fetch('http://localhost:3000/api/register');
    const {data} = await res.json();
    return {
      props: { fakeUsers, reallyUsers:data },
    }
}