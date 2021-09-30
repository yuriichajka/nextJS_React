import { useRouter } from 'next/router';
import MainContainer from '../../components/MainContainer';

export default function User({user}) {
    const {query} = useRouter();

    return (
        <MainContainer keywords={user.name}>
            <div>
                <h1>User with id {query.id}</h1>
                User name is {user.name}
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();

    return {
        props: {user},
    }
}
