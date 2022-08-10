interface ExternalLinkProps {
  icon: JSX.Element;
  actionIcon: JSX.Element;
  title: string;
  content: string;
}
export function ExternalLink({ icon, actionIcon, title,content }: ExternalLinkProps) {
  return (
    <a
      href=""
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
    >
      <div className="bg-green-700 h-full p-6 flex items-center">{icon}</div>
      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">{title}</strong>
        <p className="text-sm text-gray-200 mt-2">{content}</p>
      </div>
      <div className="h-full p-6 flex items-center text-blue-500">{actionIcon}</div>
    </a>
  );
}
