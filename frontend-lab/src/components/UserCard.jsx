import { Card } from './ui/Card.jsx';

export default function UserCard({ user }) {
  return (
    <Card className="h-full">
      <h2 className="text-lg font-semibold text-fg">{user.name}</h2>
      <p className="mt-1 break-words text-muted">{user.email}</p>
      <p className="mt-3 text-sm text-muted">{user.role}</p>
    </Card>
  );
}