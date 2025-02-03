import PokemonPage from "@/pages/PokemonPage";

export default function PokemonModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-md shadow-md">
        <PokemonPage />
      </div>
    </div>
  );
}
