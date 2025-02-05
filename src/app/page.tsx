import { z } from 'zod';

const schema = z.object({
  name: z.string(),
});

export default function Home() {
  const validation = schema.safeParse({ name: 'Test-for-sell-more' });

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-4">
      <div className="text-center p-10 bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Bem-vindo ao <span className="text-purple-600">teste para o VendeMais</span> 🚀</h1>
        <p className="mt-2 text-lg text-gray-700">React 19 & Next 15 com <span className="text-blue-500 font-semibold">Tailwind CSS 4</span></p>
        <p className="mt-4 text-md font-medium text-green-600">
          {validation.success ? '✅ Zod está funcionando corretamente!' : '❌ Erro de validação com Zod!'}
        </p>
      </div>
    </main>
  );
}