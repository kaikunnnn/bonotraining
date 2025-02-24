import ReactMarkdown from "react-markdown";

interface DetailSectionProps {
  details: string;
}

type Props = {
  params: Promise<{
    "exercise-id": string;
    "item-id": string;
  }>;
  searchParams: Promise<{ genre: string; name: string }>;
};

export default function DetailSection({ details }: DetailSectionProps) {
  return (
    <section className="mb-8">
      <div className="flex flex-col justify-center items-start gap-8 py-6">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <div className="text-gray-900 text-base font-bold font-['Noto Sans JP']">
              (RULES)
            </div>
            <h3 className="text-gray-900 text-3xl md:text-4xl font-bold font-['Noto Sans JP']">
              お題の詳細
            </h3>
            <div className="w-full text-gray-900/60 text-sm font-bold font-['Unbounded']">
              これらのことを意識してデザインしてみよう
            </div>
          </div>
        </div>
        <div className="w-full border border-slate-700"></div>
      </div>
      <div className="flex flex-col justify-start items-start gap-6 py-8">
        <div className="w-full prose prose-slate max-w-none">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="text-[#0d0f18] text-xl font-bold font-['Noto Sans JP'] leading-loose tracking-wide mt-8 first:mt-0">
                  {children}
                </h2>
              ),
              p: ({ children }) => (
                <p className="text-black text-base font-normal font-['Noto Sans'] leading-relaxed tracking-wide my-4">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 my-4 ml-4">
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li className="text-black text-base font-normal font-['Noto Sans'] leading-relaxed">
                  {children}
                </li>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  {children}
                </a>
              ),
            }}
          >
            {details}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
}
