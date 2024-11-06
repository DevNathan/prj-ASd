import { ERROR_MESSAGES } from "@/const/error_messages";

type Data = {
  department: string;
  purpose: string;
};

export default async function ask(question: string): Promise<Data> {
  console.log(question);
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_DOMAIN}/api/ask`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ q: question }),
    },
  );

  if (!response.ok) {
    switch (response.status) {
      case 400:
        throw new Error(ERROR_MESSAGES.BAD_REQUEST);
      case 500:
        throw new Error(ERROR_MESSAGES.SERVER_ERROR);
    }
  }

  return response.json();
}
