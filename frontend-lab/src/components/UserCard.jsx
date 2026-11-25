import { Link } from 'react-router-dom';
import { Card } from './ui/Card.jsx';

export default function UserCard({ user }) {
  const name = user.name ?? [user.firstName, user.lastName].filter(Boolean).join(' ');

  return (
    <Link
      to={`/users/${user.id}`}
      className="block rounded-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <Card className="h-full">
        <h2 className="text-lg font-semibold text-fg">{name}</h2>
        <p className="mt-1 break-words text-muted">{user.email}</p>
        {user.role && <p className="mt-3 text-sm text-muted">{user.role}</p>}
      </Card>
    </Link>
  );
}