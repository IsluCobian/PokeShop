import CartButton from "./CartButton";

export default function Header({ title }: { title: string }) {
  return (
    <header className=" relative flex items-center justify-center">
      <div className="flex w-full h-16 items-center justify-center p-4 text-current max-w-md ">
        <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
      </div>
      <CartButton />
    </header>
  );
}
