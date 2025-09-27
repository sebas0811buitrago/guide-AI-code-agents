import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Image
            className="mx-auto mb-8 dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Next.js 15.5 Full Stack Setup
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete setup with <strong>TypeScript</strong>,{" "}
            <strong>Tailwind CSS</strong>, <strong>Zod</strong>,{" "}
            <strong>shadcn/ui</strong>, <strong>React Hook Form</strong>,{" "}
            <strong>Vitest</strong>, and <strong>React Testing Library</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🛠️ Tech Stack
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                ✅ <strong>Next.js 15.5</strong> - Latest React framework
              </li>
              <li>
                ✅ <strong>TypeScript</strong> - Type-safe JavaScript
              </li>
              <li>
                ✅ <strong>Tailwind CSS</strong> - Utility-first styling
              </li>
              <li>
                ✅ <strong>Zod</strong> - Schema validation
              </li>
              <li>
                ✅ <strong>shadcn/ui</strong> - Beautiful components
              </li>
              <li>
                ✅ <strong>React Hook Form</strong> - Form management
              </li>
              <li>
                ✅ <strong>Vitest</strong> - Fast unit testing
              </li>
              <li>
                ✅ <strong>React Testing Library</strong> - Component testing
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🧪 Testing Commands
              </h3>
              <div className="space-y-2 text-sm">
                <code className="block bg-gray-100 p-2 rounded font-mono">
                  npm test
                </code>
                <code className="block bg-gray-100 p-2 rounded font-mono">
                  npm run test:watch
                </code>
                <code className="block bg-gray-100 p-2 rounded font-mono">
                  npm run test:run
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Get started by editing{" "}
            <code className="bg-gray-200 px-2 py-1 rounded font-mono text-sm">
              src/app/page.tsx
            </code>
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              📖 Next.js Docs
            </a>
            <a
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              🎨 shadcn/ui
            </a>
            <a
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
              href="https://vitest.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              🧪 Vitest
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
