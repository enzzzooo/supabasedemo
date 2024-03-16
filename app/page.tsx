import Link from 'next/link';
import ParentButton1 from "./ParentButton1";
export default async function page() {

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
{/* main */}
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6 text-center">
          <p>The counters should update together, click them to find out</p>
            <ParentButton1 />
          <h2 className="font-bold text-4xl mb-4">Sup base</h2>
          <Link href="/protected/" className='hover:text-gray-700'>Go to the Vault</Link>
        </main>
      </div>
{/* footer */}
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="#"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Yessirski
          </a>
        </p>
      </footer>
    </div>
  );
}
