export default function Button1({ count, onClick }: { count: number, onClick: () => void }) {
  return (
    <button onClick={onClick} className="text-blue-700">
      Clicked {count} times
    </button>
  );
}
  