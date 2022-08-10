import { gql, useQuery } from "@apollo/client";
import "@vime/core/themes/default.css";
import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
  ImageSquare,
} from "phosphor-react";
import { ExternalLink } from "../index";

const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`;

interface GetLessonBySlug {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      avatarURL: string;
      bio: string;
      name: string;
    };
  };
}

interface VideoProps {
  lessonSlug: string;
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useQuery<GetLessonBySlug>(GET_LESSON_BY_SLUG, {
    variables: { slug: lessonSlug },
  });

  if (!data) {
    return (
      <div className="flex flex-1 items-center justify-center h-[60vh]">
        ...Carregando
      </div>
    );
  }

  return (
    <div className="flex-1">
      <section className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </section>
      <section className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data.lesson.teacher.avatarURL}
                alt=""
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  {data.lesson.teacher.name}
                </strong>
                <span className="text-gray-200 text-sm block">
                  {data.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href=""
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a
              href=""
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-700 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <ExternalLink
            icon={<FileArrowDown size={40} />}
            actionIcon={<CaretRight size={24} />}
            title="Material Complementar"
            content="Acesse o material complementar para acelear o seu desenvolvimento"
          />
          <ExternalLink
            icon={<ImageSquare size={40} />}
            actionIcon={<CaretRight size={24} />}
            title="Wallpapers Exclusivos"
            content="Baixe wallpapers exclusivos do Front End Week e personalize a sua máquina"
          />
        </div>
      </section>
    </div>
  );
}
