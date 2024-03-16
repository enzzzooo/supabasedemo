import Link from "next/link";
import AuthButton from "@/components/AuthButton";
export default function Nav(){
    return(
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <Link className="text-purple-500 hover:text-purple-400" href="/">Rarww "my site"</Link>
        <AuthButton />
        </div>
    </nav>
    )
}
