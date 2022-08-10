import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format, subMinutes } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";

interface LessonProps {
  data: {
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  };
}
export function Lesson({ data }: LessonProps) {
  const { title, slug, availableAt, lessonType } = data;
  const isLessonAvailable = isPast(new Date(availableAt));
  const availableAtDate = new Date(availableAt);
  const availableDateFormatted = format(
    availableAtDate,
    "EEEE' • 'd' de 'MMM' • 'k'h'mm",
    { locale: ptBR }
  );

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300 capitalize">{availableDateFormatted}</span>
      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} /> Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} /> Em breve
            </span>
          )}
          <span
            className={`text-xs rounded py-[0.125rem] px-2  border ${
              lessonType === "live" ? "text-green-300" : "text-white"
            } border-green-300 font-bold`}
          >
            {lessonType === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </Link>
  );
}
