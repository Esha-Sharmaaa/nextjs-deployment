export const runtime = 'edge';
interface Props {
    params: {
      username: string;
    };
  }
  
  async function fetchUser(username: string) {
    console.log("Bug incoming"
    const res = await fetch(`https://24d902be.nextjs-deployment.pages.dev/api/github?username=${username}`, {
      cache: 'no-store'
    });
    if (!res.ok) {
      throw new Error('Failed to fetch user data');
    }
    return res.json();
  }
  
  export default async function UserPage({ params }: Props) {
    const user = await fetchUser(params.username);
  
    return (
      <main>
        <h1>GitHub User: {user.login}</h1>
        <img src={user.avatar_url} alt={`${user.login}'s avatar`} width={100} />
        <p>{user.bio}</p>
        <p>Followers: {user.followers}</p>
      </main>
    );
  }
  