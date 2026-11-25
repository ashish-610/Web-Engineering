import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button.jsx';
import { Card } from '../components/ui/Card.jsx';
import { useUser } from '../hooks/useUsers.js';

export default function UserDetail() {
  const { id } = useParams();
  const { data: user, isPending, isError, error, refetch, isFetching } = useUser(id);

  if (isPending) return <p role="status">Loading user...</p>;
  if (isError) {
    return (
      <p role="alert" className="text-red-700 dark:text-red-300">
        Failed: {error.message}{' '}
        <Button onClick={() => refetch()}>Retry</Button>
      </p>
    );
  }

  const name = user.name ?? [user.firstName, user.lastName].filter(Boolean).join(' ');

  return (
    <section className="space-y-4">
      <Link to="/users" className="text-primary underline">
        Back to users
      </Link>
      {isFetching && <small role="status" className="block text-muted">Refreshing...</small>}
      <Card>
        <h1 className="text-3xl font-bold text-fg">{name}</h1>
        <p className="mt-2 text-muted">{user.email}</p>
        {user.role && <p className="mt-4 text-muted">Role: {user.role}</p>}
        {user.company?.name && <p className="mt-4 text-muted">{user.company.name}</p>}
      </Card>
    </section>
  );
}
