import MyButton from "./components/myButton";
import Form from "./components/form";



export interface VideoInterface {
  url: string;
  title: string;
  description: string,
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-6 items-center p-24">
      <h1 className="text-6xl">Login</h1>
      <Form />
    </main>
  );
}
