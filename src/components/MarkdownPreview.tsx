import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

interface Props {
  content: string;
}

/**
 * Component to render Markdown and LaTeX formulas
 */
export default function MarkdownPreview({ content }: Props) {
  return (
    <div className="prose prose-slate max-w-none prose-headings:font-bold prose-code:text-blue-600 prose-pre:bg-slate-900">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          // Customize how code blocks are rendered
          code({ node, inline, className, children, ...props }: any) {
            return (
              <code
                className={`${className} bg-slate-100 px-1 rounded text-blue-600 font-semibold`}
                {...props}
              >
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}