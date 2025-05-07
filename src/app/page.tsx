import { getServerSession } from "next-auth";
import { authOptions } from "../app/lib/auth";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const t = await getTranslations("home");

  return (
    <div className="max-w-2xl mx-auto mt-8 space-y-4 text-center">
      <h1 className="text-2xl font-bold">{t("welcome")}</h1>

      {session?.user ? (
        <p>
          {t("loggedInAs")} <strong>{session.user.email}</strong>
        </p>
      ) : (
        <p>{t("notLoggedIn")}</p>
      )}
    </div>
  );
}
