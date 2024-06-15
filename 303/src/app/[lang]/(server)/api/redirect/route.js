import { redirect } from "next/navigation";

const fullname = "Abbas Khosravi";

export async function GET() {
  redirect(`http://localhost:3000/api/username/${fullname}`);
}
