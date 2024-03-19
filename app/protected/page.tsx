import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from 'next/link';
import { readdir } from 'fs/promises';

export default async function ProtectedPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/login");
  }

  const folders = async () => {
    const source = '/Users/stef/Documents/supabasedemo/app/protected';
    return (await readdir(source, { withFileTypes: true }))
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
  }

  const folderNames = await folders(); // Await the folders function

  return ( // maps through the array folders
    <>
      {folderNames.map((folder) => (
        <Link href={`./${folder}`} key={folder}>
          {folder} {/* Use the folder name as the content */}
        </Link>))}
    </>
  );
}
