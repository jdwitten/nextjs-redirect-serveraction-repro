import { redirect } from "next/navigation";

export default async function TestRedirect() {
    redirect('/test')
}