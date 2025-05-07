'use client'; // İstemci tarafında çalışacak

import { useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession(); // Oturum bilgisi alıyoruz

  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav className="flex justify-between">
        <Link href="/">Home</Link>
        <div>
          {session ? (
            <span>Welcome, {session.user?.email}</span>
          ) : (
            <Link href="/api/auth/signin">Sign In</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
